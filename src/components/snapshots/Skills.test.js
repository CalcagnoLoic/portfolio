import renderer from "react-test-renderer";
import Skills from "../Skills";

it("render correctly Skills component", () => {
    const componentSkills = renderer.create(<Skills />).toJSON();
    expect(componentSkills).toMatchSnapshot();
});
