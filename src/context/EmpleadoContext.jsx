import { createContext, useState } from "react";

export const EmpleadoContext = createContext({
    msg: "",
    nombreEmpleado: "",
    runEmpleado: "",
    empleado: []
});

function EmpleadoContextProvider({ children }) {
    const [colaboradorObtenido, setColaboradorObtenido] = useState({
        msg: "",
        nombreEmpleado: "",
        runEmpleado: "",
        empleado: []
    });

    return (
        <EmpleadoContext.Provider value={{ colaboradorObtenido, setColaboradorObtenido }}>
            {children}
        </EmpleadoContext.Provider>
    )
}

export default EmpleadoContextProvider;