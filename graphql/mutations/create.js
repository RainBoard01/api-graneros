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
            name: { type: new GraphQLNonNull(GraphQLString) },
            rut: { type: new GraphQLNonNull(GraphQLString) },
            type: { type: GraphQLString },
            patente: { type: GraphQLString },
            number: { type: new GraphQLNonNull(GraphQLInt) },
            observation: { type: new GraphQLNonNull(GraphQLString) },
            guardId: { type: new GraphQLNonNull(GraphQLID) }
        },
        async resolve(parent, args) {
            let personId;
            await Person.findOneAndUpdate(
                { rut: args.rut },
                { $setOnInsert: { name: args.name, rut: args.rut }},
                {
                    upsert: true,
                    new: true,
                    omitUndefined: true,
                    useFindAndModify: false
                },
                function(err, doc) {
                    if (err) {
                        console.log(err);
                    }
                    personId = doc._id;
                }
            );
            
            let vehicleId;
            if(args.patente){
                await Vehicle.findOneAndUpdate(
                    { patente: args.patente },
                    { $setOnInsert: { type: args.type, patente: args.patente }},
                    {
                        upsert: true,
                        new: true,
                        omitUndefined: true,
                        useFindAndModify: false
                    },
                    function(err, doc) {
                        if (err) {
                            console.log(err);
                        }
                        vehicleId = doc._id;
                    }
                );
            }

            let parcelId;
            await Parcel.findOneAndUpdate(
                { number: args.number },
                { $setOnInsert: { number: args.number }},
                {
                    upsert: true,
                    new: true,
                    omitUndefined: true,
                    useFindAndModify: false
                },
                function(err, doc) {
                    if (err) {
                        console.log(err);
                    }
                    parcelId = doc._id;
                }
            );

            let record = new Record({
                dateIn: args.dateIn,
                observation: args.observation,
                personId: personId,
                vehicleId: vehicleId,
                parcelId: parcelId,
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