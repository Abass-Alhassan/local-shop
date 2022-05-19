import { useState } from "react";
import './additems.css'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


function AddItem() {
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <NavBar/>
      <div className="itemContainer">
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>
              Enter your name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="item">
            <label>
              Enter item:
              <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </label>
          </div>

          <div className="item">
            <label>
              Enter price in cedis:
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
          <div className="item">
            <label>
              Enter quantities of items needed:
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </label>
          </div>
          <div className="item">
            <label>
              Enter total amount in cedis:
              <input
                type="text"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
            </label>
          </div>
          <div className="item">
            <label>
              Enter your location address:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
          </div>
          <div className="item">
            <label>
              Enter your contact:
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </label>
          </div>

          <input type="submit" />
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default AddItem;
