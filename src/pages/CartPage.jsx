
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>
      <p>Review your selected items before checkout.</p>

      <div className="empty-cart">
        <h2>Your cart is empty!</h2>
        <p>Looks like you haven't added anything yet.</p>

        <Link to="/">Continue Shopping</Link>
      </div>
    </main>
  );
}

export default CartPage;
