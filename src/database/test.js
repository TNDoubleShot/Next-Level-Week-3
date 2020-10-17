const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db =>{
  // inserir dados na tabela
  await saveOrphanage(db, {
  name: "Lar das Meninas",
  lat: "-27.222633",
  lng: "-49.6655874",
  whatsapp: "123456789",
  about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  images:[
    "https://images.unsplash.com/photo-1531515559935-22d5be677552?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
  ].toString(),
  instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
  opening_hours: "Horário de viditas Das 18h até 8h",
  open_on_weekends: "1"
 })

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  
  console.log(selectedOrphanages)

  // consultar somente um local pelo id
  /*const orphanage = await db.all('select * from orphanages where id ="2"')

  console.log(orphanage)*/

  // deletar dado da tabela
 /*
  console.log(await db.run("delete from orphanages where id = '4'"))
  console.log(await db.run("delete from orphanages where id = '5'"))
  console.log(await db.run("delete from orphanages where id = '6'"))
  console.log(await db.run("delete from orphanages where id = '7'"))
  console.log(await db.run("delete from orphanages where id = '8'"))*/

})