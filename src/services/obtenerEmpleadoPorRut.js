import axios from "axios";

function obtenerEmpleadoPorRut(empleado) {
    return axios.post("http://localhost:4000/buscarEmpleadoPorRut", empleado)
        .then(res => {
            const { status, data } = res;
            return { data, status };
        }).catch(err => {
            return err;
        })
}

export default obtenerEmpleadoPorRut;