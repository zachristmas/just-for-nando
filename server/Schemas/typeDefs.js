const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{
       id:ID
       username:String
       email:String
       password:String
       savedBooks:[Book]
    }

    type Book{
        authors:String
        description:String
        bookId:String
        image:String
        link:String
        title:String
    }

    type Query{
        getAllUser:[User]
        findABook(bookId:String):Book
    }

    input UserInput{
        username:String
        email:String
        password:String
    }

    type Mutation{
        createUser(input:UserInput):User
    }

`;

module.exports = typeDefs;