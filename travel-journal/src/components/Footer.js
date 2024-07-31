// function Footer() {
//     return (
//         <footer>
//             <p>
//                 Created with ❤️ by &nbsp;
//                 <a className="website-link" href="https://linktr.ee/hmjatt">
//                     Harmeet Matharoo
//                 </a>
//             </p>
//         </footer>
//     );
// }

// export default Footer;

import React, { useState } from 'react';
import Card from './Card'; // Adjust the path as necessary
import Addentry from './Addentry'; // Adjust the path as necessary

function Footer() {
    const [entries, setEntries] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const addEntry = (newEntry) => {
        setEntries([...entries, newEntry]);
        setShowForm(false); // Hide form after adding entry
    };

    return (
        <div>
            <button 
            style={{color:'white', fontWeight:'bold', backgroundColor:'#F55A5A', border: 'none',
                borderRadius: '4px'}}
                onClick={() => setShowForm(!showForm)}>
                {showForm ? "Cancel" : "Add Entry"}
            </button>
            {showForm && <Addentry addEntry={addEntry} />}
            {entries.length > 0 && entries.map((entry, index) => (
                <Card key={index} {...entry} />
            ))}
        </div>
    );
}


export default Footer;

