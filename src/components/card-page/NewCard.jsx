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

      <div className="right row" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <div>
          <img src="../images/shopper.png" alt="" style={{
            width : "156px",
            height: "41px"
          }} />
        </div>
        <div>
          <h3> Track order by</h3>
        </div>
        <div className="radio group" style={{
           
        }}>
          <form action="">
            <div className="flexSB">
             
                <input type="radio" id="orderNo" name="track" value="orderNo" />
                <label for="orderNo"> Order Number</label>
                <input type="radio" id="mobileNO" name="track" value="mobileNO" />
                <label for="mobileNO"> Mobile Number</label>
                <input type="radio" id="awbNO" name="track" value="awbNO" />
                <label for="awbNO"> AWB Number</label>
             
            </div>
            <div>
            <input type="text" placeholder="Enter a Order" />
            </div>
            <div>
            <button className="primary-btn"> Track Order</button>
            </div>
            </form>
            <div>
              <img src="../images/little.png" alt="" style={{
                height: "60px",
                width: "468px",
                left: "0px",
                top: "339px",
                borderRadius: "5px"
                
              }} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
