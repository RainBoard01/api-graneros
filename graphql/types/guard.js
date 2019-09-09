const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');
const Record = require('../../models/record');

const GuardType = new GraphQLObjectType ({
    name: 'Guard',
    fields: () => ({
        id: { type: GraphQLID },
        rut: { type: GraphQLString },
        name: { type: GraphQLString },
        records: {
            type: new GraphQLList(RecordType),
            resolve(parent, args) {
                return Record.find({ guardId: parent.id });
            }
        }
    })
});

module.exports = GuardType;

// This is here to prevent circular dependencies problem which will lead to the formation of infinite loop
const RecordType = require('./record');