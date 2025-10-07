import { Box, Button, Heading, HStack, Input, Table } from '@chakra-ui/react';
import useEmpleado from '../hooks/useEmpleado';
import { useState } from 'react';
import VerDetalleEmpleado from '../components/VerDetalleUsuario';
import AgregarPAs from './AgregarPAs';
import AutoCompletarEmpleado from '../components/AutoCompletarEmpleado';

function Landing() {
  const [empleado, setEmpleado] = useState({
    runEmpleado: ""
  });

  const { colaboradorObtenido, buscarEmpleado } = useEmpleado();

  const onBusquedaEmp = async (e) => {
    e.preventDefault();
    buscarEmpleado(empleado);
  }

  return (
    <div>
      <form onSubmit={onBusquedaEmp}>
        <HStack gap={4}>
          <Input placeholder='RUN EMPLEADO' type='text' onChange={e => setEmpleado({ ...empleado, runEmpleado: e.target.value })} />
          <Button type='submit' variant={"surface"}>Buscar</Button>
        </HStack>
      </form>
      <Box mt={4}>
        {
          colaboradorObtenido.nombreEmpleado == ""
            ? <Heading fontWeight={400} textAlign={"center"}>Realiza una busqueda</Heading>
            : (
              <Box display={"flex"} justifyContent={"space-between"}>
                <Heading fontWeight={400}>{colaboradorObtenido.nombreEmpleado} - {colaboradorObtenido.runEmpleado}</Heading>
                <AgregarPAs />
              </Box>
            )
        }
      </Box>

      <Box mt={4}>
        <Table.Root variant={"outline"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader textAlign={"center"}>Año</Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"}>Dias disponibles 1er semestre</Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"}>Dias utilizados 1er semestre</Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"}>Dias disponibles 2do semestre</Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"}>Dias utilizados 2do semestre</Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"}>Acción</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              colaboradorObtenido.empleado.map(colaborador => (
                <Table.Row key={colaborador.anio}>
                  <Table.Cell textAlign={"center"}>{colaborador.anio}</Table.Cell>
                  <Table.Cell textAlign={"center"}>{colaborador.dias_disponibles_semestre1}</Table.Cell>
                  <Table.Cell textAlign={"center"}>{colaborador.dias_utilizados_semestre1}</Table.Cell>
                  <Table.Cell textAlign={"center"}>{colaborador.dias_disponibles_semestre2}</Table.Cell>
                  <Table.Cell textAlign={"center"}>{colaborador.dias_utilizados_semestre2}</Table.Cell>
                  <Table.Cell textAlign={"center"}>
                    <VerDetalleEmpleado
                      anio={colaborador.anio}
                      diasDisponibles1er={colaborador.dias_disponibles_semestre1}
                      diasUtilizados1er={colaborador.dias_utilizados_semestre1}
                      diasDisponibles2do={colaborador.dias_disponibles_semestre2}
                      diasUtilizados2do={colaborador.dias_utilizados_semestre2}
                      runEmpleado={colaboradorObtenido.runEmpleado}
                    />
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table.Root>
      </Box>
    </div>
  )
}

export default Landing;