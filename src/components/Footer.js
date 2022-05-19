import React from "react";

function Footer() {
  return (
    <div className="prosper">
      <div className="shop">
        <h2>SHOP FOR ME</h2>
      </div>
      <div classname="item-shop">
        <h3>Contact us</h3>
        <ul>
          <li>
            <a href="emailto:icewrldspace@gmail.com">
              email:icewrldspace@gmail.com
            </a>
            <br />
            <a href="tell:02572280722">Tell:0257228062</a>
          </li>
        </ul>
      </div>
      <div className="address">
        Address location:
        <p>
          c/o dobile low-cost
          <br />
          Post Office Box 1234,
          <br />
          Wa, Upper West Region,
          <br />
          Dobile-zindeli street
        </p>
      </div>
    </div>
  );
}

export default Footer;
