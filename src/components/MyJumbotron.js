import React from 'react';
import { Jumbotron, Button, Card, CardImg, } from 'reactstrap';

function MyJumbotron() {
  return (
    <div>
      <Jumbotron>
        <Card>
          <CardImg width="50%" src="/images/InvestDC.jpeg" alt="Card image cap"/>
        </Card>
        <h1 className="display-3">We Are Sunrise DC</h1>
        <p className="lead">Fighting the climate crisis in a radical way</p>
        <hr className="my-2" />
        <p>We are Youth Led, Anti-Racist, Anti-Imperialist, Anti-Capitalist, Abolitionist, Locally Focused </p>
        <p className="lead">
          <Button color="primary" href="https://secure.everyaction.com/lTvAkbQpN0-QHg59pFUuMw2">Join Our Hub</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MyJumbotron;