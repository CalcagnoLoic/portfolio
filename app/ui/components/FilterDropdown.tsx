"use client";

import { AnimatePresence } from "motion/react";
import { bellefair } from "../fonts";
import { Dropdown } from "../Motion/Dropdown";
import { DropdownOptions } from "@/app/definitions/definitions";
import { filterOptionsData } from "@/app/data/filterOptionsData";

import SkillsIcons from "../icons/SkillsIcons";

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
              className="h-5 w-4 accent-green-400"
              onChange={() => handleSelection(option.value)}
            />
            <span className="text-lg">{option.label}</span>

            <SkillsIcons
              kind={option.logo}
              isFilterIcons={true}
              bgLight={false}
            />
          </label>
        ))}

        <button
          className={`button bg-accent-secondary text-accent mx-auto mb-5 block w-5/6 bg-[linear-gradient(to_right,#FFCA74,#FFD798)] text-lg ${bellefair.className}`}
          onClick={handleDeselectAll}
        >
          Tout désélectionner
        </button>
      </Dropdown>
    </AnimatePresence>
  );
};

export default FilterDropdown;
