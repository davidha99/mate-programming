import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function HomePage() {
  return (
    <>
    {/* this should be a for loop that displays each each leetcode  */}
    <div className= "center">
      <Card style={{ width: '50rem' }}>
        <Card.Header className="easy-card-header">Easy</Card.Header>
        <Card.Body>
          <Card.Title>Two Sum</Card.Title>
          <Card.Text>
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>

      <br />
    
      <Card style={{ width: '50rem' }} className="medium-card">
        <Card.Header className="medium-card-header">Medium</Card.Header>
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus dolor ac ultrices hendrerit. Vestibulum nec urna nisi. Etiam eu libero viverra, consequat neque eget, fermentum massa. Duis sed quam ut justo rutrum suscipit. Praesent sodales, tortor sit amet iaculis consectetur, elit magna porta risus, at malesuada tortor odio eget augue. Pellentesque sed leo vel augue posuere vulputate vitae ac tortor. In sagittis vulputate elit, in hendrerit elit efficitur at.
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>

      <br />

      <Card style={{ width: '50rem' }} className="hard-card">
        <Card.Header className="hard-card-header">Hard</Card.Header>
        <Card.Body>
          <Card.Title>Lorem Ipsum</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus dolor ac ultrices hendrerit. Vestibulum nec urna nisi. Etiam eu libero viverra, consequat neque eget, fermentum massa. Duis sed quam ut justo rutrum suscipit. Praesent sodales, tortor sit amet iaculis consectetur, elit magna porta risus, at malesuada tortor odio eget augue. Pellentesque sed leo vel augue posuere vulputate vitae ac tortor. In sagittis vulputate elit, in hendrerit elit efficitur at.
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>

      <br />
    
    </div>
    </>

  
  );
}