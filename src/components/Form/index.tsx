import { sendForm } from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Component = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();

    sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_USER_ID,
    ).then(
      (result) => {
        Swal.fire({
          title: "Mail sent!",
          text: "Your message has been sent, I will reply as soon as possible! Thank you!",
          icon: "success",
          confirmButtonText: "Close",
        });

        if (form.current) form.current.reset();
      },
      (error) => {
        Swal.fire({
          title: "Error!",
          text: "Oops, there was a problem sending the email. Try again later or contact me directly at calcagnoloic93@gmail.com",
          icon: "error",
          confirmButtonText: "Close",
        });
      },
    );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="my-5 flex w-full flex-col py-8  text-tuatara lg:px-16 lg:pr-16"
    >
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <div className="mb-2 flex flex-col sm:mb-8 sm:gap-1">
          <label className="mb-1 font-semibold text-white">
            Name <span className="text-torchRed">*</span> :{" "}
          </label>
          <input
            type="text"
            placeholder="Name"
            required
            className="rounded-md border-2 p-2"
            name="name"
          />
        </div>
        <div className="mb-2 flex flex-col sm:mb-8 sm:gap-1">
          <label className="mb-1 font-semibold text-white">
            Email <span className="text-torchRed">*</span> :{" "}
          </label>
          <input
            type="email"
            required
            placeholder="Email"
            className="rounded-md border-2 p-2"
            name="reply_to"
          />
        </div>
      </div>

      <div className="mb-2 flex flex-col sm:mb-8 sm:gap-1">
        <label className="mb-1 font-semibold text-white">
          Message <span className="text-torchRed">*</span> :{" "}
        </label>
        <textarea
          cols={30}
          rows={4}
          required
          placeholder="Message"
          className="rounded-md border-2 p-2"
          name="message"
        ></textarea>
        <span className="text-red-element">* Required Fields</span>
      </div>
      <div className="grid place-content-center md:block">
        <input
          type="submit"
          value="Submit"
          className="mt-3 w-full cursor-pointer rounded-xl  bg-torchRed p-4 text-lg font-bold text-white duration-1000"
        />
      </div>
    </form>
  );
};

export default Component;
