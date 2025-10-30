import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Lewis`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});


test("displays an image of myself with correct alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/lewis/i); // or whatever alt text you use
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.stringContaining(".jpg"));
});
test("displays a link to my GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("github.com")
  );
});

test("displays a link to my LinkedIn page", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("linkedin.com")
  );
});

// Your tests here
