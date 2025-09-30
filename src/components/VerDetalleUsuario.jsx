import { Box, Button, CloseButton, Dialog, Field, HStack, IconButton, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import actualizarEmpleado from "../services/actualizarEmpleado";
import toast from "react-hot-toast";
import useEmpleado from "./hooks/useEmpleado";

function VerDetalleEmpleado({ anio, diasDisponibles1er, diasUtilizados1er, diasDisponibles2do, diasUtilizados2do, runEmpleado }) {
    const [datos, setDatos] = useState({
        diasPrimerSemestreDisponibles: diasDisponibles1er,
        diasPrimerSemestreUtilizados: diasUtilizados1er,
        diasSegundoSemestreDisponibles: diasDisponibles2do,
        diasSegundoSemestreUtilizados: diasUtilizados2do,
        runEmpleado: runEmpleado
    });

    const { colaboradorObtenido, buscarEmpleado } = useEmpleado();

    const onActualizarEmpleado = async (e) => {
        e.preventDefault();
        const loading = toast.loading("Actualizando datos...");
        const response = await actualizarEmpleado(anio, datos);
        const { status } = response;
        if (status == 200) {
            buscarEmpleado(colaboradorObtenido);
            toast.success("Actualizado correctamente!", { id: loading })
        } else {
            toast.error("Ha ocurrido un error", { id: loading })
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <IconButton aria-label='Ver PAs'>
                    <FaRegEdit />
                </IconButton>
            </Dialog.Trigger>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content>
                    <Dialog.CloseTrigger />
                    <Dialog.Header>
                        <Dialog.Title>Actualizar dias - AÑO {anio}</Dialog.Title>
                    </Dialog.Header>
                    <form onSubmit={onActualizarEmpleado}>
                        <Dialog.Body>
                            <Box mb={4}>
                                <Text fontWeight={700}>Primer semestre</Text>
                                <Box my={2}><hr /></Box>
                                <HStack gap={4} mt={4}>
                                    <Field.Root required>
                                        <Field.Label>Dias Disponibles</Field.Label>
                                        <Input type="number" placeholder="..." autoComplete="off" max={3} value={datos.diasPrimerSemestreDisponibles} onChange={e => setDatos({ ...datos, diasPrimerSemestreDisponibles: e.target.value })} />
                                    </Field.Root>
                                    <Field.Root required>
                                        <Field.Label>Dias Utilizados</Field.Label>
                                        <Input type="number" placeholder="..." autoComplete="off" max={3} value={datos.diasPrimerSemestreUtilizados} onChange={e => setDatos({ ...datos, diasPrimerSemestreUtilizados: e.target.value })} />
                                    </Field.Root>
                                </HStack>
                            </Box>
                            <Text fontWeight={700}>Segundo semestre</Text>
                            <Box my={2}><hr /></Box>
                            <HStack gap={4} mt={4}>
                                <Field.Root required>
                                    <Field.Label>Dias Disponibles</Field.Label>
                                    <Input type="number" placeholder="..." autoComplete="off" max={3} value={datos.diasSegundoSemestreDisponibles} onChange={e => setDatos({ ...datos, diasSegundoSemestreDisponibles: e.target.value })} />
                                </Field.Root>
                                <Field.Root required>
                                    <Field.Label>Dias Utilizados</Field.Label>
                                    <Input type="number" placeholder="..." autoComplete="off" max={3} value={datos.diasSegundoSemestreUtilizados} onChange={e => setDatos({ ...datos, diasSegundoSemestreUtilizados: e.target.value })} />
                                </Field.Root>
                            </HStack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Volver</Button>
                            </Dialog.ActionTrigger>
                            <Button type="submit">Guardar</Button>
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

export default VerDetalleEmpleado;