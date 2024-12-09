const consola = document.querySelector(".consola");
const pre = document.createElement("pre");
const limpiaConsola = () => {
  consola.textContent = "";
};
for (let boton of document.querySelectorAll("button")) {
  boton.addEventListener("click", (e) => {
    const nuevoPre = pre.cloneNode();
    limpiaConsola();
    if (e.target.classList.contains("gt30")) {
      nuevoPre.textContent = JSON.stringify(
        equiposMayoresEdad(equipos, 30),
        null,
        2
      );
    } else if (e.target.classList.contains("tarragona")) {
      nuevoPre.textContent = JSON.stringify(
        equiposProvincia(equipos, "tarragona"),
        null,
        2
      );
    } else if (e.target.classList.contains("provincias")) {
      nuevoPre.textContent = JSON.stringify(provincias(equipos), null, 2);
    } else if (e.target.classList.contains("puestos")) {
      nuevoPre.textContent = JSON.stringify(puestos(equipos), null, 2);
    } else if (e.target.classList.contains("edad-media")) {
      nuevoPre.textContent = JSON.stringify(edadMedia(equipos), null, 2);
    } else if (e.target.classList.contains("orden-edad")) {
      nuevoPre.textContent = JSON.stringify(equiposPorEdad(equipos), null, 2);
    } else if (e.target.classList.contains("sobremesa")) {
      nuevoPre.textContent = JSON.stringify(
        equiposTipo(equipos, "sobremesa"),
        null,
        2
      );
    } else if (e.target.classList.contains("trabajadores-portatil")) {
      nuevoPre.textContent = JSON.stringify(
        trabajadoresTipo(equipos, "portátil"),
        null,
        2
      );
    } else if (e.target.classList.contains("equipos-tipo")) {
      nuevoPre.textContent = JSON.stringify(equiposPorTipo(equipos), null, 2);
    } else if (e.target.classList.contains("portatiles-tarragona")) {
      nuevoPre.textContent = JSON.stringify(
        equiposTipoLocalidad(equipos, "portátil", "tarragona"),
        null,
        2
      );
    } else if (e.target.classList.contains("resumen")) {
      nuevoPre.textContent = JSON.stringify(resumenEquipos(equipos), null, 2);
    }
    consola.appendChild(nuevoPre);
  });
}
