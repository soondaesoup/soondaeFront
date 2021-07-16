import React from 'react';

const ItemCart = ({userItems}) => {
    return (
        <div style={{width: "50vw"}}>
            <h2>Item Cart</h2>
            <ul>
                {userItems.map((value,idx) =>
                    <li key={idx}>{value.title}{value.price}</li>
                )}
            </ul>
        </div>
    );
};

export default ItemCart;