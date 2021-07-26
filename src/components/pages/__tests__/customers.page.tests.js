import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CustomersPage } from "../customers.page";

configure({ adapter: new Adapter() });

describe("Test CustomersPage component", () => {
  test("Should render form", () => {
    const props = {
      match: {
        params: {},
      },
    };
    const page = shallow(<CustomersPage {...props} />);
    let node = page.find("h2");
    expect(node.length).toEqual(1);
  });
});
