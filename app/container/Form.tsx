"use client";

import { useState } from "react";
import { ErrorField } from "../definitions/definitions";
import { validateForm } from "../utils/validateForm";
import { notify } from "../utils/toastMessage";
import Field from "../ui/components/Input/Field";
import EmailField from "../ui/components/Input/EmailField";
import MessageField from "../ui/components/Input/MessageField";
import NameField from "../ui/components/Input/NameField";
import { ToastContainer, Zoom } from "react-toastify";
import { sendForm } from "@emailjs/browser";
import { bellefair } from "../ui/fonts";

const Form = () => {
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
    name: name,
    email: email,
    message: message,
  });

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  const sendEmail: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;

    setIsInvalidForm(!isValidate.isValid);
    setError(isValidate.errors);

    if (!isValidate.isValid) {
      notify("missing");
      return;
    }

    if (serviceId && templateId && userId) {
      sendForm(serviceId, templateId, formElement, userId)
        .then(() => {
          setName("");
          setEmail("");
          setMessage("");
          notify("success");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          notify("error");
        });
    } else {
      console.error("Missing environment variables for sending the form");
      notify("error");
    }
  };

  return (
    <form onSubmit={sendEmail} className="my-5 flex w-full flex-col py-8 text">
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
      </div>

      <Field
        isTextArea={false}
        type="submit"
        value="Contactez moi 📧"
        inputCSS={`button bg-accent-secondary text-accent text-center text-2xl ${bellefair.className}`}
      />

      <ToastContainer closeButton={true} transition={Zoom} />
    </form>
  );
};

export default Form;
