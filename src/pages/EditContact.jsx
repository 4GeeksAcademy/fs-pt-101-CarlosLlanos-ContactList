import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import contactServices from "../services/contactServices";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const EditContact = () => {

    const params = useParams()
    const {store, dispatch} = useGlobalReducer()
    

    const navigate = useNavigate()
    const [formData, setFormData] = useState(store.agenda.find(el=> el.id == params.id));

    const handleChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleCancel = () => {
        navigate('/')
    }

    const handleReset = (e) => {
        e.preventDefault();
        setFormData(store.agenda.find(el=> el.id == params.id))
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
        contactServices.updateContact('cllanos', params.id, formData)
        navigate('/')
    }

    return (
        <div className="container">
            <h2>EDIT CONTACT</h2>
            <form onSubmit={handleSubmit} className="form-control">
                <input className="form-control" onChange={handleChange} value={formData.name} placeholder="name" name="name" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.phone} placeholder="phone" name="phone" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.address} placeholder="address" name="address" type="text" />
                <input className="form-control" onChange={handleChange} value={formData.email} placeholder="email" name="email" type="text" />
                <input className="btn btn-primary" type="submit" />
                <input className="btn btn-warning" type="reset"onClick={handleReset} />
                <button className="btn btn-danger" onClick={handleCancel}>cancel</button>
            </form>
        </div>
    )
}