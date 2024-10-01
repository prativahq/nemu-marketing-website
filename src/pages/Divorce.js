import React from "react";
import CommonPageComponent from "../components/CommonPage";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const meta = {
  title: "Nemu - Divorce",
  meta: [
    {
      name: "description",
      content:
        "Nemu is a platform that helps you catalog, appraise, divide, and sell your property. We help you make sure your property goes to the right people, for the right price, and in the right way.",
    },
  ],
  link: [],
  style: [],
  script: [],
};

const hero = {
  title: "Who gets what in a Divorce?",
  subtitle: "DIVORCE",
  description:
    "Dividing personal belongings during a divorce is challenging. Preparing a comprehensive list of personal property and who-got-what to submit with divorce paperwork can be overwhelming, emotionally exhausting, and tedious. But it doesn’t have to be that way. That’s where Nemu comes in.",
  image: "images/divorce-1.webp",
};

const weGetIt = {
  title: "Nemu helps minimize the back-and-forth during a divorce ",
  subtitle: "OUR ROLE",
  description:
    "At Nemu, our goal is to make the division of assets during a divorce stress-free. How do we do it? We bring a transparent and practical approach to splitting assets, with the goal of making both parties feel heard and respected. From sentimental items to collectibles to stuff you never liked, we'll help you prioritize what matters most and deliver an objective and equitable division of everything that needs to be split up. And at the end, we provide full documentation of the outcome for accurate reporting. This will help you and everyone involved focus on what’s most important: moving forward.  ",
  image: "images/divorce-2.webp",
  height: 100,
  button: {
    text: "Start for Free",
    link: "https://app.mynemu.com/sign-up",
  },
};
const howWeHelp = {
  title: "How we help divide personal items during divorce",
  subtitle: "WHY US",
  description:
    "Divorcing couples that use Nemu can work separately and remotely toward the goal of splitting up the items in a home. Each individual has access to add items to the online inventory, request appraisal or sales assistance, and group items into rounds for both parties to score and divide. ",
  cards: [
    {
      id: 1,
      color: "border-t-cardGreen",
      title: "1. Catalog",
      description: (
        <p>
          One thing that makes Nemu flexible is that either person or both
          people in a divorcing couple can create and add to an inventory of the
          items from a household. This makes it so that the responsibility can
          be shared if needed. As you snap or upload photos of these items, you
          can add information about them, including descriptions, voice notes,
          measurements, or appraised values.<br></br>
          <HashLink
            to={"/contact-us#faq-16"}
            className="text-emerald-500 font-medium"
          >
            Click here to learn more
          </HashLink>
        </p>
      ),
      icon: "/images/card-1.png",
    },
    {
      id: 2,
      color: "border-t-cardPeach",
      title: "2. Appraise",
      description: (
        <p>
          Nemu can help establish estimated values of items and connect users
          with qualified local appraisers if needed. The appraisal information
          can be captured in Nemu and included in any reporting, which also
          helps inform the overall value of the household. Already have
          appraisal information for an item? No problem. Users can upload this
          information directly in the app.
          <br></br>
          <HashLink
            to={"/contact-us#faq-17"}
            className="text-emerald-500 font-medium"
          >
            Click here to learn more
          </HashLink>
        </p>
      ),
      icon: "/images/card-2.png",
    },
    {
      id: 3,
      color: "border-t-cardPink",
      title: "3. Divide",
      description: (
        <p>
          Once items have been added to Nemu, both parties get a chance to
          express their preferences by assigning an emotional value score to
          them. Nemu uses the scores to objectively divide up the property in
          question. Tutorials help users understand how to effectively use this
          powerful feature.  Most importantly, this can all be done remotely,
          thereby avoiding potential for conflict or uncomfortable interactions.
          <br></br>
          <HashLink
            to={"/contact-us#faq-5"}
            className="text-emerald-500 font-medium"
          >
            Click here to learn more
          </HashLink>
        </p>
      ),
      icon: "/images/card-3.png",
    },
    {
      id: 4,
      color: "border-t-cardBlue",
      title: "4. Sell",
      description: (
        <p>
          Sometimes there are items neither party wants, but still have life
          left and shouldn’t be thrown away. Nemu helps find the best venue to
          sell these items so the profits can be divided between those involved.
          You choose how much of this process to handle and how much to delegate
          to us. The power is in your hands. Our app just makes it possible for
          the process to remain unproblematic.<br></br>
          <HashLink
            to={"/contact-us#faq-18"}
            className="text-emerald-500 font-medium"
          >
            Click here to learn more
          </HashLink>
        </p>
      ),
      icon: "/images/card-4.png",
    },
  ],
};

export default function DivorcePage() {
  return (
    <CommonPageComponent
      meta={meta}
      section1={hero}
      section2={weGetIt}
      section4={howWeHelp}
    />
  );
}
