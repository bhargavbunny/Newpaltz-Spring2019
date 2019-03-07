const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM springinclass_2019", (err, data) => {
            cb(err, data);
        });    
    },
    get(id, cb){

    },
    add(input, cb){
        if(!input.Person_Id){
            cb(Error('Person_id is required'))
            return
        }
        conn.query( "INSERT INTO springinclass_2019 (Person_Id,F_name,L_name) VALUES (?)",
                    [[input.Person_Id, input.F_name, input.L_name]],
                    (err, data) => {
                        cb(err, data);
                    }
        );    
    }
};

module.exports = model;