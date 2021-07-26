import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AddressesEditPage } from "../addresses.edit.page";

configure({ adapter: new Adapter() });

jest.mock("../../../services/address.service", () => {
  return {
    getAddress: () => {
      return Promise.resolve({
        address: {
          AddressLine: "",
          SecondAddressLine: "",
          AddressType: "",
          City: "",
          PostalCode: "",
          State: "",
          Country: "",
        },
      });
    },
  };
});

describe("Test AddressesEditPage component", () => {
  test("Should render form", () => {
    const props = {
      match: {
        params: {},
      },
    };
    const page = shallow(<AddressesEditPage {...props} />);
    let node = page.find("h2");
    expect(node.length).toEqual(1);
  });
  test("Should render without address", () => {
    const props = {
      match: {
        params: {
          customerId: "123",
          addressId: "123",
        },
      },
    };
    const page = shallow(<AddressesEditPage {...props} />);
    let node = page.find("h2");
    expect(node.length).toEqual(1);
  });
});
