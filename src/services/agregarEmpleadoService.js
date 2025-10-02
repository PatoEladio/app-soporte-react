import axios from "axios";

function agregarEmpleadoService(datos) {
  return axios.post("http://localhost:4000/agregarEmpleado", datos)
    .then(res => {
      return res;
    }).catch(err => {
      return err;
    })
}

export default agregarEmpleadoService
