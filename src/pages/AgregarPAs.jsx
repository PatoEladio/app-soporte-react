import { Box, Button, CloseButton, Dialog, Field, HStack, IconButton, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaAddressCard, FaRegEdit } from "react-icons/fa";
import actualizarEmpleado from "../services/actualizarEmpleado";
import toast from "react-hot-toast";
import useEmpleado from "../components/hooks/useEmpleado";
import { CgAdd } from "react-icons/cg";


function AgregarPAs({ anio, diasDisponibles1er, diasUtilizados1er, diasDisponibles2do, diasUtilizados2do, runEmpleado }) {

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
          <form>
            <Dialog.Body>
              <Input type="text" placeholder="2023" />  
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