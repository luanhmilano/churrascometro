import { useNavigate } from "react-router-dom"
import { nomeAlimentos } from "../types"
import { Formik, Field, Form } from "formik"
import * as Yup from 'yup'

const CalculadoraChurrasco = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Formik initialValues={{ pessoas: 0, selecaoAlimentos: [] }} onSubmit={() => {
        navigate("/resultado")
        console.log("teste")
      }}>
        <Form>
          <div>
            <label htmlFor="pessoas">Número de Pessoas</label>
            <Field name="pessoas" type="number" />
          </div>
          <h2>Selecione os alimentos para o churrasco:</h2>
          {Object.keys(nomeAlimentos).map((alimento) => (
            <div key={nomeAlimentos.id}>
              <Field type="checkbox" name="selecaoAlimentos" value={alimento} />
              <label htmlFor="selecaoAlimentos">{nomeAlimentos[alimento]}</label>
            </div>
          ))}
          <button type="submit">Calcular</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CalculadoraChurrasco