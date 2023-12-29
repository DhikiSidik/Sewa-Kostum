import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './admin.css';

const Admin = () => {
    const [tableData, setTableData] = useState([
        {
            id: 1,
            nama: 'Product 1',
            gambar: 'https://example.com/image1.jpg',
            deskripsi: 'Description for Product 1',
            harga: '100000',
            status: 'Tersedia',
        },
        {
            id: 2,
            nama: 'Product 2',
            gambar: 'https://example.com/image2.jpg',
            deskripsi: 'Description for Product 2',
            harga: '150000',
            status: 'Tidak Tersedia',
        },
        // Add more data as needed
    ]);

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [editedItem, setEditedItem] = useState({
        id: null,
        nama: '',
        gambar: '',
        deskripsi: '',
        harga: '',
        status: '',
    });

    const handleAddButtonClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
        setEditedItem({
            id: null,
            nama: '',
            gambar: '',
            deskripsi: '',
            harga: '',
            status: '',
        });
    };

    const handleEdit = (id) => {
        const selectedItem = tableData.find((item) => item.id === id);
        setEditedItem(selectedItem);
        setPopupVisible(true);
    };

    const handleDelete = (id) => {
        const updatedTableData = tableData.filter((item) => item.id !== id);
        setTableData(updatedTableData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedItem({
            ...editedItem,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setTableData((prevData) =>
            prevData.map((item) =>
                item.id === editedItem.id ? { ...item, ...editedItem } : item
            )
        );

        handleClosePopup();
    };

    const handleTextareaResize = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;

        const popupContent = textarea.closest('.popup-content');
        if (popupContent) {
            const maxHeight = parseInt(getComputedStyle(popupContent).maxHeight, 10);
            if (textarea.scrollHeight > maxHeight) {
                popupContent.style.height = `${maxHeight}px`;
            } else {
                popupContent.style.height = 'auto';
            }
        }
    };

    return (
        <div className="body">
            <header className="header">
                <div className="left-section">
                    <h1 className='admin-dashboard'>Admin Dashboard</h1>
                </div>
                <div className="right-section">
                    <div className="search-container">
                        <input type="text" placeholder="Search..." />
                        <FontAwesomeIcon icon={faSearch} className='icon-search'/>
                    </div>
                    <button className="add-button" onClick={handleAddButtonClick}>
                        Tambah Barang
                    </button>
                </div>
            </header>
            <div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Gambar</th>
                            <th>Deskripsi</th>
                            <th>Harga</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nama}</td>
                                <td>
                                    <img src={item.gambar} alt={item.nama} className="table-image" />
                                </td>
                                <td>{item.deskripsi.slice(0, 20)}{item.deskripsi.length > 20 ? '...' : ''}</td>
                                <td>{`Rp. ${item.harga}`}</td>
                                <td>{item.status}</td>
                                <td className="action-column">
                                    <div className="action-buttons">
                                        <div onClick={() => handleEdit(item.id)}>
                                            <FontAwesomeIcon icon={faEdit} className='action-icon' />
                                            <span>Edit</span>
                                        </div>
                                        <div onClick={() => handleDelete(item.id)}>
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                className='action-icon'
                                            />
                                            <span>Delete</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>{editedItem.id ? 'Edit' : 'Tambah'} Barang</h2>
                        <form onSubmit={handleFormSubmit}>
                            <label>Nama:</label>
                            <input
                                type="text"
                                name="nama"
                                value={editedItem.nama}
                                onChange={handleInputChange}
                                required
                            />

                            <label>Gambar:</label>
                            <input
                                type="text"
                                name="gambar"
                                value={editedItem.gambar}
                                onChange={handleInputChange}
                                required
                            />

                            <label>Deskripsi:</label>
                            <textarea
                                name="deskripsi"
                                value={editedItem.deskripsi}
                                onChange={handleInputChange}
                                onInput={handleTextareaResize}
                                style={{ minHeight: '80px', resize: 'vertical', overflowY: 'auto' }}
                                required
                            />

                            <label>Harga:</label>
                            <div className="input-with-prefix">
                                <span>Rp.</span>
                                <input
                                    type="text"
                                    name="harga"
                                    value={editedItem.harga}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {editedItem.id && (
                                <>
                                    <label>Status:</label>
                                    <select
                                        name="status"
                                        value={editedItem.status}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="Tersedia">Tersedia</option>
                                        <option value="Tidak Tersedia">Tidak Tersedia</option>
                                    </select>
                                </>
                            )}

                            <button type="submit">Submit</button>
                        </form>

                        <button onClick={handleClosePopup} className="close-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
