import renderer from "react-test-renderer";
import App from "../App";

it("render correctly App component", () => {
    const componentApp = renderer.create(<App />).toJSON();
    expect(componentApp).toMatchSnapshot();
});
