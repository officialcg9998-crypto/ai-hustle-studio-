import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{minHeight:"100vh",background:"#040408",
      display:"flex",flexDirection:"column",alignItems:"center",
      justifyContent:"center",fontFamily:"'Syne',sans-serif",color:"#fff"}}>
      <h1 style={{fontSize:"clamp(40px,7vw,80px)",fontWeight:800,marginBottom:20,
        background:"linear-gradient(135deg,#fff 40%,#7c3aed)",
        WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
        AI Hustle Studio
      </h1>
      <p style={{color:"#64748b",marginBottom:32,fontSize:16}}>
        The AI that works while you sleep
      </p>
      <div style={{display:"flex",gap:12}}>
        <button onClick={()=>window.location.href="/login"}
          style={{padding:"12px 28px",borderRadius:10,background:"#7c3aed",
            border:"none",color:"#fff",fontSize:15,fontFamily:"inherit",
            fontWeight:700,cursor:"pointer"}}>
          Start Free →
        </button>
        <button onClick={()=>window.location.href="/login"}
          style={{padding:"12px 28px",borderRadius:10,background:"transparent",
            border:"1px solid #7c3aed44",color:"#94a3b8",fontSize:15,
            fontFamily:"inherit",cursor:"pointer"}}>
          Sign In
        </button>
      </div>
    </div>
  );
}

function LoginPage() {
  return (
    <div style={{minHeight:"100vh",background:"#040408",display:"flex",
      alignItems:"center",justifyContent:"center",color:"#fff",
      fontFamily:"'Syne',sans-serif"}}>
      <h2>Login Page Coming Soon</h2>
    </div>
  );
}

export default function App() {
  return <LandingPage />;
}

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
