import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { item } from "../types";

function Item() {

    const [item, setItem] = useState<item>({name: "", price: 0.00, sale_price: 0.00, id: 0, sizes: [], description: "" })

    const {id} = useParams<{id: string}>();

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        fetch('http://127.0.0.1:8000/api/items/' + id + '/', requestOptions)
        .then(response => response.json())
        .then(data => setItem(data.item));
    }, []);


  return (
    <div className="Item">
      <header className="Item-header">
        <h1>This is the Item Page</h1>
        <br/>
        <br/>
        <p> The item name is: {item.name} </p>
      </header>
    </div>
  );
}

export default Item;
