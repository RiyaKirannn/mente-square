import React from 'react'
import { Icon } from '@iconify/react';

export default function MenteeRecords({ data, deleteMenteeRecord, editMenteeRecord }) {

    const editMentee = (id,name,phoneprime,email,address) => {
        editMenteeRecord(id,name,phoneprime,email,address)
    }

    const deleteMentee = (id, name) => {
        deleteMenteeRecord(id, name)
    }


    return (
        <tr className='text-center'>
            <td>{data.mentee_id}</td>
            <td>{data.name}</td>
            <td>{data.Phone_primary}</td>
            <td>{data.username}</td>
            <td>{data.Address}</td>
            <td>{data.status}</td>
            <td onClick={() => editMentee(data.mentee_id,data.name,data.Phone_primary,data.username,data.Address)}> <button className='btn bg-transparent btn-sm w-100 d-flex justify-content-center'><Icon className='text-warning' icon="material-symbols:edit" width="20" /></button> </td>
            <td className='text-center' onClick={() => deleteMentee(data.mentee_id, data.name)} ><button className='btn bg-transparent btn-sm w-100 d-flex justify-content-center'><Icon className='text-danger' icon="ic:baseline-delete" width="20" /></button></td>
        </tr>
    )
}