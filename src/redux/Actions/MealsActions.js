export const addItem = (item) => {
    return {
        type: "addItem",
        payload: item,
    }
};
export const minusItem = (id) => {
    return {
        type: "minusItem",
        id: id,
    }
}; 