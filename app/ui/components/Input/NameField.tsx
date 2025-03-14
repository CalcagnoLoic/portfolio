import { FieldInput } from "@/app/definitions/definitions";
import { handleChange } from "@/app/utils/handleChange";

import Field from "./Field";

const NameField = ({ state, setState, isValid, errorMessage }: FieldInput) => {
  return (
    <div className="input-container lg:w-1/2">
      <Field
        isTextArea={false}
        type="text"
        placeholder="Nom"
        inputCSS={`rounded-md p-2 w-full bg-secondary border ${isValid ? "border-[#FFCA74]" : "border-white"}`}
        name="name"
        value={state}
        onChange={(e) => handleChange({ e, callback: setState })}
      />
      {isValid && (
        <p className="text-accent-secondary text-sm italic">{errorMessage}</p>
      )}
    </div>
  );
};

export default NameField;
