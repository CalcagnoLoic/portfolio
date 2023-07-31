import renderer from "react-test-renderer";
import Navbar from "../Navbar";

it("render correctly Navbar component", () => {
    const componentNavbar = renderer.create(<Navbar />).toJSON();
    expect(componentNavbar).toMatchSnapshot();
});
