import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        // console.log(data);
        const DataStruct = await data.json();
        // console.log(DataStruct.data[0].item);
        setItems(DataStruct.data);
    }
    return (
        <div >
            {items.map(item => (
                <h1 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>
                        {item.item.name}
                    </Link>                    
                </h1>
            ))}
        </div>
    );
}

export default Shop;
