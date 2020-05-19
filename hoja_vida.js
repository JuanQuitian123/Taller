const express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');
    path = require('path'); 

    app.use(express.static(path.join(__dirname, "/public")));
    app.use(cookieParser());
    app.use(cookieSession({secret:"I´m a secret"}));

    app.get('/',(peticion,respuesta)=>{
        peticion.session.visitas || (peticion.session.visitas = 0);
        let n = peticion.session.visitas++
        console.log(`Visita # ${n}`);
        respuesta.sendFile(`${__dirname}/views/index.html`);
    });

    // Crearemos la ruta a usuarios 
    app.get('/experiencia',(peticion,respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/experiencia.html`);
    }); 

        // Crearemos la ruta a acerca
        app.get('/aptitudes',(peticion,respuesta)=>{
            respuesta.sendFile(`${__dirname}/views/aptitudes.html`);
        }); 


    app.listen(8080);
    console.log('Conexión realizada');



