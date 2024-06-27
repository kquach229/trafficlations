import React from 'react';

const page = ({ params }) => {
  return <div>{params.violationId}</div>;
};

export default page;
