import footerlogo from "../assets/logoo.png";
import headset from "../assets/headset.png";
import email from "../assets/email.png";
import chat from "../assets/chat.png";
import envelope from "../assets/envelope.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";

const FooterColumn = ({ title, links, className }) => (
    <div className={className}>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">{title}</h3>
        <ul className="space-y-3">
            {links.map((link, index) => (
                <li key={index}>
                    <a href="#" className={`text-gray-600 hover:text-gray-900 transition-colors ${link.underline ? "underline" : ""}`}>
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    const quickLinks = [
        { text: "Trust Center" },
        { text: "Find a Solution" },
        { text: "Industries" },
        { text: "Find a Partner" },
        { text: "Trials and Demos" },
        { text: "Find Services" },
    ];

    const trending = [
        { text: "IUTO" },
        { text: "What is GROW with EDTAA?" },
        { text: "Microsoft Co-Pilot" },
        { text: "Artificial Intelligence" },
        { text: "Sustainability" },
        { text: "Partner Ecosystem" },
    ];

    const about = [
        { text: "Company Information" },
        { text: "Worldwide Directory" },
        { text: "Investor Relations" },
        { text: "Careers" },
        { text: "News and Press" },
        { text: "Events" },
        { text: "Customer Stories" },
        { text: "Newsletters" },
    ];

    const siteInfo = [
        { text: "Privacy" },
        { text: "Terms of Use" },
        { text: "Legal Disclosure" },
        { text: "Copyright" },
        { text: "Trademark" },
        { text: "Sitemap" },
        { text: "Text View" },
        { text: "Cookie Preference" },
    ];

    return (
        <footer className="bg-white py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Company Info Column */}
                    <div className="lg:col-span-1">
                        <img src={footerlogo} alt="EDTAA Logo" className="h-12 w-auto object-contain mb-6" />

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <img src={headset} alt="Support" className="w-6 h-6 object-contain mt-1" />
                                <div>
                                    <p className="font-medium text-gray-900">Finland</p>
                                    <p className="text-gray-600">+358-40-123-4567</p>
                                    <p className="text-gray-600">
                                        or see our complete list of{" "}
                                        <a href="#" className="underline hover:text-gray-900 transition-colors">
                                            local country numbers
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                                <img src={email} alt="Email" className="w-6 h-6 object-contain" />
                                <span>Contact Us</span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-600">
                                <img src={chat} alt="Chat" className="w-6 h-6 object-contain" />
                                <span>Chat Unavailable</span>
                            </div>

                            {/* Social Media Links */}
                            <div className="flex items-center gap-6 pt-4">
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    <img src={facebook} alt="Facebook" className="w-2 h-auto" />
                                </a>
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    <img src={youtube} alt="YouTube" className="w-4 h-auto" />
                                </a>
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    <img src={linkedin} alt="LinkedIn" className="w-4 h-auto" />
                                </a>
                                <a href="#" className="hover:opacity-80 transition-opacity">
                                    <img src={envelope} alt="Newsletter" className="w-4 h-auto" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <FooterColumn title="Quick Links" links={quickLinks} className="lg:col-span-1" />

                    {/* Trending Column */}
                    <FooterColumn title="Trending" links={trending} className="lg:col-span-1" />

                    {/* About EDTAA Column */}
                    <FooterColumn title="About EDTAA" links={about} className="lg:col-span-1" />

                    {/* Site Information Column */}
                    <FooterColumn title="Site Information" links={siteInfo} className="lg:col-span-1" />
                </div>

                {/* Copyright Section - Optional */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} EDTAA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
