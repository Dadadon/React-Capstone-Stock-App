import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { IoIosArrowBack } from "react-icons/io";
import { Outlet, Link } from "react-router-dom";
import { BsFillMicFill, BsFillGearFill } from "react-icons/bs"

const navbar = (item) => {
    const { headText } = item;
    const date = new Date().getFullYear();
    return (
      <>
       <Navbar className='bg-dark'>
        <Container>
          <Navbar.Brand><Link to="/" className='text-white text-decoration-none'><IoIosArrowBack  className='text-white d-md-none'/> {date}</Link></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text className='text-white'>
              { headText }
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar className="justify-content-end gap-3">
            <BsFillMicFill className='text-white'/>
            <BsFillGearFill className='text-white'/>
          </Navbar>
        </Container>
      </Navbar>
      <Outlet />
      
      </>
       
    )
}
export default navbar;