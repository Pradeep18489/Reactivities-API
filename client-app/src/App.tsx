import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities,setactivities] = useState([]);

  useEffect(()=>{
axios.get('http://localhost:5000/api/activities').then(res=>{
 setactivities(res.data);
});
  },[]);

  return (
    <div>
      <Header as ='h2' icon="users" content="Reactivities"/>
        <List>
{activities.map((activity : any)=>{
  return <List.Item key={activity.id}>{activity.title}</List.Item>
})}
        </List>
    </div>
  );
}

export default App;
