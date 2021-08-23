import React from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'
import { withAuth0 } from '@auth0/auth0-react';
import UpdateModal from './UpdateModal';

class Char extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HPArr: [],
            addArr:[],
            name:'',
            house:'',
            image:''
        }
    }
    getData = async () => {
        axios
            .get(`https://ent-301-exam.herokuapp.com/getAll`)
            .then(results => {
                this.setState({
                    HPArr: results.data,
                })
                //console.log(this.state.HPArr);
            })
    }

    addToFav=(item)=>{
            const URLS = `https://ent-301-exam.herokuapp.com/add`
            const name = item.name;
            const image = item.image;
            const { user } = this.props.auth0;
            const house=item.house;
        
                // console.log('hello from button function ');
                const charData = {
                    email: user.email,
                    name:name,
                    house:house,
                    image:image
                }
            console.log('I am the Data!', charData);
            axios
                .post(URLS, charData)
                .then(element => {
                    try {
                        this.setState({
                            addArr: element.data,
                            show:true
                        })
                    } catch (error) {
                        <>
                            <h3>you are in first catch database Error </h3>
                        </>
                    }
                    console.log('from  DataBase ', this.state.addArr);
                }).catch((err) => {
                    console.log(err);
                })
        
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <center>
                              <CardColumns>

                {
                    this.state.HPArr.map((e) => {
                        return(  

                            <Card style={{ width: '18rem' , height:'25rem' }}>
                            <Card.Img variant="top" src={e.image} alt={e.name} style={{ width: '15rem' , height:'15rem' }} name='image'/>
                            <Card.Body>
                                <Card.Title name='name' src={e.name}>{e.name}</Card.Title>
                                <Card.Text name='house'>
                                  { e.house}
                                </Card.Text>
                                <Button variant="danger" type='submit'  onClick={()=> this.addToFav(e)}>Love</Button>
                            </Card.Body>
                        </Card>
                        
                        )
                     
                    })
                }     
                               </CardColumns>
                              
                               </center>
                               
        )
    }
}

export default withAuth0(Char);