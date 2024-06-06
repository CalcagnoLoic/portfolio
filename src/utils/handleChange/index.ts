import { HandleChange } from "../../types/interface";

export const handleChange = ({ e, callback }: HandleChange) => {
  callback(e.target.value);
};
