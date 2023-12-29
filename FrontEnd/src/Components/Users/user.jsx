import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './user.css';

const DummyData = [
  {
    id: 1,
    imageUrl: 'https://i.pinimg.com/1200x/66/19/5d/66195dbdc70b25a0a56efa11c499c36e.jpg',
    Deskripsi: 'waduh cantik bet',
    namaBarang: 'Barang 1',
    hargaSewa: 'Rp 50.000',
    status: 'Tersedia',
  },
  {
    id: 2,
    imageUrl: 'https://i.pinimg.com/1200x/66/19/5d/66195dbdc70b25a0a56efa11c499c36e.jpg',
    Deskripsi: 'waduh cantik bet',
    namaBarang: 'Barang 1',
    hargaSewa: 'Rp 50.00',
    status: 'Tersedia',
  },
  {
    id: 3,
    imageUrl: 'https://i.pinimg.com/1200x/66/19/5d/66195dbdc70b25a0a56efa11c499c36e.jpg',
    Deskripsi: 'waduh cantik bet',
    namaBarang: 'Barang 1',
    hargaSewa: 'Rp 50.000',
    status: 'Tersedia',
  },
];

const Card = ({ imageUrl, namaBarang, hargaSewa, status, onDetailClick }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={namaBarang} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{namaBarang}</h2>
        <p className="card-text">Harga Sewa: {hargaSewa} per 3 hari</p>
        <p className="card-text">Status: {status}</p>
        <button className="detail-button" onClick={onDetailClick}>
          Rincian
        </button>
      </div>
    </div>
  );
};

const DetailPopup = ({ data, onClose, onMessageClick }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <img src={data.imageUrl} alt={data.namaBarang} className="popup-image" />
          <h2>{data.namaBarang}</h2>
          <p>Deskripsi: {data.Deskripsi}</p>
          <p>Harga Sewa: {data.hargaSewa} per 3 hari</p>
          <p>Status: {data.status}</p>
          <div className="popup-buttons">
            <button className="popup-button close-btn" onClick={onClose}>
              Tutup
            </button>
            <button className="popup-button message-btn" onClick={onMessageClick}>
              Pesan
            </button>
          </div>
        </div>
      </div>
    );
  };

  const User = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
  
    const openPopup = (data) => {
      setSelectedData(data);
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setSelectedData(null);
      setPopupOpen(false);
    };
  
    const handleMessageClick = () => {
      console.log('Tombol Pesan Diklik!');
      // Implementasikan logika pengiriman pesan di sini
    };
  
    return (
      <div className="body">
        <header className="header">
          <div className="left-section">
            <h1 className='admin-dashboard'>Nama APP apa ?</h1>
          </div>
          <div className="right-section">
            <div className="search-container">
              <input type="text" placeholder="Search..." />
              <FontAwesomeIcon icon={faSearch} className='icon-search'/>
            </div>
            <div className="login-container">
              <Link to="/login" style={{ color: 'white' }}>Login</Link>
            </div>
          </div>
        </header>
        <div className="card-container">
          {DummyData.map((data) => (
            <Card
              key={data.id}
              imageUrl={data.imageUrl}
              namaBarang={data.namaBarang}
              hargaSewa={data.hargaSewa}
              status={data.status}
              onDetailClick={() => openPopup(data)}
            />
          ))}
        </div>
  
        {isPopupOpen && (
          <>
            <DetailPopup data={selectedData} onClose={closePopup} onMessageClick={handleMessageClick} />
          </>
        )}
      </div>
    );
  };
  
  export default User;
