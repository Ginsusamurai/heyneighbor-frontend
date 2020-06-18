import * as ItemActions from "./actions/items.actions";
import * as ItemApiActions from "./effects/items.effects";

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