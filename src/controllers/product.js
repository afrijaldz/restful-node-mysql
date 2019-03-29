const conn = require('../config/db')

// show all products
exports.all = (req, res) => {
  try {
    const query = 'SELECT * FROM products'
    conn.query(query, (error, result) => {
      if (error) throw error

      const products = JSON.parse(JSON.stringify(result))
      res.status(200).json(products)
    })
  } catch (error) {
    console.log(error)
  }
}

// get product by id
exports.show = (req, res) => {
  const query = `SELECT * FROM products WHERE id=${req.params.id}`
  conn.query(query, (err, result) => {
    if (err) throw err
    
    const product = JSON.parse(JSON.stringify(result))
    res.status(200).json(product)
  })
}

// insert new data
exports.store = (req, res) => {
  const data = {
    name: req.body.name,
    price: req.body.price,
  }

  const query = 'INSERT INTO products SET ?'
  conn.query(query, data, (err, results) => {
    if (err) throw err
    res.status(200).json({
      status: 'success',
    })
  })
}

// edit data product by id
exports.update = (req, res) => {
  const query = `UPDATE products SET name='${req.body.name}', price='${req.body.price}' WHERE id=${req.params.id}`
  conn.query(query, (err, results) => {
    if (err) throw err
    res.status(200).json({
      status: 'success',
    })
  })
}

// delete data by id
exports.destroy = (req, res) => {
  const query = `DELETE FROM products WHERE id=${req.params.id}`
  conn.query(query, (err, results) => {
    if (err) throw err
    res.status(200).json({
      status: 'success',
    })
  })
}