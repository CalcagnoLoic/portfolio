import { Cards } from "../Cards";
import renderer from "react-test-renderer";

it("render correctly Cards components", () => {
    const componentsCards = renderer.create(<Cards />).toJSON();
    expect(componentsCards).toMatchSnapshot();
});
