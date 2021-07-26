import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MyComponent } from "../myComponent";

configure({ adapter: new Adapter() });

describe("Test MyComponent", () => {
  test("Should render form", () => {
    const props = {
      match: {
        params: {},
      },
    };
    const page = shallow(<MyComponent {...props} />);
    let node = page.find("h1");
    expect(node.length).toEqual(1);
  });
});
