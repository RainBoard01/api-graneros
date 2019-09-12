const { GraphQLObjectType } = require('graphql');

const QueriesbyId = require('./byId');
const QueriesbyAll = require('./byAll');

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...QueriesbyId,
        ...QueriesbyAll
    }
});