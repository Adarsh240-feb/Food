import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeliveryDetails = ({ cart }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    area: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });
  const navigate = useNavigate();

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^\d.]/g, ""));
    return sum + price * item.qty;
  }, 0);
  const gst = +(subtotal * 0.12).toFixed(2);
  const deliveryFee = subtotal > 0 ? 30 : 0;
  const total = +(subtotal + gst + deliveryFee).toFixed(2);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 0", display: "flex", gap: "48px" }}>
      {/* Left: Delivery Details */}
      <div style={{ flex: 1 }}>
        <h1 style={{ color: "#ff8800", fontWeight: 800, fontSize: "2.5rem", marginBottom: "1.5rem" }}>
          Checkout
        </h1>
        <h2 style={{ fontWeight: 700, fontSize: "1.6rem", marginBottom: "1.5rem" }}>Delivery Details</h2>
        <form onSubmit={handlePlaceOrder}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="address"
            placeholder="Flat, House no., Building, Company, Apartment"
            value={form.address}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="area"
            placeholder="Area, Street, Sector, Village"
            value={form.area}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="landmark"
            placeholder="Landmark"
            value={form.landmark}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="city"
            placeholder="Town/City"
            value={form.city}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </form>
      </div>

      {/* Right: Order Summary */}
      <div style={{ flex: 1, maxWidth: "480px" }}>
        <h2 style={{ fontWeight: 700, fontSize: "1.6rem", marginBottom: "1.5rem" }}>Order Summary</h2>
        <div style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          padding: "32px",
          marginBottom: "32px"
        }}>
          {cart.map(item => (
            <div key={item.name} style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span>{item.name}</span>
              <span>₹{Number(item.price.replace(/[^\d.]/g, ""))} × {item.qty}</span>
            </div>
          ))}
          <hr style={{ margin: "16px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span>GST (12%)</span>
            <span>₹{gst.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span>Delivery</span>
            <span>₹{deliveryFee}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "1.2rem", marginTop: "18px" }}>
            <span>Total</span>
            <span style={{ color: "#ff8800" }}>₹{total.toFixed(2)}</span>
          </div>
          <button
            type="submit"
            onClick={handlePlaceOrder}
            style={{
              width: "100%",
              marginTop: "32px",
              background: "#ff8800",
              color: "#fff",
              border: "none",
              borderRadius: "32px",
              padding: "1rem 0",
              fontWeight: 600,
              fontSize: "1.3rem",
              cursor: "pointer"
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "18px",
  borderRadius: "8px",
  border: "1px solid #eee",
  fontSize: "1.1rem",
  fontWeight: 500,
  background: "#fafbfc",
  outline: "none"
};

export default DeliveryDetails;