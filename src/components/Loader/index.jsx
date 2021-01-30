import { Dimmer, Image, Segment } from 'semantic-ui-react';

const Loader = () => {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Загрузка</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  );
};

export default Loader
