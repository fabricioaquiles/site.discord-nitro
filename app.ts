import express from 'express';

const app = express();

app.use("/", express.static('./public'));

app.get('*', (req, res) => {
    res.redirect("/#"+req.url);
})

app.listen(3000, function() {
    console.log("Servidor rodando");
})