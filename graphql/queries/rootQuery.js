const { GraphQLObjectType } = require('graphql');

const QueriesbyId = require('./byId');
const QueriesbyAll = require('./byAll');
const QueriesbyLimit = require('./byLimit');

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...QueriesbyId,
        ...QueriesbyAll,
        ...QueriesbyLimit
    }
});