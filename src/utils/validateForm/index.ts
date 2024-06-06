import { ErrorField, ValidateForm } from "../../types/interface";

export const validateForm = ({
  field1,
  field2,
  field3,
}: ValidateForm) => {
  let isValid = true;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors: ErrorField = {
    NameEmpty: "",
    EmailEmpty: "",
    EmailFormat: "",
    MessageEmpty: "",
  };

  if (!field1 || field1.trim() === "") {
    errors.NameEmpty = "The field name is required";
    isValid = false;
  }

  if (!field2 || field2.trim() === "") {
    errors.EmailEmpty = "The field email is required";
    isValid = false;
  } else if (!re.test(field2)) {
    errors.EmailFormat = "Wrong format for password";
    isValid = false;
  }

  if (!field3 || field3.trim() === "") {
    errors.MessageEmpty = "The field message is required";
    isValid = false;
  }

  return { isValid, errors };
};
