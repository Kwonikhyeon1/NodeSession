let mysql = require('mysql');

const DBs = {
    DB_LOCAL: () => {
        return mysql.createConnection({          
            host: '192.168.56.101', 
            user: 'root',
            password: '1234',
            database: 'DB_MEMBER1010', 
        });
    },
    DB_DEV: () => {
        return mysql.createConnection({          
            host: '192.168.56.102', 
            user: 'root',
            password: '1234',
            database: 'DB_MEMBER1010', 
        });
    },
    DB_PROD: () => {
        return mysql.createConnection({          
            host: '192.168.56.103', 
            user: 'root',
            password: '1234',
            database: 'DB_MEMBER1010', 
        });
    },
}

module.exports = DBs;