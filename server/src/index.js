require('./database');
const app = require('./app');

app.listen(app.get('port'));

console.log("ON PORT", app.get("port"));