import { Card, Icon, Image } from 'semantic-ui-react';

const CatalogItem = ({ title, author, image: imageUrl, price, rating }) => {
  return (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Icon name="rub" />
        {price}
      </Card.Content>
    </Card>
  );
};

export default CatalogItem;
