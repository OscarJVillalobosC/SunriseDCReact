import React from 'react';
import MyCarousel from './MyCarousel';
import MyJumbotron from './MyJumbotron';
import MySolidarity from './MySolidarity';
import { Card, } from 'reactstrap';


function Home() {
    return (
        <div bg="container" text="white">
            <MyJumbotron />
            <MyCarousel />
            <Card>
                <h4>We center community above all else</h4>
            </Card>
            <MySolidarity />
        </div>
    );
}

export default Home;