const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: [true, 'Please add location ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Location ID must be less than 10 chars']
    },
    // user will add address and the geocoder will convert the location and coordinates
    address: { 
        type: String,
        required: [true, 'Please add an address'],
    },
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'. a geojson point
          
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        },
        formattedAddress: String,
        formattedZipCode: String
      },
      createdAt: {
          type: Date,
          default: Date.now
      }
});
// Store is the name of the model
module.exports = mongoose.model('Store', StoreSchema);