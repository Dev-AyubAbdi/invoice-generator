import React, { useState } from "react";

export const Home = () => {
    const today = new Date().toISOString().split("T")[0];
    const [invoiceNumber, setInvoiceNumber] = useState(1)
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
             <input type="number" className=" outline-0 p-2 bg-gray-100 rounded-lg" value={invoiceNumber} onChange={(e)=> setInvoiceNumber(e.target.value)} />
           </div>
          </div>
          {/* hero section */}
          <div>
            <h2>Invoice</h2>
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
