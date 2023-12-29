// Popup.js
import React from "react";
import './popup.css';

const Popup = ({ data, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <img src={data.imageUrl} alt={data.namaBarang} className="popup-image" />
                <h2>{data.namaBarang}</h2>
                <p>{data.deskripsi}</p>
                <p>Harga Sewa: {data.hargaSewa} per 3 hari</p>
                <p>Status: {data.status}</p>
            </div>
        </div>
    );
};

export default Popup;
