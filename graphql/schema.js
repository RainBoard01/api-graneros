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
                resolve(parent, args) {
                    return Record.findById(args.id);
                }
            },
            parcel: {
                type: ParcelType,
                args: { 
                    id: { type: GraphQLID }
                },
                resolve(parent, args) {
                    return Parcel.findById(args.id);
                }
            },
            guard: {
                type: GuardType,
                args: {
                    id: { type: GraphQLID }
                },
                resolve(parent, args) {
                    return Guard.findById(args.id);
                }
            },
            person: {
                type: PersonType,
                args: {
                    id: { type: GraphQLID }
                },
                resolve(parent, args) {
                    return Person.findById(args.id);
                }
            },
            vehicle: {
                type: VehicleType,
                args: {
                    id: { type: GraphQLID }
                },
                resolve(parent, args) {
                    return Vehicle.findById(args.id);
                }
            },
            records: {
                type: new GraphQLList(RecordType),
                resolve(parent, args) {
                    return Record.find({});
                }
            },
            persons: {
                type: new GraphQLList(PersonType),
                resolve(parent, args) {
                    return Person.find({});
                }
            },
            vehicles: {
                type: new GraphQLList(VehicleType),
                resolve(parent, args) {
                    return Vehicle.find({});
                }
            },
            parcels: {
                type: new GraphQLList(ParcelType),
                resolve(parent, args) {
                    return Parcel.find({});
                }
            },
            guards: {
                type: new GraphQLList(GuardType),
                resolve(parent, args) {
                    return Guard.find({});
                }
            },
            owners: {
                type: new GraphQLList(OwnerType),
                resolve(parent, args) {
                    return Owner.find({});
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
                    dateIn: { type: new GraphQLNonNull(GraphQLString) },
                    observation: { type: new GraphQLNonNull(GraphQLString) },
                    personId: { type: new GraphQLNonNull(GraphQLID) },
                    vehicleId: { type: GraphQLID },
                    parcelId: { type: new GraphQLNonNull(GraphQLID) },
                    guardId: { type: new GraphQLNonNull(GraphQLID) }
                },
                resolve(parent, args) {
                    let record = new Record({
                        dateIn: new Date(args.dateIn),
                        observation: args.observation,
                        personId: args.personId,
                        vehicleId: args.vehicleId,
                        parcelId: args.parcelId,
                        guardId: args.guardId
                    });
                    return record.save();
                }
            },
            addPerson: {
                type: PersonType,
                args: {
                    rut: { type: new GraphQLNonNull(GraphQLString) },
                    name: { type: new GraphQLNonNull(GraphQLString) }
                },
                resolve(parent, args) {
                    let person = new Person({
                        rut: args.rut,
                        name: args.name
                    });
                    return person.save();
                }
            },
            addVehicle: {
                type: VehicleType,
                args: {
                    type: { type: new GraphQLNonNull(GraphQLString) },
                    patente: { type: GraphQLString }
                },
                resolve(parent, args) {
                    let vehicle = new Vehicle({
                        type: args.type,
                        patente: args.patente
                    });
                    return vehicle.save();
                }
            },
            addGuard: {
                type: GuardType,
                args: {
                    rut: { type: new GraphQLNonNull(GraphQLString) },
                    name: { type: new GraphQLNonNull(GraphQLString) }
                },
                resolve(parent, args) {
                    let guard = new Guard({
                        rut: args.rut,
                        name: args.name
                    });
                    return guard.save();
                } 
            },
            addParcel: {
                type: ParcelType,
                args: {
                    number: { type: new GraphQLNonNull(GraphQLInt) }
                },
                resolve(parent, args) {
                    let parcel = new Parcel({
                        number: args.number
                    });
                    return parcel.save();
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
                resolve(parent, args) {
                    let owner = new Owner({
                        rut: args.rut,
                        name: args.name,
                        phone: args.phone,
                        parcelId: args.parcelId
                    });
                    return owner.save();
                }
            }
        }
    })
});

module.exports = schema;