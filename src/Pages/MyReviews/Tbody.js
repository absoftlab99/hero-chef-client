import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";


const Tbody = () => {
    return (
        <tr>
            <td className='text-center'>01</td>
            <td className='text-center'>Thumbnail</td>
            <td className='text-center'>Service Name</td>
            <td className='text-center'>Review</td>
            <td className='text-center'><Button className='btn btn-danger'><FaTrash></FaTrash></Button></td>
        </tr>
    );
};

export default Tbody;