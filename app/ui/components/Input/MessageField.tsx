import { FieldInput } from "@/app/definitions/definitions";
import Field from "./Field";
import { handleChange } from "@/app/utils/handleChange";

const MessageField = ({
  state,
  setState,
  isValid,
  errorMessage,
}: FieldInput) => (
  <>
    <Field
      css="input-field"
      isTextArea={true}
      value={state}
      onChange={(e) => handleChange({ e, callback: setState })}
    />
    {isValid && (
      <p className="text-accent-secondary text-sm italic">{errorMessage}</p>
    )}
  </>
);

export default MessageField;
