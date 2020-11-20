import './App.css'
import Photo from './Components/Profile/ProfilePhoto'
import FullName from './Components/Profile/FullName'
import Address from './Components/Profile/Address'
import { Card, Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: '100vh' }}
      >
        <Card border="info" style={{ width: '18rem' }}>
          <Photo />
          <Card.Body>
            <FullName />
            <Card.Text>
              <Address />
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default App
