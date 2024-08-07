const path = require("path");
const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

const dirPath = path.join(__dirname, "/blogs");
const dirPathPages = path.join(__dirname, "../src/pages/content");
let postlist = [];
let pagelist = [];

const months = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

const formatDate = (date) => {
  const datetimeArray = date.split("T");
  const dateArray = datetimeArray[0].split("-");
  const timeArray = datetimeArray[1].split(":");
  const month = dateArray[1];
  const monthName = months[dateArray[1]];
  const day = dateArray[2];
  const year = dateArray[0];
  const time = `${timeArray[0]}:${timeArray[1]}`;

  return {
    month: month,
    monthName: monthName,
    day: day,
    year: year,
    time: time,
  };
};

const removePublicFromPath = (path) => {
  const publicString = "public";
  if (path.startsWith(publicString)) {
    return path.slice(publicString.length);
  }
  return path;
};

const removeQuotes = (str) => {
  return str.replace(/['"]/g, "");
};

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      // console.log(files);
      if (files === undefined) {
        fs.writeFileSync("src/posts.json", "[]");
      }
      return console.log("Failed to list contents of directory: " + err);
    }
    let ilist = [];
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        const parsedDate = metadata.date
          ? formatDate(metadata.date)
          : new Date();
        const publishedDate = `${parsedDate["monthName"]} ${parsedDate["day"]}, ${parsedDate["year"]}`;
        const datestring = `${parsedDate["year"]}-${parsedDate["month"]}-${parsedDate["day"]}T${parsedDate["time"]}:00`;
        const date = new Date(datestring);
        const timestamp = date.getTime() / 1000;
        post = {
          id: timestamp,
          title: metadata.title
            ? removeQuotes(metadata.title)
            : "No title given",
          author: metadata.author ? metadata.author : "No author given",
          date: publishedDate ? publishedDate : "No date given",
          time: parsedDate["time"],
          thumbnail: removePublicFromPath(metadata.thumbnail),
          content: content ? content : "No content given",
          tag: metadata.tag ? metadata.tag : "No tag given",
        };
        postlist.push(post);
        ilist.push(i);
        if (ilist.length === files.length) {
          const sortedList = postlist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/posts.json", data);
        }

        checkAndUpsertArticle({
          title: post.title,
          url: post.id.toString(),
          date: post.date,
          author: metadata.author ? metadata.author : "No author given",
          tags: metadata.tag ? metadata.tag : "No tag given",
        })
          .then((response) => console.log("Upserted article:", response))
          .catch((error) => console.error("Error:", error));
      });
    });
  });
  return;
};

const checkAndUpsertArticle = async (article) => {
  const { title, url, date, author, tags } = article;

  try {
    const upsertMutation = `
      mutation InsertArticle($objects: [articles_insert_input!]!) {
        insert_articles(
          objects: $objects,
          on_conflict: { constraint: articles_url_key, update_columns: [title, date, author, tags] }
        ) {
          affected_rows
          returning {
            title
            url
            date
            author
            tags
          }
        }
      }
    `;

    const insertVariables = {
      objects: [{ title, url, date, author, tags }],
    };

    const insertResponse = await axios.post(
      process.env.REACT_APP_HASURA_URL,
      {
        query: upsertMutation,
        variables: insertVariables,
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: process.env.REACT_APP_HASURA_SECRET,
        },
      }
    );

    if (!insertResponse.data || !insertResponse.data.data) {
      console.error("Invalid response from Hasura", insertResponse.data);
      throw new Error("Invalid response from Hasura");
    }

    return insertResponse.data.data.insert_articles.returning[0];
  } catch (error) {
    console.error("Error performing query/mutation", error);
    throw error;
  }
};

getPosts();
