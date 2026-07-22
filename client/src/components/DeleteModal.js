import React from 'react'
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

export default function deleteModal({ isOpen, onClose, id, name, rerender }) {
    const deleteMentee = () => {
        axios.post(process.env.REACT_APP_SERVER + '/admin/deletementee', {
            id
        })
            .then((res) => {
                if (res.data.status) {
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

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete confirmation</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Do you want to delete {name}?
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='gray' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' onClick={deleteMentee}>Delete</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}