const { GraphQLID } = require('graphql');

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
    record: {
        type: RecordType,
        args: {
            id: { type: GraphQLID }
        },
        async resolve(parent, args) {
            return await Record.findById(args.id);
        }
    },
    person: {
        type: PersonType,
        args: {
            id: { type: GraphQLID }
        },
        async resolve(parent, args) {
            return await Person.findById(args.id);
        }
    },
    vehicle: {
        type: VehicleType,
        args: {
            id: { type: GraphQLID }
        },
        async resolve(parent, args) {
            return await Vehicle.findById(args.id);
        }
    },
    parcel: {
        type: ParcelType,
        args: { 
            id: { type: GraphQLID }
        },
        async resolve(parent, args) {
            return await Parcel.findById(args.id);
        }
    },
    owner: {
        type: OwnerType,
        args: {
            id: { type: GraphQLID }
        },
        async resolve(parent, args) {
            return await Owner.findById(args.id);
        }
    },
    guard: {
        type: GuardType,
        args: {
            id: { type: GraphQLID }
        },
        async resolve(parent, args) {
            return await Guard.findById(args.id);
        }
    }
}
