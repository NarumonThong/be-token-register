const connection = require('../configs/database');
const { password_hash } = require('../configs/security');

module.exports = {
    onRegister(value) {
        return new Promise((resolve, reject) => {
            // เปลี่ยนรหัสเป็น sha1
            // value.u_password = password_hash(value.u_password);
            connection.query('INSERT INTO register_token SET ?', value, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            });
        });
    },
};