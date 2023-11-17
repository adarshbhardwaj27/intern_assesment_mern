import React, { useEffect } from "react";
import Quagga from "quagga";

const BarcodeScanner = ({ onDetected }) => {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#barcode-scanner"),
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment", // or 'user' for front camera
          },
        },
        locator: {
          patchSize: "medium",
          halfSample: true,
        },
        numOfWorkers: 0,
        decoder: {
          readers: ["ean_reader", "upc_reader", "code_128_reader"],
        },
        locate: true,
      },
      (err) => {
        if (err) {
          console.error("Quagga initialization failed: ", err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      onDetected(data.codeResult.code);
      Quagga.stop();
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  return <div id="barcode-scanner"></div>;
};

export default BarcodeScanner;
