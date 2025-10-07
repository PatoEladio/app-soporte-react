import axios from "axios";

function agregarAnioEmpleadoService(datos) {
  return axios.post("http://localhost:4000/agregarAnioEmpleado", datos)
    .then(res => {
      return res;
    }).catch(err => {
      return err;
    })
}

export default agregarAnioEmpleadoService
