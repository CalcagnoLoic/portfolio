import { useEffect } from "react";

type UseShouldOverflowProps = {
  state: boolean;
};

export const useShouldOverflow = ({ state }: UseShouldOverflowProps) => {
  const handleOverflow = (shoudOverflow: boolean): void => {
    document.body.classList.toggle("no-scroll", shoudOverflow);
  };

  useEffect(() => {
    state ? handleOverflow(true) : handleOverflow(false);

    return () => {
      handleOverflow(false);
    };
  }, [state]);
};
