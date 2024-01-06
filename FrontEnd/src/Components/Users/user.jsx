import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './user.css';

const Card = ({ imageUrl, namaBarang, hargaSewa, status, onDetailClick }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={namaBarang} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{namaBarang}</h2>
        <p className="card-text">Harga Sewa: Rp.{hargaSewa} per 3 hari</p>
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
        <img src={data.gambar} alt={data.namaBarang} className="popup-image" />
        <h2>{data.kostum}</h2>
        <p>Deskripsi: {data.deskripsi}</p>
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
  const [searchQuery, setSearchQuery] = useState('');
  const [Barang, setBarang] = useState({ data: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/kostum');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setBarang(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(Barang)
  const openPopup = (data) => {
    setSelectedData(data);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedData(null);
    setPopupOpen(false);
  };

  const handleMessageClick = () => {
    if (selectedData) {
      const { kostum, harga, deskripsi, gambar } = selectedData;
  
      const message = `\n\nSaya ingin menyewa: ${kostum}.\nHarga sewa: ${harga} per 3 hari.\nDeskripsi: ${deskripsi}`;
  
      const imageAttachment = `Foto Barang: (${gambar})`;
  
      const fullMessage = imageAttachment + message;
  
      window.location.href = `https://api.whatsapp.com/send?phone=+6289684633222&text=${encodeURIComponent(fullMessage)}`;
    }
  };  

  const filteredData = Barang.data.filter(item =>
    item && item.nama && item.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="body">
      <header className="header">
        <title>Ali Cosrent</title>
        <div className="left-section">
          <h1 className='admin-dashboard'>ALI-COSRENT</h1>
        </div>
        <div className="right-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} className='icon-search' />
          </div>
          <div className="login-container">
            <Link to="/login" style={{ color: 'white' }}>Login</Link>
          </div>
        </div>
      </header>
      <div className="card-container">
        {filteredData.map(item => (
          <Card
            key={item.id}
            imageUrl={item.gambar}
            namaBarang={item.kostum}
            hargaSewa={item.harga}
            status={item.status}
            onDetailClick={() => openPopup(item)}
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