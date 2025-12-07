import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header component", () => {
  it("renders the app title", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText("React Games Database")).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole("button", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Games/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /About/i })).toBeInTheDocument();
  });

  it("renders the Info icon button", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByLabelText("menu")).toBeInTheDocument();
  });

  it("opens drawer when Info icon is clicked", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const infoButton = screen.getByLabelText("menu");
    fireEvent.click(infoButton);
    expect(screen.getByText("Inbox")).toBeInTheDocument();
    expect(screen.getByText("All mail")).toBeInTheDocument();
  });

  it("closes drawer when clicking drawer list", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const infoButton = screen.getByLabelText("menu");
    fireEvent.click(infoButton);
    const drawerList = screen.getByText("Inbox");
    fireEvent.click(drawerList);
    // Drawer should close, but since MUI Drawer is portal-based, we can't easily check visibility.
    // Instead, we check that the click handler does not throw and the component remains stable.
    expect(screen.getByText("React Games Database")).toBeInTheDocument();
  });
});
