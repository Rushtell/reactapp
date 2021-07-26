import { AddressesDeletePage } from "../addresses.delete.page";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// jest.mock("../../../services/address.service", () => {
//   return {
//     deleteAddress: jest.fn(() => {
//       return Promise.resolve();
//     }),
//   };
// });

jest.mock("../../../services/address.service", () => {
  return {
    deleteAddress: () => {
      return Promise.resolve({ n: 1, ok: 1, deletedCount: 1 });
    },
  };
});

describe("Test AddressesDeletePage component", () => {
  test("Should render form", () => {
    const props = {
      match: {
        params: {},
      },
    };
    const page = shallow(<AddressesDeletePage {...props} />);
    let node = page.find("h2");
    expect(node.length).toEqual(1);
  });
  test("Should delete click", async () => {
    const props = {
      match: {
        params: {},
      },
    };
    const page = new AddressesDeletePage(props);
    await page.deleteClick();
  });
});
