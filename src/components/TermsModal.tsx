import { X } from "lucide-react";
import { useEffect } from "react";

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div
                className="bg-white rounded-[20px] shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-200"
                role="dialog"
                aria-modal="true"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6 text-gray-500" />
                </button>

                <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-center mb-8">
                        Disclosure and Disclaimer
                    </h2>

                    <div className="font-body text-[#4a4949] text-sm md:text-base space-y-6 leading-relaxed">
                        <p>
                            Tradesurf Research Private Limited, (Hereinafter referred to as "TRADESURF") is regulated by the Securities and Exchange Board of India ("SEBI") and is licensed to carry on the business of Research Analyst activities. This Report has been prepared in the capacity of a Research Analyst having SEBI Registration No. INHXXXXXXXXX and distributed as per SEBI (Research Analysts) Regulations 2014.
                        </p>

                        <p>
                            You agree and understand that the information and material contained in this website implies and constitutes your consent to the terms and conditions mentioned below. You also agree that TRADESURF can modify or alter the terms and conditions of the use of this service without any liability.
                        </p>

                        <p>
                            The content of the site and the interpretation of data are solely the personal views of the contributors. TRADESURF reserves the right to make modifications and alterations to the content of the website. Users are advised to use the data for the purpose of information only and rely on their own judgment while making investment decisions. The investments discussed or recommended may not be suitable for all investors.
                            The market view and investment tips expressed on website www.fyntrix.ai are in no way a guarantee either express or implied. TRADESURF does not guarantee the accuracy, adequacy or completeness of any information and is not responsible for any errors or omissions or for the results obtained from the use of such information. TRADESURF especially states that it has no financial liability whatsoever to any user on account of the use of information provided on its website.
                        </p>

                        <p>
                            Trading is inherently risky and you agree to assume complete and full responsibility for the outcomes of all trading decisions that you make, including but not limited to loss of capital. None of the trading calls given by TRADESURF should be construed as an offer to buy or sell any financial instruments, nor advice to do so. All comments and posts made by TRADESURF and employees/owners are for information purposes only and under no circumstances should be used for actual trading. Under no circumstances should any person make trading decisions based solely on the information discussed herein. It is informational in nature. We encourage all investors to use the information on the site as a resource only and should further do their own research on all featured companies, stocks, sectors, markets and information presented on the site. Nothing published on this site should be considered as investment advice.
                        </p>

                        <p>
                            TRADESURF, its management, and/or their employees take no responsibility for the veracity, validity and the correctness of the recommendations or other information or research. Although we attempt to research thoroughly on information provided herein, there are no guarantees in accuracy. The information presented on the site has been gathered from various sources believed to be providing correct information. TRADESURF, its management, and/or employees are not responsible for errors, inaccuracies if any in the content provided on the site. Any prediction made on the direction of the stock market or on the direction of individual stocks may prove to be incorrect. Users/visitors are expected to refer to other investment resources to verify the accuracy of the data posted on this site on their own.
                        </p>

                        <p>
                            TRADESURF does not represent or endorse the accuracy or reliability of any of the information, conversation, or content contained on, distributed through, or linked, downloaded or accessed from any of the services contained on this website (hereinafter, the "Service"), nor the quality of any products, information or other materials displayed, purchased, or obtained by you as a result of any other information or offer by or in connection with the Service. All analyst commentary provided on this Website is for information purposes only.
                            The content of the website cannot be copied, reproduced, republished, uploaded, posted, transmitted or distributed for any non-personal use without obtaining prior permission from TRADESURF. We reserve the right to terminate the accounts of subscribers/customers, who violate the proprietary rights, in addition to necessary legal action.
                        </p>

                        <p>
                            There are risks associated with utilizing the internet and short messaging system (SMS) based information and research dissemination services. Subscribers are advised to understand that the services can fail due to failure of hardware, software, and Internet connection. While we ensure that the messages are delivered in time to the subscribers Mobile Network, the delivery of these messages to the customer’s mobile phone/handset is the responsibility of the customer’s Mobile Network. SMS may be delayed and/or not delivered to the customer’s mobile phone/handset on certain days, owing to technical reasons that can only be addressed by the customer’s Mobile Network, and TRADESURF and its employees cannot be held responsible for the same in any case.
                            A possibility exists that the site could include inaccuracies or errors. Additionally, a possibility exist that unauthorized additions, deletions or alterations could be made by third parties to the site. Although TRADESURF attempts to ensure the integrity, correctness and authenticity of the site, it makes no guarantees whatsoever as to its completeness, correctness or accuracy. In the event, that such an inaccuracy arises, please inform TRADESURF so that it can be corrected.
                        </p>

                        <p>
                            TRADESURF and its owners/affiliates are not liable for damages caused by any performance, failure of performance, error, omission, interruption, deletion, defect, delay in transmission or operations, computer virus, communications line failure, and unauthorized access to the personal accounts. TRADESURF is not responsible for any technical failure or malfunctioning of the software or delays of any kind. We are also not responsible for non-receipt of registration details or e-mails. Users shall bear all responsibility of keeping the password secure. TRADESURF is not responsible for the loss or misuse of the password.
                        </p>

                        <p>
                            TRADESURF is not responsible for the content of any of the linked sites. By providing access to other websites, TRADESURF is neither recommending nor endorsing the content available in the linked websites.You agree that the information gathered from your profile will be used to enhance your experience on the website. We will not rent or sell the profile to any third party. In case of a contest or a promotion scheme, we reserve the right to share the users profile with the sponsors. In the event of necessary credit checks and collection of payments, TRADESURF can disclose such information to other authorities in good faith.
                        </p>

                        <p>
                            This website is for the exclusive purpose of transactions to be carried out within the territorial jurisdiction of India and all such transactions shall be governed by the laws in India. Notice is hereby given that Non-Resident Indians (NRI's) and Foreign Nationals accessing this web site and opting to transact thereon shall do so after due verification at their end of their eligibility to do so. TRADESURF undertakes no responsibility for such pre-eligibility of qualification on part of Non-Resident Indians (NRI's) or Foreign Nationals to transact on this website
                        </p>

                        <h3 className="font-heading font-semibold text-lg md:text-xl text-black mt-8 mb-4">DELAYS IN SERVICES:</h3>
                        <p>
                            Neither TRADESURF (including its directors, and/or employees,) shall be liable for any loss or liability resulting, directly or indirectly, from delays or interruptions due to DND, electronic or mechanical equipment failures, telephone interconnect problems, defects, weather, strikes, walkouts, fire, acts of God, riots, armed conflicts, acts of war, or other like causes.
                        </p>

                        <h3 className="font-heading font-semibold text-lg md:text-xl text-black mt-8 mb-4">GOVERNING LAW:</h3>
                        <p>
                            Transactions between you and TRADESURF shall be governed by and construed in accordance with the laws of India. Any litigation regarding this agreement or any transaction between customer and TRADESURF or any action at law or in equity arising out of or relating to these agreement or transaction shall be filed only in the Competent Courts of Gujarat and the customer hereby agrees, consents and submits to the jurisdiction of such courts for the purpose of litigating any such action.
                        </p>

                        <h3 className="font-heading font-semibold text-lg md:text-xl text-black mt-8 mb-4">Exchanges Disclaimer:</h3>
                        <p>
                            No exchange* shall in any manner be answerable, responsible or liable to any person or persons for any acts of omission or commission, errors, mistakes and/or violation, actual or perceived, by us or our partners, agents, associates etc, of any of the Rules, Regulations, Bye-laws of any of the exchanges, SEBI Act or any other laws in force from time to time.
                            None of the exchanges are liable for any information on this Website or for any services rendered by us, our employees, and our servants.
                            * Exchanges here include all the Exchanges of which TRADESURF is a Member currently or can become a member in future. If you do not agree to any of the terms mentioned in this agreement, you should exit the site
                        </p>

                        <h3 className="font-heading font-semibold text-lg md:text-xl text-black mt-8 mb-4">STANDARD DISCLOSURES AS PER RESEARCH ANALYSTS REGULATIONS, 2014</h3>
                        <h3 className="font-heading font-semibold text-lg md:text-xl text-black mt-4 mb-4">DISCLAIMER/DISCLOSURES ANALYST CERTIFICATION</h3>
                        <p>
                            We/I, Mr. Devendra Gosar Research Analysts, authors and the names subscribed to this report, of . hereby certify that all of the views expressed in this research report accurately reflect our views about the subject issuer(s) or securities. We also certify that no part of our compensation was, is, or will be directly or indirectly related to the specific recommendation(s) or view(s) in this report.
                        </p>

                        <h3 className="font-heading font-semibold text-lg md:text-xl text-black mt-8 mb-4">Terms & conditions and other disclosures:</h3>
                        <p>
                            ,(hereinafter referred to as "TRADESURF") is engaged in the business of Research Analyst Services as mandated by SEBI. This document has been prepared by the Research Division of TRADESURF and is meant for use by the recipient only as information and is not for circulation. This document is not to be reported or copied or made available to others without prior permission of TRADESURF. It should not be considered or taken as an offer to sell or a solicitation to buy or sell any security.
                        </p>
                        <p>
                            The information contained in this report has been obtained from sources that are considered to be reliable. However, TRADESURF has not independently verified the accuracy or completeness of the same. Neither TRADESURF nor any of its affiliates, its directors or its employees accepts any responsibility of whatsoever nature for the information, statements and opinion given, made available or expressed herein or for any omission therein.
                        </p>
                        <p>
                            Recipients of this report should be aware that past performance is not necessarily a guide to future performance and value of investments can go down as well. The suitability or otherwise of any investments will depend upon the recipient's particular circumstances and, in case of doubt, advice should be sought from an independent expert/advisor.
                        </p>
                        <p>
                            Either TRADESURF or its affiliates or its directors or its employees or its representatives or its clients or their relatives may have position(s), make market, act as principal or engage in transactions of securities of companies referred to in this report and they may have used the research material prior to publication.
                            TRADESURF submits that no material disciplinary action has been taken on us by any Regulatory Authority impacting Equity Research Analysis activities.
                        </p>

                        <p>
                            TRADESURF or its research analysts or its associates or his relatives do not have any financial interest in the subject company. TRADESURF or its research analysts or its associates or his relatives do not have actual/beneficial ownership of one per cent or more securities of the subject company at the end of the month immediately preceding the date of publication of the research report. TRADESURF or its research analysts or its associates or his relatives do not have any material conflict of interest at the time of publication of the research report.
                            TRADESURF or its associates have not received any compensation from the subject company in the past twelve months.
                            TRADESURF or its associates have not managed or co‐managed public offering of securities for the subject company in the past twelve months or mandated by the subject company for any other assignment in the past twelve months.
                            TRADESURF or its associates have not received any compensation for brokerage services from the subject company in the past twelve months.
                        </p>

                        <p>
                            TRADESURF or its associates have not received any compensation for products or services other than investment banking or merchant banking or brokerage services from the subject company in the past twelve months. TRADESURF or its associates have not received any compensation or other benefits from the subject company or third party in connection with the research report.
                        </p>

                        <p>
                            TRADESURF encourages independence in research report preparation and strives to minimize conflict in preparation of research report. TRADESURF or its analysts did not receive any compensation or other benefits from the subject Company or third party in connection with the preparation of the research report. TRADESURF or its Research Analysts do not have any material conflict of interest at the time of publication of this report.
                            It is confirmed that Mr. Devendra Gosar Research Analyst of this report have not received any compensation from the companies mentioned in the report in the preceding twelve months.
                        </p>

                        <p>
                            Compensation of our Research Analysts is not based on any specific merchant banking, investment banking or brokerage service transactions. The Research analysts for this report certifies that all of the views expressed in this report accurately reflect his or her personal views about the subject company or companies and its or their securities, and no part of his or her compensation was, is or will be, directly or indirectly related to specific recommendations or views expressed in this report. The research analysts for this report has not served as an officer, director or employee of the subject company.
                        </p>

                        <p>
                            TRADESURF or its research analysts have not engaged in market making activity for the subject company Our sales people, traders, and other professionals or affiliates may provide oral or written market commentary or trading strategies to our clients that reflect opinions that are contrary to the opinions expressed herein, and our proprietary trading and investing businesses may make investment decisions that are inconsistent with the recommendations expressed herein. In reviewing these materials, you should be aware that any or all the foregoing, among other things, may give rise to real or potential conflicts of interest.
                        </p>

                        <p>
                            TRADESURF and its associates, their directors and employees may (a) from time to time, have a long or short position in, and buy or sell the securities of the subject company or (b) be engaged in any other transaction involving such securities and earn brokerage or other compensation or act as a market maker in the financial instruments of the subject company or act as an advisor or lender/borrower to the subject company or may have any other potential conflict of interests with respect to any recommendation and other related information and opinions.
                        </p>

                        <p>
                            TRADESURF does not claim to be an invitation or an offer to buy or sell any financial instrument. Our Clients (Paid Or Unpaid), Any third party or anyone else have no rights to forward or share our calls or SMS or Reports or Any Information Provided by us to/with anyone which is received directly or indirectly by them. If found so then Serious Legal Actions can be taken. By accessing www.fyntrix.ai or any of its associate/group sites, you have read, understood and agree to be legally bound by the terms of the following disclaimer and user agreement. The views and investment tips expressed by investment experts through sms or on www.fyntrix.ai are their own, and not that of the website or its management. www.fyntrix.ai advises users to check with certified experts before taking any investment decision.
                        </p>

                        <p>
                            Stock trading is inherently risky and you agree to assume complete and full responsibility for the outcomes of all trading decisions that you make, including but not limited to loss of capital. None of the stock trading calls made by www.fyntrix.ai should be construed as an offer to buy or sell securities, nor advice to do so. All comments and posts made by www.fyntrix.ai and employees/owners are for information purposes only and under no circumstances should be used for actual trading. Under no circumstances should any person at this site make trading decisions based solely on the information discussed herein. You agree to not make actual stock trades based on comments on the site, nor on any techniques presented nor discussed in this site or any other form of information presentation. All information is for educational and informational use only. You agree to consult with a registered investment advisor, prior to making any trading decision of any kind. You agree, by accessing this or any associated site, www.fyntrix.ai bears no liability for any postings on the website or actions of the associate site. We reserve the right to deny service to anyone. You, and not www.fyntrix.ai, assume the entire cost and risk of any trading you are suggested to undertake. You are solely responsible for making your own investment decisions. If you choose to engage in such transactions with or without seeking advice from a licensed and qualified financial advisor or entity, then such decisions and any consequences flowing therefrom are your sole responsibility. The information and commentaries are not meant to be an endorsement or offering of any stock purchase. They are meant to be a guide only, which must be tempered by the investment experience and independent decision-making process of the subscriber. www.fyntrix.ai or any employees are in no way liable for the use of the information by others in investing or trading in investment vehicles utilizing the principles disclosed herein. The materials and information in, and provided by, this site is not, and should not be construed as an offer to buy or sell any of the securities named in materials, services, or on-line postings.
                        </p>

                        <p>
                            We encourage all investors to use the information on the site as a resource only to further their own research on all featured companies, stocks, sectors, markets and information presented on the site.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
