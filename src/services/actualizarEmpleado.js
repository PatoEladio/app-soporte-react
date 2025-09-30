import axios from "axios";

function actualizarEmpleado(anio, datos) {
    return axios.put(`http://localhost:4000/actualizarDiasEmpleado/${anio}`, datos)
        .then(res => {
            return res;
        }).catch(err => {
            console.log(err);
        })
}

export default actualizarEmpleado;