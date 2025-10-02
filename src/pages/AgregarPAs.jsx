import { Button, CloseButton, Dialog, Input } from "@chakra-ui/react";
import { useState } from "react";
import agregarEmpleadoService from "../services/agregarEmpleadoService"
import toast from "react-hot-toast";
import useEmpleado from "../components/hooks/useEmpleado";

function AgregarPAs() {
  const { colaboradorObtenido, buscarEmpleado } = useEmpleado();

  const [datos, setDatos] = useState({
    runEmpleado: colaboradorObtenido.runEmpleado,
    anio: null
  });

  const agregarEmpleado = async e => {
    e.preventDefault();
    const loading = toast.loading("Agregando...")
    const response = await agregarEmpleadoService(datos)
    console.log(datos);

    const { status } = response;
    if (status == 200) {
      toast.success("Año agregado", { id: loading });
      buscarEmpleado(colaboradorObtenido)
    } else {
      toast.error("Ha ocurrido un error", { id: loading });
    }

    console.log(response);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button size={"sm"} variant={"outline"}>Agregar año</Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.CloseTrigger />
          <Dialog.Header>
            <Dialog.Title>Agregar nuevo año</Dialog.Title>
          </Dialog.Header>
          <form onSubmit={agregarEmpleado}>
            <Dialog.Body>
              <Input required onChange={e => setDatos({ ...datos, anio: e.target.value })} type="text" placeholder="2023" />
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Volver</Button>
              </Dialog.ActionTrigger>
              <Button type="submit">Agregar</Button>
            </Dialog.Footer>
          </form>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root >
  );
}

export default AgregarPAs;