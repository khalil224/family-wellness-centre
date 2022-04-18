import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Name: Md. Khalil Islam</Card.Header>
                <Card.Body>
                    <Card.Title>Goal for Web development</Card.Title>
                    <Card.Text>
                        Now I am a student of B.Sc. honours third year. I am learning web development beside my study.I'll keep me engaged with this topic. After my graduation I will take my Ph.d. degree on this  topic/related topic in shaa Allah.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;