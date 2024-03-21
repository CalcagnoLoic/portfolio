import { sendForm } from "@emailjs/browser";
import { useRef, useState } from "react";
import { validateForm } from "../../utils/validateForm";

import ErrorMessage from "../ErrorMessage";
import InputField from "../InputField";
import Paragraph from "../../typographies/Paragraph";
import Swal from "sweetalert2";

const Component = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const sendEmail: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!form.current) return;

    if (validateForm({ ref: form, callback: setIsError })) {
      sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_USER_ID,
      ).then(() => {
        Swal.fire({
          title: "Mail sent!",
          text: "Your message has been sent, I will reply as soon as possible! Thank you!",
          icon: "success",
          confirmButtonText: "Close",
        });

        if (form.current) form.current.reset();
        setIsError(false);
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Your message could not be sent. Please check that all fields have been filled in, try again later or contact me directly by e-mail. ",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="my-5 flex w-full flex-col py-8 text-tuatara"
    >
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <div className="input-container lg:w-1/2">
          <InputField
            css="input-field"
            content="Name: "
            isLabel={true}
            isTextArea={false}
            type="text"
            placeholder="Name"
            inputCSS="rounded-md border-2 p-2 w-full"
            name="name"
          />
          {isError && <ErrorMessage />}
        </div>

        <div className="input-container lg:w-1/2">
          <InputField
            css="input-field"
            content="Email: "
            isLabel={true}
            isTextArea={false}
            type="email"
            placeholder="Email"
            inputCSS="rounded-md border-2 p-2 w-full"
            name="reply_to"
          />
          {isError && <ErrorMessage />}
        </div>
      </div>

      <div className="input-container">
        <InputField
          css="input-field"
          content="Message :"
          isTextArea={true}
          isLabel={true}
        />
        {isError && <ErrorMessage />}

        <Paragraph
          kind="span"
          content="* Required Fields"
          css="text-torchRed text-sm italic"
        />
      </div>

      <InputField
        isLabel={false}
        isTextArea={false}
        type="submit"
        value="Submit"
        inputCSS="mt-3 w-full cursor-pointer rounded-xl bg-torchRed p-4 text-lg font-bold text-white duration-1000 hover:text-tuatara hover:bg-white"
      />
    </form>
  );
};

export default Component;
