"use client";

import { bellefair } from "../fonts";
import { Filter } from "@/app/definitions/definitions";
import { filterOptionsData } from "@/app/data/filterOptionsData";
import { handleSelectionLogic } from "@/app/utils/handleFilters";
import { useCallback, useState } from "react";

import FilterDropdown from "./FilterDropdown";

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
    <div className={`relative mt-8 w-full ${bellefair.className}`}>
      <div className="flex">
        <div className="w-64">
          <button
            className="bg-primary border-bg-cards text-primary flex w-full cursor-pointer items-center justify-between rounded-3xl border p-4 text-lg shadow-lg shadow-[#364351]"
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
              isOpen={isOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
