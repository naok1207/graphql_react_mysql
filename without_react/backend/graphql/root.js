const connectDB = require('../config/db')

// const root = {
//   members: (search) => {
//     return new Promise((resolve) => {
//       let conditions = 'SELECT * FROM `members`'
//       const filter = Object.keys(search)
//       if(filter.length !== 0) {
//         conditions += ' WHERE `' + filter[0] + '` = "' + search[filter[0]] + '"'
//       }

//       connectDB.excute(conditions).then((results) => {
//         resolve(results)
//       })
//     })
//   },
//   addMember: (search) => {
//     return new Promise((resolve) => {
//       let conditions = 'INSERT INTO `members` (name, gender) VALUES (\'' + search.name + '\', \'' + search.gender + '\') ON DUPLICATE KEY UPDATE name = VALUES(name)'

//       connectDB.excute(conditions).then((results) => {
//         resolve(results)
//       })
//     })
//   },
//   delMember: (search) => {
//     return new Promise((resolve) => {
//       let conditions = 'DELETE FROM `members` WHERE id = ' + search.id

//       connectDB.excute(conditions).then((results) => {
//         resolve(results)
//       })
//     })
//   }
// }

const root = {
    memos: (search) => {
        return new Promise((resolve) => {
            let conditions = 'SELECT * FROM `memos`'
            const filter = Object.keys(search)
            if(filter.length !== 0) {
                conditions += ' WHERE `' + filter[0] + '` = "' + search[filter[0]] + '"'
            }

            connectDB.excute(conditions).then((results) => {
                resolve(results)
            })
        })
    },
    // memo: (search) => {
    //     return new Promise((resolve) => {
    //         let conditions = 'SELECT * FROM `memos` WHERE id = ' + id

    //     })
    // }
    createMemo: (search) => {
        return new Promise((resolve) => {
            let conditions = 'INSERT INTO `memos` (title, content) VALUES (\'' + search.title + '\', \'' + search.content + '\')'

            connectDB.excute(conditions).then((results) => {
                resolve(results)
            })
        })
    }
}

// getMemos = (search) => {
//     return new Promise((resolve) => {
//         let conditions = 'SELECT * FROM `memos`'
//         const filter = Object.keys(search)
//         if(filter.length !== 0) {
//             conditions += ' WHERE `' + filter[0] + '` = "' + search[filter[0]] + '"'
//         }

//         connectDB.excute(conditions).then((results) => {
//             resolve(results)
//         })
//     })
// }

module.exports = root;