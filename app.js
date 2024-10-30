const path = require('path');
const express = require('express');
const { connect } = require('./server');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Thực hiện truy vấn chỉ khi kết nối thành công
connect
    .then((pool) => {
        console.log('Kết nối SQL Server thành công!');

        // Truy vấn mẫu để lấy dữ liệu
        pool.request().query('SELECT * FROM DBO.KHOA')
            .then((result) => {
                console.log('Dữ liệu:', result.recordset);
            })
            .catch((err) => {
                console.error('Lỗi khi thực hiện truy vấn:', err);
            });
    })
    .catch((err) => {
        console.error('Lỗi kết nối SQL Server:', err);
    });

app.listen(3000, () => {
    console.log('Server đang chạy trên cổng 3000');
});
