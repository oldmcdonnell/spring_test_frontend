import React, { useState, useEffect } from 'react';

function Greeting() {
    const [greeting, setGreeting] = useState('');
    const [name, setName] = useState('World'); // default name is "World"

    useEffect(() => {
        // Fetch the greeting from the Spring Boot backend
        fetch(`http://localhost:8080/greeting?name=${name}`)
            .then(response => response.json())
            .then(data => setGreeting(data.content)) // 'content' is the field holding the greeting message
            .catch(error => console.error('Error fetching the greeting:', error));
    }, [name]);

    return (
        <div>
            <h1>{greeting}</h1>
            {/* You can add an input to change the name */}
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
        </div>
    );
}

export default Greeting;
