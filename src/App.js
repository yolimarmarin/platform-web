import React from 'react';
import AppTemplate from './components/templates/app';
import DashboardTemplate from './components/templates/dashboard';
import Dashboard from './components/wrappers/Dashboard';

function App() {
  return (
    <AppTemplate>
      <DashboardTemplate><Dashboard/></DashboardTemplate>
    </AppTemplate>
  );
}

export default App;
