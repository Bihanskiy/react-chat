
export const getValueFromKey = (arr, id, key) => {
    for (const item of arr) {
        if (item.id === id) {
            return item[key];
        }
    }
}