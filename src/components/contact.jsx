import { useRef } from "react";
import { sendForm } from "emailjs-com";
import Swal from "sweetalert2";
import { TfiEmail } from "react-icons/tfi";
import { GrMapLocation } from "react-icons/gr";
import { IconContext } from "react-icons";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then(
            (result) => {
                Swal.fire({
                    title: "Mail sent!",
                    text: "Your message has been sent, I will reply as soon as possible! Thank you!",
                    icon: "success",
                    confirmButtonText: "Close",
                });
            },
            (error) => {
                Swal.fire({
                    title: "Error!",
                    text: "Oops, there was a problem sending the email. Try again later or contact me directly at calcagnoloic93@gmail.com",
                    icon: "error",
                    confirmButtonText: "Close",
                });
            }
        );

        e.preventDefault();
    };

    return (
        <section className="lg:py-10">
            <h2
                id="contact"
                className="text-center text-main-color pt-10 text-3xl lg:text-4xl font-bold font-[sofia] underline"
            >
                Get in touch
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center mx-2 sm:mx-5 lg:mx-10">
                <div className="self-center mx-10 md:pl-5 lg:mx-5 lg:pl-20">
                    <h2 className="text-center md:text-start pt-5 md:pt-0 text-main-color">
                        If you want more information about me or my work, don't
                        hesitate to contact me with this contact form or
                        directly on my email address.{" "}
                    </h2>
                    <h2 className="text-center md:text-start mb-10 text-main-color">
                        I will reply as soon as possible.
                    </h2>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 text-center justify-center md:text-start border-2 p-5 rounded-3xl bg-gray-100 border-white">
                            <IconContext.Provider value={{size:"1.25rem"}}>
                                <TfiEmail className="self-center" />
                            </IconContext.Provider>
                            
                            <p className="self-center text-main-color">
                                calcagnoloic93@gmail.com
                            </p>
                        </div>
                        <div className="flex gap-5 text-center justify-center md:text-start border-2 p-5 rounded-3xl bg-gray-100 border-white">
                            <IconContext.Provider value={{size:"1.25rem"}}>
                                <GrMapLocation className="self-center" />
                            </IconContext.Provider>
                            
                            <p className="self-center text-main-color">
                                Belgium, Hainaut, 7170 La Hestre
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <form
                        action=""
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col my-5 py-8 sm:px-5 lg:pr-16 lg:px-16"
                    >
                        <div className="flex flex-col lg:flex-row lg:gap-5">
                            <div className="flex flex-col sm:gap-1 sm:mb-8 mb-2">
                                <label className="mb-1 font-semibold text-main-color">
                                    Name{" "}
                                    <span className="text-red-element">*</span>{" "}
                                    :{" "}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    required
                                    className="rounded-md p-2 w-72 md:w-80 border-2"
                                    name="name"
                                />
                            </div>
                            <div className="flex flex-col sm:gap-1 sm:mb-8 mb-2">
                                <label className="mb-1 font-semibold text-main-color">
                                    Email{" "}
                                    <span className="text-red-element">*</span>{" "}
                                    :{" "}
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Email"
                                    className="rounded-md w-72 p-2 md:w-80 border-2"
                                    name="reply_to"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:gap-1 sm:mb-8 mb-2">
                            <label className="mb-1 font-semibold text-main-color">
                                Message{" "}
                                <span className="text-red-element">*</span> :{" "}
                            </label>
                            <textarea
                                cols="30"
                                rows="4"
                                required
                                placeholder="Message"
                                className="rounded-md w-72 p-2 md:w-80 lg:w-full border-2"
                                name="message"
                            ></textarea>
                            <span className="text-red-element">
                                * Required Fields
                            </span>
                        </div>
                        <div className="grid place-content-center md:block">
                            <input
                                type="submit"
                                value="Submit"
                                className="text-white font-bold p-4 hover:bg-red-element rounded-xl cursor-pointer hover:text-white bg-main-color duration-1000 text-lg mt-3 w-full md:w-1/2"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
