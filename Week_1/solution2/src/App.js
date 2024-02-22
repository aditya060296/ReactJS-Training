import React, { useState } from 'react';

const App = () => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [itemList, setItemList] = useState([]);

    const addItem = () => {
        if (itemName && price && description) {
            const newItem = {
                id: Date.now(),
                itemName,
                price,
                description
            };
            setItemList([...itemList, newItem]);
            // Settibg fields to blank after an item is added
            setItemName('');
            setPrice('');
            setDescription('');
            
        } else {
            alert('Missing Required Data');
        }
    };

    const removeItem = (id) => {
        setItemList(itemList.filter(item => item.id !== id));
    };

    return (
        <div>
            <h1>Add Item</h1>
            <form onSubmit={(e) => { e.preventDefault(); addItem(); }}>
                <label htmlFor="itemName">Item Name:</label><br></br>
                <input
                    type="text"
                    id="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                /><br></br><br></br>
                <label htmlFor="price">Price:</label><br></br>
                <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                /><br></br><br></br>
                <label htmlFor="description">Description:</label><br></br>
                <input
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></input><br></br><br></br>
                <button type="submit">Add</button>
            </form>
            <h1>Item List</h1>
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemList.map((item, index) => (
                            <tr key={index}>
                                {Object.values(item).map((value, index) => (
                                    index !== 0 &&
                                    <td key={index}>{value}</td>
                                ))}
                                <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;
