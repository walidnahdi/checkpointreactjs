import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './fichier.css';


function App() {
  return (
    <> 
    <div className="App">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <img  src="https://mistore.com.tn/wp-content/uploads/2022/05/Xiaomi-Logo-store-3.png"  alt='xiaomi' width={100} height={80}/>
        <Navbar.Brand href="#home">xiaomi Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://mistore.com.tn/product-category/maison-connectee/">Smart Home</Nav.Link>
            <Nav.Link href='https://mistore.com.tn/promotions/'>Promotions</Nav.Link>
            <NavDropdown title="Smartphone" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://mistore.com.tn/product-category/xiaomi/">Xiaomi</NavDropdown.Item>
              <NavDropdown.Item href="https://mistore.com.tn/product-category/redmi-note/">
                Redmi Note
              </NavDropdown.Item>
              <NavDropdown.Item href="https://mistore.com.tn/product-category/smartphone-poco/">Poco</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://mistore.com.tn/product-category/smartphone-redmi/">
                redmi
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <CardGroup className='cards'>
      <Card className='firstcard'>
        <Card.Img variant="top" src="https://www.lowyat.net/wp-content/uploads/2023/04/xiaomi-13-ultra-official-launch-price-china-4.jpg" width={200} height={150}/>
        <Card.Body>
          <Card.Title>Xiaomi ultra</Card.Title>
          <Card.Text>
          la marque estampillé Ultra à s'inviter sur le marché tunisien, Xiaomi Ultra se veut sans compromis.
           Cette gamme smartphone en forme de vitrine technologique, s'il ne peut prétendre remporter la palme du rapport qualité-prix,
           elle se classe dans la cour des grands
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Carte ultra</small>
        </Card.Footer>
      </Card>
      <Card className='secondcard'>
        <Card.Img variant="top" src="https://img.phonandroid.com/2023/08/xiaomi-pad-5-aliexpress.png" width={200} height={150} />
        <Card.Body>
          <Card.Title>Xiaomi pad </Card.Title>
          <Card.Text>
          Avec la Xiaomi Pad , Xiaomi renouvelle sa tablette tactile de milieu de gamme emblématique. 
          La marque chinoise ambitionne un rapport qualité-prix convaincant à celles et ceux qui cherchent une tablette pour se divertir,
           mais aussi travailler
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Carte Pad</small>
        </Card.Footer>
      </Card>
      <Card className='thirdcard'>
        <Card.Img variant="top" src="https://www.netcost-security.fr/wp-content/uploads/2023/11/Le-POCO-F5-Pro-se-met-a-jour-vers-Android.jpg" width={200} height={150} />
        <Card.Body>
          <Card.Title>Poco pro</Card.Title>
          <Card.Text>
          Le Poco Pro représente le modèle le plus haut de gamme de la filiale de Xiaomi.
           Comme ses prédécesseurs, il est avant tout destiné aux joueurs exigeants, en quête de performance.
            Il a également quelques autres atouts dans sa gibecière
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Carte pro</small>
        </Card.Footer>
      </Card>
    </CardGroup> 
    </div>
    </>
  );
}

export default App;
