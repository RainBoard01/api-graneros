const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');
const Record = require('../../models/record');

const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        id: { type: GraphQLID },
        rut: { type: GraphQLString },
        name: { type: GraphQLString },
        records: { 
            type: new GraphQLList(RecordType),
            resolve(parent, args) {
                return Record.find({ personId: parent.id });
            }
        }
    })
});

module.exports = PersonType;

// This is here to prevent circular dependencies problem which will lead to the formation of infinite loop
const RecordType = require('./record');