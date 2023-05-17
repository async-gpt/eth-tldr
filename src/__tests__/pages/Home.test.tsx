import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/pages";

describe("pages/index", () => {
  test("should render Home Page", () => {
    render(<Home />);
    expect(screen.getByText("Home Page")).toBeDefined();
  });
});
