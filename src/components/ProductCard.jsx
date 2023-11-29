
import Card from 'react-bootstrap/Card';

function ProductCard({name, age, Desc,jersey_number, image_url, nationality}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{nationality}</Card.Title>
        <Card.Text>
          {Desc}. He is {age} yrsold. He is a {nationality}. His jersey number is{jersey_number}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default ProductCard;