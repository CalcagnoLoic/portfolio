import renderer from "react-test-renderer";
import Contact from "../Contact";

it("render correctly Contact component", () => {
    const componentContact = renderer.create(<Contact />).toJSON();
    expect(componentContact).toMatchSnapshot();
});
