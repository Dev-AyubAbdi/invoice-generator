import { createContext, useContext, useReducer } from "react";
import ItemsInvoice, { intialState } from "./ItemsReducer";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => { 
    const [state, dispatch] = useReducer( ItemsInvoice,intialState)

  const addToItem = (product) => {
    const addToProduct = state.Items.concat(product);

    dispatch({
      type: "ADD_TO_ITEM",
      payload: {
        Items: addToProduct,
      },
    });
  };

  const removeItems = (product) => {
    const update = state.Items.filter(item => item.id !== product.id)

    dispatch({
      type : "REMOVE_TO_ITEM",
      payload: {
        Items: update
      }
    })
  }

  const values = {
    Items: state.Items,
    total: state.total,
    addToItem,
    removeItems
  };

  return (
    <ItemsContext.Provider value={values}>{children}</ItemsContext.Provider>
  );
};

const useItems = () => {
  const context = useContext(ItemsContext);

  if (context === undefined) {
    console.log("use inside of context");
  } return context;
};

export default useItems;
