import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { BOOKS } from '../shared/books';
import { CLOTHES } from '../shared/clothes';
import { ELECTRONICS } from '../shared/electronics'




class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: BOOKS,
            clothes: CLOTHES,
            electronics: ELECTRONICS
        }
    }

    render() {

    const HomePage = () => {
            return(
                <Home 
                    books={this.state.books.find(books => books.retrieve)}
                    clothes={this.state.clothes.find(clothes => clothes.retrieve)}
                    electronics={this.state.electronics.find(electronics => electronics.retrieve)}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                   <Route path="/home" component = {HomePage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;


