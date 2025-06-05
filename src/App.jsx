import React from 'react';
import DepartmentsPage from './pages/DepartmentsPage'; // Import our new page component
import './styles/index.css'; // Make sure to import your global styles

function App() {
  return (
    <div className="App">
      <DepartmentsPage /> {/* Render our DepartmentsPage */}
    </div>
  );
}

export default App;