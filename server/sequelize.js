// instantiate the connection to the DB

import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  // configuration options

  dialect: "sqlite",
  storage: "./sqlite/baza.db"
});

//.sync() vs .sync({force:true}) vs .sync({alter:true})

// .sync() will create the table once if it does not exist
// .sync({force:true}) will drop the tables first and then recreate them
// .sync({alter:true}) will alter the tables if the initial structure was modified

sequelize.sync({ alter: true }).then(() => {
  console.log("All the models have been synchronized");
}); // the sync method returns a Promise

export { sequelize };


// import {Sequelize} from "sequelize";

// const sequelize = new Sequelize({
//     // configuration options
  
//     dialect: "sqlite",
//     storage: "./sqlite/baza.db"
//   });
  
//   //.sync() vs .sync({force:true}) vs .sync({alter:true})
  
//   // .sync() will create the table once if it does not exist
//   // .sync({force:true}) will drop the tables first and then recreate them
//   // .sync({alter:true}) will alter the tables if the initial structure was modified
  
//   sequelize.sync({ alter: true }).then(() => {
//     console.log("All the models have been synchronized");
//   }); // the sync method returns a Promise
  
//   export { sequelize };

// // const sequelize = new Sequelize({
// //     dialect: "sqlite",
// //     sotrage: "./sqlite/",

// // });

// // sequelize.sync({alter: true}).then(() => {
// //     console.log("All the models have been synchronized");
// // });

// // export {sequelize};