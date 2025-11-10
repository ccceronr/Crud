const objeto1 = {nombre:"Diego", apellido: "Enriquez", edad:27}
const objeto2 = {edad:28, name:"Camila", estado_civil:"casada"}
console.log({objeto1,objeto2})
console.log({...objeto1,...objeto2})
//{nombre:"Diego", apellido: "Enriquez", edad:27}
//Cuando uso el spread operator queda: nombre:"Diego", apellido: "Enriquez", edad:27