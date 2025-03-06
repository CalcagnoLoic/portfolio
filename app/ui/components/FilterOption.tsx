"use client"

import { Filter } from "@/app/definitions/definitions";
import { filterOptionsData } from "@/app/data/filterOptionsData";
import { handleSelectionLogic } from "@/last/src/utils/handleFilters";
import { useCallback, useState } from "react";

import FilterDropdown from "./FilterDropdown";
import { bellefair } from "../fonts";

const FilterOption = ({ selected, setSelected }: Filter) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen((prevState) => !prevState);

  const handleSelection = useCallback(
    (value: string) => {
      setSelected((prevValue) => handleSelectionLogic(prevValue, value));
    },
    [setSelected]
  );

  const handleDeselectAll = () => {
    setSelected(["all"]);
  };

  return (
    <div className={`relative mt-8 w-full ${bellefair.className}`}>
      <div className="flex justify-end">
        <div className="w-64">
          <button
            className="flex w-full items-center justify-between rounded-3xl bg-primary border border-bg-cards p-4 text-lg text-primary shadow-lg cursor-pointer"
            onClick={handleOpen}
          >
            {selected.includes("all")
              ? "Filtrez selon la stack:"
              : selected
                  .map(
                    (s) => filterOptionsData.find((o) => o.value === s)?.label
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
