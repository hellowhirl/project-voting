import { Product } from "../App";

type ProductProps = {
  product: Product;
  upvote: (id: number) => void;
};

export default function ProductListing({ product, upvote }: ProductProps) {
  return (
    <div className="product-listing">
      <div className="product-image">
        <img src={product.productImageUrl} />
      </div>
      <div className="product-details">
        <div className="votes-container">
          <img
            onClick={() => upvote(product.id)}
            alt={`arrow-icon-${product.id}`}
            src="./images/ui/arrow.png"
          />
          <div
            className="votes"
            role="vote-count"
            data-testid={`voteId-${product.id}`}
          >
            {product.votes}
          </div>
        </div>
        <a href={product.url}>
          <div className="title">{product.title}</div>
        </a>
        <div className="description">{product.description}</div>
        <div className="submitted-container">
          <p>Submitted by:</p>
          <div className="avatar-cropper">
            <img src={product.submitterAvatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
