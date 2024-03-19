import { useEffect } from "react";

type useClickOutsideProps = {
  callback: (newValue: boolean) => void;
  ref: React.RefObject<HTMLDivElement>;
};

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
  }, []);
};
