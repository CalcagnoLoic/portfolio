import CONTACT from "../assets/img/contactme.png";
import { useRef } from "react";
import { sendForm } from "emailjs-com";
import Swal from "sweetalert2";

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
        <div className="pb-8 ">
            <h2
                id="contact"
                className="text-center text-dark-blue pt-10 text-3xl lg:text-4xl font-bold"
            >
                Contact
            </h2>
            <div className="mt-6 flex justify-center lg:gap-20">
                <div className="self-center hidden md:block lg:block">
                    <img src={CONTACT} alt="Contact form" />
                    <p className="italic text-dark-blue text-center text-sm">
                        <a href="https://www.freepik.com/free-vector/get-touch-concept-illustration_9000470.htm#page=5&query=contact%20me&position=5&from_view=search&track=ais">
                            Image by storyset
                        </a>{" "}
                        on Freepik
                    </p>
                </div>
                <div>
                    <form
                        action=""
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col my-5 bg-dark-blue py-8 px-6 md:py-10 md:px-20 rounded-xl shadow-slate-700/50 shadow-lg sm:px-20 md:mr-6 lg:mr-4"
                    >
                        <div className="flex flex-col sm:gap-1 sm:mb-8 mb-2">
                            <label className="text-white mb-1 font-semibold">
                                Name :{" "}
                            </label>
                            <input
                                type="text"
                                placeholder="Your name..."
                                required
                                className="rounded-md p-2 w-72 md:w-80 lg:w-96"
                                name="name"
                            />
                        </div>
                        <div className="flex flex-col sm:gap-1 sm:mb-8 mb-2">
                            <label className="text-white mb-1 font-semibold">
                                Email :{" "}
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="Your email address..."
                                className="rounded-md w-72 p-2 md:w-80 lg:w-96"
                                name="reply_to"
                            />
                        </div>
                        <div className="flex flex-col sm:gap-1 sm:mb-8 mb-2">
                            <label className="text-white mb-1 font-semibold">
                                Message :{" "}
                            </label>
                            <textarea
                                cols="30"
                                rows="4"
                                required
                                placeholder="Your message..."
                                className="rounded-md w-72 p-2 md:w-80 lg:w-96"
                                name="message"
                            ></textarea>
                        </div>
                        <input
                            type="submit"
                            value="Submit"
                            className="text-white font-bold p-4 bg-black rounded-xl cursor-pointer hover:bg-white hover:text-dark-blue duration-1000 text-lg mt-3"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
