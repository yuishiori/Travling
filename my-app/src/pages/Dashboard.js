import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">儀表板</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow p-4 rounded">CPU 使用率：70%</div>
        <div className="bg-white shadow p-4 rounded">記憶體使用率：55%</div>
        <div className="bg-white shadow p-4 rounded">硬碟使用率：80%</div>
      </div>
    </div>
  );
}
