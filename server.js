// server.js

const sql = require('mssql/msnodesqlv8');

const config = {
    server: '127.0.0.1\\SERVER_ROOT',
    user: 'sa',
    password: '2004',
    database: 'TEST',
    driver: 'msnodesqlv8',
    options: {
        trustServerCertificate: true  // Để tránh lỗi SSL nếu không dùng chứng chỉ
    }
};

// Kết nối tới SQL Server
const connect = new sql.ConnectionPool(config).connect().then((pool) => {
    console.log('Đã kết nối thành công tới SQL Server.');
    console.log('check pool: ', pool)
    return pool;
}).catch((err) => {
    console.error('Không thể kết nối đến SQL Server:', err);
});

module.exports = {
    sql,
    connect
};
