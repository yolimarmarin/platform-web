import React from 'react';
import AppTemplate from './components/templates/app';
import DashboardTemplate from './components/templates/dashboard';
import Dashboard from './components/wrappers/Dashboard';
import Activity from './components/wrappers/Activity';
import Events from './components/wrappers/Events';

function App() {
  return (
    <AppTemplate>
      <DashboardTemplate>
        <Dashboard />
        <Events />
        <Activity />
      </DashboardTemplate>
    </AppTemplate>
  );
}

export default App;
