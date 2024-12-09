const equiposMayoresEdad = (equipos, edad) =>
  equipos.filter(
    ({
      asignado: {
        empleado: { edad: edadEquipo },
      },
    }) => edadEquipo > edad
  );
const equiposProvincia = (equipos, provincia) =>
  equipos.filter(
    ({ asignado: { provincia: provinciaEquipo } }) =>
      provincia.toLowerCase() === provinciaEquipo.toLowerCase()
  );
const provincias = (equipos) =>
  equipos
    .map(({ asignado: { provincia } }) => provincia)
    .filter((provincia, i, provincias) => provincias.indexOf(provincia) === i);
const puestos = (equipos) =>
  equipos.map(
    ({
      asignado: {
        empleado: { puesto },
      },
    }) => puesto
  );
const edadMedia = (equipos) =>
  equipos.reduce(
    (
      acumulador,
      {
        asignado: {
          empleado: { edad },
        },
      },
      i,
      equipos
    ) => (acumulador += edad / equipos.length),
    0
  );
const equiposPorEdad = (equipos) => {
  const equiposOrdenadosEdad = [...equipos];
  return equiposOrdenadosEdad.sort(
    //Hacemos spread para que devuelva nuevo array, pero ordenado, asi no tocamos el equipos original
    (
      {
        asignado: {
          empleado: { edad: edadPrimero },
        },
      },
      {
        asignado: {
          empleado: { edad: edadSegundo },
        },
      }
    ) => edadPrimero - edadSegundo
  );
};
const equiposTipo = (equipos, tipo) =>
  equipos.filter(
    ({ tipo: tipoEquipo }) => tipoEquipo.toLowerCase() === tipo.toLowerCase()
  );
const trabajadoresTipo = (equipos, tipo) =>
  equipos
    .filter(
      ({ tipo: tipoEquipo }) => tipoEquipo.toLowerCase() === tipo.toLowerCase()
    )
    .map(({ asignado: { empleado } }) => empleado);
const equiposPorTipo = (equipos) =>
  equipos.reduce((acumulador, equipo) => {
    const { tipo: tipoEquipoBuscar } = equipo;
    const categoria = acumulador.find(
      ({ tipo: tipoEquipo }) =>
        tipoEquipo.toLowerCase() === tipoEquipoBuscar.toLowerCase()
    );
    if (categoria) {
      categoria.equipos.push(equipo);
      return acumulador;
    } else {
      return [
        ...acumulador, //_______________
        {
          //                            |
          tipo: tipoEquipoBuscar, //    |_____________/> Agregar objeto al final de un array, sin que se cargue lo que había antes.
          equipos: [equipo], //         |Devuelveme un array nuevo, con los datos que habia del acumulador + agregas la nueva categoria.
        }, //___________________________|
      ];
    }
  }, []);
const equiposTipoLocalidad = (equipos, tipo, localidad) =>
  equipos.filter(
    ({ tipo: tipoEquipo, asignado: { poblacion } }) =>
      tipo.toLowerCase() === tipoEquipo.toLowerCase() &&
      localidad.toLowerCase() === poblacion.toLowerCase()
  );
const resumenEquipos = (equipos) =>
  equipos.map(
    ({
      id: idEquipo,
      asignado: { poblacion: poblacionEquipo, provincia: provinciaEquipo },
    }) => ({
      id: idEquipo,
      poblacion: poblacionEquipo,
      provincia: provinciaEquipo,
    })
  );
