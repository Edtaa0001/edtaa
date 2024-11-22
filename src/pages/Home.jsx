import { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineArrowRight } from "react-icons/md";
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
// Import all images (keeping existing imports)
import gzi from "../assets/gzi.png";
import recruiters from "../assets/recruiters.png";
import onf from "../assets/ONF.jpg";
import dawn from "../assets/dawn.png";
import logo from "../assets/logoo.png";
import rewiring from "../assets/shakinghands.png";
import getintouch from "../assets/getintouch.jpg";
// Import components
import Footer from "../components/Footer";
import ResourceDropDown from "../components/ResourceDropDown";
import ContactForm from "../components/ContactForm";
import TestimonialsSection from "../components/Testimonials";
import { slides } from "../components/slides";
import { solutionCards } from "../components/solutionCards";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isResourceHovered, setIsResourceHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const resourceDropdownRef = useRef(null);

    // Common button style for consistency
    const commonButtonStyle = "bg-[#191970] hover:bg-[#4338CA] transition-colors text-white px-6 py-3 rounded-lg";

    const handleResourceMouseEnter = () => {
        setIsResourceHovered(true);
    };

    const handleResourceMouseLeave = () => {
        setIsResourceHovered(false);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                nextSlide();
            }, 3000);
        }
        return () => clearInterval(timer);
    }, [currentSlide, isPlaying]);

    return (
        <div className="min-h-screen font-poppins">
            {/* Mobile Header */}
            <header className="lg:hidden bg-white shadow-md p-4 fixed top-0 w-full z-50">
                <div className="flex justify-between items-center">
                    <img src={logo} alt="Logo" className="h-12 w-auto" />
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-blue-950 hover:text-blue-800 transition-colors">
                        <RxHamburgerMenu />
                    </button>
                </div>
                {menuOpen && (
                    <nav className="mt-4 bg-white absolute w-full left-0 shadow-lg animate-slideDown">
                        <div className="flex flex-col divide-y">
                            <a href="#" className="p-4 hover:bg-gray-50 transition-colors text-blue-950">
                                ABOUT US
                            </a>
                            <a href="#" className="p-4 hover:bg-gray-50 transition-colors text-blue-950">
                                SAP
                            </a>
                            <a href="#" className="p-4 hover:bg-gray-50 transition-colors text-blue-950">
                                MICROSOFT
                            </a>
                            <a href="#" className="p-4 hover:bg-gray-50 transition-colors text-blue-950">
                                RESOURCES
                            </a>
                            <a href="#" className="p-4 hover:bg-gray-50 transition-colors text-blue-950">
                                CAREER
                            </a>
                            <Link
                                to="contact-section"
                                smooth={true}
                                duration={500}
                                className="p-4 text-center bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </nav>
                )}
            </header>

            <main className="pt-16 lg:pt-0">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[80vh] lg:h-[90vh]">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {/* Desktop Navigation */}
                            <div className="hidden lg:block absolute inset-x-0 top-0 z-50 text-white">
                                <div className="container mx-auto px-6 py-4">
                                    <div className="flex justify-between items-center">
                                        <img src={logo} alt="Logo" className="h-24 w-auto" />
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-x-6 justify-end text-sm">
                                                <a href="#" className="hover:text-gray-200 transition-colors">
                                                    Careers
                                                </a>
                                                <span className="h-4 w-px bg-white/60"></span>
                                                <a href="#" className="hover:text-gray-200 transition-colors">
                                                    Contact Support
                                                </a>
                                                <span className="h-4 w-px bg-white/60"></span>
                                                <a href="#" className="hover:text-gray-200 transition-colors">
                                                    Remote Login
                                                </a>
                                                <Link to="contact-section" smooth={true} duration={500} className={commonButtonStyle}>
                                                    Contact Us
                                                </Link>
                                            </div>
                                            <div className="flex gap-x-8 text-sm font-medium">
                                                <NavItem text="ABOUT US" hasDropdown />
                                                <NavItem text="SAP" />
                                                <NavItem text="MICROSOFT" hasDropdown />
                                                <div
                                                    className="relative"
                                                    onMouseEnter={handleResourceMouseEnter}
                                                    onMouseLeave={handleResourceMouseLeave}
                                                    ref={resourceDropdownRef}
                                                >
                                                    <p className="flex items-center gap-x-2 cursor-pointer">
                                                        RESOURCES {isResourceHovered ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                    </p>
                                                    {isResourceHovered && (
                                                        <div className="absolute top-full left-0 p-4 shadow-md z-50">
                                                            <ResourceDropDown />
                                                        </div>
                                                    )}
                                                </div>
                                                <NavItem text="CAREER" hasDropdown />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Content */}
                            <div className="absolute inset-0 bg-black/50 flex items-center">
                                <div className="container mx-auto px-6">
                                    <div className="max-w-3xl space-y-6">
                                        <h1 className="font-roboto-slab text-3xl md:text-5xl lg:text-6xl text-white font-bold">{slide.title}</h1>
                                        {slide.subtitle && (
                                            <p className="text-xl md:text-3xl lg:text-4xl text-white font-semibold">{slide.subtitle}</p>
                                        )}
                                        <p className="text-lg md:text-xl text-white/90">{slide.text}</p>
                                        <button className={`${commonButtonStyle} flex items-center gap-x-2 w-48`}>
                                            Learn More
                                            <IoArrowForwardOutline className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Updated Slider Controls */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-x-6 z-50">
                        <button onClick={togglePlayPause} className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                            {isPlaying ? (
                                <TbPlayerPauseFilled className="w-6 h-6 text-white" />
                            ) : (
                                <TbPlayerPlayFilled className="w-6 h-6 text-white" />
                            )}
                        </button>
                        <div className="flex gap-x-3">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center gap-x-4 mb-12">
                            <div className="w-1 h-12 bg-blue-950"></div>
                            <h2 className="font-roboto-slab text-2xl md:text-3xl font-medium">Solutions built for you</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutionCards.map((card, index) => (
                                <SolutionCard key={index} {...card} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trusted Clients Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">Trusted support for our clients</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-x-24">
                            <img src={gzi} alt="GZI" className="h-16 object-contain" />
                            <img src={recruiters} alt="Recruiters" className="h-16 object-contain" />
                            <img src={onf} alt="ONF" className="h-16 object-contain" />
                            <img src={dawn} alt="Dawn" className="h-16 object-contain" />
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <TestimonialsSection />

                {/* AI Section */}
                <section className="bg-black py-16">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2 space-y-6">
                                <h2 className="text-white text-4xl md:text-5xl font-semibold">Rewiring and helping businesses with Intelligent AI</h2>
                                <p className="text-lg text-white/90">
                                    To innovate and compete, enterprises must strategically rewire the business for an AI-enabled future.
                                </p>
                                <button className={`${commonButtonStyle} flex items-center gap-x-2`}>
                                    Get details <MdOutlineArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="md:w-1/2">
                                <img src={rewiring} alt="AI Transformation" className="w-full max-w-2xl h-auto rounded-lg" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact-section" className="bg-gray-100 py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-blue-950 text-lg font-light">GET IN TOUCH</p>
                                    <h2 className="font-roboto-slab text-3xl md:text-4xl font-bold mt-2">
                                        We&apos;d{" "}
                                        <span className="relative inline-flex items-center">
                                            Love
                                            <svg
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[104px] h-[62px] sm:w-[124px] sm:h-[72px] pointer-events-none"
                                                viewBox="0 0 104 62"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M69.1288 5.70014C48.6573 -5.73423 25.231 1.4829 16.6215 7.00444C4.80204 14.5694 1.01812 21.6126 1.2307 31.6122C1.52831 45.6987 12.3274 55.0897 31.5446 59.3069C45.6174 62.3938 76.6541 62.5677 89.6852 55.6983C103.375 48.4812 111.857 30.6558 96.8704 13.0042C82.2449 -4.25603 38.1771 -2.73434 26.8891 6.87401"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeDasharray="24,24"
                                                    strokeLinecap="round"
                                                    strokeDashoffset="4"
                                                    className="text-primary"
                                                />
                                            </svg>
                                        </span>{" "}
                                        to Hear From You.
                                    </h2>
                                </div>
                                <p className="text-gray-700 text-lg">
                                    Have a question? Interested in partnering with us? Let&apos;s get the conversation started! Tell us a bit about
                                    how we can help below and we&apos;ll be in touch!
                                </p>
                                <ContactForm />
                            </div>
                            <div className="hidden lg:block">
                                <img
                                    src={getintouch}
                                    alt="Get in touch illustration"
                                    className="w-full max-w-2xl h-auto rounded-xl object-cover shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

// Helper Components
const NavItem = ({ text, hasDropdown }) => (
    <div className="relative group">
        <button className="flex items-center gap-x-1 hover:text-gray-200 transition-colors">
            {text}
            {hasDropdown && <IoIosArrowDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />}
        </button>
    </div>
);

const SolutionCard = ({ title, description, linkText }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
        <h3 className="font-roboto-slab text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-blue-500 flex items-center gap-x-2 hover:gap-x-3 transition-all">
            {linkText}
            <MdOutlineKeyboardArrowRight className="w-5 h-5" />
        </button>
    </div>
);

export default Home;
