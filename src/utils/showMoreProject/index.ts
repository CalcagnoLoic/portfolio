type handleMoreProjectType = (
  setState: React.Dispatch<React.SetStateAction<number>>,
) => void;

export const handleMoreProject: handleMoreProjectType = (setState) => {
  setState((prevVisibleJobs: number) => prevVisibleJobs + 3);
};
