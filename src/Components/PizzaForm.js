import { useParams } from "react-router-dom"

function PizzaForm() {
    console.log(useParams())
    return (
        <div>
            <h1>Order my Pizza</h1>

            <form id="pizza-form">

            </form>
        </div>
    )
}

export default PizzaForm