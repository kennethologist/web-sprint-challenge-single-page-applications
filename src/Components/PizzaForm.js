import { useState } from "react";
import { useParams } from "react-router-dom"

function PizzaForm() {

    const [form, setFormValues] = useState({
        name: "",
        size: "",
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        specialNotes: ""
    });

    const formChange = (e) => {
        
        setFormValues({...form, [e.target.name]: e.target.value});
        console.log(e.target.name, e.target.value, e.target.checked);
    }

    const submitForm = (e) => {
        e.preventDefault();

        
    }

    console.log(useParams())
    return (
        <div>
            <h1>Order my Pizza</h1>

            <form id="pizza-form">
                <label>Name
                    <input onChange={formChange} id="name-input" type="text" name="name" value={form.name}></input>
                </label>
                <label>Size
                    <select id="size-dropdown" name="size" value={form.size} onChange={formChange}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">X Large</option>
                    </select>
                    
                </label>
                <label>Toppings
                    <ul>
                        <li><input onChange={formChange} type="checkbox" value={form.topping1} name="topping1"></input>Pepperoni</li>
                        <li><input onChange={formChange} type="checkbox" value={form.topping2} name="topping2"></input>Mushrooms</li>
                        <li><input onChange={formChange} type="checkbox" value={form.topping3} name="topping3"></input>Green Peppers</li>
                        <li><input onChange={formChange} type="checkbox" value={form.topping4} name="topping4"></input>Onions</li>
                        <li><input onChange={formChange} type="checkbox" value={form.topping5} name="topping5"></input>Italian Sausage</li>
                    </ul>
                </label>
                <label>Special Notes
                    <input id="special-text" onChange={formChange} type="text" name="special" value={form.specialNotes}></input>
                </label>

                <button type="submit" onClick={submitForm}>Submit Order</button>
            </form>
        </div>
    )
}

export default PizzaForm