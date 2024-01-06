const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const connection = require('../config/database');
const { isLoggedIn } = require('../middleware/users');

router.get('/', function (req, res) {
  connection.query('SELECT * FROM barang', function (err, rows) {
    if (err) {
      return res.status(500).json({
        status: false,
        message: 'Internal Server Error',
      });
    } else {
      return res.status(200).json({
        status: true,
        message: 'List Data barang',
        data: rows,
      });
    }
  });
});

router.post('/add', isLoggedIn, [
  body('nama').notEmpty(),
  body('gambar').notEmpty(),
  body('deskripsi').notEmpty(),
  body('harga').notEmpty(),
  body('status').notEmpty(),
], async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    const formData = {
      nama: req.body.nama,
      gambar: req.body.gambar,
      deskripsi: req.body.deskripsi,
      harga: req.body.harga,
      status: req.body.status,
    };

    const result = await connection.query('INSERT INTO barang SET ?', formData);

    return res.status(201).json({
      status: true,
      message: 'Insert Data Successfully',
      data: {
        id: result.insertId,
        ...formData,
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal Server Error',
    });
  }
});

router.patch('/edit/:id', isLoggedIn, [
  body('nama').notEmpty(),
  body('gambar').notEmpty(),
  body('deskripsi').notEmpty(),
  body('harga').notEmpty(),
  body('status').notEmpty(),
], async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    const id = req.params.id;
    const formData = {
      nama: req.body.nama,
      gambar: req.body.gambar,
      deskripsi: req.body.deskripsi,
      harga: req.body.harga,
      status: req.body.status,
    };

    await connection.query(`UPDATE barang SET ? WHERE id = ${id}`, formData);

    return res.status(200).json({
      status: true,
      message: 'Update Data Successfully!',
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal Server Error',
    });
  }
});

router.delete('/delete/:id', isLoggedIn, function (req, res) {
  const id = req.params.id;

  connection.query(`DELETE FROM barang WHERE id = ${id}`, function (err, rows) {
    if (err) {
      console.error('Error deleting item:', err);
      return res.status(500).json({
        status: false,
        message: 'Internal Server Error',
      });
    } else {
      console.log('Item deleted successfully');
      return res.status(200).json({
        status: true,
        message: 'Delete Data Successfully!',
      });
    }
  });
});

module.exports = router;
