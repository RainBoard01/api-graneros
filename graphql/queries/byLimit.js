const { GraphQLList, GraphQLInt } = require('graphql');

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
        args: {
            limit: { type: GraphQLInt }
        },
        async resolve(parent, args) {
            return await Record.find({}).limit(args.limit);
        }
    },
    persons: {
        type: new GraphQLList(PersonType),
        args: {
            limit: { type: GraphQLInt }
        },
        async resolve(parent, args) {
            return await Person.find({}).limit(args.limit);
        }
    },
    vehicles: {
        type: new GraphQLList(VehicleType),
        args: {
            limit: { type: GraphQLInt }
        },
        async resolve(parent, args) {
            return await Vehicle.find({}).limit(args.limit);
        }
    },
    parcels: {
        type: new GraphQLList(ParcelType),
        args: {
            limit: { type: GraphQLInt }
        },
        async resolve(parent, args) {
            return await Parcel.find({}).limit(args.limit);
        }
    },
    owners: {
        type: new GraphQLList(OwnerType),
        args: {
            limit: { type: GraphQLInt }
        },
        async resolve(parent, args) {
            return await Owner.find({}).limit(args.limit);
        }
    },
    guards: {
        type: new GraphQLList(GuardType),
        args: {
            limit: { type: GraphQLInt }
        },
        async resolve(parent, args) {
            return await Guard.find({}).limit(args.limit);
        }
    }
}