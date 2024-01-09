import { useState } from "react";
import { dataSkills } from "../data/dataSkills";
import { IconContext } from "react-icons";

export const CardsSkills = () => {
  // eslint-disable-next-line
  const [skills, setSkills] = useState(dataSkills);

  return skills.map(({ id, title, paragraph, icons, skills }) => (
    <div className="border-2 border-red-element rounded-3xl p-5" key={id}>
      <h2 className="text-center text-white text-xl lg:text-2xl pb-2">
        {title}
      </h2>
      <IconContext.Provider value={{ color: "white", size: "2em" }}>
        <div className="flex justify-center py-2">{icons}</div>
      </IconContext.Provider>

      <p className="text-center md:text-start text-white">{paragraph}</p>

      <div className="py-5 justify-center">{skills}</div>
    </div>
  ));
};
