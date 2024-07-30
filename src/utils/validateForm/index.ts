import { ErrorField, ValidateForm } from "@definitions/definitions";

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
    errors.NameEmpty = "The field name is required";
    isValid = false;
  }

  if (!email || email.trim() === "") {
    errors.EmailEmpty = "The field email is required";
    isValid = false;
  } else if (!re.test(email)) {
    errors.EmailFormat = "Wrong format for password";
    isValid = false;
  }

  if (!message || message.trim() === "") {
    errors.MessageEmpty = "The field message is required";
    isValid = false;
  }

  return { isValid, errors };
};
