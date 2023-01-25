const initialState = {
    items: [],
    totalAmount: 0,
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addItem':
            if (state.items.length === 0) {
                return {
                    ...state,
                    items: [...state.items, action.payload],
                    totalAmount: state.totalAmount + action.payload.price * action.payload.amount,
                };
            } else {
                const updatedTotalAmount =
                    state.totalAmount + action.payload.price * action.payload.amount;
                const existingCartItemIndex = state.items.findIndex(
                    (item) => item.id === action.payload.id
                );
                const existingCartItem = state.items[existingCartItemIndex];
                let updatedItems;
                if (existingCartItem) {
                    const updatedItem = {
                        ...existingCartItem,
                        amount: existingCartItem.amount + action.payload.amount,
                    };
                    updatedItems = [...state.items];
                    updatedItems[existingCartItemIndex] = updatedItem;
                } else {
                    updatedItems = state.items.concat(action.payload);
                }
                return {
                    ...state,
                    items: updatedItems,
                    totalAmount: updatedTotalAmount,
                };
            }

        case 'minusItem':
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.id
            );
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.id);
            } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };

        default:
            return { ...state };
    }

}


export default mealsReducer;