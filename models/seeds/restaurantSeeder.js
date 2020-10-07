const mongoose = require('mongoose')
const Restaurant = require('../restaurant') // 載入 restaurant model
const restaurants = require('./restaurant.json')

mongoose.connect('mongodb://localhost/my-restaurants', { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb connection error')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected @ Seeder!')
  restaurants.results.forEach(restaurant => {
    Restaurant.create({
      name: restaurant.name,
      name_en: restaurant.name_en,
      category: restaurant.category,
      image: restaurant.image,
      location: restaurant.location,
      phone: restaurant.phone,
      google_map: restaurant.google_map,
      rating: restaurant.rating,
      description: restaurant.description
    })
  })
  console.log('done!')
})