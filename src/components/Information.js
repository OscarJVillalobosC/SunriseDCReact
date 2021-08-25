import React from 'react';
import { Jumbotron,Card,  CardText, CardBody, CardTitle, } from 'reactstrap';

function Information() {
    return (
      <div>
        <Jumbotron>
          <Card body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }} >
            <CardBody>
              <CardTitle tag="h5">About Sunrise DC</CardTitle>
              <CardText>Sunrise is a movement to stop climate change and create millions of good jobs in the process. We’ll do that by making climate disruption an urgent priority across America, ending the corrupting influence of fossil fuel on our politics, and fundamentally changing the US economy and turning it toward sustainability and justice.We push for a Red Black and  Green New Deal, a plan that will tackle the climate crisis, provide a jobs guarantee, ensure healthcare for all people, and fight the systemic racism that is so entrenched in our society — taking the first steps towards our collective vision of a just and equitable future for all people. We are a justice organization that views al issues through a climate lens. </CardText>
            </CardBody>
          </Card>
        </Jumbotron>
      </div>
    );
  };
  
  export default Information;