const utils = require('../utils');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  6️⃣ ***** EJERCICIO 6 ***** - getBrandPrices 6️⃣:

   🟢 Debes retornar la suma del precio de todos los coches de la marca recibida por parámetro.
   🟢 Si recibes el parámetro "unused" con valor true, entonces retorna la suma de precios sólo de los coches 
   que sean nuevos.
   🟢 Si recibes el parámetro "unused" con valor false, entonces retorna la suma de precios sólo de los coches 
   que sean usados.
   🟢 Si la marca no existe, arrojar un error que diga: "Marca no encontrada".
      
   📢 PUNTOS A TENER EN CUENTA 📢
   1)El parámetro "unused" puede tener el valor null.
   2) Debes obtener los coches a partir de los IDs almacenados en su marca.
*/

const getBrandPrices = (brand, unused) => {
  const brandFound = utils.brands.find(b => b.name === brand)
  if (!brandFound) throw new Error ("Marca no encontrada");
  const carsByBrand = utils.cars.filter(c => brandFound.cars.includes(c.id));
  let result = 0;
  if (unused === null){
    carsByBrand.forEach(car => {
      result += car.price
    });
  }
  if (unused) {
    carsByBrand.forEach(car => {
      if (car.new) result += car.price
    });
  }
  if (unused === false) {
    carsByBrand.forEach(car => {
      if (car.new === false) result += car.price
    });
  }
  return result;
};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = getBrandPrices;
