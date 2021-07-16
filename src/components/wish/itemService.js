import MainList from "../ui/MainList";
const ItemService = () => {
    const items =[
        {title: "바람막이", price: "500원"},
    ];

    let addFn;

    const getItems =() => {
        return items;
    }

    const setAddFn = (addItemToCart) => {
        console.log("setAddFn...", addItemToCart)
        addFn = addItemToCart
    }

    const getAddFn = () => {
        return addFn
    }

    return {getItems:getItems, setAddFn:setAddFn, getAddFn}
}

export default ItemService(); // 결과값이 안에있는 items가 나간다.