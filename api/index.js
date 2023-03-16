//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getAndSavePokemons} = require('./src/controllers/Pokemon/getPokemons.js');  //Agregado por mí
const {getAndSaveTypes} = require('./src/controllers/Type/getTypes.js');  //Agregado por mí

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {        // ! TRUEEEEEEEEEEEEE
  //getAndSavePokemons();                   //Agregado por mí   //! VER QUE HACER CON ESTO
  //getAndSaveTypes();                      // Agregado por mí    //! VER QUE HACER CON ESTO
  //console.log('Database Cargada');        // Agregado por mí    //! VER QUE HACER CON ESTO
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
