const { connect } = require('mongoose');

connect('mongodb://localhost/portafolio',{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
 })
    .then(db => console.log('Database is connected') )
    .catch(error => console.log(error) );