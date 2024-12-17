import { HandleChange } from "@definitions/definitions";

export const handleChange = ({ e, callback }: HandleChange) => {
  callback(e.target.value);
};
