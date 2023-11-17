import React, { useRef, useState } from "react";
import JsBarcode from "jsbarcode";

const Form = () => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [cost, setCost] = useState();
  const [isBarcodeGenerated, setBarcodeGenerated] = useState(false);

  const barcodeRef = useRef(null);

  const convertToImage = () => {
    const svgXml = new XMLSerializer().serializeToString(barcodeRef.current);
    const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      svgXml
    )}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = dataUrl;
    downloadLink.download = "barcode.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const submithandler = (e) => {
    e.preventDefault();
    var data = {
      id: id,
      name: name,
      description: desc,
      cost: cost,
    };
    JsBarcode("#barcode", JSON.stringify(data), {
      format: "code128",
      width: 2,
      height: 100,
      displayValue: false,
    });
    setBarcodeGenerated(true);
    fetch("http://localhost:5000/api/prod", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
        description: desc,
        cost: cost,
      }),
    }).then(console.log("Succesfull"));
  };

  return (
    <>
      <div className="container">
        <form id="fetchdata" method="post" onSubmit={submithandler}>
          <div className="formfield">
            <label htmlFor="name" className="field">
              Product ID
            </label>
            <input
              type="text"
              className="prodname"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="formfield">
            <label htmlFor="name" className="field">
              Product Name
            </label>
            <input
              type="text"
              className="prodname"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formfield">
            <label htmlFor="name" className="field">
              Product Description
            </label>
            <input
              type="text"
              className="prodname"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="formfield">
            <label htmlFor="name" className="field">
              Product Cost
            </label>
            <input
              type="text"
              className="prodname"
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <svg id="barcode" ref={barcodeRef}></svg>
      {isBarcodeGenerated && (
        <button onClick={convertToImage} id="visi">
          Print Barcode
        </button>
      )}
    </>
  );
};
export default Form;
