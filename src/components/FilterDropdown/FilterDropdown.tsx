import { filterOptionsData } from "@data/filterOptionsData";
import { DropdownOptions } from "@definitions/definitions";

import SkillsIcons from "@icons/SkillsIcons/SkillsIcons";

const FilterDropdown = ({ selected, handleSelection, handleDeselectAll }: DropdownOptions) => {
  return (
    <div className="filter-button absolute right-0 z-20 mt-2 flex w-64 flex-col rounded-3xl bg-tuatara text-white shadow-lg">
      {filterOptionsData.map((option) => (
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
          <SkillsIcons kind={option.logo} isFilterIcons={true} bgLight={false} />
        </label>
      ))}
      <button
        className="my-2 w-full text-center text-gallery"
        onClick={handleDeselectAll}
      >
        Tout désélectionner
      </button>
    </div>
  );
};

export default FilterDropdown;


