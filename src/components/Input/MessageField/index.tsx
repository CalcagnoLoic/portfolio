import { FieldInput } from "../../../types/interface";
import { handleChange } from "../../../utils/handleChange";

import Field from "../Field";
import Paragraph from "../../../typographies/Paragraph";


const Component = ({ state, setState, isValid, errorMessage }: FieldInput) => (
  <>
    <Field
      css="input-field"
      content="Message :"
      isTextArea={true}
      isLabel={true}
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
  </>
);

export default Component;
