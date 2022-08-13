import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

const fakeProducts = [
  {
    id: 1,
    title: "Yellow Pail",
    description: "On-demand sand castle construction expertise.",
    url: "#",
    votes: 12,
    submitterAvatarUrl: "images/avatars/daniel.jpg",
    productImageUrl: "images/products/image-aqua.png",
  },
  {
    id: 2,
    title: "Supermajority: The Fantasy Congress League",
    description: "Earn points when your favorite politicians pass legislation.",
    url: "#",
    votes: 13,
    submitterAvatarUrl: "images/avatars/kristy.png",
    productImageUrl: "images/products/image-rose.png",
  },
];

jest.mock("./seed", () => () => fakeProducts);

it("resorts products after upvoting changes vote ranking", () => {
  render(<App />);
  const voteElements = screen.getAllByRole(/vote-count/i);
  expect(voteElements[0]).toHaveTextContent("13");
  expect(voteElements[1]).toHaveTextContent("12");
  const upvoteButton = screen.getByAltText("arrow-icon-1");
  fireEvent.click(upvoteButton);
  fireEvent.click(upvoteButton);
  expect(voteElements[0]).toHaveTextContent("13");
  expect(voteElements[1]).toHaveTextContent("14");
});
