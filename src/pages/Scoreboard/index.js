import './style.css';
import Table from 'react-bootstrap/Table';

export function Scoreboard() {


  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Rank #</th>
          <th>First Name</th>
          <th>Score</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>300</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>100</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
}