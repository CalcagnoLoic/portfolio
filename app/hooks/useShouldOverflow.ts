import { useEffect } from "react";
import { UseShouldOverflowProps } from "../definitions/definitions";

export const useShouldOverflow = ({ state }: UseShouldOverflowProps) => {
  useEffect(() => {
    document.body.classList.toggle("no-scroll", state);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [state]);
};