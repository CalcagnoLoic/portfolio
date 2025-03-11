import { InputFieldProps } from "@/app/definitions/definitions";

const Input = ({
  type,
  isTextArea,
  placeholder,
  inputCSS,
  name,
  value,
  onChange,
  isDisabled = false,
}: InputFieldProps) => (
  <>
    {isTextArea ? (
      <textarea
        cols={30}
        rows={4}
        placeholder="Message"
        className={`${inputCSS} bg-secondary rounded-md p-2`}
        name="message"
        value={value}
        onChange={onChange}
      ></textarea>
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className={`${inputCSS}`}
        name={name}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      />
    )}
  </>
);

export default Input;
