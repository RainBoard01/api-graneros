const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');

//  MODELS
const Person = require('../../models/person');
const Parcel = require('../../models/parcel');
const Vehicle = require('../../models/vehicle');
const Guard = require('../../models/guard');

const RecordType = new GraphQLObjectType({
    name: 'Record',
    fields: () => ({
        id: { type: GraphQLID },
        dateIn: { type: GraphQLString },
        dateOut: { type: GraphQLString },
        observation: { type: GraphQLString },
        person: {
            type: PersonType,
            async resolve(parent, args) {
                return await Person.findById(parent.personId);
            }
        },
        parcel: {
            type: ParcelType,
            async resolve(parent, args) {
                return await Parcel.findById(parent.parcelId);
            }
        },
        vehicle: {
            type: VehicleType,
            async resolve(parent, args) {
                return await Vehicle.findById(parent.vehicleId);
            }
        },
        guard: {
            type: GuardType,
            async resolve(parent, args) {
                return await Guard.findById(parent.guardId);
            }
        }
    })
});

module.exports = RecordType;

//  TYPES

// This is here to prevent circular dependencies problem which will lead to the formation of infinite loop
const VehicleType = require('./vehicle');
const GuardType = require('./guard');
const PersonType = require('./person');
const ParcelType = require('./parcel');