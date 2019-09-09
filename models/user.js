let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate: {
            validator: function (value) {
                console.log(aValue);
                
                if (value % 2 === 0)
                    return true;
                else
                    return false;
            },
            message: 'Should be an even age!!! Sorrry :('
        },
        required: true
    },
    address: {
        type: String,
        set: function (newAddress) {
            console.log(' Address Setter');
            return "You live in "+newAddress;
        }
    },
    created: {
        type: Date,
        default: Date.now()
    }

});

userSchema.pre('save',function(){
    console.log(' Pre Save');
    this.address=this.address+" City";
    this.age=this.age+2;// any logic
})
let userModel = mongoose.model("UserCol", userSchema);

module.exports = userModel;