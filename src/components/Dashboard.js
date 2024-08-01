import React from 'react';
import Card from './Card';

function Dashboard() {
  const data = [
    { id: 1, title: 'Card 1', content: 'This is card 1 content' },
    { id: 2, title: 'Card 2', content: 'This is card 2 content' },
    { id: 3, title: 'Card 3', content: 'This is card 3 content' },
  ];

  return (
    <div className="dashboard">
      {data.map(item => (
        <Card key={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Dashboard;
