import express from 'express';

const app = express();

app.use("/", express.static('./public'));

app.get('*', (req, res) => {
    res.redirect("/#"+req.url);
})

app.listen(process.env.PORT || 5000, function() {
    console.log("Servidor rodando");
})