import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  // Razorpay payment handler
  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
      amount: totalPrice * 100, // in paise
      currency: "INR",
      name: "E-Cart",
      description: "Thank you for shopping with us",
      handler: function (response) {
        alert(
          "Payment Successful! Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "Your Name",
        email: "your_email@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#cc3333ff",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div className="col-md-4 mb-3" key={item.id}>
              <div className="card">
                {item.imgSrc && (
                  <img
                    src={item.imgSrc}
                    className="card-img-top"
                    alt={item.title || item.name}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{item.title || item.name}</h5>
                  <p>Category: {item.category}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity || 1}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-4">
          <h4>Total: ₹{totalPrice}</h4>
          <button className="btn btn-success" onClick={handlePayment}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

