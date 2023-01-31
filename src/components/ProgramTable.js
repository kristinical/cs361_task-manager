import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';


function ProgramTable({ items }) {
    return(
        <table>
            <thead>
                <tr>
                    <th colspan="2" class="mouse">
                    <div class="helptip1">PROGRAM DETAILS <AiOutlineEdit />
                        <span class="helptiptext">Edit program details</span>
                    </div>
                    </th>
                </tr>
            </thead>
            <tbody id="programTable">
                <tr>
                    <td class="col1">Faculty Leader(s):</td>
                    <td colspan="2">Dr. Jane Doe</td>
                </tr>
                <tr>
                    <td class="col1">University:</td>
                    <td colspan="2">Oregon State University</td>
                </tr>
                <tr>
                    <td class="col1">Subject:</td>
                    <td colspan="2">Traditional vs. Modern Architecture</td>
                </tr>
                <tr>
                    <td class="col1">Destination:</td>
                    <td colspan="2">Japan</td>
                </tr>
                <tr>
                    <td class="col1">Dates:</td>
                    <td colspan="2">April 16 - May 6, 2023</td>
                </tr>
            </tbody>
        </table>
    );
}

export default ProgramTable