const sql = require('mssql/msnodesqlv8');
const express = require('express');
const bodyParser = require('body-parser');

// Cấu hình kết nối cho các server
const configRoot = {
    server: 'DESKTOP-UL14UDV\\ROOT_SERVER',
    user: 'sa',
    password: '2004',
    database: 'SHOPONLINE',
    driver: 'msnodesqlv8',
    options: {
        trustServerCertificate: true
    }
};

const configServer1 = {
    server: 'DESKTOP-UL14UDV\\SERVER1',
    user: 'sa',
    password: '2004',
    database: 'SHOPONLINE_SERVER1',
    driver: 'msnodesqlv8',
    options: {
        trustServerCertificate: true
    }
};

const configServer2 = {
    server: 'DESKTOP-UL14UDV\\SERVER2',
    user: 'sa',
    password: '2004',
    database: 'SHOPONLINE_SERVER2',
    driver: 'msnodesqlv8',
    options: {
        trustServerCertificate: true
    }
};

// Tạo ứng dụng Express
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 8080;

// Kết nối tới server gốc
const connectRoot = new sql.ConnectionPool(configRoot).connect();

connectRoot
    .then((pool) => {
        console.log('Successfully connected to Root SQL Server.');

        // API lấy tất cả user
        app.get('/api/get-all-user', async (req, res) => {
            try {
                const result = await pool.request().query('SELECT * FROM DBO.Users');
                console.log('User Data:', result.recordset);
                res.json(result.recordset);
            } catch (err) {
                console.error('Error while executing query for users:', err);
                res.status(500).send('Error while executing query for users.');
            }
        });

        // API lấy tất cả sản phẩm
        app.get('/api/get-all-product', async (req, res) => {
            try {
                const result = await pool.request().query('SELECT * FROM DBO.Product');
                console.log('Product Data:', result.recordset);
                res.json(result.recordset);
            } catch (err) {
                console.error('Error while executing query for products:', err);
                res.status(500).send('Error while executing query for products.');
            }
        });

        // API thêm sản phẩm
        app.post('/api/add-product', async (req, res) => {
            const { ten_san_pham, don_gia } = req.body;
            if (!ten_san_pham || don_gia === undefined) {
                return res.status(400).json({ error: 'Missing product data.' });
            }

            try {
                // Xác định server cần thêm sản phẩm
                const targetConfig = don_gia < 500000 ? configServer1 : configServer2;

                // Kết nối tới server phù hợp
                const targetPool = await new sql.ConnectionPool(targetConfig).connect();

                // Thêm sản phẩm vào server phù hợp
                const query = `
                    INSERT INTO Product (ten_san_pham, don_gia)
                    VALUES (@ten_san_pham, @don_gia)
                `;
                await targetPool
                    .request()
                    .input('ten_san_pham', sql.NVarChar, ten_san_pham)
                    .input('don_gia', sql.Int, don_gia)
                    .query(query);

                res.status(201).json({ message: 'Product added successfully.' });
            } catch (err) {
                console.error('Error while adding product:', err);
                res.status(500).send('Error while adding product.');
            }
        });

        // Lắng nghe cổng
        app.listen(PORT, () => {
            console.log('Server is listening on port: ' + PORT);
        });
    })
    .catch((err) => {
        console.error('Unable to connect to Root SQL Server:', err);
    });
