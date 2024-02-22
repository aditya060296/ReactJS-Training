import React, { useState } from 'react';

const App = () => {
    const [userName, setuserName] = useState('');
    const [userList, setUserList] = useState([]);

    const handleInputChange = (e) => {
        setuserName(e.target.value);
    };

    const handleAddUser = () => {
        if (userName.trim() !== '') {
            setUserList([...userList, userName]);
            setuserName('');
        }
    };

    return (
        <div>
            <h3>Hello World</h3>
            <div>
                <input type="text" value={userName} onChange={handleInputChange} />
                <button onClick={handleAddUser}>Add</button>
            </div>
            <div>
                <h3>User List</h3>
                <ul>
                    {userList.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
