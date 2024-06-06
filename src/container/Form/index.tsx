import { ErrorField } from "../../types/interface";
import { sendForm } from "@emailjs/browser";
import { useState } from "react";
import { validateForm } from "../../utils/validateForm";

import EmailField from "../../components/Input/EmailField";
import Field from "../../components/Input/Field";
import MessageField from "../../components/Input/MessageField";
import NameField from "../../components/Input/NameField";
import Paragraph from "../../typographies/Paragraph";
import Swal from "sweetalert2";

const Component = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isInvalidForm, setIsInvalidForm] = useState<boolean>(false);
  const [error, setError] = useState<ErrorField>({
    NameEmpty: "",
    EmailEmpty: "",
    EmailFormat: "",
    MessageEmpty: "",
  });

  const isValidate = validateForm({
    field1: name,
    field2: email,
    field3: message,
  });

  const sendEmail: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;

    setIsInvalidForm(!isValidate.isValid);
    setError(isValidate.errors);

    if (!isValidate.isValid) {
      Swal.fire({
        title: "Error!",
        text: "Your message could not be sent. Please check that all fields have been filled in.",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }

    sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formElement,
      import.meta.env.VITE_USER_ID,
    )
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        Swal.fire({
          title: "Mail sent!",
          text: "Your message has been sent, I will reply as soon as possible! Thank you!",
          icon: "success",
          confirmButtonText: "Close",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Oops, there are a problem with EmailJS server. Please try again or contact me directly by email.",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  return (
    <form
      onSubmit={sendEmail}
      className="my-5 flex w-full flex-col py-8 text-tuatara"
    >
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <NameField
          state={name}
          setState={setName}
          isValid={isInvalidForm}
          errorMessage={error.NameEmpty}
        />

        <EmailField
          state={email}
          setState={setEmail}
          isValid={isInvalidForm}
          errorMessage={error.EmailEmpty}
          errorFormatField={error.EmailFormat}
        />
      </div>

      <div className="input-container">
        <MessageField
          state={message}
          setState={setMessage}
          isValid={isInvalidForm}
          errorMessage={error.MessageEmpty}
        />
        <Paragraph
          kind="span"
          content="* Required Fields"
          css="text-torchRed text-sm italic"
        />
      </div>

      <Field
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
