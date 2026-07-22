import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import "../css/style.css"
export default function NewMentee() {

    const [name, setName] = useState("")
    const [phoneprime, setPhoneprime] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    // Alert
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: false })

    const [alert, setAltert] = useState(false)
    const [errMessage, setErrMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(process.env.REACT_APP_SERVER + "/admin/addmentee", {
            name: name,
            phoneprime: phoneprime,
            email: email,
            address: address
        })
            .then((res) => {
                if (res.data.status) {
                    setName("")
                    setPhoneprime("")
                    setEmail("")
                    setAddress("")
                    setAltert(true)
                    onOpen()
                }
                else {
                    setErrMessage(res.data.message)
                    setAltert(false)
                    onOpen()
                }
            })
            .catch(function (error) {
                console.log(error);
                setErrMessage("Internal Server Error | There was an error processing your request")
                setAltert(false)
                onOpen()
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


    // onOpen()
    return (
        <>
            <div className='container mt-4 content-outline'>
                {alert && isVisible ?
                    <Alert status='success' className='mb-4'>
                        <AlertIcon />
                        <Box>
                            <AlertTitle>Success!</AlertTitle>
                            <AlertDescription>
                                Mentee Registration Successful
                            </AlertDescription>
                        </Box>
                        <CloseButton
                            alignSelf='flex-start'
                            position='absolute'
                            right={2}
                            top={1}
                            onClick={onClose}
                        />
                    </Alert> : null}
                {!alert && isVisible ?
                    <Alert status='error' className='mb-4'>
                        <AlertIcon />
                        <Box>
                            <AlertTitle>Error!</AlertTitle>
                            <AlertDescription>
                                {errMessage}
                            </AlertDescription>
                        </Box>
                        <CloseButton
                            alignSelf='flex-start'
                            position='absolute'
                            right={2}
                            top={1}
                            onClick={onClose}
                        />
                    </Alert> : null
                }
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center" style={{ textDecoration: "underline" }}>Mentee Registration</h3>
                    <div className='row mt-4'>
                        <div className='col-md-2'>
                            <label className='col-form-label form-label' htmlFor='name'>Name</label>
                        </div>
                        <div className='col-md-10'>
                            <input id='name' autoFocus={true} className='form-control' type="text" onBlur={handleNameBlur} onInput={handleNameChange} value={name} required />
                        </div>
                        <br />
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md-2'>
                            <label className='col-form-label form-label' htmlFor='mentee_phoneprime'>Primary Phone</label>
                        </div>
                        <div className='col-md-10'>
                            <input id='mentee_phoneprime' className='form-control' type="tel" onInput={handlePhonePrimeChange} value={phoneprime} required />
                        </div>
                        <br />
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md-2'>
                            <label className='col-form-label form-label' htmlFor='mentee_email'>Email</label>
                        </div>
                        <div className='col-md-10'>
                            <input id='mentee_email' className='form-control' type="email" onBlur={handleEmailBlur} onInput={(e) => setEmail(e.target.value)} value={email} required />
                        </div>
                        <br />
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md-2'>
                            <label className='col-form-label form-label' htmlFor='mentee_address'>Address</label>
                        </div>
                        <div className='col-md-10'>
                            <textarea id='mentee_address' className='form-control' rows='3' type="text" onInput={(e) => setAddress(e.target.value)} value={address} required ></textarea>
                        </div>
                        <br />
                    </div>
                    <div className='mt-5 row'>
                        <div className='offset-md-2 col-md-10'>
                            <input type="submit" value="Submit" className='w-100 btn ms-btn' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}