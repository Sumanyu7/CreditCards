import React, { Component } from 'react';
import Card from 'react-credit-cards';
import firebase from "../helpers/firebase.js";
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
  } from "../helpers/utils.js";

import 'react-credit-cards/lib/styles.scss';
import './CardForm.scss';

export default class CardForm extends Component {
    state = {
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focused: "",
      formData: null
    };
  
  
    handleInputFocus = ({ target }) => {
      this.setState({
        focused: target.name
      });
    };
  
    handleInputChange = ({ target }) => {
      if (target.name === "number") {
        target.value = formatCreditCardNumber(target.value);
      } else if (target.name === "expiry") {
        target.value = formatExpirationDate(target.value);
      } else if (target.name === "cvc") {
        target.value = formatCVC(target.value);
      }
  
      this.setState({ [target.name]: target.value });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      const cardsRef = firebase.database().ref('cards/' + this.state.name );
      const card = {
        name: this.state.name,
        number: this.state.number,
        expiry: this.state.expiry,
        cvc: this.state.cvc
      }
      cardsRef.push(card);
      this.setState({
        name: '',
        number: '',
        expiry: '',
        cvc: ''
      });
    };
  
    render() {
      const { name, number, expiry, cvc, focused } = this.state;
  
      return (
        <div>
          <div className="App-payment">
            <h2 class="mt-5 mb-4 pt-4 text-center">Add your Credit Cards</h2>
            <div class = "card">
                <Card
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focused}
                />
            </div>
            <form class="form" ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="number">Card Number</label>
                    <input 
                        type="tel"
                        name="number"
                        className="form-control"
                        placeholder="Card Number"
                        pattern="[\d| ]{16,22}"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Expiry</label>
                        <input
                            type="tel"
                            name="expiry"
                            className="form-control"
                            placeholder="MM/YY"
                            pattern="\d\d/\d\d"
                            required
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label>CVC</label>
                        <input
                            type="tel"
                            name="cvc"
                            className="form-control"
                            placeholder="CVC"
                            required
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                </div>
                <div className="form-actions">
                  <button className="btn btn-primary btn-block">Add Card</button>
              </div>
            </form>
              <div className="text-danger">
                <p>Card successfully added</p>
              </div>
          </div>
          </div>
          )
      }
  }