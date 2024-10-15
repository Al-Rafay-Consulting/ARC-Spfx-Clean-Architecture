import * as React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <h1 style={{ textAlign: 'center' }}>
        Welcome to ARC SPFx Clean Architecture
      </h1>
    </div>
  );
};

export default LandingPage;
