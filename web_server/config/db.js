const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'F1n2g90',
    database: 'test_db',
    port: 3306
})

function query(sql, conditions, callback) {
    pool.getConnection(function(err, connection) {
        connection.query(sql, conditions,
            function(err, rows) {
                callback(err, rows)
                connection.release()
            })
    })
}

module.exports.query = query