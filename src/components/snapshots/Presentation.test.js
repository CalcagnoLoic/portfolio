import renderer from "react-test-renderer";
import Presention from "../Presentation";

it("render correctly Presentation component", () => {
    const componentPresentation = renderer.create(<Presention />).toJSON();
    expect(componentPresentation).toMatchSnapshot();
});
