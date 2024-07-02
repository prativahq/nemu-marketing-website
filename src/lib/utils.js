import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const faqs = [
  {
    id: 1,
    question: "How do I share this with my family?",
    answer:
      "Nemu is flexible to meet the needs of families living close together or far away. To start, there can be multiple family members in the 'Admin' role, who can share the task of creating a household's inventory, getting things organized, or sold. In the 'User' role, family members can log on to see items from a household and also participate in the division of items, all from the comfort of their home!",
  },
  {
    id: 2,
    question: "Who Is Nemu Designed For? Is It Only for Larger Families?",
    answer: (
      <p>
        Nemu is designed for anyone who needs to designate a future for family
        possessions. It’s not just for large families; in fact, it’s not even
        only for families! Our app works for families of any size, for loved
        ones, for couples, and for individuals. We provide a structured way to
        manage and divide belongings respectfully and fairly, no matter who’s
        involved in the process.
      </p>
    ),
  },
  {
    id: 3,
    question: "How Can Nemu Help in Cases of Downsizing or Divorces?",
    answer: (
      <p>
        Major life transitions like divorce, moving to a new home, relocating,
        or downsizing tend to be stressful, not only because of the way they
        uproot your life. Managing and dividing assets between multiple people,
        i.e., adults, children, roommates, ex-partners, etc. can be complex, but
        Nemu makes it easy. We offer a structured and respectful method to
        alleviate what could otherwise be madness. <br></br>
        <br></br>
        Our platform allows individuals to catalog their items, assign emotional
        value, and decide on a fair division among the parties involved. For
        downsizing or decluttering, this means ensuring items find new homes
        where they will be given new life (and stay out of landfills!). In the
        case of divorce, Nemu facilitates an equitable division of shared
        assets, reducing potential conflicts and helping both parties move
        forward smoothly.
      </p>
    ),
  },
  {
    id: 4,
    question:
      "I’m Not Great with Technology. Is that Going to be a Problem?      ",
    answer: (
      <p>
        Not at all! Our app is designed for simplicity. We’ve spent countless
        hours testing it out with real people of all ages, all with different
        levels of tech savvy. That means you don’t need to be a techie to get
        the job done. And if you do get stuck, our team is always
        {window.location.pathname !== "/contat-us" ? (
          <span> here to help.</span>
        ) : (
          <Link className="underline" to={"/contact-us"}>
            here to help.
          </Link>
        )}
      </p>
    ),
  },
  {
    id: 5,
    question: "How do Nemu’s Division Rounds work?      ",
    answer: (
      <p>
        After uploading items into an inventory, the household owner or admin(s)
        can choose who to invite to join the process (We’ll call them the host).
        They can also decide how to group items for scoring and dividing. This
        flexibility allows the host to manage the inventory and all of the
        interested parties without getting overwhelmed. Once the host has chosen
        the people and the items to be included in a specific scoring and
        dividing round, they then determine how much time each person has to
        enter their scores, as well as when to begin and end. We then notify
        participants of their invitation to the division round and provide steps
        for them to submit their emotional value scores for items. Once everyone
        has entered scores and the round has closed, Nemu will notify each
        participant of the items awarded to them. Participants can see results
        in the app and hosts can download reports reflecting the results.
      </p>
    ),
  },
  {
    id: 6,
    question:
      "Why Doesn’t Nemu Require Each Item to Have a Monetary Value?        ",
    answer: (
      <p>
        Nemu understands that many items found in a home are much more valuable
        from an emotional perspective than a monetary one.<br></br>
        In addition, studies show that when given the opportunity to rate their
        interest in a given item, participants intuitively factor their
        understanding of both an item’s monetary and sentimental value into
        their overall interest level.
      </p>
    ),
  },
  {
    id: 7,
    question:
      "How Do I Know the Rating System is Fair? Is There a Way to Cheat the System?      ",
    answer: (
      <p>
        The proprietary formula Nemu uses to divide property—based on the
        emotional value scores that each participant provides—is grounded in
        mathematical fundamentals. <br></br>
        Nemu takes all available variables, such as the total number of items
        and individual scores per item, into consideration. It then determines
        the best mix of items for each person, accurately representing their
        desires and ensuring that all participants achieve the best possible
        outcomes relative to each other. <br></br>
        There truly isn’t a way to cheat this system, and those who try often
        find that they’ve cheated themselves. Our advice is for people to be
        authentic when assigning their emotional value scores. Don't worry about
        what others are doing; be honest with yourself and you will be satisfied
        with the outcome.
      </p>
    ),
  },
  {
    id: 8,
    question: "  Where Does Nemu Operate?      ",
    answer: (
      <p>
        Nemu operates throughout the United States, with access to a network of
        local appraisers nationwide. This ensures we can serve families
        effectively, regardless of their geographical location.<br></br>
        No matter where you are, Nemu is committed to providing tailored support
        and assistance.
      </p>
    ),
  },
  {
    id: 9,
    question: "  What About Items Left in a Will?      ",
    answer: (
      <p>
        Nemu respects the legal process and understands that rules regarding
        wills and trusts vary by state. Typically, items specifically bequeathed
        in wills or trusts can still be uploaded into our inventory system for
        participants to record descriptive and informative voice memos
        memorializing the items. They just won’t be included in any division
        rounds as they’ve already been spoken for.<br></br>
        If you have any other questions about Nemu or need technical assistance
        with our app, please feel free to{" "}
        <Link className="underline" to={"/contact-us"}>
          contact us
        </Link>{" "}
        today.
      </p>
    ),
  },
  {
    id: 10,
    question: "  What if I need help?     ",
    answer: (
      <p>
        You aren't alone! Our team is available to answer any and every question
        you have. And, if your family needs assistance, we can also provide 1-1
        support throughout the entire process. Have a question? Reach out
        through our{" "}
        <Link className="underline" to={"/contact-us"}>
          Contact page
        </Link>{" "}
        today.
      </p>
    ),
  },
  {
    id: 11,
    question:
      "  How long will it be until I hear back from someone on Nemu's team?     ",
    answer: (
      <p>
        Our staff monitor our inbox and phones every day. Whether you leave us a
        voicemail or an email, we try our best to get back to every customer
        within 48 hours.
      </p>
    ),
  },
  {
    id: 12,
    question: " Is this something that will fit my situation?     ",
    answer: (
      <p>
        Nemu works for items big and small. We've helped those in small
        apartments and those with 3 vacation homes. We've divided items among
        everything from divorcing couples to graduating roommates to families
        with siblings all over the country. Whether you've been given the
        responsibility of settling someone's estate, or you're trying to make
        sure no one has to worry about yours, we're here for you. To make sure
        you only pay for what you need, we have several packages that you can
        customize to fit your situation. Check them out{" "}
        <HashLink className="underline" to={"/estate-management#pricing"}>
          here
        </HashLink>
        !
      </p>
    ),
  },
  {
    id: 13,
    question: " How much does Nemu cost?     ",
    answer: (
      <p>
        We have a variety of packages to meet your needs. To make sure you only
        pay for what you need, you can start small and then add the services
        that fit your situation. You can see our pricing options{" "}
        <HashLink className="underline" to={"/estate-management#pricing"}>
          here
        </HashLink>
        . Still undecided? Start with a Free Trial and see for yourself!
      </p>
    ),
  },
  {
    id: 14,
    question: " Can I start with a free trial before buying?     ",
    answer: (
      <p>
        Of course! We offer a free trial for all of our users. We think you'll
        like what you see. You can Sign Up{" "}
        <a className="underline" href="https://app.mynemu.com/">
          here
        </a>{" "}
        to get started.
      </p>
    ),
  },
  {
    id: 15,
    question: "Can I share responsibilities with other family members?",
    answer:
      "Absolutely! We understand that this process is a lot to take care of for one person. Simply invite others that are helping with the process to share the “admin” role on the account. They will be able to add items to the catalog, set up division rounds, or submit appraisal and selling requests just like you.",
  },
  {
    id: 16,
    question: "How can I catalog items in Nemu?",
    answer:
      "No matter the particular situation you find yourself in, it all starts with taking inventory of the items in question. Cataloging is simply about documenting all of the items you wish to memorialize with family stories or divide amongst friends and family. Need to move through the process quickly? Great - try out our image detection feature, which auto detects items in your picture and recommends names for them. Want to upload and create names on your own? You can do that too. Simply upload photos and tag the items in the photo you want to add to your catalog. You can add details like descriptions and voice notes during the upload process, or when you revisit items in your catalog later.",
  },
  {
    id: 17,
    question: "How does Nemu help appraise items?",
    answer:
      "We understand that knowing how much a cherished item is worth can be an opaque process, so we work to accomodate our customers and provide them with the information they need.  Once a customer submits an appraisal request, we meet 1-1 with them to review the items they would like to get prices for. In some cases our team provides a custom report of how much each item is worth based on market research and in other cases we source certified appraisers to provide appraisals of the items. And, any information gathered about pricing can be uploaded to the Nemu app and shared with family members. ",
  },
  {
    id: 18,
    question: "How does Nemu help sell items?",
    answer: (
      <p>
        Similar to our appraisal consults, Nemu offers individual consultations
        to review items that need to be valued and possibly sold. You decide how
        much or how little of the process you want to control, and we’ll take
        our cues from there. Depending on your situation, we will create a
        custom plan to get your items sold as soon as you need.
      </p>
    ),
  },
];
