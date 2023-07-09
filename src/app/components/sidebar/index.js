"use client";
export default function Sidebar() {
  const dt = new Date().toString();
  return (
    <>
      <h1>MY H1 Tag</h1>
      <h2>MY H2 Tag</h2>
      <h3>{dt}</h3>
    </>
  );
}
