import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ItemDetail({match}) {
    // useEffect(() => {
    //     fetchItem();
    // }, []);

    const [shopitem, setShopitem] = useState({
        
    });
    
    const data1 = {
        
        item: {name: "Marauder Heavy", description: "It's about to get heavy.", type: "outfit", rarity: "epic", series: null},
        itemId: "65bf6da1-ad88-4a0f-987f-52a360fff29b",
        images: {
            background: "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_npc_athena_commando_m_kyle/icon.png",
            featured: null,
            icon: "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_npc_athena_commando_m_kyle/icon.png",
            information: "https://dropin-bucket.mativecdn.com/cosmetics/br/cid_npc_athena_commando_m_kyle/icon.png"
        }
    }

    // const fetchItem = async () => {
    //     const itemUrl = `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`;
    //     const item = await fetch(itemUrl);
    //     const jsonItem = await item.json();

    //     setShopitem(jsonItem);
    //     console.log(match.params.id);
    //     console.log(jsonItem);
    //     console.log(shopitem.data);
    
    // }
    return (
        <div >
            <h1>item</h1>
            
            <p>{data1.item.name}</p> 
            <img src={data1.images.icon} alt="photo"/>
        </div>
    );
    
}

export default ItemDetail;
