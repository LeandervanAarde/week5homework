-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 30, 2022 at 11:04 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weekfive`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(4) NOT NULL,
  `first` varchar(255) NOT NULL,
  `last` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `userCreate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first`, `last`, `email`, `contact`, `username`, `password`, `userCreate`) VALUES
(15, 'Dunkan', 'Manahime', 'dunk@crunk.com', 874858234, 'PoesBastard', '30360d85b7cc4b15bfa90499e5795474', '2022-05-24 19:10:44'),
(16, 'Peter', 'Paul', 'mike@openiwndow.co.za', 928283831, 'Tools', 'aa5b9f5dbe9ad5f96a4235e85ed897de', '2022-05-24 19:28:04'),
(17, 'Mike', 'Maynard', 'mike@openwindow.com', 844091837, 'James24', '7899d290b35561d44c10e9841d780126', '2022-05-24 19:55:45'),
(29, 'Mike', ' ', 'Maynard', 88467584, 'Kibits24', 'eef993a787255d3aba5a1783842c8733', '2022-05-25 15:21:12'),
(37, 'Leander', 'van Aarde', '', 767468465, 'Lele', 'f2991d0bc4c3edd114843a044033b00b', '2022-05-30 11:01:56'),
(39, 'Leander', 'van Aarde', 'Leander.vaonline@gmail.com', 786627745, 'Leander123', 'f2991d0bc4c3edd114843a044033b00b', '2022-05-30 11:03:38'),
(40, 'Leander', 'van Aarde', 'Leander.vaonline@gmail.com', 786627745, 'Leander123', 'f2991d0bc4c3edd114843a044033b00b', '2022-05-30 11:03:40'),
(41, 'Leander', 'van Aarde', 'Leander.vaonline@gmail.com', 786627745, 'Leander123', 'f2991d0bc4c3edd114843a044033b00b', '2022-05-30 11:03:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
