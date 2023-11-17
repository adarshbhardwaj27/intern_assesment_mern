import React, { useState } from "react";
import Quagga from "quagga";

const Main = () => {
  const [detectedBarcode, setDetectedBarcode] = useState(null);

  const handleFile = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(file);
      Quagga.init(
        {
          inputStream: {
            name: "file",
            type: "FileStream",
          },
          // ... other configurations
        },
        function (err) {
          if (err) {
            console.error("Quagga initialization error:", err);
            return;
          }
          console.log("Quagga initialized successfully");
        }
      );
      Quagga.decodeSingle(
        {
          src: imgElement.src,
          numOfWorkers: 0,
          inputStream: {
            size: 800,
          },
          decoder: {
            readers: ["ean_reader", "code128_reader"],
          },
          locate: true,
        },
        (result) => {
          if (result && result.codeResult) {
            console.log("ho gya");
            setDetectedBarcode(result.codeResult.code);
          } else {
            alert("No barcode detected.");
          }
        }
      );
    }
  };

  return (
    <>
      <div>
        <h1>QuaggaJS Barcode Reader</h1>
        <input type="file" accept="image/*" onChange={handleFile} />
        <div>Detected Barcode: {detectedBarcode || "None"}</div>
      </div>
    </>
  );
};

export default Main;
