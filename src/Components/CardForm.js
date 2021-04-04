import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';
import './CardForm.scss';


function CardForm(){

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
      
        return (
            
          <div id="PaymentForm">
              <div class = "card">
                <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
                />
              </div>
            <form class="form">
                <div class="form-group ">
                    <label for="number">Card Number</label>
                    <input 
                        class="form-control" 
                        id="number"
                        type='tel'
                        name='number'
                        placeholder='Card Number'
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        onFocus={e => setFocus(e.target.name)}
                    />
                </div>
                <div class="form-group">
                    <label for="inputAddress">Name</label>
                    <input 
                        class="form-control" 
                        id="inputAddress" 
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onFocus={e => setFocus(e.target.name)}
                    />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">Expiry</label>
                        <input 
                            class="form-control" 
                            id="inputCity"
                            type='tel'
                            name='expiry'
                            placeholder='MM/YY'
                            value={expiry}
                            onChange={e => setExpiry(e.target.value)}
                            onFocus={e => setFocus(e.target.name)}

                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="cvc">CVC</label>
                        <input 
                            type='tel'
                            name='cvc'
                            placeholder='CVC'
                            value={cvc}
                            onChange={e => setCvc(e.target.value)}
                            onFocus={e => setFocus(e.target.name)} 
                            class="form-control" 
                            id="cvc"
                        />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Add Card</button>
            </form>
        </div>
         );
    }   

export default CardForm;
