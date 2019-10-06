const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollageSchema = new Schema({
    Department:[{
        MCA:[{
            semester1:[{
                type:Schema.Types.ObjectId,
                ref:'students'
            }],
            semester2:[{
                type:Schema.Types.ObjectId,
                ref:'students'
            }],
            semester3:[{
                type:Schema.Types.ObjectId,
                ref:'students'
            }],
            semester4:[{
                type:Schema.Types.ObjectId,
                ref:'students'
            }],
            semester5:[{
                type:Schema.Types.ObjectId,
                ref:'students'
            }],
            semester6:[{
                type:Schema.Types.ObjectId,
                ref:'students'
            }]
        }],
    }],
});
const Collage  = mongoose.model('Collage',CollageSchema);

module.exports = Collage;