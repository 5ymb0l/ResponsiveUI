import React from "react";

const NewCard = () => {
  return (
    <div
      className="mainCard"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="left row">
        <img
          src="../images/shop.png"
          alt=""
          style={{
            height: "768px",
            width: "450px",
            // left: "0px",
            // top: "0px",
            borderRadius: "0px",
          }}
        />
      </div>

      <div className="right row">
        <div>
          <img src="../images/shopper.png" alt="" style={{}} />
        </div>
        <div>
          <h3> Track order by</h3>
        </div>
        <div>
          <form action="">
            <div className="flexSB">
              <div>
                <input type="radio" id="orderNo" name="track" value="orderNo" />
                <label for="orderNo"> Order Number</label>
                <input type="radio" id="mobileNO" name="track" value="mobileNO" />
                <label for="mobileNO"> Mobile Number</label>
                <input type="radio" id="awbNO" name="track" value="awbNO" />
                <label for="awbNO"> AWB Number</label>
              </div>
            </div>
            <div>
            <input type="text" placeholder="Enter a Order" />
            </div>
            <div>
            <button className="primary-btn"> Track Order</button>
            </div>
            </form>
            <div>
              <img src="../images/little.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
