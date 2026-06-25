import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();


const server = express();  //servidor 
 
server.set('view engine', 'mustache'); //template engine 
server.set('views', path.join(__dirname, 'views')); //pastas do projeto (views) 
server.engine('mustache', mustache());  //engine do mustache

server.use(express.static(path.join(__dirname, '../public'))); //arquivos estaticos (css, js, imagens)


//Rotas
server.use(mainRoutes);

server.use((req, res) => {
    res.render('pages/404');
});
server.listen(process.env.PORT); // rodar servidor na porta definida no arquivo .env


