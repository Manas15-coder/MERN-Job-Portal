const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Company name is required']
    },
    position: {
        type: String,
        required: [true, 'Job position is required'],
        maxlength: 100,
    },
    location: {
        type: String,
        default: 'Noida',
        required: [true, 'Work Location is required']
    },
    type: {
        type: String,
        default: 'full-time',
        required: [true, 'job type is required']
    },
    category: {
        type: String,
        default: 'programming'
    },
    pay: {
        type: String,
        default: 'inr'
    },
    description: {
        type: String,
        required: [true, "description is required"]
    },
    url: {
        type: String,
        required: [true, "url is required"]
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    applicants: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true })

const jobModel = mongoose.model("Job", jobSchema)

module.exports = jobModel;