import React from 'react';
import Sidebar from "../Sidebar/Sidebar.jsx";
import SearchBar from "../Searchbar/Searchbar.jsx"
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <SearchBar />
        <div style={{ padding: '1rem' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
