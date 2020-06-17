const initialState = {
    isLoading: false,
    selectedItemId: null, // will be a string
    error: null,
    items: []
    //items: [{
    //        type: "outdoor equipment",
    //        item: "pressure washer",
    //        _id: "0"
    //    },
    //    {
    //        type: "outdoor equipment",
    //        item: "pressure washer",
    //        _id: "1"
    //    },
    //    {
    //        type: "outdoor equipment",
    //        item: "pressure washer",
    //        _id: "2"
    //    }
    //],
    /**
     * items: {
     *      0: {type: "outdoor equipment", item: "pressure washer", _id: "0"},
     *      1: {type: "outdoor equipment", item: "pressure washer", _id: "1"},
     *      2: {type: "outdoor equipment", item: "pressure washer", _id: "2"}
     * }
     */
};


export default function reducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case "GET ALL ITEMS SUCCESS":

            // filter out items that already exist
            // const items = Object.entries([...state.items, ...payload].reduce((itemsAcc, item) => {
            //   if (!itemsAcc[item._id]) {
            //     return {...itemsAcc, [item._id]: item }
            //   } else {
            //   return itemsAcc
            // }
            // }, {}))
            return {
                ...state, items: [...payload], isLoading: false
            };
        case "ITEM QUERY FAIL":
            console.log(payload, "Error Message")
            return state;

            // Get a specific item with ITEMid
        case "GET ITEM":
            return {
                ...state, selectedItemId: payload
            }
            // Get specific items based on OWNERid
            case "GET USER ITEMS":
                return {
                    ...state,
                };
                // Create a new item
            case "ADD NEW ITEM":
                return {
                    ...state,
                };
                // Update an item
            case "UPDATE ITEM":
                return {
                    ...state,
                };
                // remove an item by ID
            case "REMOVE ITEM":
                return {
                    ...state,
                };
            default:
                return state;
    }
}