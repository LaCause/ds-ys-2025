import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("has default styles", () => {
    render(<Button>Styled</Button>);
    const btn = screen.getByText("Styled");
    expect(btn).toHaveClass("bg-primary");
  });
});