const {
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');

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
    updateRecord: {
        type: RecordType,
        args: {
            id: { type: GraphQLNonNull(GraphQLID) },
            personId: { type: GraphQLID },
            vehicleId: { type: GraphQLID },
            guardId: { type: GraphQLID },
            parcelId: { type: GraphQLID },
            observation: { type: GraphQLString }
        },
        async resolve(parent, args) {
            return await Record.findByIdAndUpdate(args.id, {
                personId: args.personId,
                vehicleId: args.vehicleId,
                guardId: args.guardId,
                parcelId: args.parcelId,
                observation: args.observation
            }, {
                new: true,
                omitUndefined: true,
                useFindAndModify: false
            });
        }
    },
    updatePerson: {
        type: PersonType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            rut: { type: GraphQLString },
            name: { type: GraphQLString }
        },
        async resolve(parent, args) {
            return await Person.findByIdAndUpdate(args.id, {
                rut: args.rut,
                name: args.name
            }, {
                new: true,
                omitUndefined: true,
                useFindAndModify: false
            });
        }
    },
    updateVehicle: {
        type: VehicleType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            type: { type: GraphQLString },
            patente: { type: GraphQLString }
        },
        async resolve(parent, args) {
            return await Vehicle.findByIdAndUpdate(args.id, {
                type: args.type,
                patente: args.patente
            }, {
                new: true,
                omitUndefined: true,
                useFindAndModify: false
            });
        }
    },
    updateParcel: {
        type: ParcelType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            number: { type: GraphQLInt }
        },
        async resolve(parent, args) {
            return await Parcel.findByIdAndUpdate(args.id, {
                number: args.number
            }, {
                new: true,
                omitUndefined: true,
                useFindAndModify: false
            });
        }
    },
    updateOwner: {
        type: OwnerType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            rut: { type: GraphQLString },
            name: { type: GraphQLString },
            phone: { type: GraphQLInt },
            parcelId: { type: GraphQLID }
        },
        async resolve(parent, args) {
            return await Owner.findByIdAndUpdate(args.id, {
                rut: args.rut,
                name: args.name,
                phone: args.phone,
                parcelId: args.parcelId
            }, {
                new: true,
                omitUndefined: true,
                useFindAndModify: false
            });
        }
    },
    updateGuard: {
        type: GuardType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) },
            rut: { type: GraphQLString },
            name: { type: GraphQLString }
        },
        async resolve(parent, args) {
            return await Guard.findByIdAndUpdate(args.id, {
                rut: args.rut,
                name: args.name
            }, {
                new: true,
                omitUndefined: true,
                useFindAndModify: false
            });
        }
    }
};