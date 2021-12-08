import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from "constants";
import React, {useState, useEffect, FormEventHandler, FormEvent, HTMLInputTypeAttribute} from "react";
import { item, size } from "../types";

function CreateItem() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [salePrice, setSalePrice] = useState("");
    const [sizes, setSizes] = useState<Array<size>>([{size: "", quantity: 0}]);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        let form_data = new FormData();
        form_data.append('name', name);
        form_data.append('description', description);
        form_data.append('price', price);
        form_data.append('sale_price', salePrice);

        sizes.map((size, index) => {
            form_data.append('sizes[' + index.toString() + ']size', size.size);
            form_data.append('sizes[' + index.toString() + ']quantity', size.quantity.toString());
        })

        const requestOptions = {
            method: 'POST',
            headers: {'Authorization': 'Token b9bdb7527cf0b1475684a480ef1e79e4a2eb0acc'},
            body: form_data
        };

        fetch('http://127.0.0.1:8000/api/items/add/', requestOptions)
        .then(response => response.json())
    }

    function handleFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (["size", "quantity"].includes(event.target.name)) {
            ([...sizes] as any) [parseInt(event.target.id)][event.target.name] = event.target.value;
            setSizes([...sizes]);
        }
    }

    function validateForm() {
        return name.length > 0 && description.length > 0 && price.length > 0 && sizes.every(size => size.size !== "" && size.quantity !== 0);
    }

    function addSize(event: React.FormEvent) {
        event.preventDefault();

        setSizes([...sizes, {size: "", quantity: 0}]);
    }

  return (
    <div className="CreateProductForm">
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name"></input>
            <br/>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></input>
            <br/>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price"></input>
            <br/>
            <input type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} placeholder="Sale Price"></input>
            <br/>
            {sizes.map((size, index) => {
                return(
                    <div key={index}>
                        <input type="text" id={index.toString()} placeholder="Size" name="size" value={size.size} onChange={handleFieldChange}/>
                        <input type="number" id={index.toString()} placeholder="Quantity" name="quantity" value={size.quantity} onChange={handleFieldChange}/>
                    </div>
                )
                })
            }
            <br/>
            <button type="button" onClick={addSize}>Add Size</button>
            <br/>
            <br/>
            <button type="submit" disabled={!validateForm()}>Add Product</button>
        </form>
    </div>
  );
}


export default CreateItem;
