import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CustomersDeletePage } from "../customers.delete.page";
import {AddressesDeletePage} from "../addresses.delete.page";

configure({ adapter: new Adapter() });

jest.mock("../../../services/customer.service", () => {
  return {
    deleteCustomer: () => {
      return Promise.resolve({ n: 1, ok: 1, deletedCount: 1 });
    },
  };
});

describe("Test CustomersDeletePage component", () => {
  test("Should render form", () => {
    const props = {
      match: {
        params: {},
      },
    };
    const page = shallow(<CustomersDeletePage {...props} />);
    let node = page.find("h2");
    expect(node.length).toEqual(1);
  });
  test("Should delete click", async () => {
    const props = {
      match: {
        params: {},
      },
    };
    const page = new CustomersDeletePage(props);
    await page.deleteClick();
  });
});
