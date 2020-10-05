import React from 'react';
import AppTemplate from './components/templates/app';
import DashboardTemplate from './components/templates/dashboard';
import Dashboard from './components/wrappers/Dashboard';
import Activity from './components/wrappers/Activity';
import Events from './components/wrappers/Events';
import Progress from './components/wrappers/Progress';

function App() {
  return (
    <AppTemplate>
      <DashboardTemplate>
        <Dashboard />
        <Events />
        <Activity />
        <Progress/>
      </DashboardTemplate>
    </AppTemplate>
  );
}

export default App;
