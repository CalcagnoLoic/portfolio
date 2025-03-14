import { FieldInput } from "@/app/definitions/definitions";
import { handleChange } from "@/app/utils/handleChange";

import Field from "./Field";

const MessageField = ({
  state,
  setState,
  isValid,
  errorMessage,
}: FieldInput) => (
  <>
    <Field
      inputCSS={`{isValid ? "border-[#FFCA74]" : "border-white"}`}
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
