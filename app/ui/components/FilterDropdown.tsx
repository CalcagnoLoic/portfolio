"use client";

import { DropdownOptions } from "@/app/definitions/definitions";
import { filterOptionsData } from "@/app/data/filterOptionsData";

import SkillsIcons from "../icons/SkillsIcons";
import { bellefair } from "../fonts";
import { Dropdown } from "../Motion/Dropdown";
import { AnimatePresence } from "motion/react";

const FilterDropdown = ({
  selected,
  handleSelection,
  handleDeselectAll,
  isOpen,
}: DropdownOptions) => {
  return (
    <AnimatePresence>
      <Dropdown key="dropdown" state={isOpen}>
        {filterOptionsData.map((option) => (
          <label
            key={option.label}
            className="flex cursor-pointer items-center gap-2 p-4"
          >
            <input
              type="checkbox"
              checked={selected.includes(option.value)}
              className="h-5 w-4 rounded-4xl accent-green-400"
              onChange={() => handleSelection(option.value)}
            />
            {option.label}
            <SkillsIcons
              kind={option.logo}
              isFilterIcons={true}
              bgLight={false}
            />
          </label>
        ))}

        <button
          className={`button bg-accent-secondary text-accent mx-auto mb-5 block w-5/6 text-lg bg-[linear-gradient(to_right,#FFCA74,#FFD798)] ${bellefair.className}`}
          onClick={handleDeselectAll}
        >
          Tout désélectionner
        </button>
      </Dropdown>
    </AnimatePresence>
  );
};

export default FilterDropdown;
