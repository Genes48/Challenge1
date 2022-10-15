const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { createCategories } = require ("./src/routes/functions")

var categories = ["None","Services", "Shopping", "Vacations", "Entertainment", "Restaurants", "Supermarket", "Others"]

function crearCategorias (categories){
  for(let i=0; i<categories.length; i++){
    createCategories(categories[i])
  }
}

conn.sync({ force: false}).then(() => {
  server.listen(3003, () => {
    crearCategorias(categories)
    console.log('%s listening at 3003');
  });
});