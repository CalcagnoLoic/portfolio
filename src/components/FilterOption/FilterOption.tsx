import { useState } from "react";

const FilterOption = ({
  selected,
  setSelected,
}: {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const options = [
    { value: "astro-project", label: "AstroJS", logo: "" },
    { value: "next-project", label: "NextJS", logo: "" },
    { value: "react-project", label: "React", logo: "" },
    { value: "react-native-project", label: "React Native", logo: "" },
    { value: "typescript-project", label: "Typescript", logo: "" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(!isOpen);

  const handleSelection = (value: string) => {
    setSelected((prev) => {
      if (prev.includes("all") && value !== "all") {
        return [value];
      }

      if (prev.includes(value)) {
        const newSelected = prev.filter((item) => item !== value);
        return newSelected.length === 0 ? ["all"] : newSelected;
      } else {
        return [...prev, value];
      }
    });
  };

  const handleDeselectAll = () => {
    setSelected(["all"]);
  };

  return (
<div className="relative w-full mt-8">
  <div className="flex justify-end">
    <div className="w-64">
      <button
        className="flex items-center justify-between rounded-3xl bg-tuatara p-4 text-white shadow-lg w-full"
        onClick={handleOpen}
      >
        {selected.length > 0
          ? selected.includes("all")
            ? "Filtrez selon la stack:"
            : selected
                .map((s) => options.find((o) => o.value === s)?.label)
                .join(", ")
          : "Filtrez selon la stack:"}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 flex w-64 flex-col bg-tuatara rounded-3xl shadow-lg text-white">
          {options.map((option) => (
            <label
              key={option.label}
              className="flex cursor-pointer items-center gap-2 p-4"
            >
              <input
                type="checkbox"
                checked={selected.includes(option.value)}
                className="accent-blue-400"
                onChange={() => handleSelection(option.value)}
              />
              {option.label}
            </label>
          ))}
          <button
            className="my-2 w-full text-center text-gallery"
            onClick={handleDeselectAll}
          >
            Tout désélectionner
          </button>
        </div>
      )}
    </div>
  </div>
</div>



  );
};

export default FilterOption;
