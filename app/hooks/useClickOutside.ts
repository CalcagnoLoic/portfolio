import { useClickOutsideProps } from "../definitions/definitions";
import { useEffect, useCallback } from "react";

export const useClickOutside = ({ callback, ref }: useClickOutsideProps) => {
  const clickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(true);
      }
    },
    [callback, ref],
  );

  useEffect(() => {
    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [clickOutside]);
};
