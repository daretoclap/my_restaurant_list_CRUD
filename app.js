const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const Restaurant = require('./models/restaurant')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Set connection to database
mongoose.connect('mongodb://localhost/my-restaurants', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection // 取得資料庫連線狀態
db.on('error', () => { // 連線異常
  console.log('mongodb error!')
})
db.once('open', () => { // 連線成功
  console.log('mongodb connected!')
})

// Set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

// Set router for index page (list of restaurants)
app.get('/', (req, res) => {
  Restaurant.find() // 取出 Restaurant model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .then(restaurants => res.render('index', { restaurants })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})

// Set router for viewing restaurant detail
app.get('/restaurants/:restaurant_id', (req, res) => {
  console.log(req.params.restaurant_id)
  const id = req.params.restaurant_id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

// Set router for filter function
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  let filteredList = []
  return Restaurant.find()
    .lean()
    .then(restaurants => {
      filteredList = restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
      })
    })
    .then(() => res.render('index', { restaurants: filteredList, keyword: keyword }))
    .catch(error => console.log(error))
})

// Set router for edit page
app.get('/restaurants/:restaurant_id/edit', (req, res) => {
  console.log(req.params.restaurant_id)
  const id = req.params.restaurant_id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

// Set router for edit-save 
app.post('/restaurants/:restaurant_id/edit', (req, res) => {
  console.log(req.params.restaurant_id)
  const id = req.params.restaurant_id
  console.log(req.body)
  const category = req.body.category
  console.log(category)
  return Restaurant.findById(id)
    .then(restaurant => {
      restaurant.category = category
      return restaurant.save()
    })
    .then(restaurant => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

// Set router for delete function
app.post('/restaurants/:restaurant_id/delete', (req, res) => {
  console.log(req.params.restaurant_id)
  const id = req.params.restaurant_id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Get the server to listen
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

// Set the static files
app.use(express.static('public'))
