import { MailFormatField } from "@/app/definitions/definitions";
import { handleChange } from "@/app/utils/handleChange";
import Field from "./Field";

const EmailField = ({
  state,
  setState,
  isValid,
  errorMessage,
  errorFormatField,
}: MailFormatField) => (
  <div className="input-container lg:w-1/2">
    <Field
      css="input-field"
      isTextArea={false}
      type="email"
      placeholder="Email"
      inputCSS="rounded-md p-2 w-full bg-secondary border"
      name="reply_to"
      value={state}
      onChange={(e) => handleChange({ e, callback: setState })}
    />
    {isValid && (
      <p className="text-accent-secondary text-sm italic">{errorMessage}</p>
    )}
    {isValid && (
      <p className="text-accent-secondary text-sm italic">{errorFormatField}</p>
    )}
  </div>
);

export default EmailField;
