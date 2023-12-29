import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";

const meta = {
  title: "Nemu: Terms of Use",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section
          className="py-20 xl:pt-24 xl:pb-28 bg-[#F7F5F2]"
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light1.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container mx-auto">
            <div className="px-3">
              <p style={{ textAlign: "right" }}>
                <span style={{ fontSize: "11pt" }}>
                  Last revised: 11/20/2023
                </span>
              </p>
              <p>
                <br />
              </p>
              <p style={{ textAlign: "center" }}>
                <strong>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      WEBSITE TERMS OF USE&nbsp;
                    </span>
                  </u>
                </strong>
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  PLEASE READ THE FOLLOWING CAREFULLY. &nbsp;THIS IS A LEGALLY
                  BINDING AGREEMENT BETWEEN YOU AS AN END USER (AS DEFINED
                  BELOW) (“END USER” OR “YOU”) AND NEMU, INC. (“NEMU, INC.” OR
                  “WE”). &nbsp;THIS WEBSITE TERMS OF USE AGREEMENT, TOGETHER
                  WITH ALL AMENDMENTS, AND COLLECTIVELY WITH ALL NEMU, INC.
                  RULES AND POLICIES, INCLUDING THE NEMU, INC. PRIVACY POLICY
                  [INSERT HYPERLINK], CONSTITUTE THE “AGREEMENT” BETWEEN YOU AND
                  Nemu, Inc. REGARDING YOUR ACCESS TO AND USE OF THE NEMU, INC.
                  WEBSITE (“WEBSITE ”). &nbsp;BY ACCESSING OR USING THE WEBSITE,
                  YOU SIGNIFY THAT YOU HAVE READ THE AGREEMENT AND THAT YOU
                  UNDERSTAND AND AGREE TO BE BOUND BY THE AGREEMENT.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  THIS AGREEMENT COVERS IMPORTANT INFORMATION ABOUT THE
                  PLATFORM. &nbsp;THE AGREEMENT INCLUDES INFORMATION ABOUT
                  FUTURE CHANGES TO THE AGREEMENT, EXPORT CONTROLS, AUTOMATIC
                  RENEWALS, LIMITATIONS OF LIABILITY, PRIVACY INFORMATION, A
                  CLASS ACTION WAIVER, AND A RESOLUTION OF DISPUTES BY
                  ARBITRATION INSTEAD OF IN COURT.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  IF YOU HAVE NOT READ THE AGREEMENT, DO NOT UNDERSTAND OR AGREE
                  TO BE BOUND BY THE AGREEMENT, OR ARE NOT ABLE TO CONSENT TO BE
                  BOUND BY THE AGREEMENT (E.G., IF YOU ARE NOT OLD ENOUGH TO
                  ENTER INTO A BINDING LEGAL CONTRACT), DO NOT USE OUR WEBSITE.
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            Scope and Acceptance&nbsp;
                          </span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  Anyone who accesses or uses our Website is an “End User.”
                  &nbsp;The Agreement sets forth your rights and obligations as
                  an End User with respect to your access to and use of the
                  Website and use of any and all information or data of any kind
                  arising from access to, or use of, the Website, including,
                  without limitation, any text, graphics, images, art work,
                  sound recordings, audio, video, and software.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  We reserve the right, in our sole discretion, to change this
                  Agreement (including the Privacy Policy) from time to time,
                  without prior notice. &nbsp;You are responsible for reviewing
                  the Agreement regularly. &nbsp;Your access to any part of the
                  Website is deemed to be your acceptance of this Agreement, and
                  any changes thereto.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  If you are accessing or using any part of the Website on
                  behalf of any business, organization, or other entity of any
                  kind, you represent and warrant that you are authorized (a) to
                  accept these terms on its behalf and (b) to bind such
                  business, organization, or entity to the Agreement.
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol start={2}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            Privacy Policy&nbsp;
                          </span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  Please see our Privacy Policy [INSERT HYPERLINK] for a
                  detailed description of how we collect, use, and disclose
                  information about our End Users.
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol start={3}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            Description of Website
                          </span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  The Nemu Inc. website facilitates the education of prospective
                  clients about our services and other general tips through our
                  blog/resources. It connects customers to links to learn more
                  and start our services. Our services enable families to manage
                  and divide heirlooms by creating a catalog, accessing
                  appraisals, equitably dividing, and selling personal property
                  or heirlooms.&nbsp;
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol start={4}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            Operation&nbsp;
                          </span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  The specific features and functionality of the Website are
                  dynamic and may change from time to time. &nbsp;We reserve
                  complete discretion with respect to the operation of the
                  Website. &nbsp;We also reserve the right to withdraw, suspend,
                  or discontinue any functionality or feature of the Website at
                  any time. &nbsp; &nbsp;
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol start={5}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>Inaccuracies</span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  We make great efforts to provide accurate information on the
                  Website. &nbsp;However, we disclaim—and you release us from
                  any liability regarding—errors, inaccuracies, and omissions of
                  the Website. &nbsp;We reserve the right to correct any errors,
                  inaccuracies, or omissions and to change or update information
                  at any time without prior notice. &nbsp;Nemu, Inc. makes no
                  guarantees whatsoever as to the completeness, timeliness,
                  correctness, or accuracy of the materials or data available
                  through the Website. &nbsp;If you believe any portion of the
                  Website includes an error or inaccuracy, please notify us.
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol start={6}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            Permitted Use &nbsp;
                          </span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  Certain Nemu, Inc. materials provided through the Website are
                  protected by intellectual property laws, including but not
                  limited to U.S. copyright laws. &nbsp;You expressly
                  acknowledge and agree that the content accessible through the
                  Website that is not expressly designated as being provided by
                  another End User is the property of Nemu, Inc. and its content
                  providers, and Nemu, Inc. and its content providers retain all
                  right, title, and interest in the content. &nbsp;
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  Subject to the terms of this Agreement, you are granted a
                  limited, personal, non-exclusive, non-sublicensable,
                  non-assignable, non-transferable, and revocable license to
                  access and use the Website and related materials solely for
                  your own non-commercial use. &nbsp;Except as expressly
                  provided, all rights are reserved. &nbsp;Nothing contained in
                  this Agreement or on the Website shall be construed as
                  conferring by implication, estoppels or otherwise any license
                  or right under any patent or trademark of Nemu, Inc., or any
                  third party. &nbsp;
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  Except as expressly permitted by the Agreement, in connection
                  with the use of the Website, you may not:&nbsp;
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      alter or modify the Website, or make any electronic
                      reproduction, adaptation, distribution, performance, or
                      display of the Website, or any portion thereof, except to
                      the extent required for the limited purpose of reviewing
                      material on the Website; or
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      sell, rent, lease, transfer, distribute, broadcast,
                      display, provide, or otherwise assign to any third party
                      any rights to the Website, or related materials; or
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      remove or modify any proprietary notice or labels on the
                      Website, or related materials, including author
                      attribution and copyright notices, or use any of our
                      trademarks as meta-tags on any other website; or
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      use the Website for any non-authorized purpose or any
                      illegal purpose; or
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      copy, modify, erase, or damage any information contained
                      on computer servers used or controlled by Nemu, Inc. or
                      any third party; or
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      use the Website to violate any legal right of any third
                      party, including any publicity or privacy right,
                      copyright, or other intellectual property right, or to
                      take any action that is harassing, libelous, defamatory,
                      abusive, tortious, threatening, harmful, or otherwise
                      objectionable; or
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      access or use any password-protected, secure, or
                      non-public areas of the Website, or access data on the
                      Website not intended for you, except as specifically
                      authorized by Nemu, Inc.; or&nbsp;
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      impersonate or misrepresent your affiliation with any
                      person or entity; or&nbsp;
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      use any automated means to access or use the Website,
                      including scripts, bots, scrapers, data miners, or similar
                      software, or display the Website, or portions thereof, in
                      things (e.g., framing, scraping, etc.), without our
                      express written permission; or
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      attempt to or actually disrupt, impair, or interfere with
                      the Website, or any information, data, or materials posted
                      and/or displayed by Nemu, Inc.; or
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      attempt to probe, scan, or test the vulnerability of the
                      Website or breach any implemented security or
                      authentication measures, regardless of your motives or
                      intent; or
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      attempt to interfere with or disrupt access to or use of
                      the Website by any user, processor, host, or network,
                      including, without limitation, by submitting a virus,
                      worm, Trojan horse, or other malicious code; or
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      post any content to the Website that: (i) includes any
                      profane, obscene, defamatory, discriminatory, threatening,
                      menacing, harassing, or violent content; (ii) depicts or
                      suggests nudity or sexual acts; (iii) promotes hatred,
                      including against members of a protected group under
                      federal, state, or local law (such as, for example, a
                      group defined by race, gender, or national origin); (iv)
                      is objectively shocking or disgusting; (v) depicts or
                      suggests presently occurring illegal activity, including,
                      e.g., illicit drug use or underage drinking; (vi) includes
                      unlicensed proprietary content of a third party,
                      including, e.g., third-party content protected by
                      copyright or trademark for which you do not have a
                      license; (vii) breaches any duty of confidentiality you
                      may have to a third party (e.g., discloses private
                      information about a third party without consent); or
                      (viii) is contrary to the Agreement, including Nemu,
                      Inc.’s rules and policies. &nbsp; &nbsp;
                    </span>
                  </p>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <ol start={7}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            Third Party Properties Referred to on the Website
                          </span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  Our Website may refer to physical venues, geographical sites,
                  websites on the Internet, and/or products or services that are
                  not under the control of or maintained by Nemu, Inc. (“Third
                  Party Properties”). &nbsp;Unless expressly stated to the
                  contrary, such references do not constitute an affiliation
                  with or endorsement by Nemu, Inc. of any such Third Party
                  Properties. &nbsp;You acknowledge that Nemu, Inc. is providing
                  any references to such Third Party Properties to you solely as
                  a convenience to you, and you agree that Nemu, Inc. is not
                  responsible for any injury, harm, damages, or negative
                  experience you may encounter by accessing, visiting, or using
                  such Third Party Properties. &nbsp;Nemu, Inc. does not endorse
                  or make any representations about any Third Party Properties.
                  &nbsp;If you access, visit, or use any Third Party Properties
                  referred to on our Website, you do so at your own risk. &nbsp;
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol start={8}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            Availability of the Website&nbsp;
                          </span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  It is not possible to operate our Website with 100% guaranteed
                  uptime. &nbsp;Nemu, Inc. will make reasonable efforts to keep
                  our Website operational. However, certain technical
                  difficulties, routine site maintenance and upgrades, and other
                  events may, from time to time, result in interruptions to or
                  outages of our Website. &nbsp;You agree that Nemu, Inc. shall
                  not be liable to you or to any third party for any direct or
                  indirect consequence of any modification, suspension,
                  discontinuance of, or interruption to our Website.
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol start={9}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>Disclaimers</span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  THE WEBSITE IS PROVIDED ON AN “AS IS” AND AN “AS AVAILABLE”
                  BASIS. &nbsp;EXCEPT AS EXPRESSLY PROVIDED, Nemu, Inc. DOES NOT
                  MAKE, AND HEREBY DISCLAIMS, ANY REPRESENTATIONS OR WARRANTIES,
                  INCLUDING EXPRESS, IMPLIED, AND STATUTORY WARRANTIES,
                  REGARDING (A) THE WEBSITE; AND (B) ANY PRODUCTS AND SERVICES
                  OFFERED THROUGH THE WEBSITE, INCLUDING (WITHOUT LIMITATION)
                  IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT OF THIRD PARTY
                  RIGHTS, AND ANY WARRANTIES ARISING BY COURSE OF DEALING OR
                  CUSTOM OF TRADE. &nbsp;
                </span>
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  Nemu, Inc. MAKES NO REPRESENTATION OR WARRANTY THAT ANY
                  MATERIAL OR CONTENT DISPLAYED ON OR OFFERED THROUGH THE
                  WEBSITE IS ACCURATE, COMPLETE, APPROPRIATE, RELIABLE, OR
                  TIMELY. &nbsp;Nemu, Inc. ALSO MAKES NO REPRESENTATIONS OR
                  WARRANTIES THAT THE WEBSITE WILL MEET YOUR REQUIREMENTS, OR
                  THAT YOUR ACCESS TO AND USE OF THE WEBSITE WILL BE
                  UNINTERRUPTED OR ERROR-FREE, FREE OF VIRUSES, MALICIOUS CODE,
                  OR OTHER HARMFUL COMPONENTS, OR OTHERWISE WILL BE SECURE.
                  &nbsp;SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
                  WARRANTIES. ACCORDINGLY, SOME OF THE ABOVE EXCLUSIONS MAY NOT
                  APPLY TO YOU.
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol start={10}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            Limitation of Liability and Release
                          </span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW AND
                  NOTWITHSTANDING ANY OTHER PROVISION OF THIS AGREEMENT, IN NO
                  EVENT SHALL Nemu, Inc. OR ANY OF ITS AFFILIATES OR SUPPLIERS
                  (INCLUDING ANY OF ITS OR THEIR PARTNERS, OFFICERS, EMPLOYEES,
                  AGENTS, CONTRACTORS, SUCCESSORS, OR ASSIGNEES) BE LIABLE TO
                  YOU (INCLUDING ANY OF YOUR PARTNERS, OFFICERS, EMPLOYEES,
                  AGENTS, CONTRACTORS, SUCCESSORS, OR ASSIGNEES) FOR ANY DIRECT,
                  INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, PUNITIVE, OR
                  CONSEQUENTIAL DAMAGES, WHETHER ARISING IN CONTRACT, EQUITY,
                  INTENDED CONDUCT, TORT, OR OTHERWISE (INCLUDING BREACH OF
                  WARRANTY, NEGLIGENCE, AND STRICT LIABILITY IN TORT), NOR FOR
                  ANY DAMAGES ARISING FROM DELAY, LOSS OF GOODWILL, LOSS OF OR
                  DAMAGE TO DATA, INTERRUPTION IN USE OR AVAILABILITY OF DATA,
                  LOSS OF USE OF MONEY OR USE OF PRODUCTS, LOST PROFITS, REVENUE
                  OR SAVINGS (ACTUAL OR ANTICIPATED), OR OTHER ECONOMIC LOSS
                  ENSUING FROM OR IN CONNECTION WITH THE EXISTENCE, ACCESS TO,
                  USE OF, OR INABILITY TO USE THE WEBSITE OR RELATING TO ANY
                  MATERIALS, INFORMATION, QUALIFICATION, OR RECOMMENDATIONS ON
                  THE WEBSITE, EVEN IF Nemu, Inc. OR ANY OF ITS AFFILIATES OR
                  SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  &nbsp;THESE LIMITATIONS SHALL APPLY NOTWITHSTANDING THE
                  FAILURE OF THE ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  YOU EXPRESSLY WAIVE AND RELEASE ANY AND ALL RIGHTS AND
                  BENEFITS UNDER SECTION 1542 OF THE CIVIL CODE OF THE STATE OF
                  CALIFORNIA (OR ANY ANALOGOUS LAW OF ANY OTHER STATE), WHICH
                  READS AS FOLLOWS: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS
                  THAT THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT
                  TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE
                  RELEASE AND THAT, IF KNOWN BY HIM OR HER, WOULD HAVE
                  MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR
                  RELEASED PARTY.”
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  Despite the foregoing limitation of liability for damages, if
                  a court or other tribunal of competent jurisdiction decides to
                  award monetary damages to you for any claim or cause of action
                  arising from the same, the amount of monetary damages for such
                  claim or cause of action shall not exceed one hundred U.S.
                  dollars ($100).
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol start={11}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>Indemnity</span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS Nemu, Inc.,
                  ITS PARENTS, SUBSIDIARIES, AND AFFILIATES, AND ITS AND THEIR
                  RESPECTIVE DIRECTORS, OFFICERS, PARTNERS, EMPLOYEES, AGENTS,
                  CONTRACTORS, SUCCESSORS, AND ASSIGNS FROM AND AGAINST ALL
                  CLAIMS, DEMANDS, LAWSUITS, DAMAGES, LIABILITIES, LOSSES,
                  COSTS, OR EXPENSES (INCLUDING, BUT NOT LIMITED TO, REASONABLE
                  FEES AND DISBURSEMENTS OF COUNSEL AND COURT COSTS), JUDGMENTS,
                  SETTLEMENTS, AND PENALTIES OF EVERY KIND ARISING FROM OR
                  RELATING TO ANY VIOLATION OF THIS AGREEMENT AND ANY ACTIVITY
                  RELATED TO YOUR USE OF THE WEBSITE OR THE INFORMATION
                  CONTAINED ON THE WEBSITE.
                </span>
              </p>
              <ol start={12}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>Termination</span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  You agree that Nemu, Inc. may, to the extent feasible, in its
                  sole discretion, and without prior notice, terminate your
                  access to or use of any portion of our Website at any time and
                  for any reason, with or without cause. &nbsp;You also agree
                  that any violation by you of the Agreement will constitute an
                  unlawful and unfair business practice that will cause
                  irreparable harm to Nemu, Inc. for which monetary damages
                  would be inadequate. &nbsp;You consent to Nemu, Inc.’
                  obtaining any injunctive or equitable relief that Nemu, Inc.
                  deems necessary or appropriate in such circumstances, without
                  the need for a bond. &nbsp;These remedies are in addition to
                  any other remedies Nemu, Inc. may have at law or in equity.
                  &nbsp;
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol start={13}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>
                            Intellectual Property Infringement Complaints&nbsp;
                          </span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  If you believe a work protected by a U.S. copyright you own
                  has been posted on the Website without authorization, you may
                  notify our copyright agent, and provide the following
                  information:
                </span>
              </p>
              <p>
                <br />
              </p>
              <ol>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      a physical or electronic signature of the person
                      authorized to act on behalf of the copyright owner;&nbsp;
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      identification of the copyrighted work or works claimed to
                      have been infringed;&nbsp;
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      a detailed description of the material you claim is
                      infringing, together with information sufficient to enable
                      us to locate it, including the URL or other description of
                      where the infringing material appears;&nbsp;
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      your name, mailing address, telephone number, and e-mail
                      address;&nbsp;
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      a statement by you that you believe in good faith that the
                      copyrighted material identified is being used in a manner
                      that is not authorized by the copyright owner, its agent,
                      or the law; and&nbsp;
                    </span>
                  </p>
                </li>
                <li style={{ listStyleType: "lower-alpha", fontSize: "11pt" }}>
                  <p>
                    <span style={{ fontSize: "11pt" }}>
                      a statement by you that the above information is accurate
                      and, under penalty of perjury, that you are authorized to
                      act on behalf of the owner of the copyright allegedly
                      infringed.&nbsp;
                    </span>
                  </p>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  To notify Nemu, Inc. of a claimed copyright infringement,
                  please contact:&nbsp;
                </span>
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>Nemu, Inc.</span>
              </p>
              <p>
                <a href="mailto:support@mynemu.com">
                  <u>
                    <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                      support@mynemu.com
                    </span>
                  </u>
                </a>
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  2265 116th Ave NE, Suite 110
                </span>
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>Bellevue, WA 98004</span>
              </p>
              <p>
                <br />
              </p>
              <ol start={14}>
                <li>
                  <strong>
                    <ul>
                      <li
                        style={{ listStyleType: "decimal", fontSize: "11pt" }}
                      >
                        <p>
                          <span style={{ fontSize: "11pt" }}>General</span>
                        </p>
                      </li>
                    </ul>
                  </strong>
                </li>
              </ol>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  <span style={{ fontSize: "11pt" }}>14.1</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>&nbsp; &nbsp;&nbsp;</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>Modifications</span>
                </strong>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  At any time and in Nemu, Inc.’ sole discretion, we may add,
                  delete, or modify the Agreement. &nbsp;We will use
                  commercially reasonable efforts to publish any revised portion
                  of the Agreement, for example, by publishing the latest
                  version of these terms and conditions at this URL.
                  &nbsp;Should you deem any such addition, deletion, or
                  modification to the Agreement unacceptable, you shall stop
                  accessing and using the Website. &nbsp;All changes to the
                  Agreement shall be effective immediately.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  <span style={{ fontSize: "11pt" }}>14.2</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>&nbsp; &nbsp;&nbsp;</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>
                    Access and Use Where Prohibited
                  </span>
                </strong>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  Access to and use of our Website are unauthorized in any
                  jurisdiction that does not give effect to all provisions of
                  the Agreement, including without limitation this provision.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  <span style={{ fontSize: "11pt" }}>14.1</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>&nbsp; &nbsp;&nbsp;</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>
                    Operation of the Website from the United States of America
                  </span>
                </strong>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  By accessing and using the Website, you acknowledge and agree
                  that Nemu, Inc. controls and operates all parts of the Website
                  from its offices in the United States of America and that the
                  Website, and the information contained on the Website, is
                  intended for use by End Users located in the United States of
                  America. &nbsp;Other countries may have laws, regulatory
                  requirements and medical practices that differ from those in
                  the United State of America. Unless expressly stated to the
                  contrary, Nemu, Inc. makes no representation that the Website,
                  or the information contained on the Website, is appropriate or
                  will be available for use in other locations. &nbsp;Unless
                  otherwise explicitly stated, all material and content found on
                  or accessible through the Website is solely directed to
                  individuals, companies, or other entities located in the
                  United States of America. &nbsp;Nemu, Inc. reserves the right
                  to limit, in its sole discretion, the provision and quantity
                  of any feature, product, or service to any person or
                  geographic area. &nbsp;Any offer for any feature, product, or
                  service made on or through the Website is void where
                  prohibited. &nbsp;If you access or use the Website from
                  outside the United States of America, you are entirely
                  responsible for compliance with applicable local laws and
                  other applicable laws. &nbsp;You may not use any portion of
                  the Website in violation of applicable export laws and
                  regulations.
                </span>
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  If you access the Website from outside the United States, you
                  acknowledge and agree that your information may be transferred
                  to and maintained on computers and servers located outside of
                  your state, province, country, or other governmental
                  jurisdiction where the privacy laws may not be as protective
                  as those in your jurisdiction. &nbsp;Your consent to the
                  Agreement followed by your submission of such information
                  represents your agreement to the transfer of such information
                  to the United States and the collection, use, and disclosure
                  of your information in accordance with United States law and
                  our Privacy Policy.&nbsp;
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  <span style={{ fontSize: "11pt" }}>14.2</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>&nbsp; &nbsp;&nbsp;</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>
                    Applicable Law and Venue
                  </span>
                </strong>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  Any action related to the Agreement will be governed by the
                  laws of the state of Delaware, without regard to the choice or
                  conflicts of law provisions of any jurisdiction. &nbsp;You and
                  Nemu, Inc. agree and consent that jurisdiction, proper venue,
                  and the most convenient forums for all claims, actions, and
                  proceedings of any kind relating to our Website or the
                  Agreement will be exclusively in the federal or state courts
                  of the state of Delaware.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  <span style={{ fontSize: "11pt" }}>14.3</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>&nbsp; &nbsp;&nbsp;</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>Dispute Resolution</span>
                </strong>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  Nemu, Inc. intends to resolve any and all disputes that may
                  arise between it and its End Users in a cost-effective and
                  non-disruptive manner, preferably without the time and expense
                  of litigation. &nbsp;Toward this end, you agree to the
                  following dispute resolution procedure. &nbsp;If you are
                  unable to resolve any dispute in the ordinary course of
                  business, you shall send a written notice to Nemu, Inc. in
                  which you outline the issues in dispute, enclose any relevant
                  documents, and state the requested relief. &nbsp;Nemu, Inc.
                  shall respond within ten (10) business days with identical
                  information from its perspective. &nbsp;You and a
                  representative of Nemu, Inc. shall meet or communicate
                  electronically within ten (10) business days of the delivery
                  of the response, and as often as you and Nemu, Inc. mutually
                  deem necessary or desirable thereafter, in an attempt to
                  resolve the matter. &nbsp;If, within sixty (60) days of the
                  first communication, you and Nemu, Inc. fail to resolve the
                  matter, you and Nemu, Inc. shall seek to mediate the dispute
                  with a neutral third party. &nbsp;Neither party shall seek
                  further legal action unless such mediation fails to achieve a
                  resolution acceptable to both parties. &nbsp;You agree that
                  you will not bring or be a party to any class-action lawsuit
                  against Nemu, Inc..
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  <span style={{ fontSize: "11pt" }}>14.4</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>&nbsp; &nbsp;&nbsp;</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>
                    Unsolicited Materials and End User’s Grant of Limited
                    Licensed
                  </span>
                </strong>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  In operating our Website, Nemu, Inc. does not solicit nor does
                  it wish to receive any confidential, secret or proprietary
                  information or other material from you through the Website,
                  our mail and e-mail addresses, or in any other way. &nbsp;Any
                  information or material submitted or sent to Nemu, Inc.
                  (including, but not limited to, comments, questions, feedback,
                  data, suggestions, ideas and the like) will be deemed to be
                  not confidential or secret. By submitting or sending
                  information or other material to Nemu, Inc., you represent and
                  warrant that the information is original to you and that no
                  other party has any rights to the material.
                </span>
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  By communicating with Nemu, Inc., including submitting or
                  sending content to us, you grant Nemu, Inc. the royalty-free,
                  unrestricted, world-wide, perpetual, irrevocable,
                  non-exclusive, and fully sublicensable right and license to
                  use, reproduce, modify, adapt, publish, translate, create
                  derivative works from, distribute, perform and display such
                  content (in whole or part), including any information,
                  suggestions, ideas, drawings or concepts contained in such
                  content, worldwide and/or to incorporate it in other works in
                  any form, media, or technology now known or later developed.
                  Such license includes incorporating the content, in whole or
                  in part, into a Nemu, Inc. feature. You will remain
                  responsible for the accuracy, copyright compliance, legality,
                  decency, or any other aspect of such submitted material,
                  including any content or part thereof, or other communication
                  to Nemu, Inc.. &nbsp;You also warrant that any "moral rights"
                  in such content is waived.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>
                  <span style={{ fontSize: "11pt" }}>14.5</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>&nbsp; &nbsp;&nbsp;</span>
                </strong>
                <strong>
                  <span style={{ fontSize: "11pt" }}>Miscellaneous&nbsp;</span>
                </strong>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  If any part of the Agreement is determined to be invalid or
                  unenforceable pursuant to applicable law including, but not
                  limited to, the warranty disclaimers and liability limitations
                  set forth above, then the invalid or unenforceable provision
                  will be deemed superseded by a valid, enforceable provision
                  that most closely matches the intent of the original provision
                  and the remainder of the Agreement shall continue in effect.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  No failure or delay in enforcing any provision, exercising any
                  option, or requiring performance, shall be construed to be a
                  waiver of that or any other right in connection with the
                  Agreement.
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  No action arising out of this Agreement or your access to or
                  use of our Website, regardless of form or the basis of the
                  claim, may be brought by you more than one (1) year after the
                  cause of action has arisen (or if multiple causes, from the
                  date the first such cause arose) and you hereby waive any
                  longer statute of limitations that may be permitted by law.
                </span>
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  If Nemu, Inc. does take any legal action against you as a
                  result of your violation of the Agreement, Nemu, Inc. will be
                  entitled to recover from you, and you agree to pay, all
                  reasonable attorneys’ fees and costs of such action, in
                  addition to any other relief granted to Nemu, Inc.. &nbsp;You
                  agree that Nemu, Inc. will not be liable to you or to any
                  third party for termination of your access to, or use of, any
                  of our Website as a result of any violation of the Agreement
                  or for any reason at all.&nbsp;
                </span>
              </p>
              <p>
                <br />
              </p>
              <p>
                <span style={{ fontSize: "11pt" }}>
                  You may not assign, by operation of law or otherwise, any
                  rights or delegate any duties under the Agreement to any third
                  party without prior written consent by Nemu, Inc.. &nbsp;Any
                  purported assignment lacking such consent will be void at its
                  inception. &nbsp;Nemu, Inc. may assign all or part of its
                  rights and/or delegate all or part of its duties under the
                  Agreement to any party, at any time, and in its sole
                  discretion, upon notice of assignment by posting such notice
                  on our Website.&nbsp;
                </span>
              </p>
            </div>
          </div>
        </section>
        <Footer />
        <ScrollToTop
          color="white"
          style={{
            backgroundColor: "#075362",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            fontWeight: "bold",
          }}
          smooth
        />
      </>
    </React.Fragment>
  );
}
