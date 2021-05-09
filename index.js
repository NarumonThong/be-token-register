const express = require('express');
const server = express();
// const session = require('express-session');
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3030;

// const connect =  require("./configs/database");


// ตั้งค่า Session สำหรับระบบ
// server.use(session({
//     secret: 'barter kub',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {  }
// }));

// ตั้งค่าการ Parse ตัวแปร เมื่อ Client ส่งข้อมูลเข้ามา
// server.use(bodyParser.urlencoded({ extended: false }));
// server.use(bodyParser.json());
// server.use(express.bodyParser());

// สร้าง  Custom function
// server.use(require('./configs/middleware'));

// เรียกใช้งาน router
// server.use('/api', require('./router'));

server.get('/', (req, res) => {
    res.end(`<h1>Backend Server is Register Token</h1>`)
});

server.listen(PORT, () => console.log(`Server is stared. Port ${PORT}.`))