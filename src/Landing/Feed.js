import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Feed = () => {
  return (
    <div>
      <h1>Feed Page</h1>
      <FontAwesomeIcon icon="check-square" />
      <FontAwesomeIcon icon={['fab', 'apple']} />
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      <FontAwesomeIcon icon={['fab', 'google']} />
    </div>
  );
};

export default Feed;
