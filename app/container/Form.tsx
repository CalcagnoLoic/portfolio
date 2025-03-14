"use client";

import { bellefair } from "../ui/fonts";
import { ErrorField } from "../definitions/definitions";
import { notify } from "../utils/toastMessage";
import { sendForm } from "@emailjs/browser";
import { ToastContainer, Zoom } from "react-toastify";
import { useState } from "react";
import { validateForm } from "../utils/validateForm";

import EmailField from "../ui/components/Input/EmailField";
import Field from "../ui/components/Input/Field";
import MessageField from "../ui/components/Input/MessageField";
import NameField from "../ui/components/Input/NameField";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isInvalidForm, setIsInvalidForm] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
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

    setIsSubmitting(true);

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
          setIsSubmitting(false);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      console.error("Missing environment variables for sending the form");
      notify("error");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={sendEmail} className="text my-5 flex w-full flex-col py-8">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <NameField
          state={name}
          setState={setName}
          isValid={!!error.NameEmpty}
          errorMessage={isInvalidForm ? error.NameEmpty : ""}
        />

        <EmailField
          state={email}
          setState={setEmail}
          isValid={!!error.EmailEmpty || !!error.EmailFormat}
          errorMessage={isInvalidForm ? error.EmailEmpty : ""}
          errorFormatField={isInvalidForm ? error.EmailFormat : ""}
        />
      </div>

      <div className="input-container">
        <MessageField
          state={message}
          setState={setMessage}
          isValid={!!error.MessageEmpty}
          errorMessage={isInvalidForm ? error.MessageEmpty : ""}
        />
      </div>

      <Field
        isTextArea={false}
        type="submit"
        value={isSubmitting ? "Envoie en cours..." : "Contactez moi 📧"}
        inputCSS={`button-form  text-accent text-center text-2xl bg-[linear-gradient(to_right,#FFCA74,#FFD798)] ${bellefair.className} ${isSubmitting ? "bg-gray-300" : "bg-accent-secondary hover:bg-[#FFCA96]"}`}
        isDisabled={isSubmitting}
      />

      <ToastContainer closeButton={true} transition={Zoom} />
    </form>
  );
};

export default Form;
