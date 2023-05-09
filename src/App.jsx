import { useEffect, useState } from "react";
import Header from "./components/Header";
import { calcularIntereses, formatearDinero } from "./helpers";
import toast, { Toaster } from 'react-hot-toast';
import Button from "./components/Button";


function App() {

  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);


useEffect(() => {
  setTotal(calcularIntereses(cantidad, meses));
}, [meses, cantidad]);


  const MAX = 20000
  const MIN = 0
  const STEP = 100

  const handleClickDecrementar = () => {

    if(cantidad <= MIN) {
      toast.error('No puedes disminuir mas');
      return;
    }

    setCantidad(cantidad - STEP);
  }

  const handleClickIncrementar = () => {

    if(cantidad >= MAX) {
      toast(
        "Si desea un préstamo más grande póngase en contacto con nosotros",
        {
          duration: 4000,
        }
      );
      toast.error('No puedes aumentar mas');
      
      return;
    }

    setCantidad(cantidad + STEP);
  }

  return (
    <>
      <div className="bg-white max-w-lg mx-auto p-10 rounded-lg shadow-lg mt-10">
        <Toaster />
        <Header />

        <div className="flex justify-between items-center mt-10">
          <Button 
            type="-"
            fn={handleClickDecrementar}
          />
          <Button 
            type="+"
            fn={handleClickIncrementar}
          />
        </div>

        <input 
          className="w-full h-6 bg-gray-200 rounded-lg mt-5 accent-lime-500 hover:accent-lime-600"
          type="range" 
          min={MIN}
          max={MAX}
          step={STEP}
          value={cantidad}
          onChange={e => setCantidad(+e.target.value)}
        />

        <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{formatearDinero(cantidad)}</p>

        <h2 className="text-gray-500 text-center text-2xl font-extrabold">
          Elige un <span className="text-indigo-600 underline">Plazo</span> a pagar.
        </h2>

        <select 
          className="w-full h-10 font-bold text-xl text-center text-gray-500 rounded-lg mt-5 bg-white border-gray-300 border-2 hover:border-indigo-600"
          onChange={e => setMeses(e.target.value)}

        >
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
          <option value="24">24 meses</option>
        </select>

        <div className="my-5 space-y-3 p-5 bg-gray-50">
          <h2 className="text-gray-500 text-center text-2xl font-extrabold">
            Resumen <span className="text-indigo-600 underline">de Pagos</span>
          </h2>

          <p className="text-gray-500 text-center text-2xl font-bold">{meses} Meses</p>
          <p className="text-gray-500 text-center text-2xl font-bold">Total a pagar: {formatearDinero(total)}</p>
          <p className="text-gray-500 text-center text-2xl font-bold">Mensuales: {formatearDinero(total / meses)}</p>
        </div>
      </div>
    </>
  )
}

export default App
