import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeleteModal from '../components/DeleteModal';
import EditModal from '../components/EditModal';
import MenteeRecords from '../components/MenteeRecords';
import { useDisclosure } from '@chakra-ui/react'

export default function Mentee() {

    //get data
    const getData = () => {
        axios.get(process.env.REACT_APP_SERVER + "/admin/fetchmenteerec")
            .then(async (res) => {
                const data = await res.data
                if (!data.status)
                    setDatas()
                else
                    setDatas(data.result)
            })
            .catch(function (error) {
                console.log(error);
                console.log("503 | Internal Server error!")
            });
    }

    // state variables
    const [datas, setDatas] = useState()

    useEffect(() => {
        getData()
    }, [])

    // Delete Modal
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false })
    const [showModal, setShowModal] = useState()
    const [mid, setMid] = useState(0)
    const [mname, setMname] = useState("")
    const [mphoneprime, setMphoneprime] = useState("")
    const [maddress, setMaddress] = useState("")
    const [memail, setMemail] = useState("")
    const deleteMenteeRecord = (id, name) => {
        setMname(name)
        setMid(id)
        setShowModal(true)
        onOpen()
    }

    const handleClose = () => {
        setShowModal(false)
        onClose()
    }

    // Edit Modal
    const editMenteeRecord = (id, name, phoneprime, email, address) => {
        console.log("Edit id:", id)
        setMid(id)
        setMname(name)
        setMphoneprime(phoneprime)
        setMaddress(address)
        setMemail(email)
        setShowModal(false)
        onOpen()
    }

    // Re render on change
    const handleRerender = () => {
        getData()
    }

    return (
        <div className="row px-2">
            <div className='container mt-4 content-outline' style={{ overflowX: "auto" }} >
                <h3 className="text-center" style={{ textDecoration: "underline" }}>Mentee Records</h3>
                <table className='table table-striped table-bordered table-hover table-condensed mt-4' style={{ borderColor: "#3b7e91" }}>
                    <thead style={{ backgroundColor: "#6dc1c1", color: "white" }}>
                        <tr className='text-center'>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone Primary</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas ? datas.map((data, index) => {
                            return <MenteeRecords data={data} key={index} deleteMenteeRecord={deleteMenteeRecord} editMenteeRecord={editMenteeRecord} />
                        }) :
                            <tr className='text-center'><td colSpan={9}>No Data</td></tr>
                        }
                    </tbody>
                </table>

                {showModal ? <DeleteModal isOpen={isOpen} onClose={handleClose} name={mname} id={mid} rerender={handleRerender} /> : <EditModal isOpen={isOpen} onClose={handleClose} id={mid} mname={mname} mphoneprime={mphoneprime} memail={memail} maddress={maddress} rerender={handleRerender} />}
            </div>
        </div>
    )
}