const { GraphQLList } = require('graphql');

//  TYPES
const { 
    RecordType,
    PersonType,
    VehicleType,
    ParcelType,
    OwnerType,
    GuardType
} = require('../types/index');

//  MODELS
const {
    Record,
    Person,
    Vehicle,
    Parcel,
    Owner,
    Guard
} = require('../../models/index');

module.exports = {
    records: {
        type: new GraphQLList(RecordType),
        async resolve(parent, args) {
            return await Record.find({});
        }
    },
    persons: {
        type: new GraphQLList(PersonType),
        async resolve(parent, args) {
            return await Person.find({});
        }
    },
    vehicles: {
        type: new GraphQLList(VehicleType),
        async resolve(parent, args) {
            return await Vehicle.find({});
        }
    },
    parcels: {
        type: new GraphQLList(ParcelType),
        async resolve(parent, args) {
            return await Parcel.find({});
        }
    },
    owners: {
        type: new GraphQLList(OwnerType),
        async resolve(parent, args) {
            return await Owner.find({});
        }
    },
    guards: {
        type: new GraphQLList(GuardType),
        async resolve(parent, args) {
            return await Guard.find({});
        }
    }
}