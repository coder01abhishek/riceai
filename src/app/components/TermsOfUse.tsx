// components/TermsOfUse.tsx
'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TermsOfUse() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="bg-surface-0 text-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-4">
          <div className="logo">
            <Link href="/" className="block">
              <Image 
                src="/logo.svg" 
                alt="Rice AI Logo" 
                width={160} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </nav>

        {/* Terms Content */}
        <div className="py-12 md:py-24">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Terms of Use</h1>
            <p className="text-medium mb-12">
              <strong>Last Updated: May 15, 2025</strong>
            </p>
            
            <div className="mb-16">
              <p>
                These Terms of Use (the "Terms") constitute a legally binding agreement between RICE AI (the "Company," "we," or "us"), and you (hereinafter referred to as "you" or "user"). These Terms govern your use of the Floki Minibot M1 presale website (the "Platform"), including all presale activities, payments, and interactions related to the Floki Minibot M1, a smart companion robot developed by RICE AI in collaboration with Floki.
              </p>
              <p>
                By accessing or using the Platform or placing a presale order for the Floki Minibot M1, you agree to be bound by these Terms, as may be amended from time to time. If you do not agree with these Terms, you must not access the Platform or place a presale order.
              </p>
            </div>

            <div className="bg-surface-1 p-8 rounded-xl mb-16">
              <h2 className="text-2xl font-bold mb-4">RISK DISCLOSURE</h2>
              <p>
                Placing a presale order for the Floki Minibot M1 involves risks, including but not limited to delays in production, changes in product specifications, or failure to deliver due to unforeseen circumstances. The Floki Minibot M1 is a novel product integrating decentralized AI and robotics, and its performance may depend on technological advancements, market conditions, and third-party components. The final product, including features and design, is subject to change as noted on the Platform. You acknowledge that you have conducted your own due diligence and are participating in the presale at your own risk.
              </p>
              <p>
                We make no warranties or representations regarding the Floki Minibot M1's final specifications, delivery timeline, or performance, except as expressly stated in these Terms. All presale orders are subject to availability, limited supply, and the Company's discretion.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6" id="definitions">1. Definitions</h2>
            <p>In these Terms, unless the context otherwise requires, the following terms shall have the meanings ascribed to them:</p>
            <ul>
              <li><strong>Affiliates</strong>: Any person, entity, or company directly or indirectly controlling, controlled by, or under common control with another person, entity, or company.</li>
              <li><strong>Applicable Law</strong>: All relevant statutes, laws, rules, regulations, orders, judgments, or guidelines issued by any governmental or regulatory authority applicable to the Platform, presale, or these Terms.</li>
              <li><strong>Floki Minibot M1</strong>: A smart companion robot developed by RICE AI in collaboration with Floki, integrating with the RICE AI DePAI protocol for decentralized data sharing and AI functionality, designed to earn $RICE tokens, assist with tasks, provide entertainment, and serve as a Web3 collectible.</li>
              <li><strong>Presale Order</strong>: A non-binding reservation to purchase a Floki Minibot M1 through the presale, subject to these Terms and the Company's final confirmation.</li>
              <li><strong>Restricted Territories</strong>: United States, Canada, Iran, Cuba, North Korea, Syria, Myanmar (Burma), the regions of Crimea, Donetsk, Luhansk, or any other country or region subject to comprehensive economic sanctions by the United States.</li>
              <li><strong>Restricted Person</strong>: Any individual or entity resident, citizen, or incorporated in a Restricted Territory, or otherwise subject to sanctions or restrictions under Applicable Law.</li>
              <li><strong>Sanctioned Person</strong>: Any individual or entity subject to economic or trade sanctions administered by the U.S. Department of the Treasury's Office of Foreign Assets Control, the U.S. Department of State, the United Nations Security Council, the European Union, or other relevant sanctions authority.</li>
              <li><strong>True Viking</strong>: An individual who meets the Company's eligibility criteria for the Floki Minibot M1 presale, as determined by the Company in its sole discretion, which may include participation in the Floki or RICE AI community, engagement on platforms like Discord or X, or other promotional requirements.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12" id="eligibility">2. Eligibility</h2>
            <p>By accessing the Platform or placing a presale order, you represent and warrant that you:</p>
            <ol>
              <li>Are an individual, corporation, or other entity with full power and capacity to use the Platform and enter into these Terms.</li>
              <li>Are at least 18 years old if an individual.</li>
              <li>If acting on behalf of a legal entity, are duly authorized to bind such entity to these Terms.</li>
              <li>Have not been previously suspended or restricted from using the Platform or engaging with RICE AI services.</li>
              <li>Are not accessing the Platform from a Restricted Territory or in violation of Applicable Law.</li>
              <li>Are not a Restricted Person or Sanctioned Person and do not intend to transact with any such persons.</li>
              <li>Are not using a VPN or other anonymization tools to circumvent restrictions applicable to the Platform.</li>
              <li>Have the financial capacity and willingness to assume the risks associated with placing a presale order for a Floki Minibot M1.</li>
            </ol>

            <h2 className="text-3xl font-bold mb-6 mt-12" id="presale-process">3. Presale Process</h2>
            
            <h3 className="text-2xl font-bold mb-4">3.1 Placing a Presale Order</h3>
            <p>To place a presale order, you must complete the process outlined on the Platform, including providing accurate payment and contact information. Presale orders require a deposit as specified on the Platform, which is non-refundable except as provided in Section 3.4. The presale is a one-time offer for early birds with limited supply, and only True Vikings will be selected to participate.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">3.2 Non-Binding Nature</h3>
            <p>A presale order is a reservation and does not guarantee delivery of a Floki Minibot M1. The Company reserves the right to accept or reject any presale order at its sole discretion, particularly if you do not meet the True Viking criteria or if supply is exhausted.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">3.3 Pricing and Payment</h3>
            <p>The presale offers exclusive pricing, which will be lower than the final retail price, as displayed on the Platform. The deposit amount will also be specified on the Platform. Final pricing will be confirmed prior to fulfillment. Payments must be made in the currencies and methods specified on the Platform. You are responsible for any taxes, duties, or fees associated with your presale order.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">3.4 Cancellation and Refunds</h3>
            <ul>
              <li>You may cancel your presale order and receive a full refund of your deposit within 14 days of placement, provided written notice is sent to <a href="mailto:hello@riceai.xyz">hello@riceai.xyz</a>.</li>
              <li>After 14 days, deposits are non-refundable unless the Company cancels the presale order due to inability to fulfill the order, in which case a full refund will be issued.</li>
              <li>Refunds will be processed within 30 days of approval using the original payment method.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">3.5 Delivery Timeline</h3>
            <p>The Floki Minibot M1 is scheduled for priority delivery in Q2 2025 for presale buyers. Estimated delivery timelines will be provided on the Platform but are subject to change due to production, regulatory, or other unforeseen issues. The Company will notify you of significant delays and provide updated estimates.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">3.6 Product Specifications</h3>
            <p>The Floki Minibot M1's features, design, and specifications are subject to change, as noted in the promotional materials (e.g., "The final product, including features and design, is subject to change"). The Company will endeavor to notify presale customers of material changes prior to fulfillment. Features include multimodal AI for natural language interaction, object recognition, navigation, adaptive learning, and entertainment options like storytelling, mini-games, and potential dance modes.</p>

            <h2 className="text-3xl font-bold mb-6 mt-12" id="rice-token">4. $RICE Token and Ecosystem Integration</h2>
            <p>4.1 The Floki Minibot M1 integrates with the RICE AI DePAI protocol, enabling users to earn $RICE tokens by contributing robotics data through interactions such as voice commands, navigation, or tasks. $RICE tokens are not included in the presale order and must be acquired separately. The bonus $RICE token airdrop for presale buyers will be distributed upon the TGE, subject to the Company's discretion and terms at that time.</p>
            <p>4.2 $RICE tokens are not securities, units in a business trust, or any form of investment. They are utility tokens used within the RICE AI ecosystem for data transactions, governance, and other functionalities. These Terms do not constitute an offer or solicitation for investment.</p>
            <p>4.3 The Company makes no representations regarding the value, utility, or future performance of $RICE tokens, including the bonus airdrop. You acknowledge that token-related activities carry inherent risks, including market volatility and regulatory changes.</p>

            <h2 className="text-3xl font-bold mb-6 mt-12" id="intellectual-property">5. Intellectual Property</h2>
            <p>5.1 All content on the Platform, including text, images, designs, software, and promotional materials (e.g., the video at <Link href="https://x.com/RealFlokiInu/status/1916913017972834771" target="_blank" rel="noopener noreferrer">https://x.com/RealFlokiInu/status/1916913017972834771</Link>), is owned by or licensed to the Company and/or Floki and is protected by intellectual property laws. You may not reproduce, distribute, or modify such content without prior written consent.</p>
            <p>5.2 By placing a presale order for a Floki Minibot M1, you are granted a non-exclusive, non-transferable license to use the Floki Minibot M1 and its software for personal, non-commercial purposes, subject to these Terms. The Floki Minibot M1's unique design and branding make it a collectible item for Web3 enthusiasts.</p>

            <h2 className="text-3xl font-bold mb-6 mt-12" id="privacy">6. Privacy and Data Security</h2>
            <p>6.1 The Company collects personal information (e.g., name, email, payment details) to process presale orders and communicate with you.</p>
            <p>6.2 The Floki Minibot M1 employs end-to-end encryption and user-controlled data sharing to protect your privacy. You retain full control over data generated by your Floki Minibot M1 (e.g., through interactions like voice commands or navigation) and may revoke sharing permissions at any time. The Company does not access your data unless you explicitly choose to share it via the DePAI protocol to earn $RICE tokens.</p>
            <p>6.3 You agree not to share sensitive personal information through the Platform beyond what is necessary for presale order processing.</p>

            <h2 className="text-3xl font-bold mb-6 mt-12" id="disclaimers">7. Disclaimers</h2>
            <p>7.1 <strong>As-Is Basis</strong>: The Platform and Floki Minibot M1 presale process are provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.</p>
            <p>7.2 <strong>No Guarantee of Delivery</strong>: The Company does not guarantee that presale orders will result in delivery of a Floki Minibot M1 or that the product will meet your expectations. The presale is limited to a specific supply, and availability is not guaranteed.</p>
            <p>7.3 <strong>Third-Party Services</strong>: The Platform may integrate third-party payment processors or services. The Company is not responsible for the performance, security, or availability of such services.</p>
            <p>7.4 <strong>Network Risks</strong>: You are responsible for maintaining secure internet access and compatible hardware for using the Platform. The Company is not liable for delays or malfunctions due to internet or device issues.</p>
            <p>7.5 <strong>Community Perks</strong>: The Floki Minibot M1 connects you to the RICE AI and Floki communities, but the Company makes no guarantees regarding the availability or nature of exclusive perks or community benefits.</p>

            <h2 className="text-3xl font-bold mb-6 mt-12" id="liability">8. Limitation of Liability</h2>
            <p>8.1 <strong>General Limitation</strong>: To the maximum extent permitted by Applicable Law, the Company and its Affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or opportunities, arising from or related to your use of the Platform, presale order, or Floki Minibot M1.</p>
            <p>8.2 <strong>Cap on Liability</strong>: The Company's aggregate liability under these Terms shall not exceed the deposit amount paid by you for your presale order.</p>
            <p>8.3 <strong>Exclusions</strong>: The Company shall not be liable for losses caused by:</p>
            <ul>
              <li>Your failure to provide accurate information, meet True Viking criteria, or comply with these Terms.</li>
              <li>Third-party actions, including fraud, hacking, or service interruptions.</li>
              <li>Changes in Applicable Law or market conditions affecting production, delivery, or the $RICE token airdrop.</li>
              <li>Delays or defects in third-party components or services.</li>
            </ul>
            <p>8.4 <strong>Force Majeure</strong>: The Company is not liable for delays or failures to perform due to events beyond its reasonable control, including natural disasters, pandemics, or supply chain disruptions.</p>

            <h2 className="text-3xl font-bold mb-6 mt-12" id="amendments">9. Amendments to Terms</h2>
            <p>9.1 The Company may amend these Terms at any time by posting the updated Terms on the Platform. Changes take effect upon posting, and your continued use of the Platform constitutes acceptance of the revised Terms.</p>
            <p>9.2 For material changes affecting presale obligations, the Company will notify you via email or Platform announcement. If you do not agree to the changes, you may cancel your presale order within 14 days of notification for a full refund.</p>

            <h2 className="text-3xl font-bold mb-6 mt-12" id="governing-law">10. Governing Law and Dispute Resolution</h2>
            <p>10.1 <strong>Governing Law</strong>: These Terms shall be governed by and construed in accordance with the laws of Hong Kong, without regard to conflict of law principles.</p>
            <p>10.2 <strong>Informal Resolution</strong>: For any dispute arising under these Terms, you agree to first contact the Company at <a href="mailto:hello@riceai.xyz">hello@riceai.xyz</a> with a written notice describing the issue. The Company will attempt to resolve the dispute within 30 days.</p>
            <p>10.3 <strong>Arbitration</strong>: Any unresolved dispute shall be referred to and finally resolved by arbitration administered by the Hong Kong International Arbitration Centre (HKIAC) under the HKIAC Administered Arbitration Rules in force at the time of arbitration. The arbitration shall:</p>
            <ul>
              <li>Be conducted in English.</li>
              <li>Take place in Hong Kong.</li>
              <li>Be presided over by a single arbitrator with relevant legal and technological expertise, appointed by HKIAC if not agreed upon within 15 working days.</li>
              <li>Be binding and final, with no class or representative proceedings permitted.</li>
              <li>Be commenced within one year of the claim arising, or the claim shall be time-barred.</li>
            </ul>
            <p>10.4 <strong>Confidentiality</strong>: All arbitration proceedings, documents, and awards shall be confidential, except as required by Applicable Law or to enforce an award.</p>
            <p>10.5 <strong>Injunctive Relief</strong>: The Company may seek injunctive or equitable relief in any jurisdiction to protect its intellectual property or enforce these Terms.</p>

            <h2 className="text-3xl font-bold mb-6 mt-12" id="general">11. General Provisions</h2>
            <p>11.1 <strong>Compliance with Applicable Law</strong>: You must comply with all Applicable Law, including data privacy, anti-money laundering, and sanctions regulations, when using the Platform.</p>
            <p>11.2 <strong>Entire Agreement</strong>: These Terms, together with any policies referenced herein, constitute the entire agreement between you and the Company regarding the Platform and presale order.</p>
            <p>11.3 <strong>Assignment</strong>: You may not assign your rights or obligations under these Terms without the Company's prior written consent. The Company may assign its rights or obligations at any time.</p>
            <p>11.4 <strong>Severability</strong>: If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
            <p>11.5 <strong>No Waiver</strong>: The Company's failure to enforce any right or provision shall not constitute a waiver of such right or provision.</p>
            <p>11.6 <strong>Language</strong>: These Terms are provided in English. Any translations are for convenience only, and the English version shall prevail in case of inconsistency.</p>
            <p>11.7 <strong>Third-Party Rights</strong>: Except for Affiliates, no third party shall have any rights under these Terms.</p>
            <p>11.8 <strong>Tax Responsibility</strong>: You are responsible for determining and remitting any taxes applicable to your presale order, receipt of a Floki Minibot M1, or $RICE token airdrop. The Company may withhold taxes as required by Applicable Law.</p>
            <p>11.9 <strong>Contact</strong>: For questions or notices, contact us at <a href="mailto:hello@riceai.xyz">hello@riceai.xyz</a>. Join the RICE AI community on <Link href="https://discord.com/invite/5fb2VUV29Z" target="_blank" rel="noopener noreferrer">Discord</Link> or <Link href="https://x.com/realRiceAI" target="_blank" rel="noopener noreferrer">X</Link> for presale updates.</p>

            <div className="mt-16 text-center">
              <p>© 2025 RICE AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-button-primary-high hover:bg-button-primary-low text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-70 hover:opacity-100 z-50"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}