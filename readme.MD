# Ejercicio 7 - Equipos

## HTML & CSS

Maqueta la página que ves en las capturas usando Bootstrap. Recuerda que tiene dos versiones dependiendo del ancho del viewport. No hace falta que tengas en cuenta los móviles.

Todos los botones deben lleva la clase `boton`. Además, cada uno de ellos debe llevar una de estas clases, en el siguiente orden:

`gt30` `tarragona` `provincias` `puestos` `edad-media` `orden-edad` `sobremesa` `trabajadores-portatil` `equipos-tipo` `portatiles-tarragona` `resumen`

El recuadro gris oscuro de la derecha debe llevar la clase `consola`.

## JS

En el archivo `js/equipos.js` tienes un objeto con un listado de equipos asignados a trabajadores de una empresa. Crea un nuevo archivo JS que se cargue después de éste (que no se llame `scripts.js`), y en él crea:

1. Una función `equiposMayoresEdad` que reciba un array de equipos y una edad, y que devuelva un array con los equipos asignados a personas mayores de esa edad.
2. Una función `equiposProvincia` que reciba un array de equipos y una provincia, y que devuelva un array con los equipos asignados a personas de esa provincia.
3. Una función `provincias` que reciba un array de equipos y devuelva un array de provincias donde haya equipos.
4. Una función `puestos` que reciba un array de equipos y devuelva un array de puestos de trabajadores con equipo asignado.
5. Una función `edadMedia` que reciba un array de equipos y devuelva la media de edad de trabajadores con equipo asignado.
6. Una función `equiposPorEdad` que reciba un array de equipos y devuelva los equipos ordenados por edad del trabajador, de más joven a más viejo.
7. Una función `equiposTipo` que reciba un array de equipos y un tipo, y que devuelva un array con los equipos de ese tipo.
8. Una función `trabajadoresTipo` que reciba un array de equipos y un tipo, y que devuelva un array de trabajadores con equipo de ese tipo asignado.
9. Una función `equiposPorTipo` que reciba un array de equipos y que devuelva un array de equipos organizados por tipo, con esta forma:

```
[
  {
    tipo: "Portátil",
    equipos: [(todos los equipos de tipo Portátil)]
  },
  {
    tipo: "Sobremesa",
    equipos: [(todos los equipos de tipo Sobremesa)]
  }
]
```

10. Una función `equiposTipoLocalidad` que reciba un array de equipos, un tipo y una localidad, y que devuelva un array de equipos de ese tipo y asignados a trabajadores de esa provincia.
11. Una función `resumenEquipos` que reciba un array de equipos y que devuelva un array de objetos con esta forma:

```
{
  id: X,
  poblacion: XXX,
  provincia: XXX
}
```
