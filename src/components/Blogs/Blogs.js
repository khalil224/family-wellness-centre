import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5  p-5 '>
            <h3 >Q1. Difference between Authorization and Authentication?</h3>
            <article className='mb-3 fw-bolder'>Authentication is the process of verifying the user, whereas authorization is the process of verifying the specific applications, files, and data a user can access. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authorization works through settings that are implemented and maintained by the organization </article>
            <h3>Q2. Why are you using firebase? What other options do you have to implement authorization?</h3>
            <article className='mb-3 fw-bolder'>I am using firebase because it has Database,Cloud Storage,Cloud Messaging,Remote Config functionalilties.There is other options also to implemenmt authorization such as  STYTCH,Ory,Supabase,Okta, PingIdentity, Keycloak, Frontegg, Authress, Auth0, Amazon Cognito, OneLogin, Parse, Back4app, Kinvey, Backendless, Kuzzle, Pubnub, NHost etc.</article>
            <h3>Q3. What other services does firebase provide other than authentication?</h3>
            <article><span className='fs-5 fw-bolder'>There are many services which Firebase provides, Most useful of them are:</span>
                <br />
                <ul className='fw-bolder'>
                    <li> Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamics Links</li>
                    <li> Remote Config</li>
                </ul>


            </article>
        </div>
    );
};

export default Blogs;