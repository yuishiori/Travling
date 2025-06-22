import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow px-4 py-2 flex justify-between">
      <div className="text-xl font-bold">系統管理後台</div>
      <div className="text-sm text-gray-600">歡迎，管理員</div>
    </header>
  );
}
