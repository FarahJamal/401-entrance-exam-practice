import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Char from './components/Char'
class MyFavoriteBooks extends React.Component {
  render() {
    return(
      <>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <Char/>
        </>
    )
  }
}

export default MyFavoriteBooks;
