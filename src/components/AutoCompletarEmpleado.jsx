import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";

export default function AutocompleteReactSelect() {
  const options = [
    { value: "manzana", label: "Manzana" },
    { value: "banana", label: "Banana" },
    { value: "naranja", label: "Naranja" },
    { value: "pera", label: "Pera" },
  ];

  const [datos, setDatos] = useState([])

  let listaEmpleados = [];

  async function obtenerTodosLosEmpleados() {
    const response = axios.get("http://localhost:4444/obtenerTodosLosEmpleados").then((res) => {
      const { empleados } = res.data; 
      listaEmpleados.push(empleados)
      console.log(listaEmpleados);
    });
  }

  useEffect(() => {
    obtenerTodosLosEmpleados()
  }, [])

  return (
    <Select
      options={listaEmpleados}
      isClearable
      isSearchable
      placeholder="Selecciona una fruta..."
    />
  );
}
