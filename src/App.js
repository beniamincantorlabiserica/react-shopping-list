import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';


function App() {
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
    <div className="App">
          <Header title="Groceries List"/>
          <Content 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
          <Footer lenght={items.length}/>
    </div>
  );
}

export default App;
