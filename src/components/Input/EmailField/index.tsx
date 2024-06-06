import { MailFormatField } from "../../../types/interface";
import Paragraph from "../../../typographies/Paragraph";
import { handleChange } from "../../../utils/handleChange";
import Field from "../Field";

const Component = ({
  state,
  setState,
  isValid,
  errorMessage,
  errorFormatField,
}: MailFormatField) => (
  <div className="input-container lg:w-1/2">
    <Field
      css="input-field"
      content="Email: "
      isLabel={true}
      isTextArea={false}
      type="email"
      placeholder="Email"
      inputCSS="rounded-md border-2 p-2 w-full"
      name="reply_to"
      value={state}
      onChange={(e) => handleChange({ e, callback: setState })}
    />
    {isValid && (
      <Paragraph
        kind="span"
        content={errorMessage}
        css="text-torchRed text-sm italic"
      />
    )}
    {isValid && (
      <Paragraph
        kind="span"
        content={errorFormatField}
        css="text-torchRed text-sm italic"
      />
    )}
  </div>
);

export default Component;
