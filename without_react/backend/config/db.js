module.exports = {
    excute: function (conditions) {
      return new Promise ((resolve, reject) => {
        const mysql = require('mysql')
        const connection = mysql.createConnection({
          host: 'db',
          port: 3306,
          user: 'root',
          password: 'root',
          database: 'db1'
        })
        connection.connect((err) => {
          if (err) {
            console.error('error connecting: ' + err.stack)
            resolve()
          }
  
          connection.query(conditions, (err, results, fields) => {
            resolve(JSON.parse(JSON.stringify(results)))
          })
        })
      })
    }
  }