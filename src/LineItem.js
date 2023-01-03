import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='item'>
        <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
        />
        <label
            style={(item.checked) ? {textDecoration: "line-through"} : null}
        >{item.item}</label>
        <FaTrashAlt role="button" tabIndex="0" onClick={() => handleDelete(item.id)} aria-label={'Delete ${items.item'}/>
    </li>
  )
}

export default LineItem