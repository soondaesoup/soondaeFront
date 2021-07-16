import React from 'react';
import itemService from "./itemService";

const ItemList = ({addItemToCart}) => {

    console.log(itemService.getItems());

    const ItemDetail = ({item}) => {
        return (
            <div>
                <h2>{item.title}</h2>
                <h3>{item.price}</h3>
                <div>
                    <button onClick={()=> {
                        addCart(item)
                    }}>Click!</button>
                </div>
            </div>
        )
    }

    const list = itemService.getItems().map((value, idx) =>
        <ItemDetail key={idx} item={value}></ItemDetail>
    )

    const addCart = (item) => {
        console.log("add cart...........", item);
        console.log(`add cart...${item}`);
        addItemToCart(item);
    }



    return (
        <div style={{width: "50vw"}}>
            <h2>Item List</h2>
            <ul style={{padding:"0"}}>{list}</ul>
        </div>
    );
};





export default ItemList