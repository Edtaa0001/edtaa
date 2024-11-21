import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.jpg";
import gzi from "../assets/gzi.png";
import recruiters from "../assets/recruiters.png";
import onf from "../assets/ONF.jpg";
import dawn from "../assets/dawn.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Footer from "../components/Footer";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { IoArrowBackSharp, IoArrowForwardOutline } from "react-icons/io5";
import { GoDotFill, GoDot } from "react-icons/go";
import rewiring from "../assets/shakinghands.png";
import { MdOutlineArrowRight } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo.png";
import ResourceDropDown from "../components/ResourceDropDown";
import getintouch from "../assets/getintouch.jpg";
import ContactForm from "../components/ContactForm";

const slides = [
    {
        title: "EDTAA",
        subtitle: "Transforming the world's business",
        text: "Driving global growth through ours' only advanced technology and unparalleled expertise.",
        image: hero1,
        button: "About Us",
    },
    {
        title: "Supercharging with SAP",
        subtitle: "Elevate Your Efficiency and Innovate Faster with SAP Solutions",
        text: "Unlock the full potential of your business with SAP. Seamlessly streamline operations, boost productivity, and stay ahead of the competition. Experience the power of SAP today!",
        image: hero2,
        button: "Explore",
    },
    {
        title: "The Digital Powerhouse",
        subtitle: "Revolutionize Your Business Today",
        text: "Unlock unparalleled growth and efficiency with our leading-edge digital transformation solutions. Harness the power of AI, cloud, and automation to drive your business forward forward. Experience the future, now.",
        image: hero3,
        button: "Get Started",
    },
    {
        title: "Retail Revolution with AI from Chaos to Clarity - 30% Efficiency Boost!",
        // subtitle: "Elevate Your Efficiency and Innovate Faster with SAP Solutions",
        text: "Showing the world how we helped a major retailer transform their operations with AI. Imagine cutting inventory errors, speeding up supply chains, and making customer happier than ever. In just six months, they saw a 30% efficiency jump and a 25% sales surge!",
        image: hero4,
        button: "Explore Journey",
    },
    {
        title: "Become the E in EDTAA Join Us in Shaping the Future of Technology",
        // subtitle: "Revolutionize Your Business Today",
        text: "Embrace the opportunity to work with a team of innovators and visionaries. At our company, you'll drive impactful digital transformation projects, collaborate with top-tier professionals, and contribute to cutting-edge solutions that redefine industries. Your journey to making a difference starts here.",
        image: hero5,
        button: "Join Our Team",
    },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isResourceHovered, setIsResourceHovered] = useState(false);
    const resourceDropdownRef = useRef(null);

    const handleResourceMouseEnter = () => {
        setIsResourceHovered(true);
    };

    const handleResourceMouseLeave = () => {
        setIsResourceHovered(false);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer);
    }, [currentSlide]);

    return (
        <div className="h-[100vh]">
            <header className="bg-white shadow-md p-4 md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
                    <RxHamburgerMenu />
                </button>
                {menuOpen && (
                    <nav className="mt-4">
                        <a href="#" className="block py-2">
                            ABOUT US
                        </a>
                        <a href="#" className="block py-2">
                            SAP
                        </a>
                        <a href="#" className="block py-2">
                            MICROSOFT
                        </a>
                        <a href="#" className="block py-2">
                            RESOURCES
                        </a>
                        <a href="#" className="block py-2">
                            CAREER
                        </a>
                    </nav>
                )}
            </header>

            <main>
                <div className="relative h-[50vh] md:h-[90vh]">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                                index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="hidden md:block absolute inset-0 z-50 text-white mt-4">
                                <div className="flex justify-between px-[150px]">
                                    <img src={logo} className="object-contain" />

                                    <div>
                                        <div className="w-[570px]">
                                            <div className="flex items-center gap-x-2 justify-end">
                                                <p className="text-white">Careers</p>
                                                <p className="border-r-2 border-white w-2 h-4"></p>
                                                <p className="text-white">Contact Support</p>
                                                <p className="border-r-2 border-white w-2 h-4"></p>
                                                <p className="text-white">Remote Login</p>
                                                <button className="bg-blue-950 text-white px-3 py-1 rounded-md">Contact Us</button>
                                            </div>
                                            <div className="border-b border-white w-full mt-3"></div>
                                        </div>

                                        <div className="flex gap-x-9 mt-2">
                                            <p className="flex items-center gap-x-2">
                                                ABOUT US
                                                <IoIosArrowDown />
                                            </p>
                                            <p>SAP</p>
                                            <p className="flex items-center gap-x-2">
                                                MICROSOFT
                                                <IoIosArrowDown />
                                            </p>

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
                                                    <div className="absolute top-full left-0p-4 shadow-md z-50">
                                                        <ResourceDropDown />
                                                    </div>
                                                )}
                                            </div>

                                            <p className="flex items-center gap-x-2">
                                                CAREER
                                                <IoIosArrowDown />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-black bg-opacity-50 px-4 md:px-[150px] pt-16 md:pt-[170px] text-white">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 max-w-[800px]">
                                    {slide.title}
                                </h1>
                                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-3 md:mb-4 max-w-[800px]">
                                    {slide.subtitle}
                                </p>
                                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 max-w-[800px]">{slide.text}</h2>
                                <button className="bg-blue-950 w-[190px] font-medium rounded-lg flex items-center justify-center gap-x-2 text-white py-2 px-2 text-sm sm:text-base">
                                    {slide.button}
                                    <IoArrowForwardOutline size={20} color="white" />
                                </button>
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-50"
                    >
                        <FaChevronLeft size={10} className="text-2xl" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-50"
                    >
                        <FaChevronRight size={10} className="text-2xl" />
                    </button>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center z-50">
                        {slides.map((_, index) => (
                            <button key={index} onClick={() => goToSlide(index)} className="focus:outline-none">
                                {index === currentSlide ? (
                                    <GoDotFill size={20} color="white" />
                                ) : (
                                    <GoDot size={20} color="white" className="opacity-50 hover:opacity-100 transition-opacity" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="px-4 md:px-48">
                    <div className="flex gap-x-5 mt-24 items-center">
                        <div className="bg-black h-[50px] w-[5px]"></div>
                        <p className="font-medium text-xl">Solutions built for you</p>
                    </div>

                    <div className="grid md:grid-cols-2 mt-6 gap-x-9 gap-y-9">
                        <div className="shadow-xl rounded-xl px-5 py-9">
                            <p className="font-semibold text-xl">Strategy and Consulting</p>
                            <p className="mt-2">
                                Developing digital strategies aligned with business goals and managing change for smooth tech adoption.
                            </p>
                            <p className="text-blue-500 flex items-center mt-2">
                                Get started <MdOutlineKeyboardArrowRight size={22} />
                            </p>
                        </div>

                        <div className="shadow-xl rounded-xl px-5 py-9">
                            <p className="font-semibold text-xl">Cloud Services</p>
                            <p className="mt-2">
                                Developing digital strategies aligned with business goals and managing change for smooth tech adoption.
                            </p>
                            <p className="text-blue-500 flex items-center mt-2">
                                Explore Cloud <MdOutlineKeyboardArrowRight size={22} />
                            </p>
                        </div>

                        <div className="shadow-xl rounded-xl px-5 py-9">
                            <p className="font-semibold text-xl">Data and Analytics</p>
                            <p className="mt-2">
                                Developing digital strategies aligned with business goals and managing change for smooth tech adoption.
                            </p>
                            <p className="text-blue-500 flex items-center mt-2">
                                Get started <MdOutlineKeyboardArrowRight size={22} />
                            </p>
                        </div>

                        <div className="shadow-xl rounded-xl px-5 py-9">
                            <p className="font-semibold text-xl">Customer Experience</p>
                            <p className="mt-2">
                                Developing digital strategies aligned with business goals and managing change for smooth tech adoption.
                            </p>
                            <p className="text-blue-500 flex items-center mt-2">
                                Explore CX solutions <MdOutlineKeyboardArrowRight size={22} />
                            </p>
                        </div>

                        <div className="shadow-xl rounded-xl px-5 py-9">
                            <p className="font-semibold text-xl">Robotic Process Automation (RPA)</p>
                            <p className="mt-2">
                                Developing digital strategies aligned with business goals and managing change for smooth tech adoption.
                            </p>
                            <p className="text-blue-500 flex items-center mt-2">
                                Explore Our RPA <MdOutlineKeyboardArrowRight size={22} />
                            </p>
                        </div>

                        <div className="shadow-xl rounded-xl px-5 py-9">
                            <p className="font-semibold text-xl">Cybersecurity</p>
                            <p className="mt-2">
                                Developing digital strategies aligned with business goals and managing change for smooth tech adoption.
                            </p>
                            <p className="text-blue-500 flex items-center mt-2">
                                Get started <MdOutlineKeyboardArrowRight size={22} />
                            </p>
                        </div>

                        <div className="shadow-xl rounded-xl px-5 py-9">
                            <p className="font-semibold text-xl">Intelligent Automation</p>
                            <p className="mt-2">
                                Developing digital strategies aligned with business goals and managing change for smooth tech adoption.
                            </p>
                            <p className="text-blue-500 flex items-center mt-2">
                                Browse our IAUTO <MdOutlineKeyboardArrowRight size={22} />
                            </p>
                        </div>

                        <div className="shadow-xl rounded-xl px-5 py-9">
                            <p className="font-semibold text-xl">Business Process Management (BPM)</p>
                            <p className="mt-2">
                                Developing digital strategies aligned with business goals and managing change for smooth tech adoption.
                            </p>
                            <p className="text-blue-500 flex items-center mt-2">
                                Explore BPM <MdOutlineKeyboardArrowRight size={22} />
                            </p>
                        </div>
                    </div>

                    <p className="text-3xl md:text-5xl  font-semibold text-center mt-16 md:mt-24">Trusted support for our clients</p>

                    <div className="flex flex-col md:flex-row  justify-center gap-x-24 mt-9">
                        <img src={gzi} className="object-contain" />

                        <img src={recruiters} className="object-contain" />

                        <img src={onf} className="object-contain" />

                        <img src={dawn} className="object-contain" />
                    </div>

                    {/* what our customers say */}
                </div>

                <div className="bg-black py-8 md:py-12 px-4 md:px-6">
                    <p className="text-center text-white font-semibold text-3xl">What our Customers say</p>

                    <div className="flex flex-col md:flex-row justify-center mt-16 gap-x-0 md:gap-x-[150px] gap-y-4 md:gap-y-0">
                        <div>
                            <p className="text-white">Head Manager, Skyline Systems</p>
                            <p className="text-4xl text-white max-w-[600px]">
                                Automation has never been easier. EDTAA's only IAUTO have made our processes so much smoother and efficient.
                            </p>
                            <div className="bg-gray-600 flex justify-center items-center w-[35px] h-[35px] px-2 mt-16">
                                <TbPlayerPauseFilled size={25} color="white" />
                            </div>
                        </div>

                        <div>
                            <p className="text-white">Department Manager, FusionCore</p>
                            <p className="text-4xl text-white max-w-[600px]">
                                We've always struggled migrating to the cloud, but EDTAA's Migration team made it most 30-min clarity call only. It's
                                been a game-changer for us all at FusionCore.
                            </p>
                            <div className="flex gap-x-2 pt-12">
                                <div className="bg-gray-600 flex justify-center items-center w-[35px] h-[35px] px-2">
                                    <IoArrowBackSharp size={25} color="white" />
                                </div>

                                <div className="bg-gray-600 flex justify-center items-center w-[35px] h-[35px] px-2">
                                    <IoArrowForwardOutline size={25} color="white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black">
                    <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center items-center">
                        <div className="px-9">
                            <p className="text-white text-5xl font-semibold max-w-[500px]">Rewiring and helping businesses with Intelligent AI</p>
                            <p className="text-lg text-white max-w-[550px] mt-9">
                                To innovate and compete, enterprises must strategically rewire the business for an AI-enabled future.
                            </p>
                            <button className="bg-blue-900 text-white flex justify-center items-center px-4 py-1 mt-12 rounded-2xl">
                                Get details <MdOutlineArrowRight size={25} color="white" />
                            </button>
                        </div>

                        <img src={rewiring} className="w-[800px] h-[500px]" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center lg:gap-x-24 px-4 md:px-8 lg:px-24 bg-gray-200 py-8 lg:py-16">
                    <div className="w-full lg:w-auto">
                        <p className="font-thin text-xl text-[#191970]">GET IN TOUCH</p>
                        <p className="font-bold text-2xl md:text-3xl lg:text-4xl pt-4">We'd love to hear from you</p>

                        <p className="pt-4 max-w-[570px] text-base md:text-lg lg:text-xl">
                            Have a question? Interested in partnering with us? Let's get the conversation started! Tell us a bit about how we can help
                            below and we'll be in touch!
                        </p>

                        {/* New Contact Form Component */}
                        <ContactForm />
                    </div>

                    <div className="hidden lg:block">
                        <img
                            src={getintouch}
                            alt="Get in touch illustration"
                            className="w-[600px] h-[700px] rounded-xl object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </main>
            <div className="pb-12"></div>
            <Footer />
        </div>
    );
};

export default Home;
