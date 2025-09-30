import { useContext } from "react";
import { EmpleadoContext } from "../../context/EmpleadoContext";
import toast from "react-hot-toast";
import obtenerEmpleadoPorRut from "../../services/obtenerEmpleadoPorRut";

function useEmpleado() {
    const { colaboradorObtenido, setColaboradorObtenido } = useContext(EmpleadoContext);

    const buscarEmpleado = async (empleado) => {
        const loading = toast.loading("Buscando...");
        const buscarEmpleado = await obtenerEmpleadoPorRut(empleado);
        if (buscarEmpleado.status == 200) {
            const { data } = buscarEmpleado;
            toast.success("Empleado encontrado!", { id: loading });
            setColaboradorObtenido(data);
        } else {
            toast.error("No se ha encontrado un empleado con el rut ingresado", { id: loading });
            setColaboradorObtenido({
                msg: "",
                nombreEmpleado: "",
                runEmpleado: "",
                empleado: []
            });
        }
    }

    return {
        buscarEmpleado,
        colaboradorObtenido,
    }
}

export default useEmpleado;