import Paragraph from "../../typographies/Paragraph";

type InputFieldProps = {
  css?: string;
  content?: string;
  isLabel: boolean;
  type?: string;
  isTextArea: boolean;
  placeholder?: string;
  inputCSS?: string;
  name?: string;
  value?: string;
};

const Component = ({
  css,
  content,
  isLabel,
  type,
  isTextArea,
  placeholder,
  inputCSS,
  name,
  value,
}: InputFieldProps) => (
  <>
    {isLabel && (
      <label className={css}>
        {content} <Paragraph kind="span" content="*" css="text-torchRed" />{" "}
      </label>
    )}

    {isTextArea ? (
      <textarea
        cols={30}
        rows={4}
        placeholder="Message"
        className="rounded-md border-2 p-2"
        name="message"
      ></textarea>
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className={inputCSS}
        name={name}
        value={value}
      />
    )}
  </>
);

export default Component;
