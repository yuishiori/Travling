import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">管理系統</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/" className="hover:text-yellow-300">儀表板</Link>
        <Link to="/users" className="hover:text-yellow-300">用戶管理</Link>
        <Link to="/settings" className="hover:text-yellow-300">系統設定</Link>
      </nav>
    </div>
  );
}
