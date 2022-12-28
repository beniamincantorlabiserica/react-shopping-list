import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Pizza"
        },
        {
            id: 2,
            checked: true,
            item: "Coca Cola"
        },
        {
            id: 3,
            checked: false,
            item: "Bread"
        }
    ]);


    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
        setItems(listItems);
        localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    }

  return (
    <main>
       <ul>
            {items.map((item) => (
                <li className='item' key={item.id}>
                    <input
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                    />
                    <label
                        style={(item.checked) ? {textDecoration: "line-through"} : null}
                    >{item.item}</label>
                    <FaTrashAlt role="button" tabIndex="0" onClick={() => handleDelete(item.id)}/>
                </li>
            ))}
       </ul>
    </main>
  )
}

export default Content