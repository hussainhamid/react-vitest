import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Profile from "../src/profile";

describe("renders text", () => {
  it("renders the h1 text", () => {
    render(<Profile />);
    expect(screen.getByText("hello from profile page!")).toBeInTheDocument();
  });
});
