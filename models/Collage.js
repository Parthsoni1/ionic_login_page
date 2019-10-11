const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollageSchema = new Schema({
    Department: [{
        MCA: [{
            semester1: [{
                type: Schema.Types.ObjectId,
                ref: 'Users'
            }],
            semester2: [{
                type: Schema.Types.ObjectId,
                ref: 'Users'
            }],
            semester3: [{
                type: Schema.Types.ObjectId,
                ref: 'Users'
            }],
            semester4: [{
                type: Schema.Types.ObjectId,
                ref: 'Users'
            }],
            semester5: [{
                type: Schema.Types.ObjectId,
                ref: 'Users'
            }],
            semester6: [{
                type: Schema.Types.ObjectId,
                ref: 'Users'
            }]
        }],
    }],
});
const Collage = mongoose.model('Collage', CollageSchema);

module.exports = Collage;