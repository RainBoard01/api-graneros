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
    addRecord: {
        type: RecordType,
        args: {
            dateIn: { type: GraphQLString },
            observation: { type: new GraphQLNonNull(GraphQLString) },
            personId: { type: new GraphQLNonNull(GraphQLID) },
            vehicleId: { type: GraphQLID },
            parcelId: { type: new GraphQLNonNull(GraphQLID) },
            guardId: { type: new GraphQLNonNull(GraphQLID) }
        },
        async resolve(parent, args) {
            let record = new Record({
                dateIn: args.dateIn,
                observation: args.observation,
                personId: args.personId,
                vehicleId: args.vehicleId,
                parcelId: args.parcelId,
                guardId: args.guardId
            });
            return await record.save();
        }
    },
    addPerson: {
        type: PersonType,
        args: {
            rut: { type: new GraphQLNonNull(GraphQLString) },
            name: { type: new GraphQLNonNull(GraphQLString) }
        },
        async resolve(parent, args) {
            let person = new Person({
                rut: args.rut,
                name: args.name
            });
            return await person.save();
        }
    },
    addVehicle: {
        type: VehicleType,
        args: {
            type: { type: new GraphQLNonNull(GraphQLString) },
            patente: { type: GraphQLString }
        },
        async resolve(parent, args) {
            let vehicle = new Vehicle({
                type: args.type,
                patente: args.patente
            });
            return await vehicle.save();
        }
    },
    addParcel: {
        type: ParcelType,
        args: {
            number: { type: new GraphQLNonNull(GraphQLInt) }
        },
        async resolve(parent, args) {
            let parcel = new Parcel({
                number: args.number
            });
            return await parcel.save();
        }
    },
    addOwner: {
        type: OwnerType,
        args: {
            rut: { type: GraphQLString },
            name: { type: new GraphQLNonNull(GraphQLString) },
            phone: { type: new GraphQLNonNull(GraphQLInt) },
            parcelId: { type: GraphQLID }
        },
        async resolve(parent, args) {
            let owner = new Owner({
                rut: args.rut,
                name: args.name,
                phone: args.phone,
                parcelId: args.parcelId
            });
            return await owner.save();
        }
    },
    addGuard: {
        type: GuardType,
        args: {
            rut: { type: new GraphQLNonNull(GraphQLString) },
            name: { type: new GraphQLNonNull(GraphQLString) }
        },
        async resolve(parent, args) {
            let guard = new Guard({
                rut: args.rut,
                name: args.name
            });
            return await guard.save();
        } 
    }
};