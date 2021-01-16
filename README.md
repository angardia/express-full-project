# Basic express project - with CRUD, RESTful api standards & moment.js

PUT request - used pre-request script in Postman using moment.js for the date & time.
validation with moment.js using npm installation.

pre-request script: 
const moment = require('moment')
pm.globals.set("current_timestamp", moment().format("DD-MM-YYYY HH:mm:ss"))

