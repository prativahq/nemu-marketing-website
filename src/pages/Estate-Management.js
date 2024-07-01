import React from "react";
import CommonPageComponent from "../components/CommonPage";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const meta = {
  title: "Nemu - Estate Management",
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
  title: "Split property, not relationships",
  subtitle: "ESTATE MANAGEMENT",
  description:
    "Going through family heirlooms after a loved one has passed can drum up nostalgia, grief, and strong memories of time spent together. Deciding who gets what can make this process feel overwhelming, even daunting. Let Nemu make the process a joy, not a burden.",
  image: "images/estate-1.webp",
};

const weGetIt = {
  title: "We get it, because we have been there",
  subtitle: "OUR ROLE",
  description:
    "At Nemu, we believe one person shouldn’t have to shoulder the entire responsibility of managing and dividing the personal items in an estate all on their own. Our service offers an easy way to capture what a loved one leaves behind, a fair and transparent way to divvy it up, and ensure family legacies remain intact (yes, we mean no fighting!). Our goal is to help you manage your household assets and commemorate the life of someone who had a major impact on you and your family. ",
  image: "images/estate-2.webp",
  height: 1240,
  button: {
    text: "Get Started ",
    link: "https://app.mynemu.com",
  },
};
const howWeHelp = {
  title: "How we help",
  subtitle: "WHY US",
  description:
    "Your family heirlooms should be celebrated, not fought over. Nemu helps make that a reality. Our easy-to-use app creates one place where you can capture and organize a house full of items, and subsequently invite multiple people to add their input and preferences. Best of all, none of you have to physically be in the same location, nor do you have to make decisions at the same time. The remote nature of Nemu makes it flexible and convenient so it truly works for you. ",
  cards: [
    {
      id: 1,
      color: "border-t-cardGreen",
      title: "1. Catalog",
      description: (
        <p>
          Estate management with Nemu starts with one or more family members
          taking inventory of the items in an estate. Often these are family
          heirlooms and artifacts that may have been left behind or left out of
          the will when a loved one passes. As you snap or upload photos of
          these items, you can add information about them, including
          descriptions, voice notes, measurements, or appraised values.<br></br>
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
          As part of the heirloom management process, Nemu helps families
          determine fair market value of items, as this could be a determining
          factor in how they choose to sell or divide. In some cases, items that
          hold a substantial amount of financial value may need to be formally
          appraised in order to inform the overall value of the estate before
          the division process begins. Nemu can also help with this process.
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
          This is where the magic happens. Owners or family members acting on
          behalf of owners, like an executor or trustee, choose the items they
          want to divide among beneficiaries. Nemu then asks the participants to
          enter their emotional score towards each item. Once all scores are
          recorded, Nemu uses those scores to fairly divide heirlooms so that
          everyone receives a group of items that is equal based on their
          preferences . Users can view the results and download a report if
          needed. No travel, no fighting. It’s truly as easy as that.<br></br>
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
          Sometimes there are items included in an estate that are just better
          off being sold rather than being passed on to a family member. In
          these cases, Nemu offers individual consultations to determine the
          best way to sell items and give items a new home. This helps keep them
          out of landfills, puts them into the right hands, and returns money to
          the estate. Win-win-win.<br></br>
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

export default function EstateMangagementPage() {
  return (
    <CommonPageComponent
      meta={meta}
      section1={hero}
      section2={weGetIt}
      section4={howWeHelp}
    />
  );
}
