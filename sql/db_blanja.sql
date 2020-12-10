-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 10 Des 2020 pada 08.32
-- Versi server: 10.3.27-MariaDB-0+deb10u1
-- Versi PHP: 7.3.19-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_blanja`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `category_name`) VALUES
(1, 'tshirt'),
(2, 'Jacket'),
(3, 'short'),
(4, 'pants'),
(5, 'shoes');

-- --------------------------------------------------------

--
-- Struktur dari tabel `color`
--

CREATE TABLE `color` (
  `id` int(11) NOT NULL,
  `color_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `color`
--

INSERT INTO `color` (`id`, `color_name`) VALUES
(1, 'black'),
(2, 'red'),
(3, 'blue'),
(4, 'green');

-- --------------------------------------------------------

--
-- Struktur dari tabel `conditions`
--

CREATE TABLE `conditions` (
  `id` int(11) NOT NULL,
  `condition_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `conditions`
--

INSERT INTO `conditions` (`id`, `condition_name`) VALUES
(1, 'New'),
(2, 'Second');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `id_transactions` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `levels`
--

CREATE TABLE `levels` (
  `id` int(10) NOT NULL,
  `level` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `levels`
--

INSERT INTO `levels` (`id`, `level`) VALUES
(1, 'Seller'),
(2, 'Customer');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `images` text NOT NULL,
  `id_category` int(11) NOT NULL,
  `product_brand` varchar(200) NOT NULL,
  `product_rating` int(11) NOT NULL,
  `product_price` decimal(10,0) NOT NULL,
  `id_color` int(11) NOT NULL,
  `id_size` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `id_condition` int(11) NOT NULL,
  `description` text NOT NULL,
  `created_time` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `product_name`, `images`, `id_category`, `product_brand`, `product_rating`, `product_price`, `id_color`, `id_size`, `qty`, `id_condition`, `description`, `created_time`, `updated_time`) VALUES
(1, 'Jaket anti air', 'iniadalahImagesKaos', 1, 'Nevada', 4, '21', 3, 2, 10, 1, 'Ini adalah kaos berkualitas yang penuh berkah', '2020-11-23 22:31:16', '2020-12-08 03:36:50'),
(3, 'Jaket anti air', 'iniadalahImageJeans', 3, 'Levis', 5, '40', 4, 3, 6, 1, 'ini adalah produk jeans limited edition', '2020-11-23 22:37:50', '2020-12-08 03:36:50'),
(4, 'Jaket anti air', 'iniadalahImagesJaketHoodie', 2, 'Hugo', 5, '300', 1, 3, 3, 1, 'ini adalah hoodie buatan lokal', '2020-11-24 01:09:50', '2020-12-08 03:36:50'),
(5, 'Jaket anti air', 'iniadalahImagesJaketHoodie', 2, 'Hugo', 5, '300', 1, 3, 3, 1, 'ini adalah hoodie buatan lokal', '2020-11-24 01:11:14', '2020-12-08 03:36:50'),
(6, 'Jaket anti hujan', 'iniadalahImagesJaketHoodie', 2, 'Hugo', 5, '200', 1, 3, 3, 1, 'ini adalah hoodie buatan lokal', '2020-11-24 01:14:48', '2020-12-08 04:07:46'),
(7, 'Jaket anti air', 'iniadalahimageskaoshula-hula', 1, 'Zalora', 4, '100', 1, 4, 6, 1, 'ini adalah kaos hula-hula keren\r\n', '2020-11-24 15:09:56', '2020-12-08 03:36:50'),
(8, 'Jaket anti air', 'iniadalahImagesKaosVneck', 1, 'Rider', 5, '500', 1, 3, 3, 1, 'ini adalah hoodie buatan lokal', '2020-11-24 15:48:08', '2020-12-08 03:36:50'),
(9, 'Jaket anti air', 'iniadalahImagesKaosOneck', 1, 'Rider', 5, '100', 1, 3, 3, 1, 'ini adalah hoodie buatan lokal', '2020-11-25 11:30:39', '2020-12-08 03:36:50'),
(10, 'Jaket anti air', 'iniadalahImagesKaosOneck', 1, 'Rider', 5, '150', 2, 3, 3, 1, 'ini adalah hoodie buatan lokal', '2020-11-25 11:31:23', '2020-12-08 03:36:50'),
(12, 'Jaket anti air', 'iniadalahImagesJaketantiPetir', 2, 'Rider', 5, '200', 3, 4, 5, 1, 'ini adalah hoodie buatan lokal indones', '2020-11-25 11:58:16', '2020-12-08 03:36:50'),
(13, 'Jaket anti air', 'iniadalahImagesJaketantiPetir', 2, 'Rider', 5, '100', 3, 4, 5, 1, 'ini adalah hoodie buatan lokal indones', '2020-11-25 11:58:21', '2020-12-08 03:36:50'),
(14, 'Jaket anti air', 'iniadalahImagesJaketantiPetir', 2, 'Rider', 5, '100', 3, 4, 5, 1, 'ini adalah hoodie buatan lokal indones', '2020-11-25 11:59:04', '2020-12-08 03:36:50'),
(15, 'Jaket anti air', 'iniadalahImagesJaketantiPetir', 2, 'Rider', 5, '100', 3, 4, 5, 1, 'ini adalah hoodie buatan lokal indones', '2020-11-25 12:09:01', '2020-12-08 03:36:50'),
(16, 'Jaket anti air', 'iniadalahImagesJaketantiPetir', 2, 'Rider', 5, '100', 3, 4, 5, 1, 'ini adalah hoodie buatan lokal indones', '2020-12-02 06:58:59', '2020-12-08 03:36:50'),
(17, 'Jaket anti air', 'iniadalahImagesJaketantiPetir', 2, 'Rider', 5, '100', 3, 4, 5, 1, 'ini adalah hoodie buatan lokal indones', '2020-12-08 03:33:12', '2020-12-08 03:36:50'),
(18, 'Jaket anti air', 'iniadalahImagesJaketantiPetir', 2, 'Rider', 5, '100', 3, 4, 5, 1, 'ini adalah hoodie buatan lokal indones', '2020-12-08 03:33:47', '2020-12-08 03:36:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `size_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `size`
--

INSERT INTO `size` (`id`, `size_name`) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L'),
(4, 'XL'),
(5, 'XXL'),
(6, 'XXXL');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `no_transaction` varchar(200) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `created_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `no_transaction`, `id_user`, `id_product`, `created_time`, `updated_time`) VALUES
(1, '000001', 10, 1, '2020-11-25 07:09:03', '2020-11-25 07:09:03'),
(2, '000002', 10, 3, '2020-11-25 11:34:16', '2020-11-25 11:34:16'),
(3, '000003', 11, 4, '2020-11-25 11:52:33', '2020-11-25 11:52:33');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(100) NOT NULL,
  `id_level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `id_level`) VALUES
(1, 'hello@gmail.com', '$2b$10$uO477eaZfn02H8vFLq2od.r.vtNXTYUxCRez9PqDVPcfICdmofBZy', 1),
(5, 'hello23@gmail.com', '$2b$10$8fTRQRvyj8ld5KqOjjlQcOFnMLJlH3Kw/2h0GCdhkdYd8vvrBfZuu', 2);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_transactions` (`id_transactions`);

--
-- Indeks untuk tabel `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `color`
--
ALTER TABLE `color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `conditions`
--
ALTER TABLE `conditions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
