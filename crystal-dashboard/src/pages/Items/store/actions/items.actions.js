// ACTIONS
// Alternate way of writing actions
//export const getItem = (itemID) => {
//  return {
//    type = "GET ITEM",
//    payload = itemID
//  }
//}
export const getAllItems = () => ({
    type: "GET ALL ITEMS",
});
export const getAllItemsSuccess = (items) => ({
    type: "GET ALL ITEMS SUCCESS",
    payload: items
});
export const itemQueryFail = (error) => ({
    type: "ITEM QUERY FAIL",
    payload: error
});
export const getItem = (itemID) => ({
    type: "GET ITEM",
    payload: itemID
});

export const getItemSuccess = (item) => ({
    type: "GET ITEM SUCCESS",
    payload: item
});

export const getUserItems = (ownerID) => ({
    type: "GET USER ITEMS",
    payload: ownerID
});

export const addNewItem = (newItem) => ({
    type: "ADD NEW ITEM",
    payload: newItem
});

export const addNewItemSuccess = (newItemFromDb) => ({
    type: "ADD NEW ITEM SUCCESS",
    payload: newItemFromDb
});

export const updateItem = (item) => ({
    type: "UPDATE ITEM",
    payload: item
});

export const removeItem = (itemID) => ({
    type: "REMOVE ITEM",
    payload: itemID
});