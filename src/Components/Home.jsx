import React, { useState } from "react";

export const Home = () => {
  const today = new Date().toISOString().split("T")[0];
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [cashierName, setCashierName] = useState("");
  const [costomerName, setCustomerName] = useState("");
  return (
    <div className="max-w-7xl mx-auto pt-10">
      <div className="flex">
        {/* Right Side */}
        <div className="flex-1 bg-white rounded p-3">
          {/* Top section */}
          <div className="flex justify-between pb-2 border-b border-gray-200">
            <h2>Current Date: {today}</h2>
            <div className="flex items-center">
              <h3 className="pr-3">Invoice Number:</h3>
              <input
                type="number"
                className=" outline-0 p-2 bg-gray-100 rounded-lg"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>
          </div>
          {/* hero section */}
          <div>
            <h2 className="text-center font-bold">INVOICE</h2>
            <div className="flex justify-around">
              <div className="">
                <h2>Cashier:</h2>
                <input
                  type="text"
                  className="bg-gray-100 rounded p-2 w-130 outline-0 text-lg"
                  placeholder="Cashier Name"
                  value={cashierName}
                  onChange={(e) => setCashierName(e.target.value)}
                />
              </div>
              <div>
                <h2>Customer:</h2>
                <input
                  type="text"
                  className="bg-gray-100 rounded p-2 w-130 outline-0 text-lg"
                  placeholder="Customer Name"
                  value={costomerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Left side */}
        <div className="ml-3">
          <p>hello man</p>
        </div>
      </div>
    </div>
  );
};
