import React, { useContext, useState } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Select = ({ name, data, disabled = false }) => {
  const { handleInputBlur } = useContext(ContextoFormulario);

  const onChange = (e) => {
    e.preventDefault();
    handleInputBlur("ACTUALIZAR_POKEMON", {
      campo: e.target.name,
      valor: e.target.value,
    });
  };

  return (
    <div>
      <label for={name}>tipo</label>
      <select name="tipoPokemon" onChange={onChange} disabled={disabled}>
        {data?.map((ele) => (
          <option key={ele.id} value={ele.name}>
            {ele.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
