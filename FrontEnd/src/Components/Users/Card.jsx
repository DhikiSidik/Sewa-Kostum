// Card.js
import React, { useState } from "react";
import Popup from "./Popup";

const Card = ({ data }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="card">
            <img src={data.imageUrl} alt={data.namaBarang} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{data.namaBarang}</h2>
                <p className="card-text">Harga Sewa: {data.hargaSewa} per 3 hari</p>
                <p className="card-text">Status: {data.status}</p>
                <button className="detail-button" onClick={openPopup}>Rincian</button>
            </div>
            {isPopupOpen && <Popup data={data} onClose={closePopup} />}
        </div>
    );
};

export default Card;
