// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/AbhishekEkaanth'));

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/AbhishekEkaanth/dist/index.html'));
// });


// // app.get('*', function(req, res) {
// //     const index = path.join(__dirname, 'dist', 'index.html');
// //     res.sendFile(index);
// // })

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

const express = require('express');
const path = require('path');


const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);