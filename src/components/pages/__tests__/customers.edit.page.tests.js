import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CustomersEditPage } from "../customers.edit.page";

configure({ adapter: new Adapter() });

describe("Test CustomersEditPage component", () => {
  test("Should render form", () => {
    const props = {
      match: {
        params: {},
      },
    };
    const page = shallow(<CustomersEditPage {...props} />);
    let node = page.find("h2");
    expect(node.length).toEqual(1);
  });
});
