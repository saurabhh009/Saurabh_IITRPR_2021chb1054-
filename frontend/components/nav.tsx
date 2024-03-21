import Image from 'next/image';
import React from 'react';
import("../navBar.module.css");
const links = ["Feed", "Contacts", "Job", "Messages", "Updates"]

export default function Nav() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: "0.2px solid grey", marginTop: '10px' }}>
      <div style={{ marginLeft: "120px" }}>
        <div style={{ borderRadius: '50%', overflow: 'hidden', width: '50px', height: '50px', marginBottom: "10px", marginRight: "40px" }}>
          <a href="#"><Image src="/profile.png" alt="profile" width={100} height={100} /></a>
        </div>

      </div>

      <ul style={{ listStyleType: 'none', padding: '10px' }}>
        {links.map((link, index) => (
          <li key={index} style={{ display: 'inline', marginRight: '20px' }}>{link}</li>
        ))}
      </ul>
      <div style={{ marginLeft: 'auto', marginRight: '25px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>


      </div>
      <div style={{ borderRadius: '50%', overflow: 'hidden', width: '50px', height: '50px', marginBottom: "10px", marginRight: "120px" }}>
        <a href="#"><Image src="/profile.png" alt="profile" width={100} height={100} /></a>
      </div>
    </nav>

  );
}
