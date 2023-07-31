import { CardsSkills } from "../Cards_skills";
import renderer from "react-test-renderer";

it("render correctly Cards_skills components", () => {
    const componentsCardsSkills = renderer.create(<CardsSkills />).toJSON();
    expect(componentsCardsSkills).toMatchSnapshot();
});
