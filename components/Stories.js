import React, { useEffect } from 'react';
// import faker from "faker";
import faker from '@faker-js/faker';

function Stories() {

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    console.log(suggestions)
  }, [])

  return (
    <div>
      {/* {Stories} */}
      {/* {Stories} */}
      {/* {Stories} */}
      {/* {Stories} */}
      {/* {Stories} */}
    </div>
  )
}

export default Stories;
