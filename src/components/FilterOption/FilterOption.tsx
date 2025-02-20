const FilterOption = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (state: string) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <select
      name="filter-projects"
      id="filter-projects"
      className="mt-8"
      value={selected}
      onChange={handleChange}
    >
      <option value="all">All</option>
      <option value="astro-project">AstroJS</option>
      <option value="next-project">NextJS</option>
      <option value="react-project">React</option>
      <option value="react-native-project">React Native</option>
      <option value="typescript-project">Typescript</option>
    </select>
  );
};

export default FilterOption;
