import React from "react";

export default function AdmainDashboardStatusCard({ icon, title, data , word }) {
  return (
    <div className="text-white bg-gray-700 p-3 rounded-md ">
      <div className="flex items-center gap-2">
        <div className="bg-[var(--color-pink-secondry)] size-10 flex items-center justify-center rounded-full text-2xl">{icon}</div>
        <div>{title}</div>
      </div>

      <div className="text-left text-[var(--color-pink-primary)] text-xl pl-2.5">{data} {word}</div>
    </div>
  );
}
