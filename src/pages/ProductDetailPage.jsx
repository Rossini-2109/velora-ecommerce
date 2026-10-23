
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams();

  return (
    <main className="product-detail-page">
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>

      {/* Product image, rating, price, quantity and cart button */}
    </main>
  );
}

export default ProductDetailPage;
