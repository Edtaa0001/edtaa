import React from "react";

const MenuSection = ({ title, items }) => (
    <div className="mb-8">
        <h3 className="font-bold text-lg text-white underline mb-3">{title}</h3>
        <ul className="space-y-3">
            {items.map((item, index) => (
                <li key={index}>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors underline text-md">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const ResourceDropDown = () => {
    const menuSections = [
        {
            title: "Industry",
            items: [
                "Charities",
                "Accountants",
                "Financial Services",
                "Healthcare",
                "Hospitality",
                "Logistics",
                "Pharma",
                "Solicitors",
                "Manufacturing",
            ],
        },
        {
            title: "Case Study",
            items: [
                "Industry Solutions",
                "Client Projects",
                "Transformation Journeys",
                "ROI Analysis",
                "Case Study Videos",
                "Customer Challenges",
                "Innovation Highlights",
                "Success",
                "Before and After",
            ],
        },
        {
            title: "White Papers",
            items: [
                "Industry Insights",
                "Technology Trends",
                "Best Practices",
                "Research Reports",
                "Technical Guides",
                "Regulatory Compliance",
                "Webinars",
                "Upcoming",
            ],
        },
        {
            title: "E-books",
            items: [
                "Comprehensive Guides",
                "Step-by-Step Tutorials",
                "Industry Analysis",
                "Success Blueprints",
                "Strategy Playbooks",
                "How-To Manuals",
                "Process Automation",
            ],
        },
        {
            title: "Blog & Media",
            items: ["Latest News", "Event Recaps", "Announcements", "Infographics", "Statistics", "Process Workflows", "Data Visualizations"],
        },
        {
            title: "Support",
            items: [
                "General Questions",
                "Billing and Payments",
                "Onboarding",
                "Press Releases",
                "Awards and Recognitions",
                "Partnership Announcements",
                "Media Coverage",
            ],
        },
    ];

    return (
        <div className="fixed inset-0 z-50 mt-[110px] overflow-y-auto bg-black/95 backdrop-blur-sm">
            <div className="min-h-[500px] w-full">
                {/* Header */}
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
                    <h2 className="text-2xl md:text-4xl font-semibold text-white underline mb-8 md:mb-12">Resources</h2>

                    {/* Mobile View - Accordion Style */}
                    <div className="block lg:hidden">
                        <div className="space-y-6">
                            {menuSections.map((section, index) => (
                                <details key={index} className="group">
                                    <summary className="flex justify-between items-center cursor-pointer text-white font-bold text-lg mb-2">
                                        {section.title}
                                        <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <ul className="pl-4 space-y-2 mt-2">
                                        {section.items.map((item, idx) => (
                                            <li key={idx}>
                                                <a href="#" className="text-white hover:text-gray-300 transition-colors underline text-md">
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            ))}
                        </div>
                    </div>

                    {/* Desktop View - Grid Layout */}
                    <div className="hidden lg:grid grid-cols-2 xl:grid-cols-6 gap-8 xl:gap-4">
                        {menuSections.map((section, index) => (
                            <MenuSection key={index} title={section.title} items={section.items} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceDropDown;
