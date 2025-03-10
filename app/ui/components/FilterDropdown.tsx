"use client";

import { DropdownOptions } from "@/app/definitions/definitions";
import { filterOptionsData } from "@/app/data/filterOptionsData";

import SkillsIcons from "../icons/SkillsIcons";
import { motion } from "motion/react";

const FilterDropdown = ({
  selected,
  handleSelection,
  handleDeselectAll,
  isOpen,
}: DropdownOptions) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -10 }}
      animate={
        isOpen
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.8, y: -10 }
      }
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="filter-button bg-primary border-bg-cards text-primary absolute right-0 z-20 mt-2 flex w-64 flex-col rounded-3xl border shadow-lg"
    >
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
        className="button bg-accent text-primary hover:bg-hover mx-auto mb-5 block w-5/6"
        onClick={handleDeselectAll}
      >
        Tout désélectionner
      </button>
    </motion.div>
  );
};

export default FilterDropdown;
