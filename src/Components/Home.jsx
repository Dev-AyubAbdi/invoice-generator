import React, { useState } from "react";
import { IoTrash } from "react-icons/io5";

export const Home = () => {
  const today = new Date().toISOString().split("T")[0];
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [cashierName, setCashierName] = useState("");
  const [costomerName, setCustomerName] = useState("");
  const [itemName, setItemName] = useState("");

  const Products = [
    {
        id: 1,
      Quantit: 1,
      Price: 1.0,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto pt-10">
      <div className="flex ">
        {/* Right Side */}
        <div className="flex-1 bg-white rounded  p-3">
          {/* Top section */}
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <h2 className="">Current Date: {today}</h2>
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
          <div className="mb-10">
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
          {/* Items sections */}
          <div>
            <div className="mt-4 flex  ml-8 border-b border-gray-200">
              <h2 className="flex-1 font-bold">ITEM</h2>
              <h2 className="mr-4 font-bold">QTY</h2>
              <h2 className="mr-4 font-bold">PRICE</h2>
              <h2 className="mr-4 font-bold">ACTION</h2>
            </div>
            <div className=" ml-8 pt-3">
              {Products.map((product) => (
                <div className="flex items-center" key={product.id}>
                  <input type="text" className="bg-gray-200 p-2 flex-1 mr-4 outline-0 rounded-lg" placeholder="Item Name" value={itemName} onChange={(e)=> setItemName(e.target.value)} />
                  <input type="number" className="bg-gray-200 p-2 w-15 mr-1 ml-4 outline-0 rounded-lg " value={product.Quantit}  />
                   <input type="number" className="bg-gray-200 p-2 w-20 mr-4 outline-0 rounded-lg" value={product.Price}  />
                  <IoTrash className="mr-2 bg-red-500 p-2 text-white rounded-lg cursor-pointer" size={40} />
                </div>
              ))}
            </div>
          </div>
          <button className="bg-blue-500 ml-8 mt-5 p-2 rounded text-white cursor-pointer">
            Add Item
          </button>

          <div></div>
        </div>
        {/* Left side */}
        <div className="ml-3">
          <p>hello man</p>
        </div>
      </div>
    </div>
  );
};
