import { Card, Image } from 'semantic-ui-react';

const CatalogItem = ({ data: { title, author, image: imageUrl, price, rating } }) => {
  return (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{author}</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        Рейтинг
        {price}
      </Card.Content>
    </Card>
  );
};

export default CatalogItem;
