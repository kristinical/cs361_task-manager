import React from 'react';
import TaskRow from './TaskRow'
import { AiOutlinePlus } from 'react-icons/ai';

function TaskTable({ items }) {
    return(
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th colspan="2">Edit</th>
                    <th>Action</th>
                    <th>Due</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => <TaskRow item={item} key={i} />)}
                <tr>
                    <th colspan="5" class="tenperc"><div class="helptip">
                        <span class="helptiptext">Add new task</span>
                        <AiOutlinePlus /> Add New Task
                    </div>
                    </th>
                </tr>
            </tbody>
        </table>
    );
}

export default TaskTable