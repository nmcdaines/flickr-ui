import React from 'react';
import { Card, CardMedia, CardBody, CardActions } from './index';
import { Button } from '../button';
import { Title } from '../typography';

export default {
  title: 'Flickr/Card',
  component: Card,
  argTypes: {

  }
}

const imgUrl = 'https://www.rangeme.com/public_site_assets/home-7fa284e87962fbbd24ca244d345affcd298b25c567305e6b5f04d97f4ab7a306.jpg';

export const WithMediaBodyActions = (args) => (
  <div style={{ width: 370 }}>
    <Card onClick={() => {}}>
      <CardMedia
        url={imgUrl}
      />
      <CardBody>
        <Title>
          Card title
        </Title>
      </CardBody>
      <CardActions>
        <Button>Tag 1</Button>
        <Button>Tag 2</Button>
        <Button>Tag 3</Button>
      </CardActions>
    </Card>
  </div>
);


export const WithMediaAndActions = (args) => (
  <div style={{ width: 370 }}>
    <Card onClick={() => {}}>
      <CardMedia
        url={imgUrl}
      />
      <CardActions>
        <Button>Tag 1</Button>
        <Button>Tag 2</Button>
        <Button>Tag 3</Button>
      </CardActions>
    </Card>
  </div>
);
