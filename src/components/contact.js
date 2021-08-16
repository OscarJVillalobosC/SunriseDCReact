import React from 'react';
import { Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, Col, CardHeader } from 'reactstrap';

function Contact() {
  return (
    <div>
      <Container>
        <Card>
          <CardHeader className="warning"><h3>Contact our Teams!</h3></CardHeader>
          <CardBody>
            <dl className="row">
              <dt className="col-6">Email </dt>
              <dd className="col-6">Correo</dd>
            </dl>
          </CardBody>
        </Card>
      </Container>
      <Container>
        <Card>
          <CardHeader><h3>Fill out the form below and we’ll be in touch!</h3>
            <FormGroup row>
              <Col md={{ size: 7, offset: 2 }}>
                <Button type="submit" color="warning" href="https://secure.everyaction.com/lTvAkbQpN0-QHg59pFUuMw2">
                  Fill Out Our Form
                </Button>
              </Col>
            </FormGroup>
          </CardHeader>
        </Card>
      </Container>
      <Container>
        <Card>
          <CardHeader><h3>Join our emailing list and get info via text messages!</h3></CardHeader>
        </Card>
      </Container>
      <Col md={{ size: 10, offset: 2 }}>
        <Form>
          <FormGroup row>
            <Label htmlFor="firstName" md={2}>First Name</Label>
            <Col md={7}>
              <Input type="text" id="firstName" name="firstName"
                placeholder="First Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="lastName" md={2}>Last Name</Label>
            <Col md={7}>
              <Input type="text" id="lastName" name="lastName"
                placeholder="Last Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="proNouns" md={2}>Pronouns</Label>
            <Col md={7}>
              <Input type="text" id="proNouns" name="proNouns"
                placeholder="Pronouns"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="PostalCode" md={2}>ZipCode</Label>
            <Col md={7}>
              <Input type="tel" id="PostalCode" name="PostalCode"
                placeholder="ZipCode"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="phoneNum" md={2}>Phone</Label>
            <Col md={5}>
              <Input type="tel" id="phoneNum" name="phoneNum"
                placeholder="Phone number"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email" md={2}>Email</Label>
            <Col md={5}>
              <Input type="email" id="email" name="email"
                placeholder="Email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 3, offset: 2 }}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox"
                    name="agree"
                  /> {' '}
                  <strong>May we contact you?</strong>
                </Label>

              </FormGroup>
            </Col>
            <Col md={4}>
              <Input type="select" name="contactType"
              >
                <option>By Phone</option>
                <option>By Email</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 7, offset: 21 }}>
              <Button type="submit" color="primary">
                Send Form
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Col>
    </div >
  );
}

export default Contact;