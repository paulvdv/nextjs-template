import "@testing-library/jest-dom";
import { render, RenderResult, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button", () => {
  let tree: RenderResult;
  let clicked: Boolean;

  const text = "TESTButton";

  beforeEach(() => {
    clicked = false;
    tree = render(
      <Button
        text={text}
        onClick={() => {
          clicked = true;
        }}
      />,
    );
  });

  it("renders without changes", () => {
    expect(tree.container).toMatchSnapshot();
  });

  it("renders a button with prop text", () => {
    const button = screen.getByText(text);
    expect(button).toBeInTheDocument();
  });

  it("call the onClick callback when clicking the button", () => {
    const button = screen.getByText(text);

    button.click();

    expect(clicked).toBe(true);
  });
});
