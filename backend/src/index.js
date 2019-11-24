const app = require('./app');


//Database
require('./database/database')
//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server started on ${app.get('port')}`);
});