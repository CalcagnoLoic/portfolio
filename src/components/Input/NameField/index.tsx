import { FieldInput } from "../../../types/interface";
import { handleChange } from "../../../utils/handleChange";

import Field from "../Field";
import Paragraph from "../../../typographies/Paragraph";

const Component = ({ state, setState, isValid, errorMessage }: FieldInput) => (
  <div className="input-container lg:w-1/2">
    <Field
      css="input-field"
      content="Name"
      isLabel={true}
      isTextArea={false}
      type="text"
      placeholder="Name"
      inputCSS="rounded-md border-2 p-2 w-full"
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
