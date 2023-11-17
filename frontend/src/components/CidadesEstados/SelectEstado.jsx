import { useState } from "react";
import React from "react";
import Select from "react-select";
import { useEstados } from "./useEstados";

export const SelectEstado = ({ onChange }) => {
  const { estados } = useEstados();
  const [selectedEstado, setSelectedEstado] = useState(null);

  const estadoOptions = estados.map((estado) => ({
    value: estado.id,
    label: estado.nome
  }));

  const selectedOptionEstado = estadoOptions.find(
    (e) => e.value === selectedEstado
  );

  const handleEstadoUpdate = (event) => {
    setSelectedEstado(event.value);
    const selectedUf = estados.find((e) => e.id === event.value)?.sigla;
    onChange(selectedUf);
  };

  return (
    <Select
      placeholder="Selecione um estado"
      options={estadoOptions}
      value={selectedOptionEstado}
      onChange={handleEstadoUpdate}
    />
  );
};
