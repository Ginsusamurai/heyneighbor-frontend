import { ItemActions, ItemApiActions } from "../../../reducers/item";

export const selectAllItems = (itemsState) => itemsState.items;
export const selectIsLoading = (itemsState) => itemsState.isLoading;
export const selectItemError = (itemsState) => itemsState.error;
// Selector when items is an array
export const selectItemInArray = (itemsState) => itemsState.items.find(item => item._id === itemsState.selectedItemId);

// Selector when items is an object
// export const selectItemInObject = (itemsState) => itemsState.items[itemsState.selectedItemId];

export {
    ItemActions,
    ItemApiActions
}