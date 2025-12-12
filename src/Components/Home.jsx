import React, { useState } from "react";
import { IoTrash } from "react-icons/io5";
import useItems from "../Context/ItemsContext";

export const Home = () => {
  const { addToItem, removeItems } = useItems();
  const today = new Date().toISOString().split("T")[0];
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [cashierName, setCashierName] = useState("");
  const [costomerName, setCustomerName] = useState("");
  const [items, setItems] = useState([
    {
      name: "",
      qty: 1,
      price: 1,
    },
  ]);

  const handleDelete = (index) => {
        removeItems(index)
  }

  const handleAdd = () => {
    const newItem = {
      name: "",
      qty: 1,
      price: 1,
    };
    setItems([...items, newItem]);
  };

  const handleUpdate = (index, key, value) => {
    const udapted = [...items];
    udapted[index][key] = value;
    setItems(udapted);
  };


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
                  className="bg-gray-100 rounded p-2 w-100 outline-0 text-lg"
                  placeholder="Cashier Name"
                  value={cashierName}
                  onChange={(e) => setCashierName(e.target.value)}
                />
              </div>
              <div>
                <h2>Customer:</h2>
                <input
                  type="text"
                  className="bg-gray-100 rounded p-2 w-100 outline-0 text-lg"
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
              {items.map((item, index) => (
                <div className="flex m-2 items-center">
                  <input
                    type="text"
                    className="bg-gray-200 p-2 flex-1 mr-4 outline-0 rounded-lg"
                    placeholder="Item Name"
                    value={item.name}
                    onChange={(e) => handleUpdate(index, "name", e.target.value)}
                  />
                  <input
                    type="number"
                    className="bg-gray-200 p-2 w-15 mr-1 ml-4 outline-0 rounded-lg "
                    value={item.qty}
                    onChange={(e)=> handleUpdate(index, 'qty', Number(e.target.value))}
                  />
                  <input
                    type="number"
                    className="bg-gray-200 p-2 w-20 mr-4 outline-0 rounded-lg"
                    value={item.price}
                    onChange={(e)=> handleUpdate(index, 'price', Number(e.target.value))}
                  />
                  <IoTrash onClick={()=> handleDelete(index)}
                    className="mr-2 bg-red-500 p-2 text-white rounded-lg cursor-pointer"
                    size={40}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => handleAdd()}
            className="bg-blue-500 ml-8 mt-5 p-2 rounded text-white cursor-pointer"
          >
            Add Item
          </button>

          <div className="flex justify-end">
            <div>
              <div className="border-b w-54">
                <div className="flex space-x-29">
                  <h2>Subtotal:</h2>
                  <span>$0.00</span>
                </div>
                <div className="flex space-x-20">
                  <h2>Discount:</h2>
                  <span>(0%)$0.00</span>
                </div>
                <div className="flex space-x-30">
                  <h2>Tax:</h2>
                  <span>(0%)$0.00</span>
                </div>
              </div>
              <div className="flex space-x-39">
                <h2 className="font-bold">Total:</h2>
                <span className="font-bold">$0</span>
              </div>
            </div>
          </div>
        </div>
        {/* Left side */}
        <div className="ml-3">
          <div className="border-b pb-3 border-gray-400">
            <h3
              onClick={() => alert("hello man")}
              className="bg-blue-500 w-70 text-center p-2 text-white rounded-lg cursor-pointer"
            >
              Review Invoice
            </h3>
          </div>
          <div>
            <h2>Tax rate:</h2>
            <div>
              <input
                type="Number"
                className="p-2 bg-gray-100 rounded-l-lg outline-0 w-60"
                placeholder="0.0"
              />
              <button className="bg-white p-2 w-10 rounded-r-lg">%</button>
            </div>
          </div>
          <div>
            <h2>Discount rate:</h2>
            <div>
              <input
                type="Number"
                className="p-2 bg-gray-100 rounded-l-lg outline-0 w-60"
                placeholder="0.0"
              />
              <button className="bg-white p-2 w-10 rounded-r-lg">%</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
