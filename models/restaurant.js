const mongoose = require('mongoose')
const Schema = mongoose.Schema

const typeString = {
  type: String, // 資料型別是字串
  required: true // 這是個必填欄位
}

const typeNumber = {
  type: Number, // 資料型別是數字
  required: true // 這是個必填欄位
}

const restaurantSchema = new Schema({
  name: typeString,
  name_en: typeString,
  category: typeString,
  image: typeString,
  location: typeString,
  phone: typeString,
  google_map: typeString,
  rating: typeNumber,
  description: typeString,
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
