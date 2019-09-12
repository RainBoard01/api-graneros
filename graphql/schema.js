const { GraphQLSchema } = require('graphql');

const rootQuery = require('./queries/rootQuery');
const rootMutation = require('./mutations/rootMutation');

const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation
});

module.exports = schema;