import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            // Send confirmation email to user
            await emailjs.send(
                "contact_us-form",
                "user-confirmation",
                {
                    to_email: data.email,
                    from_email: "edtaa001@gmail.com",
                    from_name: data.fullName,
                    user_email: data.email,
                    phone_number: data.phone,
                    message: data.message,
                    submission_date: new Date().toLocaleString(),
                    company_logo: "https://res.cloudinary.com/drc6omjqc/image/upload/v1732225335/logo2_phf0n5.png", // Add your logo URL
                },
                "3Mm_nXmdn_ubECxQw"
            );

            // Send notification email to business
            await emailjs.send(
                "contact_us-form",
                "business-notification", 
                {
                    from_name: data.fullName,
                    from_email: data.email,
                    phone_number: data.phone,
                    message: data.message,
                    to_email: "edtaa001@gmail.com",
                    submission_date: new Date().toLocaleString(),
                },
                "3Mm_nXmdn_ubECxQw" 
            );

            setSubmitStatus("success");
            reset();
        } catch (error) {
            console.error("Failed to send email:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = "bg-white rounded-md px-3 py-3 w-full mt-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200";
    const labelClasses = "block text-lg font-semibold";
    const errorClasses = "text-red-500 text-sm mt-1";

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
            {/* Full Name */}
            <div>
                <label className={labelClasses}>
                    Full Name <span className="text-red-600 text-2xl pl-2">*</span>
                </label>
                <input
                    {...register("fullName", {
                        required: "Full name is required",
                        minLength: { value: 2, message: "Name must be at least 2 characters" },
                    })}
                    className={inputClasses}
                    placeholder="Enter your full name"
                />
                {errors.fullName && <p className={errorClasses}>{errors.fullName.message}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                    <label className={labelClasses}>
                        Email <span className="text-red-600 text-2xl pl-2">*</span>
                    </label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        className={inputClasses}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                </div>

                {/* Phone Number */}
                <div>
                    <label className={labelClasses}>
                        Phone Number <span className="text-red-600 text-2xl pl-2">*</span>
                    </label>
                    <input
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^\+?[\d\s-]+$/,
                                message: "Invalid phone number",
                            },
                        })}
                        className={inputClasses}
                        placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
                </div>
            </div>

            {/* Message */}
            <div>
                <label className={labelClasses}>
                    Message <span className="text-red-600 text-2xl pl-2">*</span>
                </label>
                <textarea
                    {...register("message", {
                        required: "Message is required",
                        minLength: { value: 10, message: "Message must be at least 10 characters" },
                    })}
                    className={`${inputClasses} h-[150px] resize-none`}
                    placeholder="Enter your message"
                />
                {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-6 py-3 bg-[#191970] hover:bg-[#4338CA] transition-colors text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center">
                        <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        Sending...
                    </span>
                ) : (
                    "Send Message"
                )}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <p>Message sent successfully! We&apos;ll get back to you soon.</p>
                </div>
            )}
            {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <p>Failed to send message. Please try again.</p>
                </div>
            )}
        </form>
    );
};

export default ContactForm;