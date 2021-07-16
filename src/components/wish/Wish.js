import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import ItemCart from "./ItemCart";
import itemService from "./itemService";

const style = {
    display: "flex",
    flexDirection: "row",
}

const Wish = () => {

    const [userItems, setUserItems] = useState([]);

    const addItemToCart = (item) => {
        setUserItems([...userItems, item])
        //setUserItems([...userItems, item]) concat도 가능
    }

    useEffect(() => {
        itemService.setAddFn(addItemToCart);
    },[])

    return (
        <div>
            <div style={style}>
                <ItemList addItemToCart={addItemToCart}></ItemList>
                <ItemCart userItems={userItems}></ItemCart>
            </div>
        </div>
    );
};

export default Wish;