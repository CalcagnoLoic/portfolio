type validateProps = {
  ref: React.RefObject<HTMLFormElement>;
  callback: (newValue: boolean) => void;
};

export const validateForm = ({ ref, callback }: validateProps): boolean => {
  const nameField = ref.current?.elements[0] as HTMLInputElement;
  const emailField = ref.current?.elements[1] as HTMLInputElement;
  const messageField = ref.current?.elements[2] as HTMLInputElement;
  let isValid = true;

  if (!nameField || nameField.value.trim() === "") {
    callback(true);
    isValid = false;
  }

  if (!emailField || emailField.value.trim() === "") {
    callback(true);
    isValid = false;
  }

  if (
    !messageField ||
    messageField.value.trim() === "" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)
  ) {
    callback(true);
    isValid = false;
  }

  return isValid;
};
