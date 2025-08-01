import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, removeFromCart, updateQty }) => {
  const navigate = useNavigate();

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^\d.]/g, ""));
    return sum + price * item.qty;
  }, 0);
  const gst = +(subtotal * 0.12).toFixed(2);
  const deliveryFee = subtotal > 0 ? 30 : 0;
  const total = +(subtotal + gst + deliveryFee).toFixed(2);

  const handleCheckout = () => {
    navigate("/delivery");
  };

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 0" }}>
      <h1 style={{ fontSize: "2.3rem", fontWeight: 800, color: "#ff8800", marginBottom: "2.5rem" }}>
        <span role="img" aria-label="cart" style={{ marginRight: "12px" }}>🛒</span>
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <div style={{ fontSize: "1.3rem", color: "#888", marginTop: "48px" }}>
          Your cart is empty.
        </div>
      ) : (
        <>
          <div style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            padding: "32px",
            marginBottom: "32px"
          }}>
            {cart.map(item => (
              <div key={item.name} style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #eee",
                paddingBottom: "24px",
                marginBottom: "24px"
              }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginRight: "24px"
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "6px" }}>
                    {item.name}
                  </div>
                  <div style={{ color: "#888", fontSize: "1rem", marginBottom: "6px" }}>
                    {item.price}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <button
                      style={{
                        background: "#eee",
                        border: "none",
                        borderRadius: "6px",
                        width: "38px",
                        height: "38px",
                        fontSize: "1.3rem",
                        cursor: "pointer"
                      }}
                      onClick={() => updateQty(item.name, item.qty - 1)}
                      disabled={item.qty <= 1}
                    >-</button>
                    <span style={{ fontSize: "1.2rem", minWidth: "24px", textAlign: "center" }}>{item.qty}</span>
                    <button
                      style={{
                        background: "#eee",
                        border: "none",
                        borderRadius: "6px",
                        width: "38px",
                        height: "38px",
                        fontSize: "1.3rem",
                        cursor: "pointer"
                      }}
                      onClick={() => updateQty(item.name, item.qty + 1)}
                    >+</button>
                    <button
                      style={{
                        background: "#ffdddd",
                        color: "#d00",
                        border: "none",
                        borderRadius: "6px",
                        padding: "8px 18px",
                        marginLeft: "18px",
                        fontWeight: 500,
                        cursor: "pointer"
                      }}
                      onClick={() => removeFromCart(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div style={{
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "#222",
                  minWidth: "90px",
                  textAlign: "right"
                }}>
                  ₹{(Number(item.price.replace(/[^\d.]/g, "")) * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Billing Section */}
          <div style={{
            float: "right",
            marginTop: "32px",
            marginRight: "40px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            padding: "32px",
            minWidth: "320px"
          }}>
            <div style={{ fontSize: "1.1rem", marginBottom: "12px", textAlign: "right" }}>
              Subtotal: <span style={{ fontWeight: 500 }}>₹{subtotal.toFixed(2)}</span>
            </div>
            <div style={{ fontSize: "1.1rem", marginBottom: "12px", textAlign: "right" }}>
              GST (12%): <span style={{ fontWeight: 500 }}>₹{gst.toFixed(2)}</span>
            </div>
            <div style={{ fontSize: "1.1rem", marginBottom: "12px", textAlign: "right" }}>
              Delivery Fee: <span style={{ fontWeight: 500 }}>₹{deliveryFee.toFixed(2)}</span>
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, margin: "18px 0 24px 0", textAlign: "right" }}>
              Total: <span style={{ color: "#ff8800" }}>₹{total.toFixed(2)}</span>
            </div>
            <button
              style={{
                background: "#ff8800",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "0.8rem 1.6rem",
                fontWeight: 600,
                fontSize: "1.1rem",
                cursor: "pointer",
                float: "right"
              }}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;