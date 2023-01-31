import React, { useState } from "react";
import { MdAddCircleOutline } from 'react-icons/md';
import { BiMinusCircle } from 'react-icons/bi';

function SelectQuantity() {
    const [count, updateCount] = useState(0);
    const increment = () => {
        if(count < 10) {
            updateCount(count + 1);
        }
    }
    const decrement = () => {
        if(count > 0) {
            updateCount(count - 1);
        }
    }

    return (
        <div>
            <BiMinusCircle onClick = {decrement} />
            <span> {count} </span>
            <MdAddCircleOutline onClick = {increment} />
        </div>
    )
}

export default SelectQuantity