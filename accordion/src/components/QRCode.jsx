import React, { useState } from "react";
import QRCode from "react-qr-code";

function QrCode() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="mb-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mx-2  w-50 h-10 outline-none p-1"
        />
        <button
          onClick={handleSubmit}
          disabled={input && input !== "" ? false : true}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode value={qrCode} size={300} />
      </div>
    </div>
  );
}

export default QrCode;
