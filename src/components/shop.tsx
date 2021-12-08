import React, {useState, useEffect} from "react";
import { item } from "../types";

function Shop() {

    const [items, setItems] = useState<Array<item>>([])

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        fetch('http://127.0.0.1:8000/api/items/', requestOptions)
        .then(response => response.json())
        .then(data => setItems(data.items));
    }, []);


  return (
    <div className="Shop">
      <header className="Shop-header">
        <h1>This is the Shop Page</h1>
        <br/>
        {items.map(item =>
            <div>
                <h4 key={item.id}>{item.name}</h4>
                <br/>
                <h3>This item has {item.sizes.length} in its sizes array</h3>
            </div>
            
            )}
      </header>
    </div>
  );
}


export default Shop;
