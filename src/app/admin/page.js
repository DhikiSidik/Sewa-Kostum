import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dummyData from '../data/dummy';

export default function Page() {
  const styles = `
    .admin-page {
      padding: 20px;
    }

    .button-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .add-product-button {
      padding: 10px;
      font-size: 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .add-product-button:hover {
      background-color: #0056b3;
    }

    .input-container {
      display: flex;
      margin-bottom: 10px;
      align-items: center;
    }

    .input-label {
      margin-right: 10px;
      width: 100px;
      text-align: right;
    }

    .input-field {
      padding: 8px;
      width: 200px;
      border: 2px solid #000000;
      border-radius: 4px;
    }

    .textarea-field {
      padding: 8px;
      width: 200px;
      height: 45px; /* Set the height for the textarea */
      border: 2px solid #000000;
      border-radius: 4px;
    }

    .list_kostum_css {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around; /* Align items with equal space around */
    }

    .kartu_kostum {
      border: 1px solid #000000;
      margin: 10px;
      padding: 10px;
      width: 300px; /* Set the fixed width for each costume card */
      height: 500px; /* Set the fixed height for each costume card */
    }

    .font-bold {
      font-weight: bold;
    }

    .detail-container {
      margin-top: 10px;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="admin-page">
        <div className="button-container">
          <div>
            <button className="add-product-button">Tambah Produk</button>
          </div>
          <div className="input-container">
            <label className="input-label">Nama Kostum:</label>
            <input className="input-field" type="text" />
          </div>
          <div className="input-container">
            <label className="input-label">Gambar:</label>
            <input className="input-field" type="text" placeholder="Enter image link" />
          </div>
          <div className="input-container">
            <label className="input-label">Rincian:</label>
            <textarea className="textarea-field" />
          </div>
          <div className="input-container">
            <label className="input-label">Harga:</label>
            <input className="input-field" type="text" value="Rp. " />
          </div>
        </div>
        <div className="list_kostum_css">
          {dummyData.map((product) => (
            <div key={product.id} className="kartu_kostum">
              <Link href={`/${product.id}`}>
                <Image src={product.gambar} width={300} height={300} />
                <p className="font-bold p-4">{product.kostum}</p>
                <div className="detail-container">
                  <p>Rincian: {product.rincian}</p>
                  <p>Harga: {product.harga}</p>
                </div>
                <p>status: {product.status}</p>
                <button className="delete-button" disabled>
                  Delete
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}