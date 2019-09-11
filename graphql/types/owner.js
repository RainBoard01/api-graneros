const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');
const Parcel = require('../../models/parcel');

const OwnerType = new GraphQLObjectType({
    name: 'Owner',
    fields: () => ({
        id: { type: GraphQLID },
        rut: { type: GraphQLString },
        name: { type: GraphQLString },
        phone: { type: GraphQLInt },
        parcel: {
            type: ParcelType,
            async resolve(parent, args) {
                return await Parcel.findById(parent.parcelId);
            }
        }
    })
});

module.exports = OwnerType;

// This is here to prevent circular dependencies problem which will lead to the formation of infinite loop
const ParcelType = require('./parcel');