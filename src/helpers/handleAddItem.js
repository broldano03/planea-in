export const handleAddItemHelper = (inputValue, addItem) => {
    if (inputValue.trim()) {
        addItem(inputValue)
    }
}
