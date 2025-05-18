import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import contactServices from "../services/contactServices"

export const ContactCard = props => {

    const {store, dispatch} = useGlobalReducer()
    const navigate = useNavigate();
    const handleDelete =  async () => {
        try {
            const resp = await contactServices.deleteContact('cllanos', props.cid) 
            dispatch({ type: 'get_agenda_by_slug', payload: resp.contacts })

        } catch (error) {
            
        }
        
    }

    const handleEdit = () => {
      navigate('/edit_contact/'+props.cid) 
    }

    return (
        <div className="card">
            <div className="d-flex">
                <div className="w-25">
                    <img className="img-fluid" src="https://imgs.search.brave.com/N-PDeBrJLQ3YBIR3aTvu6pdtGgDcjVI3zm-L_7TqcQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/Ny8wMS8xMi81OC9p/Y29uLTUzNTk1NTNf/NjQwLnBuZw" alt={props.name} />
                </div>
                <div className="w-75 text-start align-content-center">
                    <h2>{props.name}</h2>
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
                    <p>{props.address}</p>
                    <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                    <button className="btn btn-primary" onClick={handleEdit}>Editar</button>
                </div>
            </div>
        </div>
    )
}