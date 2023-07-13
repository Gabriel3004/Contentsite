import { useState, useEffect } from 'react';
import { createClient } from 'contentful';


const client = createClient({
    space: 't77jo4vbj5hx',
    accessToken: 'mvXKzLLkWaHePYxesESQ0slhkub8f51WYoTW8e24bQ4',
  });


function Contenful () {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        client
          .getEntries()
          .then((response) =>
            //   console.log(response)
            setEntries(response.items)
          )
          .catch(console.error);
      }, []);

    return (
        <>
        <h1>Techno Tools</h1>
        {entries.map((entry) => {
        return (
          <div key={entry.sys.id}>
            <h2>{entry.fields.Title}</h2>
            <img
              src={entry.fields.image.fields.file.url}
              alt={entry.fields.Title}
              width='50%'
            />
            <p>{entry.fields.description}</p>
            <p>{entry.fields.money}</p>
          </div>
        );
      })}
        </>
    );
    
}

export default Contenful;