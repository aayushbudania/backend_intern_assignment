import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true,
        },
        price: {
                type: Number,
                required: true,
        },
        password: {
                type: String,
                required: true,
        },
        featured: {
                type: Boolean,
                default: false,
        },
        rating: {
                type: Decimal128,
        },
        company: {
                type: String,
                required: true
        },
        createdAt: {
            type: Date,
            required: true,
        }
        },
        {
                timestamps: true,
        })

export default mongoose.model("Patient",PatientSchema);