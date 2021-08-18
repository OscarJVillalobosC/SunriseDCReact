import React from 'react';
import { Jumbotron,Card,  CardText, CardBody, CardTitle, } from 'reactstrap';



function MySolidarity() {
  return (
    <div>
      <Jumbotron>
        <Card body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }} >
          <CardBody>
            <CardTitle tag="h5">Our Mission</CardTitle>
            <CardText>Sunrise DC brings our local community together in the climate crisis fight, using our unique position in the nation’s capital to get involved at both the local and national level. By Building community through people power, mutual aid, and organizing we are ready to show those in power what we are capable off.</CardText>
          </CardBody>
        </Card>
      </Jumbotron>
    </div>
  );
};

export default MySolidarity;