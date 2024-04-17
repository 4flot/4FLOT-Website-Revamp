"use client";
import React, { useEffect, useState } from "react";

export default function AmountPicker({ onAmountChange }) {
  const [selectedAmount, setSelectedAmount] = useState(5.00); // Initialize with a float
  const [customAmount, setCustomAmount] = useState("");

  useEffect(() => {
    // Call the passed onAmountChange with the selected amount
    onAmountChange(selectedAmount);
  }, [selectedAmount, onAmountChange]);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Check if the value is "custom" to handle custom amount logic
    if (value === "custom") {
      // If custom, use the customAmount if it's a valid number, otherwise default to a float
      setSelectedAmount(customAmount ? parseFloat(customAmount) : 0.00);
    } else {
      // For predefined options, parse the value as float
      setSelectedAmount(parseFloat(value));
      // Reset custom amount if one of the predefined options is selected
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    // Update selected amount if it's a valid number, parse as float
    if (!isNaN(value) && value.trim() !== "") {
      setSelectedAmount(parseFloat(value));
    }
  };

  return (
    <fieldset className="p-4 rounded-lg shadow-md bg-white">
      <legend className="text-lg font-semibold mb-4">Select your donation amount:</legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[5.00, 20.00, 100.00].map((amount, index) => (
          <label key={index} className={`p-2 flex items-center gap-2 rounded-lg cursor-pointer ${selectedAmount === amount ? "bg-blue-100" : "hover:bg-gray-100"}`}>
            <input
              type="radio"
              value={amount}
              checked={selectedAmount === amount}
              onChange={handleAmountChange}
              className="radio"
              name="amount"
            />
            {/* Use toFixed(2) to display two decimal places */}
            <span className="text-lg">${amount.toFixed(2)}</span>
          </label>
        ))}
        <label className={`p-2 flex items-center gap-2 rounded-lg ${selectedAmount !== 5.00 && selectedAmount !== 20.00 && selectedAmount !== 100.00 ? "bg-blue-100" : "hover:bg-gray-100"}`}>
          <input
            type="radio"
            value="custom"
            checked={selectedAmount !== 5.00 && selectedAmount !== 20.00 && selectedAmount !== 100.00}
            onChange={handleAmountChange}
            className="radio"
            name="amount"
          />
          <span className="text-lg">Custom Amount:</span>
          <input
            type="number"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className="input input-bordered w-full max-w-xs"
            min="0"
            step="0.01" // Allow entering cents
          />
        </label>
      </div>
    </fieldset>
  );
}