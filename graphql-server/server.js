const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

const schema = buildSchema(`
    type Query {
        message: String
        rollDice: [Int]  
    }
    
    type Mutation {
        userRollDice(num: Int!): Int,
    }
`);

const diceData = [3, 2, 1];

const randomNumber = () => 1 + Math.floor(Math.random() * 6);

const getDiceNumber = () => {
    return  diceData?.map(item => {
        let total = 0;
        for(let i = 0; i < item; i++){
            total += randomNumber();
        }
        return total;
    });
}

const getUseDiceNumber = ({ num }) => {
    let total = 0;
    for(let i = 0; i < num; i++){
        total += randomNumber();
    }
    return total;
}

const root = {
    message: () => 'Hello World!',
    rollDice: getDiceNumber,
    userRollDice: getUseDiceNumber,
};

const app = express();
app.use('/graphql',
    cors(),
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(4000, () => console.log('Now Running On 4000/graphql'));