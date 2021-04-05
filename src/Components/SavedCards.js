import React, { Component } from 'react';
import Card from 'react-credit-cards';
import firebase from "../helpers/firebase.js";

export default class SavedCards extends Component {
    constructor() {
        super();
        this.state = {
            enterName: '',
            cards: []
        }
    }

    getCards = e => {
        e.preventDefault(); 
        const cardsRef = firebase.database().ref('cards/' + this.state.enterName);
        cardsRef.on('value', (snapshot) => {
            let cards = snapshot.val();
            let newState = [];
            for (let card in cards) {
                newState.push({
                id: card,
                name: cards[card].name,
                number: cards[card].number,
                expiry: cards[card].expiry,
                cvc: cards[card].cvc,
                });
            }
            this.setState({
                cards: newState
            });
        });   
    }

    deleteCard(cardId) {
        const cardRef = firebase.database().ref(`/cards/` +this.state.enterName +`/${cardId}`);
        cardRef.remove();
    }

    render() {
        const {enterName} =this.state;
        return (
            <div className="mt-5 pt-4">
                <form onSubmit={this.getCards}>
                    <label> Enter your name</label>
                    <input 
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={enterName}
                        onChange={((e) => this.setState({enterName:e.target.value}))}
                    />
                    <button className="btn btn-primary">Submit</button>
                </form>
                <div className="wrapper">
                    <h4 className="mt-5">Your Saved Cards</h4>
                    <ul className="row text-center  list-group-flush">
                    {this.state.cards.map((card) => {
                        return (
                        <li className="list-group-item col-md-6 my-4" key={card.id}>
                            <Card
                                number={card.number}
                                name={card.name}
                                expiry={card.expiry}
                                cvc={card.cvc}
                            />
                            <button className="btn btn-danger my-3" onClick={() => this.deleteCard(card.id)}>Delete Card</button>
                        </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        );
    }
}