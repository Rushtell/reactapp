import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NotesEditPage } from "../notes.edit.page";

configure({ adapter: new Adapter() });

describe("Test NotesEditPage component", () => {
  test("Should render form", () => {
    const props = {
      match: {
        params: {},
      },
    };
    const page = shallow(<NotesEditPage {...props} />);
    let node = page.find("h2");
    expect(node.length).toEqual(1);
  });
});
