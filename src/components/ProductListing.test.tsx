import React from "react";
import { render, screen } from "@testing-library/react";
import ProductListing from "./ProductListing";
import renderer from "react-test-renderer";

const fakeProduct = {
  id: 1,
  title: "Yellow Pail",
  description: "On-demand sand castle construction expertise.",
  url: "#",
  votes: 12,
  submitterAvatarUrl: "images/avatars/daniel.jpg",
  productImageUrl: "images/products/image-aqua.png",
};

test("renders product name", () => {
  render(<ProductListing product={fakeProduct} upvote={() => {}} />);
  const titleElement = screen.getByText(/Yellow Pail/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders correct vote number", () => {
  render(<ProductListing product={fakeProduct} upvote={() => {}} />);
  const voteElement = screen.getByText(/12/i);
  expect(voteElement).toBeInTheDocument();
});

it("renders correctly", () => {
  const tree = renderer
    .create(<ProductListing product={fakeProduct} upvote={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
