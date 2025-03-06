import { handleMoreProjectType } from "@definitions/definitions";

export const handleMoreProject: handleMoreProjectType = (setState) => {
  setState((prevVisibleJobs: number) => prevVisibleJobs + 3);
};
