const { User } = require('../models');

/**
* GraphQL Resolvers 
**/

const resolvers={
    Query:{
        getAllUser:(root)=>{
            return new Promise((resolve,reject)=>{
                User.find((err,users)=>{
                    if(err) reject(err);
                    else resolve(users);
                })
            })
        }
    },
    Mutation:{
        createUser: (root,{ input }) => {
            User.createUser(input).then(resp => {
                return resp;
            });
        },
    },
};

module.exports = resolvers;