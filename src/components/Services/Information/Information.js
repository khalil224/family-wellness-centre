import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Information.css'

const Information = () => {
    return (
        <div className='card-container'>

            <CardGroup >

                <Card>

                    <Card.Body>
                        <Card.Title>Appointment.</Card.Title>
                        <Card.Text>
                            Which problem you faced on your health ?call or mail us and make an appointment with our expert who can solved your problem.
                        </Card.Text>
                        <button className='btn btn-primary'>Appointment Now</button>
                    </Card.Body>

                </Card>
                <Card>

                    <Card.Body>
                        <Card.Title>Doctor's Schedule.</Card.Title>
                        <Card.Text>
                            Take a look on our clinic Doctor's timetable and make an appointment with our expert which department or service.
                        </Card.Text>
                        <button className='btn btn-primary'>View Timetable</button>
                    </Card.Body>

                </Card>
                <Card>

                    <Card.Body>
                        <Card.Title>Emergency Cases.</Card.Title>
                        <Card.Text>
                            You can call us for emargency & make an appointment out of clinic
                        </Card.Text>
                        <button className='btn btn-primary'>Appointment Now</button>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default Information;