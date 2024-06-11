const express = require('express');
const app = express();
const port = 3000;

const precios = {
  entrenamientoPersonalizado: 50, 
  planesDeAlimentacion: 30,       
  lugarDeEntrenamiento: 20        
};

function calcularCostoPromo1() {
  return precios.entrenamientoPersonalizado + precios.planesDeAlimentacion;
}

function calcularCostoPromo2() {
  return precios.lugarDeEntrenamiento + precios.planesDeAlimentacion;
}

// Ruta raíz
app.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenido</h1>
    <p>Visite las siguientes rutas para ver los costos de las promociones:</p>
    <ul>
      <li><a href="/promo1">Promo 1 (Entrenamiento personalizado + Planes de alimentación)</a></li>
      <li><a href="/promo2">Promo 2 (Lugar de entrenamiento + Planes de alimentación)</a></li>
    </ul>
  `);
});

app.get('/promo1', (req, res) => {
  const costoPromo1 = calcularCostoPromo1();
  res.send(`Costo de la Promo 1 (Entrenamiento personalizado + Planes de alimentación): ${costoPromo1}`);
});

app.get('/promo2', (req, res) => {
  const costoPromo2 = calcularCostoPromo2();
  res.send(`Costo de la Promo 2 (Lugar de entrenamiento + Planes de alimentación): ${costoPromo2}`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
