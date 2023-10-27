-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2023 at 09:20 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `colleges`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `rollNo` int(11) DEFAULT NULL,
  `standard` varchar(100) DEFAULT NULL,
  `academicYear` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleteAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `rollNo`, `standard`, `academicYear`, `createdAt`, `updatedAt`, `deleteAt`) VALUES
(2, 'Kenjal', 101, 'TYCS', 2025, '2023-10-24 22:48:33', '2023-10-24 22:48:33', '2023-10-08 22:49:02'),
(3, 'RAJAN JI', 103, 'TYCS', 2023, '2023-10-25 09:48:33', '2023-10-25 09:48:33', '2023-10-26 09:49:40'),
(4, 'Neeraj Shukla', 120, 'MSC CS ', 2017, '2023-10-25 09:48:33', '2023-10-25 09:48:33', '2023-10-18 09:49:19'),
(5, 'Anurag', 131, 'TYCS', 2023, '2023-10-26 19:30:59', '2023-10-27 19:30:08', '2023-10-26 19:30:08'),
(6, 'Akash Gupta', 23, 'M.TECH', 2025, '2023-10-27 03:29:55', '2023-10-27 19:15:40', '2023-10-27 19:17:32'),
(9, 'Pankaj Chaudhary', 156, 'TYCS', 2024, '2023-10-27 12:40:12', '2023-10-27 19:15:40', '2023-10-27 19:17:32'),
(10, 'Laxmi Sharma', 133, 'SYCS', 2023, '2023-10-27 13:38:04', '2023-10-27 19:15:40', '2023-10-27 19:17:32'),
(13, 'Achal Gupta', 25, 'FY.BCOM', 2025, '2023-10-27 16:07:08', '2023-10-27 19:15:40', '2023-10-27 19:17:32'),
(17, 'jai ho', 87, 'TYCS', 142, '2023-10-27 07:38:37', '2023-10-27 13:45:40', '2023-10-27 13:47:32'),
(18, 'ghj', 521, 'uikjgyu', 74521, '2023-10-27 18:39:18', '2023-10-27 19:15:40', '2023-10-27 19:17:32'),
(20, 'Nepali', 21, 'FYBAF', 24, '2023-10-27 07:55:09', '2023-10-27 19:15:40', '2023-10-27 19:17:32'),
(21, 'Akash Yadav', 242, 'SYCS', 2019, '2023-10-27 19:06:06', '2023-10-27 19:15:40', '2023-10-27 19:17:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
