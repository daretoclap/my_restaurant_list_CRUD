const mongoose = require('mongoose')
const Schema = mongoose.Schema

const typeString = {
  type: String, // 資料型別是字串
  required: true // 這是個必填欄位
}

const typeStringNR = {
  type: String, // 資料型別是字串
  required: false // 非必填欄位
}

const typeNumber = {
  type: Number, // 資料型別是數字
  required: true // 這是個必填欄位
}

const restaurantSchema = new Schema({
  name: typeString,
  name_en: typeStringNR,
  category: typeString,
  image: typeStringNR,
  location: typeString,
  phone: typeString,
  google_map: typeStringNR,
  rating: typeStringNR,
  description: typeString,
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
