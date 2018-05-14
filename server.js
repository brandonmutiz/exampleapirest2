const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = 'https://brandonmutizapirest.herokuapp.com';
const PORT = process.env.PORT || 5000

let users = ['BranndonGame', 'EstebanLGTBI', 'JuanChote9712'];
let niveles = ['juvenil', 'profesional', 'estrella', 'leyenda'];
let estado =['1','0'];

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

														},

			{			

			id : 2, 
			nom_preg:'¿El mejor gol de la historia de los mundiales es una obra del jugador?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Terry Butcher',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Gary Lineker',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Diego Maradona',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Jose Batista',
			estado:'0'
			}




																																
		]

														},

			{			

			id : 3, 
			nom_preg:'¿Qué selección de futbol ha participado en todos los mundiales?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Alemania',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Argentina',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Brasil',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Francia',
			estado:'0'
			}




																																
		]

														},

				{			

			id : 4, 
			nom_preg:'¿Qué selección ha ganado en cinco veces esta competición?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Uruguay',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Alemania',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Brasil',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Italia',
			estado:'0'
			}




																																
		]

														},

			{			

			id : 5, 
			nom_preg:'¿Cuál es goleador histórico de los mundiales?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Diego Maradona',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Pele',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Ronaldo',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Messi',
			estado:'0'
			}




																																
		]

														}






									
																												
									
									
									                     ]


														 
														 
														 
						},	{
		id:2,
		nivel: 'profesional',
		preguntas:[
		{			

			id : 1, 
			nom_preg:'¿El jugador más veterano en participar en un mundial fue?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Eusebio',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Helmut Haller',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Roger Milla',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Roger Hunt',
			estado:'0'
			}
																																
		]

														},



			{			

			id : 2, 
			nom_preg:'¿El entrenador que ha ganado dos veces seguidas el mundial?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Vittorio Pozo',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Luis Parreira',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Helmut Schön',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Luis Aragonés',
			estado:'0'
			}
																																
		]

														},

			{			

			id : 3, 
			nom_preg:'¿Qué selecciones se enfrentaron en el día celebre “maracanazo”?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Brasil vs España',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Alemania vs Inglaterra',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Brasil vs Argentina',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Brasil vs Uruguay',
			estado:'1'
			}
																																
		]

														},
			{			

			id : 4, 
			nom_preg:'¿En qué década no se disputo ningún mundial?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Los 30',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Los 40',
				estado:'1'
			},
			{
				id: 3 ,
				titulo_resp:'Los 50',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Los 60',
			estado:'0'
			}
																																
		]

														},
			{			

			id : 5, 
			nom_preg:'¿En qué año disputo Colombia su primer mundial?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'1962',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'1990',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'1996',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'1970',
			estado:'0'
			}
																																
		]

														}






														
														 
									
																												
									
									
									                     ]
														 
														 
														 
						},	{
		id:3,
		nivel: 'estrella',
		preguntas:[
		{			

			id : 1, 
			nom_preg:'¿Cuál es  la selección que más finales ha jugado y que no ha ganado ninguna?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Belgica',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Inglaterra',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Alemania',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Holanda',
			estado:'1'
			}
																																
		]

														},
			{			

			id : 2, 
			nom_preg:'¿El gol más rápido que se ha registrado en la historia de los mundiales fue anotado por?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Hakan Ükür',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Vaclav Masek',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Bryan Robson',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Celso Ayala',
			estado:'0'
			}
																																
		]

														},
			{			

			id : 3, 
			nom_preg:'¿La mascota oficial apodada “naranjito” fue en el mundial de?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'España1982',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Holanda1990',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Francia 1988',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Mexico1986',
			estado:'0'
			}
																																
		]

														},
			{			

			id : 4, 
			nom_preg:'¿Qué selección se Corono Campeón en el mundial EE.UU 1994?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Brasil',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Italia',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Suecia',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Inglaterra',
			estado:'0'
			}
																																
		]

														},
			{			

			id : 5, 
			nom_preg:'¿Cuándo fue la última vez que se disputo un mundial con 16 selecciones?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Mexico86',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'España82',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Argentina78',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Alemania74',
			estado:'0'
			}
																																
		]

														}


														
														 
									
																												
									
									
									                     ]
														 
														 
														 
						},
						{
		id:4,
		nivel: 'leyenda',
		preguntas:[
		{			

			id : 1, 
			nom_preg:'¿Cuál es el jugador con la expulsión más rápida con 52 segundos en la historia de los mundiales?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'José Batista',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Jorge Valdano',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Enzo Scifo',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Gary Lineker',
			estado:'0'
			}

																																
		]

														},

			{			

			id : 2, 
			nom_preg:'¿En qué estadio se disputó la final del Mundial de Francia 1998?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Velodrome',
				estado:'0'
			},
			{
				id: 2 ,
				titulo_resp:'Parque de los Principes',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Saint Dennis',
				estado:'1'
			},
			{
				id: 4 ,
			titulo_resp:'Stade Jacques',
			estado:'0'
			}

																																
		]

														},
			{			

			id : 3, 
			nom_preg:'¿Jugador que ha marcado el único gol olímpico en la historia de los mundiales?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Marcos Coll',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Cesareo Onzari',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Lev Yashin',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Leonel Sanchez',
			estado:'0'
			}

																																
		]

														},
			{			

			id : 4, 
			nom_preg:'¿En qué mundial se permitió por primera vez la sustitución de jugadores?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'México 1970',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Italia 1934',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Brasil 1950',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Alemania 1974',
			estado:'0'
			}

																																
		]

														},
			{			

			id : 1, 
			nom_preg:'¿Qué jugador marco el primer autogol de la historia?', 
			respuestas: [
			{
				id: 1,
				titulo_resp:'Manuel Rosas',
				estado:'1'
			},
			{
				id: 2 ,
				titulo_resp:'Djalma Santos',
				estado:'0'
			},
			{
				id: 3 ,
				titulo_resp:'Gary Neville',
				estado:'0'
			},
			{
				id: 4 ,
			titulo_resp:'Ivan Beck',
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


// URL para listar todos los niveles
// http://127.0.0.1:5000/niveles
app.get('/niveles', (req, res) => {
    res.send(niveles)
})

// URL para listar todos los estados
// http://127.0.0.1:5000/niveles
app.get('/estado', (req, res) => {
    res.send(estado)
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