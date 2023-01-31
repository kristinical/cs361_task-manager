import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiCheckbox, BiCheckboxChecked, BiTrash} from 'react-icons/bi';
import proposal from '../images/program_proposal.pdf';

function TaskRow({ item }) {
    const [isChecked, checked] = useState(true);
    const toggleCheckmark = () => {
        checked(!isChecked);
        document.getElementById("col1").style.textDecoration = "line-through";
    }
    return (
        <tr>
            <td id="col1" class="left mouse">
                {isChecked ? <BiCheckbox onClick={toggleCheckmark}/> :
                <BiCheckboxChecked onClick={toggleCheckmark}/>} 
            <a href={proposal} target="_blank" id="links">{item.name}</a></td>
            <td id="col2" class="edit mouse"><AiOutlineEdit /></td>
            <td id="col5" class="edit mouse"><BiTrash /></td>
            <td id="col3"><a href={proposal} target="_blank" id="buttons">{item.action}</a></td>
            <td id="col4">{item.date}</td>
        </tr>
    );
}

export default TaskRow