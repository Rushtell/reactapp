import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NotesDeletePage } from "../notes.delete.page";
import {CustomersDeletePage} from "../customers.delete.page";

configure({ adapter: new Adapter() });

jest.mock("../../../services/note.service", () => {
  return {
    deleteNote: () => {
      return Promise.resolve({ n: 1, ok: 1, deletedCount: 1 });
    },
  };
});

describe("Test NotesDeletePage component", () => {
  test("Should render form", () => {
    const props = {
      match: {
        params: {},
      },
    };
    const page = shallow(<NotesDeletePage {...props} />);
    let node = page.find("h2");
    expect(node.length).toEqual(1);
  });
  test("Should delete click", async () => {
    const props = {
      match: {
        params: {},
      },
    };
    const page = new NotesDeletePage(props);
    await page.deleteClick();
  });
});
