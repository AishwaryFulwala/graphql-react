import React, { useState } from 'react';
import './App.css';
import { gql, useQuery, useMutation } from '@apollo/client';

const App = () => {
  const [number, setNumber] = useState();

  const getMessage = useQuery(gql('{ message }'));
  const getRollDice = useQuery(gql('{ rollDice }'));
  const [getUserRollDice, { data }] = useMutation(gql('mutation userRollDice($num: Int!) { userRollDice(num: $num) }'));

  console.log('getRollDice', getRollDice?.data?.rollDice);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{getMessage?.data?.message}</h1>
      </header>
      <form onSubmit={e => {
        e.preventDefault();
        getUserRollDice({ variables: { num: parseInt(number) } });
      }}>
        <label className='lbl'>Enter Number Dice :  </label>
        <input type="number" name="num" value={number} onChange={(event) => setNumber(event?.target?.value)} />
        <input type="submit" value="Submit" />
      </form>
      <h3 className='lbl'>Your random number :: {data?.userRollDice}</h3>
    </div>
  );
};

export default App;
