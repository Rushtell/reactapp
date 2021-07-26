import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Test App component", () => {
  test("Should render form", () => {
    const page = shallow(<App />);
    let node = page.find("p");
    expect(node.length).toEqual(1);
  });
});
