const express = require('express');
const router = express.Router();

// Import express validator
const { body, validationResult } = require('express-validator');

// Import database
const connection = require('../config/database');

/**
 * INDEX barang
 */
router.get('/', function (req, res) {
    // Query
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

/**
 * STORE barang
 */
router.post(
    '/add',
    [
        // Validation
        body('nama').notEmpty(),
        body('gambar').notEmpty(),
        body('deskripsi').notEmpty(),
        body('harga').notEmpty(),
        // Status is set to "Tersedia" by default
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
            });
        }

        // Set default status to "Tersedia"
        req.body.status = "Tersedia";

        // Insert query
        connection.query('INSERT INTO barang SET ?', req.body, function (err, result) {
            if (err) {
                return res.status(500).json({
                    status: false,
                    message: 'Internal Server Error',
                });
            } else {
                // Fetch the inserted data to return in the response
                connection.query('SELECT * FROM barang WHERE id = ?', result.insertId, function (err, rows) {
                    if (err) {
                        return res.status(500).json({
                            status: false,
                            message: 'Internal Server Error',
                        });
                    } else {
                        return res.status(201).json({
                            status: true,
                            message: 'Insert Data Successfully',
                            data: rows[0],
                        });
                    }
                });
            }
        });
    }
);


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
            });
        }

        if (rows.length <= 0) {
            return res.status(404).json({
                status: false,
                message: 'Data barang Not Found!',
            });
        } else {
            return res.status(200).json({
                status: true,
                message: 'Detail Data barang',
                data: rows[0],
            });
        }
    });
});

/**
 * UPDATE barang
 */
router.patch(
    '/edit/:id',
    [
        // Validation
        body('nama').notEmpty(),
        body('gambar').notEmpty(),
        body('deskripsi').notEmpty(),
        body('harga').notEmpty(),
        body('status').notEmpty(),
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
            });
        }

        // Id barang
        let id = req.params.id;

        // Data barang
        let formData = {
            nama: req.body.nama,
            gambar: req.body.gambar,
            deskripsi: req.body.deskripsi,
            harga: req.body.harga,
            status: req.body.status,
        };

        // Update query
        connection.query(`UPDATE barang SET ? WHERE id = ${id}`, formData, function (err, rows) {
            if (err) {
                return res.status(500).json({
                    status: false,
                    message: 'Internal Server Error',
                });
            } else {
                return res.status(200).json({
                    status: true,
                    message: 'Update Data Successfully!',
                });
            }
        });
    }
);

/**
 * DELETE barang
 */
router.delete('/delete/(:id)', function (req, res) {
    let id = req.params.id;

    connection.query(`DELETE FROM barang WHERE id = ${id}`, function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            });
        } else {
            return res.status(200).json({
                status: true,
                message: 'Delete Data Successfully!',
            });
        }
    });
});

module.exports = router;
