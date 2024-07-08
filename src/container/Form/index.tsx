import { ErrorField } from "../../types/interface";
import { notify } from "../../utils/toastMessage";
import { sendForm } from "@emailjs/browser";
import { ToastContainer, Zoom } from "react-toastify";
import { useState } from "react";
import { validateForm } from "../../utils/validateForm";

import EmailField from "../../components/Input/EmailField";
import Field from "../../components/Input/Field";
import MessageField from "../../components/Input/MessageField";
import NameField from "../../components/Input/NameField";

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
    name: name,
    email: email,
    message: message,
  });

  const sendEmail: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;

    setIsInvalidForm(!isValidate.isValid);
    setError(isValidate.errors);

    if (!isValidate.isValid) {
      notify("missing");
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
        notify("success");
      })
      .catch(() => {
        notify("error");
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
      </div>

      <Field
        isLabel={false}
        isTextArea={false}
        type="submit"
        value="Contact Me 📧"
        inputCSS="font-[bellefair] bg-torchRed px-10 py-3 text-2xl rounded-xl w-full text-center cursor-pointer hover:text-tuatara hover:bg-white duration-300 ease-in-out text-white"
      />

      <ToastContainer closeButton={false} transition={Zoom} />
    </form>
  );
};

export default Component;
