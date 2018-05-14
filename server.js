const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = 'https://brandonmutizapirest.herokuapp.com';
const PORT = process.env.PORT || 5000

let users = ['BranndonGame', 'EstebanLGTBI', 'JuanChote9712', 'MiderosPro'];
let niveles = ['juvenil', 'profesional', 'estrella', 'leyenda'];

let mundialitoscore= [
	{
		id:1,
		nivel: 'juvenil',
		preguntas:[
		{			

			id : 1, 
			nom_preg:'¿En qué país se celebró la  primera edición de la Copa del Mundo de fútbol?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Francia',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Inglaterra',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Uruguay',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Holanda',
			estado:'0'
			}
																																
		]

														}



														
														 
									
																												
									
									
									                     ]
														 
														 
														 
						}		
						
                     ];



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ********************************************************************
// ******************************************************************

// URL raiz de la api
// http://127.0.0.1:5000
app.get('/', (req, res) => {
    res.status(200).send("BIENVENDO A API REST")
})

// URL para listar todos los usuarios
// http://127.0.0.1:5000/users
app.get('/users', (req, res) => {
    res.send(users)
})

// URL para listar todos los mundialitos
// http://127.0.0.1:5000/mundialitoscore
app.get('/mundialitoscore', (req, res) => {
    res.send(mundialitoscore)
})

// URL para añadir un usuario
// http://127.0.0.1:5000/users

app.post('/users', (req, res) => {
    let data = req.query;
    users.push(data.user_name)
    res.send("New user add")
})

// URL para actualizar un usuario
// http://127.0.0.1:5000/users/1
app.patch('/users/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    users[params.id] = data.user_name
    res.send("User update")
})

// URL para eliminar un usuario
// http://127.0.0.1:5000/users/1
app.delete('/users/:id',(req, res) => {
    let params = req.params;
    users.splice(params.id, 1);
    res.send('User delete')
})

// ********************************************************************
// ********************************************************************

// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})