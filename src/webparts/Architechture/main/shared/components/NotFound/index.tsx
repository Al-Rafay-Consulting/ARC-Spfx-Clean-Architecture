import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.module.scss'; // Import the SCSS file for styling
import { Button } from 'antd';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="not-found">
      <h1>404 - Not Found</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <Button onClick={handleBackToHome} className="back-button">
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
