const { GraphQLObjectType } = require('graphql');

const mutationsToCreate = require('./create');
const mutationsToUpdate = require('./update');
const mutationsToDelete = require('./delete');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...mutationsToCreate,
        ...mutationsToUpdate,
        ...mutationsToDelete
    }
});