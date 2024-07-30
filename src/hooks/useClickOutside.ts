import { useClickOutsideProps } from "@definitions/definitions";
import { useEffect } from "react";

export const useClickOutside = ({ callback, ref }: useClickOutsideProps) => {
  const clickOutside = (e: MouseEvent) => {
    if (callback && ref.current && !ref.current.contains(e.target as Node)) {
      callback(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
