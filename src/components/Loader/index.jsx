import { Dimmer, Loader } from 'semantic-ui-react';

const LoaderComponent = () => {
  return (
    <Dimmer active inverted>
      <Loader inverted>Загрузка</Loader>
    </Dimmer>
  );
};

export default LoaderComponent;
