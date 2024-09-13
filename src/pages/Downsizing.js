import React from "react";
import CommonPageComponent from "../components/CommonPage";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const meta = {
  title: "Nemu - Downsizing",
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
  title: "Getting ready to clean the clutter?",
  subtitle: "DOWNSIZING AND DECLUTTERING",
  description:
    "How do you decide what to keep, share, or donate? Going through years of belongings can be emotionally challenging and hard to coordinate. And let’s be honest, it always takes longer than you think it will. Nemu makes it easy to downsize your items - hassle free.",
  image: "images/downsizing-1.webp",
};

const weGetIt = {
  title: "Feel liberated, not overwhelmed",
  subtitle: "OUR ROLE",
  description:
    "Do you have a house full of treasures but you want to trim them down? Worried about losing precious memories and stories tied to family keepsakes? With Nemu, quickly see what you have and decide what you feel most strongly about keeping. Add in family history about items, capturing that information... forever. Sharing items? Perfect - use our division tool to coordinate with family and friends seamlessly and skip the big text chat of ‘do you want this?’. Let us help you capture your family legacy while in the process of moving forward.",
  image: "images/downsizing-2.webp",
  height: 1340,
  button: {
    text: "Get Started ",
    link: "https://app.mynemu.com/sign-up",
  },
};
const howWeHelp = {
  title: "How we help you downsize",
  subtitle: "WHY US",
  description:
    "Nemu helps you organize items in the household that you’re not sure about holding onto, then guides you to upload and capture details to make it easier to let the physical item go at the end of the process. Your digital catalog can then be shared with friends or family so they can vote for things they may have an interest in. Or you may want Nemu to help you determine pricing and put an item up for sale. The choice is yours! ",
  cards: [
    {
      id: 1,
      color: "border-t-cardGreen",
      title: "1. Catalog",
      description: (
        <p>
          Downsizing with Nemu starts with creating a photo-based inventory of
          the items in question within a household. As you snap or upload photos
          of these items, you can simultaneously add information about them,
          including descriptions, measurements, or appraised values. This
          information can help others determine their interest in those things
          and capture family history. Memorializing an item in this way makes it
          a little easier to let the physical item go if it’s no longer serving
          a purpose in your life. <br></br>
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
          When deciding what to do with something that might hold financial
          value, it might be a good idea to have it formally appraised. This way
          you can make an informed decision on how to handle it. Nemu can help
          by identifying which items should be appraised and connecting you to
          qualified local appraisers. And, all of this information can be stored
          in the app for easy access.
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
          Want to share your items with family and friends? Invite them to join
          the fun! They can submit their preferences for items and our tool will
          fairly divide your stuff amongst them. No back and forth, no arguing
          over who deserves what. It’s truly as easy as that. We make it easy
          for you and your loved ones to keep the process of decluttering or
          downsizing fair, objective, and conflict-free. <br></br>
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
          What happens to items no one has space for but are too valuable for
          the landfill? Nemu helps determine a fair market value, then how and
          where to sell them. You choose how much of this process to handle and
          how much to delegate to us. Click here to learn more.<br></br>
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

export default function DownsizingPage() {
  return (
    <CommonPageComponent
      meta={meta}
      section1={hero}
      section2={weGetIt}
      section4={howWeHelp}
    />
  );
}
