var moment = require('moment'); // toda la info
moment.locale('es');

console.log('naci ' + moment('27/08/1999', 'dd/mm/yyyy').fromNow());