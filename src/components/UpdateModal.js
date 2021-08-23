import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class UpdateModal extends React.Component {

    render() {
        return (

            <>
{console.log(this.props.name)}
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => this.props.update(e)} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.name}  name='name' />
                               
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>house</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.house}  name='house'/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Control type="text" defaultValue={this.props.image} name='image'/>
                            </Form.Group>
                            <Modal.Footer>
                        <Button variant="danger" onClick={this.props.close} >
                            Close
                        </Button>
                        <Button variant="warning" type='submit' onClick={this.props.close} >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                        </Form>
                    </Modal.Body>
                   
                </Modal>
            </>
        )
    }
}

export default UpdateModal