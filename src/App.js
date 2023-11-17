import { useState } from 'react';
import './App.css';
import BarcodeScanner from './components/BarcodeScanner ';
import Form from './components/Form';
import Main from './components/Main';
import Home from './components/Home';

function App() {
  const [scannedCode, setScannedCode] = useState('');

  const handleBarcodeDetected = (code) => {
    setScannedCode(code);
  };

  return (
    <>
      <Home />
      {/* <Form /> */}
      {/* <Main /> */}
      {/* <div>
        <h1>Barcode Scanner App</h1>
        {scannedCode && <p>Scanned Code: {scannedCode}</p>}
        <BarcodeScanner onDetected={handleBarcodeDetected} />
      </div> */}
    </>
  );
}

export default App;
