import React from "react";
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'
import { withAuth0 } from '@auth0/auth0-react';
import UpdateModal from './UpdateModal'
class Fav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HPArr: [],
            show:false,
            index:-1,
          

        }
    }
    getFav = () => {

        const { user } = this.props.auth0;
        //console.log(user);

        const URL = `https://ent-301-exam.herokuapp.com/getFav?email=${user.email}`
        axios
            .get(URL)
            .then(results => {
                console.log(results.data)
                this.setState({

                    HPArr: results.data
                })


            })
            .catch(err => {
                console.log(err)
            })
    }

    deleteFav = (index) => {

        const { user } = this.props.auth0;
        const Data = {
            email: user.email,
        }
/*         const URL = `http://localhost:3001/rmChar/${index}`
 */        axios
            .delete(`https://ent-301-exam.herokuapp.com/rmChar/${index}`, { params: Data })
            .then(data => {
                this.setState({
                    HPArr: data.data.Chars
                })
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
                <h1>error happened</h1>


            })
console.log(index)

    }
    handleClose=()=>{
        this.setState({
            show:false
        })
    
    }
showModal=(i)=>{
    this.setState({
        index:i,
        show:true,
        name: this.state.HPArr[i].name,
        house: this.state.HPArr[i].house,
        image:this.state.HPArr[i].image
    })
    console.log(this.state.HPArr[0])
}


    updateChar=(event)=>{
        const { user } = this.props.auth0;

        event.preventDefault();
        const newData={
            name:event.target.name.value,
            house:event.target.house.value,
            image:event.target.image.value,
            email:user.email,
        }
        axios
        .put(`https://ent-301-exam.herokuapp.com/${this.state.index}`,newData)
        .then(results=>{
            this.setState({
                HPArr:results.data.Chars
            })
            console.log(results)
        })
        .catch((err=>{
            console.log(err)
        }))
    }
    componentDidMount = () => {
        this.getFav()
        console.log(this.state.HPArr)

    }
    render() {
        return (
            <center>
                <CardColumns>
                   
                    {
                        this.state.HPArr.map((e, idx) => {
                            return (
                                <div key={idx}>


                                    <Card style={{ width: '18rem', height: '25rem' }}>
                                        <Card.Img variant="top" src={e.image} alt={e.name} style={{ width: '15rem', height: '15rem' }} name='image' />
                                        <Card.Body>
                                            <Card.Title name='name' src={e.name}>{e.name}</Card.Title>
                                            <Card.Text name='house'>
                                                {e.house}
                                            </Card.Text>
                                            <Card.Footer>
                                               <Button variant="danger" type='submit'  onClick={() => this.deleteFav(idx)}>delete</Button>
                                                <Button variant="warning" type='submit' onClick={() => this.showModal(idx)}>update</Button></Card.Footer>

                                        </Card.Body>
                                    </Card>
                                    </div>

                            )

                        })
                    }
                </CardColumns>
                <UpdateModal
                    show={this.state.show} 
                    close={this.handleClose}
                     update={this.updateChar}
                     name={this.state.name}
                     house={this.state.house}
                     image={this.state.image}
                               
                />
            </center>
        )
    }
}
export default withAuth0(Fav);