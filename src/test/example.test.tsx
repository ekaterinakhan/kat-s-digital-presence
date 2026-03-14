import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

import Index from "@/pages/Index";

describe("Index page", () => {
  it("renders the personal website homepage", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        name: /gtm and commercial operations leader scaling international tech companies/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/uk - france based/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /experience/i })).toBeInTheDocument();
  });
});
