import { Filter } from "@definitions/definitions";
import { filterOptionsData } from "@data/filterOptionsData";
import { handleSelectionLogic } from "@utils/handleFilters";
import { useCallback, useState } from "react";

import FilterDropdown from "@components/FilterDropdown/FilterDropdown";

const FilterOption = ({ selected, setSelected }: Filter) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen((prevState) => !prevState);

  const handleSelection = useCallback(
    (value: string) => {
      setSelected((prevValue) => handleSelectionLogic(prevValue, value));
    },
    [setSelected],
  );

  const handleDeselectAll = () => {
    setSelected(["all"]);
  };

  return (
    <div className="relative mt-8 w-full font-[bellefair]">
      <div className="flex justify-end">
        <div className="w-64">
          <button
            className="flex w-full items-center justify-between rounded-3xl bg-tuatara p-4 text-lg text-white shadow-lg"
            onClick={handleOpen}
          >
            {selected.includes("all")
              ? "Filtrez selon la stack:"
              : selected
                  .map(
                    (s) => filterOptionsData.find((o) => o.value === s)?.label,
                  )
                  .join(", ")}
          </button>

          {isOpen && (
            <FilterDropdown
              selected={selected}
              handleSelection={handleSelection}
              handleDeselectAll={handleDeselectAll}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
