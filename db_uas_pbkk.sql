-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Jan 2024 pada 17.45
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_uas_pbkk`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `barang`
--

CREATE TABLE `barang` (
  `id` int(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `harga` varchar(255) NOT NULL,
  `status` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `barang`
--

INSERT INTO `barang` (`id`, `nama`, `gambar`, `deskripsi`, `harga`, `status`) VALUES
(1, 'Shizuku-Tan', 'https://down-id.img.susercontent.com/file/637127ba4614fb1c21a0313e0ddfb30c', 'dari anime sono bisque\n', '115000', 'Tersedia'),
(3, 'nahida', 'https://down-id.img.susercontent.com/file/d5f82ce161d878a09080b706be79f285', 'kostum nahida', '110000', 'Tersedia'),
(6, 'Furina', 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/8125voWDOBL._AC_UF894,1000_QL80_.jpg', 'furina dari game Genshin Impact', '130000', 'Tersedia'),
(7, 'Kato Megumi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9aNieAeMob6_kvVpNE7HW9ino1PzyLDWy8w&usqp=CAU', 'dari anime Saenai Heroine no Sodatekata (saekano)', '89000', 'Tersedia'),
(8, 'frieren ', 'https://ae01.alicdn.com/kf/Safbcd352736e4a3b967a7a652fdbd663Q/Sousou-No-Frieren-kostum-Frieren-baju-mantel-kostum-fantasi-wanita-dewasa-pakaian-pesta-karnaval-Halloween.jpg', 'fullset tertera di gambar', '110000', 'Tersedia'),
(9, 'Gawr Gura', 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/16/2660719d-5185-4d8e-b011-063c5a37eaee.jpg', 'kostum Gawr Gura dari hololive en', '90000', 'Tersedia'),
(10, 'Amelia Watson', 'https://ae01.alicdn.com/kf/H86984464211e448989a3574e48a124c8h/Hololive-Vtuber-Amelia-Watson-Cosplay-Costume-Halloween-Women.jpg', 'kostum Amelia Watson dari Vtuber Hololive En', '90000', 'Tersedia'),
(11, 'Vestia Zeta', 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/3/6f40fcf0-f125-4da9-bfde-06c6f6db952f.jpg', 'kostum Vestia Zeta dari Vtuber Hololive id gen 3', '120000', 'Tersedia'),
(13, 'Kobo Kanaeru', 'https://m.media-amazon.com/images/I/61k966S5WqL._AC_UY580_.jpg', 'kostm Kobo Kanaeru ', '95000', 'Tersedia'),
(14, 'Shinomiya Kaguya', 'https://ae01.alicdn.com/kf/Sac629d8d41ef4f2da1e8f839bdad3d4bb/Kostum-Cosplay-Anime-Kakuya-sama-Love-Is-War-Shinomiya-Kaguya-Gaun-Fujiwara-Chika-Pakaian-Anime-Dewasa.jpg', 'kaguya', '80000', 'Tersedia'),
(15, 'Hoshimachi Suisei', 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/6157diqi2nL._AC_UY1000_.jpg', 'sus', '120000', 'Tersedia'),
(16, 'Nakano Ichika', 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51y3AyI18+L._AC_UY1000_.jpg', 'ichika', '80000', 'Tersedia'),
(17, 'Nakano Nino', 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51KNXVnReCL._AC_UY1000_.jpg', 'nino', '90000', 'Tersedia'),
(18, 'Nakano Miku', 'https://down-id.img.susercontent.com/file/id-11134207-7qukw-li4ssdjylyzbd9', 'Nakano miku', '80000', 'Tersedia'),
(19, 'nakano Yotsuba', 'https://ae01.alicdn.com/kf/S6610d3e131d74fc9b96394233221d71cg/Kostum-Cosplay-Anime-Quintuplets-Nakano-Yotsuba-Itsuki-Rok-Ichika-Nino-Pakaian-Seragam-Sekolah-Lima-Pengantin-Yang.jpg', 'nakano Yotsuba', '80000', 'Tersedia'),
(26, 'Nakano Itsuki', 'https://ae01.alicdn.com/kf/H888062be8c9b4c1d8a3cabd0b6597754l.jpg_640x640Q90.jpg_.webp', 'nakano Itsuki', '90000', 'Tersedia'),
(27, 'Hoshino Ai', 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71q9VEScmmL._AC_UY1000_.jpg', 'Hoshino Ai dari Oshi no ko', '11000', 'Tersedia'),
(28, 'Hoshino Aquamarine', 'https://m.media-amazon.com/images/I/61h59AUqSIL._AC_UY580_.jpg', 'Hoshino Aqua dari Oshi no Ko', '85000', 'Tersedia'),
(29, 'Hoshino Rubby', 'https://ae01.alicdn.com/kf/Sff748b557728417b970586f3ae62aa6eg/Anime-Oshi-No-Ko-Ruby-Hoshino-kostum-Cosplay-jaket-Wig-seragam-rok-pakaian-setelan-Ai-Hoshino.jpg', 'Hoshino Rubby dari Oshi no ko', '100000', 'Tersedia'),
(30, 'Marin Kitagawa', 'https://down-id.img.susercontent.com/file/22098483f4262e09b824fed1a64008de', 'marin', '80000', 'Tersedia');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `email`, `username`, `password`) VALUES
(1, 'hibbanM@gmail.com', 'hibban', '$2a$10$.sDQqF6PgIY3G5PgfTjAJeMYf3TolvtEeynlpbnZW1L9XJTqjjnJK');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `barang`
--
ALTER TABLE `barang`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
