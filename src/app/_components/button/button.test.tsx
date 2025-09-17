import { Button } from "./button";
import { render, screen } from "@testing-library/react";

describe("Button Component", () => {
  test("renders a default button", () => {
    const { getByText } = render(
      <Button className={""} variant={"neutral"}>
        Click Here
      </Button>
    );
    expect(getByText("Click Here")).toBeInTheDocument();
  });

  test("disables the button when isDisabled prop is true", () => {
    render(<Button isDisabled>Click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("applies the correct css class for different button variants", () => {
    const { rerender } = render(<Button variant="primary">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });
});
