CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    volume DECIMAL(10,2), -- ឧ. បរិមាណ ឬទំហំ (ឯកតា៖ លីត្រ, ម៉ែត្រគូប, លេខ)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
