import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderCard({item}) {
    console.log(item)
    return (
        <Card>
            <CardBody>
                <CardImg src={item.image} alt={item.name} />
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

function Home(props) {
    console.log(props)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.books} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.clothes} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.electronics} />
                </div>
            </div>
        </div>
    );
}

export default Home;