import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/customHeader.css"




function MyHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"
     style={{backgroundColor: '#ffffff'}}
    >
      <Container style={{display:'flex',
    justifyContent:'space-between'}}>
        <Navbar.Brand href="#home">Seoul - Tour - Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="custom-navbar">
          <Nav id="custom-navbar">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#link">관광 명소</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">드롭 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                드롭2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">드롭3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyHeader;
