import React from "react";
import prof from "../professionals.png";
import qr from "../qr.png";

const Home = () => {
  return (
    <>
      <div className="bigcont">
        <div className="container1">
          <div className="cont1item1">
            <img
              className="logoimg"
              src="https://i0.wp.com/made2automate.com/wp-content/uploads/2023/03/cropped-cropped-cropped-Untitled-design-2023-03-27T165416.581.png?fit=261%2C178&ssl=1"
              alt=""
            />
          </div>
          <hr />
          <div className="cont1item2">
            <div className="profitems">
              <img src={prof} alt="" className="proflogo" />
              <p>Peter Schnell</p>
            </div>
          </div>
          <hr />
        </div>
        <div className="container2">
          <nav className="navbar">
            <div className="navitem1">Admin Page</div>
            <div className="navitem2">
              <img src={qr} alt="" className="qrstyle" />
            </div>
          </nav>
          <div className="itemsgroup">
            <div className="item1">
              <div className="item">
                <h2>Total Orders</h2>
                <p className="orderno">100</p>
              </div>
            </div>
            <div className="item2">
              <div className="item">
                <h2>Current Orders</h2>
                <p className="orderno">32</p>
              </div>
            </div>
            <div className="item3">
              <div className="item">
                <h2>Completed Orders</h2>
                <p className="orderno">68</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
