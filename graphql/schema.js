const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');

//  TYPES
const RecordType = require('./types/record');
const PersonType = require('./types/person');
const VehicleType = require('./types/vehicle');
const ParcelType = require('./types/parcel');
const GuardType = require('./types/guard');
const OwnerType = require('./types/owner');

//  MODELS
const Record = require('../models/record');
const Person = require('../models/person');
const Vehicle = require('../models/vehicle');
const Parcel = require('../models/parcel');
const Guard = require('../models/guard');
const Owner = require('../models/owner');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            record: {
                type: RecordType,
                args: {
                    id: { type: GraphQLID }
                },
                async resolve(parent, args) {
                    return await Record.findById(args.id);
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
            guard: {
                type: GuardType,
                args: {
                    id: { type: GraphQLID }
                },
                async resolve(parent, args) {
                    return await Guard.findById(args.id);
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
            guards: {
                type: new GraphQLList(GuardType),
                async resolve(parent, args) {
                    return await Guard.find({});
                }
            },
            owners: {
                type: new GraphQLList(OwnerType),
                async resolve(parent, args) {
                    return await Owner.find({});
                }
            }
        }
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
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
        }
    })
});

module.exports = schema;