import './style.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function Profile() {

  const user = "Fernando Colunga"
  const bio = "Bio"
  const score = 100
  const rank = 100

  return (    
    <div class="center"> 
      <Card style={{ width: '40rem' }}>
      <Card.Img  src="img/grand-m.jpeg" />
      <Card.Body>
        <Card.Title>{user}</Card.Title>
        <Card.Text> {bio} </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Card.Title>Accumulated Score</Card.Title>
          <Card.Text> {score} </Card.Text>
        </ListGroup.Item>
        <ListGroup.Item>        
          <Card.Title>Global Rank</Card.Title>
          <Card.Text> {rank} </Card.Text></ListGroup.Item>
      </ListGroup>
    </Card>
  </div>

  );
}

