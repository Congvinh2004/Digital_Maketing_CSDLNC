const sql = require('mssql/msnodesqlv8');

const configRoot = {
    server: 'DESKTOP-UL14UDV\\ROOT_SERVER',
    user: 'sa',
    password: '2004',
    database: 'SHOPONLINE',
    driver: 'msnodesqlv8',
    options: {
        trustServerCertificate: true,
    },
};

const connectRoot = async () => {
    try {
        const pool = await new sql.ConnectionPool(configRoot).connect();
        console.log('Successfully connected to Root SQL Server.');
        return pool;
    } catch (err) {
        console.error('Unable to connect to Root SQL Server:', err);
        throw err;
    }
};

module.exports = { connectRoot, sql };
