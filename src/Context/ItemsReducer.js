export const intialState = {
  Items: [],
  total: 0,
};

const ItemsInvoice = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_ITEM":
      return {
        ...state,
        Items: payload.Items,
      };
      case "REMOVE_TO_ITEM" :
        return {
          ...state,
          Items: payload.Items
        }
    default:
      throw new Error("Unknow Reducer");
  }
};

export default ItemsInvoice
