import { Fragment, useContext } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
function Formulario() {
  return (
    <>
      <form>
        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Marca
          </label>
          <select
            name="marca"
            id=""
            className="w-full p-3 bg-white border border-gray-200 outline-none"
          >
            <option value="">--Seleciona Marca--</option>
            {MARCAS.map((marca) => (
              <option value={marca.id} key={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Año
          </label>
          <select
            name="marca"
            id=""
            className="w-full p-3 bg-white border border-gray-200 outline-none"
          >
            <option value="">--Seleciona un Año--</option>

            {YEARS.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label
            htmlFor=""
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Elige un Plan
          </label>

          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor="">{plan.nombre}</label>
                <input type="radio" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded-md"
        />
      </form>
    </>
  );
}

export default Formulario;
