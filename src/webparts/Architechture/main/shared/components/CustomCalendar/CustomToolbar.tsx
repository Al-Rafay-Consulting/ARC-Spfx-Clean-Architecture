import { Button } from 'antd';
import * as React from 'react';

const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    margin: '4px 2px',
  };
const CustomToolbar: React.FC<any> = ({ label, onNavigate, onView, views }) => {
  return (
    <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      
      <div>
        <Button type='primary' style={buttonStyle} onClick={() => onNavigate('PREV')} >
          ← Previous
        </Button>
        <Button type='primary' style={buttonStyle} onClick={() => onNavigate('TODAY')}>
          Today
        </Button>
        <Button type='primary' style={buttonStyle} onClick={() => onNavigate('NEXT')}>
          Next →
        </Button>
      </div>

      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{label}</span>

      <div>
        {views.includes('month') && (
          <Button type='primary'style={buttonStyle} onClick={() => onView('month')} >
            Month
          </Button>
        )}
        {views.includes('week') && (
          <Button type='primary' style={buttonStyle} onClick={() => onView('week')}>
            Week
          </Button>
        )}
        {views.includes('day') && (
          <Button type='primary' style={buttonStyle} onClick={() => onView('day')}>
            Day
          </Button>
        )}
        {views.includes('agenda') && (
            <Button type='primary' style={buttonStyle} onClick={()=>onView('agenda')}> Agenda </Button>
        )}
      </div>
    </div>
  );
};

export default CustomToolbar;
