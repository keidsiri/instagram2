import React, { useEffect } from 'react';
// import faker from "faker";
import faker from '@faker-js/faker';

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, [])

  return (
    <div>
      {suggestions.map(profile => (
        <Story 
        key={profile.id} 
        img={profile.avatar} 
        username={profile.username} />
      ))}
      {/* {Stories} */}
      {/* {Stories} */}
      {/* {Stories} */}
      {/* {Stories} */}
      {/* {Stories} */}
    </div>
  )
}

export default Stories;
