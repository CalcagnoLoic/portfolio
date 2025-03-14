import { ErrorField, ValidateForm } from "../definitions/definitions";

export const validateForm = ({ name, email, message }: ValidateForm) => {
  let isValid = true;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors: ErrorField = {
    NameEmpty: "",
    EmailEmpty: "",
    EmailFormat: "",
    MessageEmpty: "",
  };

  if (!name || name.trim() === "") {
    errors.NameEmpty = "Le nom est requis";
    isValid = false;
  }

  if (!email || email.trim() === "") {
    errors.EmailEmpty = "L'email est requis";
    isValid = false;
  } else if (!re.test(email)) {
    errors.EmailFormat = "Mauvais format d'email";
    isValid = false;
  }

  if (!message || message.trim() === "") {
    errors.MessageEmpty = "Le message est requis";
    isValid = false;
  }

  return { isValid, errors };
};
