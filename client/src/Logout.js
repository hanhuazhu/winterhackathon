import { useNavigate } from "react-router";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from "./UserSlice";

export default function Logout() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = event => {
      event.preventDefault()
      dispatch(logoutUser())
      navigate("/")
  }

  return (
    <Nav.Link href='/' id='navlink-white' className='text-white fw-bolder mt-5 fs-3' onClick={logout}>Logout</Nav.Link>
  )
}