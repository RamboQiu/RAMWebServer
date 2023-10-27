
var show_all = {
    showAll: 'select * from user'
}

var insert_one = {
    insertOne: 'INSERT INTO user(user_name, user_info, user_email) VALUES(?,?,?)',
};

//exports
module.exports = {
    insert_one: insert_one,
    show_all: show_all
};