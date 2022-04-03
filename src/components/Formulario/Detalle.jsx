import React, { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { ContextoFormulario } from "../../context/ContextoFormulario";
import { submitForm } from "../../servicio/ServiciosPokemon";
/**
 * Componente que muestra el detalle del formulario, con
 * la informde cada uno de los campos que han sido completados.
 *
 * @returns {JSX.Element}
 */
const Detalle = () => {
  const { data, isLoading, isError, mutate, isSuccess } =
    useMutation(submitForm);

  // Utilizamos un useEffect para que se ejecute una vez realiza la mutación y mostrar el mensaje de éxito o error.
  useEffect(() => {
    if (isSuccess) {
      alert(`Formulario enviado correctamente, id ${data ? data?.id : ""}`);
    } else if (isError) {
      alert("Error al enviar el formulario. Por favor intente nuevamente");
    }
  }, [isSuccess, data, isError]);

  const { formulario, initialState } = useContext(ContextoFormulario);

  const { nombre, apellido, email } = formulario?.entrenador;

  const {
    nombrePokemon,
    tipoPokemon,
    elementoPokemon,
    alturaPokemon,
    edadPokemon,
  } = formulario?.pokemon;

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {nombre}</p>
          <p>Apellido: {apellido}</p>
          <p>Email: {email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {nombrePokemon}</p>
          <p>Tipo: {tipoPokemon}</p>
          <p>Elemento: {elementoPokemon}</p>
          <p>Altura: {alturaPokemon}</p>
          <p>Edad: {edadPokemon}</p>
        </div>
      </section>
      <button className="boton-enviar" onClick={() => mutate(formulario)}>
        {isLoading ? "Enviando formulario..." : "Enviar la Solicitud"}
      </button>
    </div>
  );
};
Detalle.propTypes = {};

export default Detalle;
