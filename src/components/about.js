import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, } from 'reactstrap';
import Information from './Information';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTeam: null
        };
    }

    onTeamSelect(team) {
        this.setState({ selectedTeam: team })
    }

    renderSelectedTeam(team) {
        if (team) {
            return (
                <Card>
                    <CardImg top src={team.image} alt={team.name} />
                    <CardBody>
                        <CardTitle>{team.name}</CardTitle>
                        <CardText>{team.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        return <div />
    }
    

    render() {
        const about = this.props.teams.map(team => {
            return ( 
                <div className="col-md-5 m-1">
                    <Card onClick={() => this.onTeamSelect(team)}>
                        <CardImg width="100%" src={team.image} alt={team.name} />
                        <CardImgOverlay>
                            <CardTitle>{team.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <Information/>
                <div className="row">
                    {about}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedTeam(this.state.selectedTeam)}
                    </div>
                </div>
            </div>
        );
    }
}



export default About;