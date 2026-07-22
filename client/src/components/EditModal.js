import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'
import axios from 'axios'

export default function EditModal({ isOpen, onClose, id, mname, mphoneprime, memail, maddress, rerender }) {

    const [name, setName] = useState()
    const [phoneprime, setPhoneprime] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()


    useEffect(() => {
        function defaultValue() {
            setName(mname)
            setPhoneprime(mphoneprime)
            setEmail(memail)
            setAddress(maddress)
        }
        defaultValue()
    }, [mname, mphoneprime, maddress, memail])

    const handleSubmit = () => {
        axios.post(process.env.REACT_APP_SERVER + "/admin/editmentee", {
            name: name,
            phoneprime: phoneprime,
            email: email,
            address: address,
            id: id
        })
            .then((res) => {
                if (res.data.status) {
                    setName("")
                    setPhoneprime("")
                    setEmail("")
                    setAddress("")
                    rerender(true)
                    onClose()
                }
                else {
                    console.log(res.data.message)
                }
            })
            .catch(function (error) {
                console.log(error);
                console.log("503 | Internal Server error!")
            });
    }

    // validation
    const handleNameChange = (e) => {
        if (e.target.value.match(/[a-zA-Z]/g))
            setName(e.target.value)
        if (e.target.value === "")
            setName(e.target.value)
    }

    const handleNameBlur = (e) => {
        setName(e.target.value.trim())
        var k = name.split(" ")
        var arr = []
        k.forEach(element => {
            if (element)
                arr.push(element)
        });
        setName(arr.join(' '))
    }

    const handlePhonePrimeChange = (e) => {
        // console.log(e.target.value[])
        var char = /[a-z]/i
        if (!e.target.value.match(char))
            setPhoneprime(e.target.value)
    }

    const handleEmailBlur = (e) => {
        var emailPattern = /^(\b[a-z]+)+([a-z0-9]+)+([.-]?[a-z0-9])*@[a-z]+([.-]?[a-z]+)*(\.[a-z]{2,3})+$/
        if (e.target.value.match(emailPattern))
            console.log("Email match")
        else
            console.log("No match")
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Mentee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-12'>
                                    <label className='col-form-label form-label' htmlFor='edit_mentee_name'>Name</label>
                                </div>
                                <div className='col-md-12'>
                                    <input id='edit_mentee_name' autoFocus={true} className='form-control' type="text" onBlur={handleNameBlur} onInput={handleNameChange} value={name} required />
                                </div>
                                <br />
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'>
                                    <label className='col-form-label form-label' htmlFor='edit_mentee_phoneprime'>Primary Phone</label>
                                </div>
                                <div className='col-12'>
                                    <input id='edit_mentee_phoneprime' className='form-control' type="tel" onInput={handlePhonePrimeChange} value={phoneprime} required />
                                </div>
                                <br />
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'>
                                    <label className='col-form-label form-label' htmlFor='edit_mentee_email'>Email</label>
                                </div>
                                <div className='col-12'>
                                    <input id='edit_mentee_email' className='form-control' type="email" onBlur={handleEmailBlur} onInput={(e) => setEmail(e.target.value)} value={email} required />
                                </div>
                                <br />
                            </div>
                            <div className='row mt-4'>
                                <div className='col-12'>
                                    <label className='col-form-label form-label' htmlFor='edit_mentee_address'>Address</label>
                                </div>
                                <div className='col-12'>
                                    <textarea id='edit_mentee_address' className='form-control' rows='3' type="text" onInput={(e) => setAddress(e.target.value)} value={address} required ></textarea>
                                </div>
                                <br />
                            </div>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='gray' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='yellow' onClick={handleSubmit}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}