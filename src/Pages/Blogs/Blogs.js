import React from 'react'

function blogs() {
    return (
        <div className='container'>
            <h1 className='text-center mt-3'><u></u></h1>
            <div>
                <div>
                    <h4 className='text-center mt-3'>The Difference between JavaScript and Node.JS</h4>
                    <p> Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage.On other hand, Node.JS is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server.JavaScript is commonly used in game development and mobile app development and Node.js enables JavaScript code to run outside of the browser. </p>
                </div>
                
            </div>
            <div>
                <div>
                    <h4 className='text-center mt-3'>What is the purpose of JWT and how does it work?</h4>
                            
                    <p> JWT is JSON Web Token a mechanism to verify the owner of some JSON data. JWT defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.It's an encoded, URL-safe string that can contain an unlimited amount of data unlike a cookie.<br/><br/>
                    
                    While using JWT, the identity provider generates a JWT certifying user identity and resource server decodes and verifies the authenticity of the token using secret salt or public key. When user sign-in using username and password or google/facebook, authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.Then resource server then verifies the authenticity of the token using the secret.
                    </p>



                </div>
                
            </div>
        </div>
    )
}

export default blogs;
