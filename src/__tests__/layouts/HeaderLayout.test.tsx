import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HeaderLayout from "@/layouts/HeaderLayout";

describe("layouts/HeaderLayout", () => {
  test("renders children", () => {
    render(<HeaderLayout>Test Content</HeaderLayout>);

    expect(screen.getByText("Test Content")).toBeDefined();
  });
});
