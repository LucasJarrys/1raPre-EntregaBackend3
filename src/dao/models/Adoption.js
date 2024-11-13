import mongoose from "mongoose";

const AdoptionSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", required: true 
    },
  pet: {
     type: mongoose.Schema.Types.ObjectId,
      ref: "Pet", required: true 
    },
  adoptionDate: { 
    type: Date, default: Date.now 
},
});

export const AdoptionModel = mongoose.model("Adoption", AdoptionSchema);

// import mongoose from "mongoose";


// const collection = "Adoptions";

// const schema = new mongoose.Schema({
//     owner:{
//         type:mongoose.SchemaTypes.ObjectId,
//         ref:'Users'
//     },
//     pet:{
//         type:mongoose.SchemaTypes.ObjectId,
//         ref:'Pets'
//     }
// })

// const AdoptionModel = mongoose.model(collection,schema);

// export default AdoptionModel;