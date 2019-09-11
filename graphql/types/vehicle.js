const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');
const Record = require('../../models/record');

const VehicleType = new GraphQLObjectType({
    name: 'Vehicle',
    fields: () => ({
        id: { type: GraphQLID },
        type: { type: GraphQLString },
        patente: { type: GraphQLString },
        records: {
            type: new GraphQLList(RecordType),
            async resolve(parent, args) {
                return await Record.find({ vehicleId: parent.id });
            }
        }
    })
});

module.exports = VehicleType;

// This is here to prevent circular dependencies problem which will lead to the formation of infinite loop
const RecordType = require('./record');