import { FieldInput } from "@definitions/definitions";
import { handleChange } from "@utils/handleChange";

import Field from "@components/Input/Field/Field";
import Paragraph from "@typographies/Paragraph/Paragraph";

const Component = ({ state, setState, isValid, errorMessage }: FieldInput) => (
  <div className="input-container lg:w-1/2">
    <Field
      css="input-field"
      content="Nom"
      isLabel={true}
      isTextArea={false}
      type="text"
      placeholder="Nom"
      inputCSS="rounded-md border-2 p-2 w-full "
      name="name"
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
  </div>
);

export default Component;
