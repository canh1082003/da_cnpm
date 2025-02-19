
CREATE TABLE `SanPham`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL,
    `nhacungcapId` BIGINT NOT NULL,
    `quantity` INT NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL
);


CREATE TABLE `DonHang`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `customerId` BIGINT UNSIGNED NOT NULL,
     `status` ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') NOT NULL DEFAULT 'pending',
    `created_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL,
    `total_amount` DECIMAL(8, 2) NOT NULL,
     CONSTRAINT `donhang_customerid_foreign` FOREIGN KEY (`customerId`) REFERENCES `KhachHang`(`id`) ON DELETE CASCADE
);

CREATE TABLE `ChiTietDonHang`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `orderId` BIGINT UNSIGNED NOT NULL,
    `productId` BIGINT UNSIGNED NOT NULL,
    `quantity` INT NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL,
    CONSTRAINT `chitietdonhang_orderid_foreign` FOREIGN KEY (`orderId`) REFERENCES `DonHang`(`id`) ON DELETE CASCADE,
    CONSTRAINT `chitietdonhang_productid_foreign` FOREIGN KEY (`productId`) REFERENCES `SanPham`(`id`) ON DELETE CASCADE
);
CREATE TABLE `KhachHang`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL
);

CREATE TABLE `LichSuTrangThai`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `orderId` BIGINT UNSIGNED NOT NULL,
    `status` ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') NOT NULL,
    `changed_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT `lichsutrangthai_orderid_foreign` FOREIGN KEY (`orderId`) REFERENCES `DonHang`(`id`) ON DELETE CASCADE
);
