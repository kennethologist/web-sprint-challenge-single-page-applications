import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import * as yup from "yup";


const initialFormValues = {
        name: "",
        size: "none",
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        special: ""
    };

function PizzaForm(props) {
    console.log(props);
    const {submitOrder} = props;

    const formSchema =  yup.object().shape({
        name: yup.string().min(2, "Name must be at least 2 letters."),
        size: yup.string().oneOf(["small", "medium", "large", "xlarge"]),
    });

    const [errors, setErrors] = useState({
        name: "",
        size: ""
    });

    const [form, setFormValues] = useState({
        name: "",
        size: "none",
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        special: ""
    });

    const [disableSubmit, setDisabled] = useState(true);

    const validateForm = e => {
        yup.reach(formSchema, e.target.name).validate(
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        ).then(() => {
            setErrors({...errors,[e.target.name]: ""})
        }).catch(err => {
            setErrors({...errors,[e.target.name]: err.errors[0]})
        });
    };


    const formChange = (e) => {
        validateForm(e);
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormValues({...form, [e.target.name]: value});
    }

    useEffect(() => {
        formSchema.isValid(form).then((valid) => {
            setDisabled(!valid);
        });
    },[form]);

    const submitForm = (e) => {
        e.preventDefault();

       submitOrder(form);
       setFormValues(initialFormValues);
       document.querySelector("#name-input").focus();

       axios.post("https://reqres.in/api/orders", form)
        .then(resp => {
            console.log(resp);
        }).catch(err => {

        });
    }

    useEffect(() => {
        
    });

    console.log(useParams())
    return (
        <div>
            <h1>Order my Pizza</h1>
            <div>
                <p>{errors.name}</p>
                <p>{errors.size}</p>
            </div>
            <form id="pizza-form">
                <label>Name
                    <input onChange={formChange} id="name-input" type="text" name="name" value={form.name}></input>
                </label>
                <label>Size
                    <select id="size-dropdown" name="size" value={form.size} onChange={formChange}>
                    <option value="none"></option>
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
                    <input id="special-text" onChange={formChange} type="text" name="special" value={form.special}></input>
                </label>

                <button type="submit" disabled = {disableSubmit} id="order-button" onClick={submitForm}>Submit Order</button>
            </form>
        </div>
    )
}

export default PizzaForm