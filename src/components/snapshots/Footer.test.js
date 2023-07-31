import renderer from "react-test-renderer";
import Footer from "../Footer";

it("render correctly Footer component", () => {
    const componentFooter = renderer.create(<Footer />).toJSON();
    expect(componentFooter).toMatchSnapshot();
});
