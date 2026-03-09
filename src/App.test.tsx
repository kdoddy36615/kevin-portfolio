import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "./App";

function renderApp() {
  const { container } = render(<App />);
  return container;
}

describe("App", () => {
  it("renders the hero section with name and title", () => {
    renderApp();
    expect(screen.getAllByText("Kevin Doddy").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("Full-Stack Software Engineer").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders all collapsible section headers", () => {
    const container = renderApp();
    const buttons = container.querySelectorAll("button");
    const headerTexts = Array.from(buttons).map((b) => b.textContent?.trim());
    expect(headerTexts).toContain("Projects");
    expect(headerTexts).toContain("AI-Augmented Development");
    expect(headerTexts).toContain("Skills");
    expect(headerTexts).toContain("Experience");
  });

  it("renders project cards", () => {
    renderApp();
    expect(screen.getAllByText("GiftSync").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("MovePlanner").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("LinkedIn Pro 2026").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("BDO Hub").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders project demo and source links", () => {
    const container = renderApp();
    const links = container.querySelectorAll("a");
    const hrefs = Array.from(links).map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("https://trygiftsync.app");
    expect(hrefs).toContain("https://github.com/kdoddy36615/giftsync-portfolio");
    expect(hrefs).toContain("https://move-planner-demo.vercel.app");
    expect(hrefs).toContain("https://github.com/kdoddy36615/bdo-hub");
  });

  it("renders project links without target=_blank", () => {
    const container = renderApp();
    const demoLinks = Array.from(container.querySelectorAll("a")).filter(
      (a) =>
        a.textContent?.includes("Live Demo") ||
        a.textContent?.includes("Source")
    );
    demoLinks.forEach((link) => {
      expect(link).not.toHaveAttribute("target", "_blank");
    });
  });

  it("renders skill categories", () => {
    renderApp();
    expect(screen.getAllByText("Frontend").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Backend").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("AI / Automation").length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Dev Tools").length).toBeGreaterThanOrEqual(1);
  });

  it("renders experience entries with company logos", () => {
    renderApp();
    const ibmLogos = screen.getAllByAltText("IBM");
    expect(ibmLogos.length).toBeGreaterThanOrEqual(1);
    expect(ibmLogos[0]).toHaveAttribute("src", "/ibm_icon.png");
  });

  it("renders education entries with logos", () => {
    renderApp();
    const hrLogos = screen.getAllByAltText("Hack Reactor");
    const tuLogos = screen.getAllByAltText("Temple University");
    expect(hrLogos[0]).toHaveAttribute("src", "/hackereactor_icon.png");
    expect(tuLogos[0]).toHaveAttribute("src", "/temple_icon.png");
  });

  it("renders the resume download link pointing to PDF", () => {
    renderApp();
    const resumeLinks = screen.getAllByText("Download Full Resume");
    const anchor = resumeLinks[0].closest("a");
    expect(anchor).toHaveAttribute("href", "/Kevin_Doddy_Resume.pdf");
  });

  it("renders contact info", () => {
    renderApp();
    expect(
      screen.getAllByText("kevin36615@gmail.com").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("(484) 242-9904").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders the built with claude callout", () => {
    renderApp();
    expect(
      screen.getAllByText("Built with assistance from Claude").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders LinkedIn button in Experience section", () => {
    const container = renderApp();
    const experienceSection = Array.from(
      container.querySelectorAll("section")
    ).find((s) => s.textContent?.includes("Experience"));
    expect(experienceSection).toBeTruthy();
    const linkedInLinks = within(experienceSection!).getAllByText("LinkedIn");
    expect(linkedInLinks.length).toBeGreaterThanOrEqual(1);
    const anchor = linkedInLinks[0].closest("a");
    expect(anchor).toHaveAttribute("href", "https://linkedin.com/in/kevindoddy");
  });
});

describe("CollapsibleSection", () => {
  it("sections default to expanded", () => {
    const container = renderApp();
    const sectionButtons = container.querySelectorAll(
      "section button"
    );
    sectionButtons.forEach((btn) => {
      const contentWrapper = btn.nextElementSibling;
      expect(contentWrapper).toHaveClass("grid-rows-[1fr]");
    });
  });

  it("collapses when header is clicked", async () => {
    const user = userEvent.setup();
    const container = renderApp();

    const projectsButton = within(
      container.querySelector("section")!
    ).getByRole("button");

    await user.click(projectsButton);
    const contentWrapper = projectsButton.nextElementSibling;
    expect(contentWrapper).toHaveClass("grid-rows-[0fr]");
  });

  it("re-expands when clicked again", async () => {
    const user = userEvent.setup();
    const container = renderApp();

    const projectsButton = within(
      container.querySelector("section")!
    ).getByRole("button");
    const contentWrapper = projectsButton.nextElementSibling;

    await user.click(projectsButton);
    expect(contentWrapper).toHaveClass("grid-rows-[0fr]");

    await user.click(projectsButton);
    expect(contentWrapper).toHaveClass("grid-rows-[1fr]");
  });
});

describe("ExpandableAbout", () => {
  it("is collapsed by default", () => {
    renderApp();
    expect(
      screen.getAllByText("More about me").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("expands when clicked to show full bio", async () => {
    const user = userEvent.setup();
    renderApp();

    const moreButtons = screen.getAllByText("More about me");
    await user.click(moreButtons[0]);

    expect(
      screen.getAllByText("Less about me").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText(/9\+ years of experience/).length
    ).toBeGreaterThanOrEqual(1);
  });
});

describe("Accessibility", () => {
  it("all images have alt text", () => {
    const container = renderApp();
    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });

  it("collapsible section buttons have aria-expanded", () => {
    const container = renderApp();
    const sectionButtons = container.querySelectorAll("section > button");
    sectionButtons.forEach((btn) => {
      expect(btn).toHaveAttribute("aria-expanded", "true");
    });
  });

  it("collapsible section aria-expanded updates on toggle", async () => {
    const user = userEvent.setup();
    const container = renderApp();

    const projectsButton = within(
      container.querySelector("section")!
    ).getByRole("button");

    expect(projectsButton).toHaveAttribute("aria-expanded", "true");
    await user.click(projectsButton);
    expect(projectsButton).toHaveAttribute("aria-expanded", "false");
  });

  it("expandable about button has aria-expanded", async () => {
    const user = userEvent.setup();
    renderApp();

    const moreButton = screen.getAllByText("More about me")[0].closest("button");
    expect(moreButton).toHaveAttribute("aria-expanded", "false");

    await user.click(moreButton!);
    expect(moreButton).toHaveAttribute("aria-expanded", "true");
  });

  it("page has a main heading (h1)", () => {
    const container = renderApp();
    const h1 = container.querySelector("h1");
    expect(h1).toBeTruthy();
    expect(h1?.textContent).toContain("Kevin Doddy");
  });
});
