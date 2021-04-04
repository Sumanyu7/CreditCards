import React, { Component } from 'react';
import Card from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';
import './CardForm.scss';
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
  } from "../helpers/utils.js";

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
      const formData = [...e.target.elements]
        .filter(d => d.name)
        .reduce((acc, d) => {
          acc[d.name] = d.value;
          return acc;
        }, {});
  
      this.setState({ formData });
      this.form.reset();
    };
  
    render() {
      const { name, number, expiry, cvc, focused, formData } = this.state;
  
      return (
        <div>
          <div className="App-payment">
            <h2 class="mt-5 mb-4 text-center">Add your Credit Cards</h2>
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
                <div class="form-group ">
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
                    <label for="inputAddress">Name</label>
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
                        <label for="inputCity">Expiry</label>
                        <input
                            type="tel"
                            name="expiry"
                            className="form-control"
                            placeholder="Valid Thru"
                            pattern="\d\d/\d\d"
                            required
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="cvc">CVC</label>
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
            {formData && (
              <div className="App-highlight">
                {formatFormData(formData).map((d, i) => (
                  <div key={i}>{d}</div>
                ))}
              </div>
            )}
          </div>
          </div>
          )
      }
  }