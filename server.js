// memanggil express
const express = require("express")

// membuat object app dari express
const app = express()

// panggil router member
const member = require("./routers/member")

app.use("/member", member)


// panggil router paket
const paket = require("./routers/paket")

app.use("/paket", paket)

// panggil router users
const users = require("./routers/users")

app.use("/users", users)

// panggil router transaksi
const transaksi = require("./routers/transaksi")

app.use("/transaksi", transaksi)

// panggil router login
const { login } = require("./routers/login")

app.use("/login", login)

// membuat port
app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})