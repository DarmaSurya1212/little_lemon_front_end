import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import placeholderImages from './Components/Images/placeholder-images.jpg';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Reservation from './Components/Reservation';
import OrderOnline from './Components/OrderOnline';
import Login from './Components/Login';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Footer from './Components/Footer';
import image from './Components/Images/placeholder-images.jpg'
function App() {
  return (
    <BrowserRouter>
      <meta name="og:title" content="Little Lemon Restaurant"/>
      <meta name="description" content="Little Lemon Restaurant selling foods and you can reserve table and order online"/>
      <meta name="og:image" content={image}/>
      <div style={{backgroundColor : "#222831"}}>
        <>
          <Navbar expand="lg" variant='dark'>
            <Container>
              <Navbar.Brand as={Link} to ='/'>
                <img src= {placeholderImages} alt='logo' height = '30' width= '30' className='d-inline-block align-top'/>
                React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to ='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/about'>About</Nav.Link>
                  <Nav.Link as={Link} to='/menu'>Menu</Nav.Link>
                  <Nav.Link as={Link} to='/reservation'>Reservation</Nav.Link>
                  <Nav.Link as={Link} to='/order-online'>OrderOnline</Nav.Link>
                  <Nav.Link as={Link} to ='/login'>Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </>
        <div>
          <Routes>
            <Route path ='/' element ={<Home />} />
            <Route path= '/about' element={<About/>} />
            <Route path ='/menu' element ={<Menu />} />
            <Route path ='/reservation' element ={<Reservation />} />
            <Route path ='/order-online' element ={<OrderOnline />} />
            <Route path ='/login' element ={<Login />} />

          </Routes>
        </div>
      <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
