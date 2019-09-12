const { GraphQLID, GraphQLNonNull } = require('graphql');

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
    deleteRecord: {
        type: RecordType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) }
        },
        async resolve(parent, args) {
            return await Record.findByIdAndRemove(args.id,{
                useFindAndModify: false
            });
        }
    },
    deletePerson: {
        type: PersonType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) }
        },
        async resolve(parent, args) {
            return await Person.findByIdAndRemove(args.id,{
                useFindAndModify: false
            });
        }
    },
    deleteVehicle: {
        type: VehicleType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) }
        },
        async resolve(parent, args) {
            return await Vehicle.findByIdAndRemove(args.id,{
                useFindAndModify: false
            });
        }
    },
    deleteParcel: {
        type: ParcelType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) }
        },
        async resolve(parent, args) {
            return await Parcel.findByIdAndRemove(args.id,{
                useFindAndModify: false
            });
        }
    },
    deleteOwner: {
        type: OwnerType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) }
        },
        async resolve(parent, args) {
            return await Owner.findByIdAndRemove(args.id,{
                useFindAndModify: false
            });
        }
    },
    deleteGuard: {
        type: GuardType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) }
        },
        async resolve(parent, args) {
            return await Guard.findByIdAndRemove(args.id,{
                useFindAndModify: false
            });
        }
    }
};