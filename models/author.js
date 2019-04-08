var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    first_name: { type: String, required: true, max: 100 },
    family_name: { type: String, required: true, max: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date }
});

AuthorSchema
.virtual('name')
.get(function () {
    return this.family_name + ', ' + this,first_name;
});

AuthorSchema
.virtual('lifespan')
.get(function () {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

AuthorSchema
.virtual('url')
.get(function() {
    return '/catalog/author/' + this._id;
});

AuthorSchema
.virtual('url')
.get(function () {
    var lifetime_string='';
    if (this.date_of_birth) {
        lifetime_string = moment(this.date_of_birth).format('MMM Do, YYY')
    }
    lifetime_string += ' - ';
    if (this.date_of_death) {
        lifetime_string += moment(this.date_of_death).format('MMM Do, YYY');
    }
    return lifetime_string
});

AuthorSchema
.virtual('date_of_birth_yyyy-mm-dd')
.get(function() {
    return moment(this.date_of_birth.format('YYYY-MM-DD'));
});

AuthorSchema
.virtual('date_of_death_yyyy-mm-dd')
.get(function() {
    return moment(this.date_of_death.format('YYYY-MM-DD'));
});

// Exports module
module.exports = mongoose.model('Author', AuthorSchema);