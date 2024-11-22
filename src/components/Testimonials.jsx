import { useState, useEffect } from "react";
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";
import { IoArrowBackSharp, IoArrowForwardOutline } from "react-icons/io5";

const testimonials = [
    {
        role: "Head Manager, Skyline Systems",
        quote: "Automation has never been easier. EDTAA's only IAUTO have made our processes so much smoother and efficient.",
    },
    {
        role: "Department Manager, FusionCore",
        quote: "We've always struggled migrating to the cloud, but EDTAA's Migration team made it most 30-min clarity call only. It's been a game-changer for us all at FusionCore.",
    },
    {
        role: "IT Director, TechSphere Solutions",
        quote: "Before working with EDTAA, our digital processes were disjointed and time-consuming. Their automation solutions completely revolutionized how we operate, saving us countless hours and improving accuracy across the board. EDTAA has become an invaluable partner in our transformation journey!",
    },
];

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance for gesture detection (in px)
    const minSwipeDistance = 50;

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Touch handlers
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextTestimonial();
        } else if (isRightSwipe) {
            prevTestimonial();
        }
    };

    useEffect(() => {
        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                nextTestimonial();
            }, 5000);
        }
        return () => clearInterval(timer);
    }, [isPlaying]);

    return (
        <section className="bg-black py-12 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-center text-white font-semibold text-2xl md:text-3xl mb-8 md:mb-16">What our Customers say</h2>
                <div className="max-w-4xl mx-auto relative">
                    {/* Testimonials Slider with touch events */}
                    <div
                        className="relative h-[400px] sm:h-[300px] md:h-[250px]"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-500 transform px-2 md:px-0
                                    ${
                                        index === currentTestimonial
                                            ? "opacity-100 translate-x-0"
                                            : index < currentTestimonial
                                            ? "opacity-0 -translate-x-full"
                                            : "opacity-0 translate-x-full"
                                    }`}
                            >
                                <div className="space-y-4 md:space-y-6">
                                    <p className="text-base md:text-lg text-gray-300">{testimonial.role}</p>
                                    <p className="font-roboto-slab text-xl md:text-2xl lg:text-3xl text-white leading-relaxed">{testimonial.quote}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls - Reorganized for mobile */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:justify-between mt-8">
                        <div className="flex gap-x-4 order-2 sm:order-1">
                            <button
                                onClick={togglePlayPause}
                                className="bg-gray-600 hover:bg-gray-700 transition-colors flex justify-center items-center w-[35px] h-[35px]"
                            >
                                {isPlaying ? (
                                    <TbPlayerPauseFilled className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                ) : (
                                    <TbPlayerPlayFilled className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                )}
                            </button>
                            <div className="flex gap-x-2">
                                <button
                                    onClick={prevTestimonial}
                                    className="bg-gray-600 hover:bg-gray-700 transition-colors flex justify-center items-center w-[35px] h-[35px]"
                                >
                                    <IoArrowBackSharp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="bg-gray-600 hover:bg-gray-700 transition-colors flex justify-center items-center w-[35px] h-[35px]"
                                >
                                    <IoArrowForwardOutline className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex gap-x-3 order-1 sm:order-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 
                                        ${index === currentTestimonial ? "bg-white w-4" : "bg-gray-600 hover:bg-gray-500"}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
