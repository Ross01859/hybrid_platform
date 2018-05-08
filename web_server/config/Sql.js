module.exports = {
    usersql: {
        login: 'SELECT * FROM user WHERE username = ? AND password=?',
        insert: 'INSERT INTO user(username,password,sex,age,tel) VALUES(?,?,?,?,?)',
        queryAll: 'SELECT * FROM user',
        getUserByName: 'SELECT * FROM user WHERE username = ? ',
    },
    goodlist: {
        insert: 'INSERT INTO goods(name,price,number,des) VALUES(?,?,?,?)',
        queryAll: 'SELECT * FROM goods',
        getUserByName: 'SELECT * FROM goods WHERE name = ? ',
    }
}