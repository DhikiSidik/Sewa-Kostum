const express = require('express');
const router = express.Router();

//import express validator
const { body, validationResult } = require('express-validator');

//import database
const connection = require('../config/database');

/**
 * INDEX barang
 */
router.get('/', function (req, res) {
    //query
    connection.query('SELECT * FROM barang', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data barang',
                data: rows
            })
        }
    });
});

/**
 * STORE barang
 */
router.post('/add', [

    //validation
    // body('id').notEmpty(),
    body('kostum').notEmpty(),
    body('gambar').notEmpty(),
    body('deskripsi').notEmpty(),
    body('harga').notEmpty(),
    body('status').notEmpty()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    //define formData
    let formData = {
        // id: req.body.id,
        kostum: req.body.kostum,
        gambar: req.body.gambar,
        deskripsi: req.body.deskripsi,
        harga: req.body.harga,
        status: req.body.status
    }

    // insert query
    connection.query('INSERT INTO barang SET ?', formData, function (err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(201).json({
                status: true,
                message: 'Insert Data Successfully',
                data: rows[0]
            })
        }
    })

});

/**
 * SHOW barang
 */
router.get('/(:id)', function (req, res) {

    let id = req.params.id;

    connection.query(`SELECT * FROM barang WHERE id = ${id}`, function (err, rows) {

        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        }

        // if barang not found
        if (rows.length <= 0) {
            return res.status(404).json({
                status: false,
                message: 'Data barang Not Found!',
            })
        }
        // if barang found
        else {
            return res.status(200).json({
                status: true,
                message: 'Detail Data barang',
                data: rows[0]
            })
        }
    })
})

/**
 * UPDATE barang
 */
router.patch('/edit/:id', [

    //validation
    body('kostum').notEmpty(),
    body('gambar').notEmpty(),
    body('deskripsi').notEmpty(),
    body('harga').notEmpty(),
    body('status').notEmpty()

], (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    //id barang
    let id = req.params.id;

    //data barang
    let formData = {
        kostum: req.body.kostum,
        gambar: req.body.gambar,
        deskripsi: req.body.deskripsi,
        harga: req.body.harga,
        status: req.body.status
    }

    // upharga query
    connection.query(`UPDATE barang SET ? WHERE id = ${id}`, formData, function (err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'Upharga Data Successfully!'
            })
        }
    })

});

/**
 * DELETE barang
 */
router.delete('/delete/(:id)', function (req, res) {

    let id = req.params.id;

    connection.query(`DELETE FROM barang WHERE id = ${id}`, function (err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'Delete Data Successfully!',
            })
        }
    })
});

module.exports = router;
