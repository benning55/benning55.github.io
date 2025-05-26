import React, { useState } from "react"
import {QRCodeCanvas} from "qrcode.react"

const App = () => {
  const [supplierPartNumber, setSupplierPartNumber] = useState("")
  const [quantity, setQuantity] = useState("")
  const [dateCode, setDateCode] = useState("")
  const [lotCode, setLotCode] = useState("")
  const [countryOfOrigin, setCountryOfOrigin] = useState("")
  const [barcodeData, setBarcodeData] = useState("")

  const handleGenerateBarcode = () => {
    const header = "[)>\u001e06\u001d"
    const trailer = "\u001e\u0004\r"
    const dataStream = [
      `P${supplierPartNumber}`, // Customer Part Number (optional)
      `1P${supplierPartNumber}`, // Supplier Part Number (required)
      `Q${quantity}`, // Quantity (required)
      dateCode ? `10D${dateCode}` : "10DN/T", // Date Code, 'N/T' if not traceable
      lotCode ? `1T${lotCode}` : "1TN/T", // Lot Code, 'N/T' if not traceable
      `4L${countryOfOrigin}`, // Country of Origin (required)
    ].join("\u001d") // Separate each field with Group Separator (ASCII 29)

    const formattedBarcode = `${header}${dataStream}${trailer}`
    setBarcodeData(formattedBarcode)
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Data Matrix ECC 200 Barcode Generator</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Supplier Part Number (1P): </label>
        <input
          type='text'
          value={supplierPartNumber}
          onChange={(e) => setSupplierPartNumber(e.target.value)}
          placeholder='Enter Supplier Part Number'
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>Quantity (Q): </label>
        <input
          type='number'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder='Enter Quantity'
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>Date Code (10D): </label>
        <input
          type='text'
          value={dateCode}
          onChange={(e) => setDateCode(e.target.value)}
          placeholder='Enter Date Code (e.g., YYWW or N/T)'
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>Lot Code (1T): </label>
        <input
          type='text'
          value={lotCode}
          onChange={(e) => setLotCode(e.target.value)}
          placeholder='Enter Lot Code or N/T'
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>Country of Origin (4L): </label>
        <input
          type='text'
          value={countryOfOrigin}
          onChange={(e) => setCountryOfOrigin(e.target.value)}
          placeholder='Enter Country Code (e.g., US)'
        />
      </div>

      <button
        onClick={handleGenerateBarcode}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Generate Barcode
      </button>

      {barcodeData && (
        <div style={{ marginTop: "30px" }}>
          <h2>Generated Barcode:</h2>
          <QRCodeCanvas value={barcodeData} size={256} />
          <p style={{ marginTop: "10px", wordWrap: "break-word" }}>
            {barcodeData}
          </p>
        </div>
      )}
    </div>
  )
}
export default App
