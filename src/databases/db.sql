
CREATE TABLE `SanPham`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(8, 2) NOT null,
     `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `DonHang`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `customerId` BIGINT UNSIGNED NOT NULL,
     `status` ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') NOT NULL DEFAULT 'pending',
     `location` ENUM('Đơn hàng kho phân loại HN SOC', 'Đơn hàng đang được trung chuyển tới Da Nang SOC', 'Đơn hàng đã đến kho phân loại Da Nang SOC', 'Đơn hàng đang trên đường giao đến bạn', 'Đơn hàng đã được giao thành công') NOT null,
    `created_at` TIMESTAMP NOT NULL,
    `updated_at` TIMESTAMP NOT NULL,
    `total_amount` DECIMAL(8, 2) NOT NULL,
    `orderCode` VARCHAR(10) NOT NULL unique,
    `shipperId` VARCHAR(50) NOT null,
     CONSTRAINT `donhang_customerid_foreign` FOREIGN KEY (`customerId`) REFERENCES `KhachHang`(`id`) ON DELETE CASCADE
);

CREATE TABLE `ChiTietDonHang`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `orderId` BIGINT UNSIGNED NOT NULL,
    `productId` BIGINT UNSIGNED NOT NULL,
    `quantity` INT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL,
    CONSTRAINT `chitietdonhang_orderid_foreign` FOREIGN KEY (`orderId`) REFERENCES `DonHang`(`id`) ON DELETE CASCADE,
    CONSTRAINT `chitietdonhang_productid_foreign` FOREIGN KEY (`productId`) REFERENCES `SanPham`(`id`) ON DELETE CASCADE
);
CREATE TABLE `KhachHang`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT null,
    `phone` VARCHAR(255)  NULL,
    `address` VARCHAR(255)  null,
    `role` ENUM('user', 'admin', 'shipper') NOT NULL DEFAULT 'user'
);


