import React from 'react';
import ProgramTable from '../components/ProgramTable'
import TaskTable from '../components/TaskTable'
import items from '../data/items';

function Home() {
    return (
        <article>
            <ProgramTable />
            <TaskTable items={items}/>
        </article>
    );
}

export default Home;