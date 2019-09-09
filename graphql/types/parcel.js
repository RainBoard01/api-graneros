const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');
const Record = require('../../models/record');
const Owner = require('../../models/owner');

const ParcelType = new GraphQLObjectType({
    name: 'Parcel',
    fields: () => ({
        id: { type: GraphQLID },
        number: { type: GraphQLInt },
        owners: { 
            type: new GraphQLList(OwnerType),
            resolve(parent, args) {
                return Owner.find({ parcelId: parent.id });
            } 
        },
        records: {
            type: new GraphQLList(RecordType),
            resolve(parent, args) {
                return Record.find({ parcelId: parent.id });
            }
        }
    })
});

module.exports = ParcelType;

// This is here to prevent circular dependencies problem which will lead to the formation of infinite loop
const RecordType = require('./record');
const OwnerType = require('./owner');