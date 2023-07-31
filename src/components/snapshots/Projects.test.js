import renderer from "react-test-renderer";
import Projects from "../Projects";

it("render correctly Projects component", () => {
    const componentProjects = renderer.create(<Projects />).toJSON();
    expect(componentProjects).toMatchSnapshot();
});
