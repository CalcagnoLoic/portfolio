import { InputFieldProps } from "@/app/definitions/definitions";

const Input = ({
  type,
  isTextArea,
  placeholder,
  inputCSS,
  name,
  value,
  onChange,
}: InputFieldProps) => (
  <>
    {isTextArea ? (
      <textarea
        cols={30}
        rows={4}
        placeholder="Message"
        className="rounded-md p-2 bg-secondary border"
        name="message"
        value={value}
        onChange={onChange}
      ></textarea>
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className={`${inputCSS} `}
        name={name}
        value={value}
        onChange={onChange}
      />
    )}
  </>
);

export default Input;
