import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OWNER_EMAIL = "officialcg9998@gmail.com";
const OWNER_PASS = "your-password-here";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    if (email === officialcg9998@gmail.com && 1369Password! === OWNER_PASS) {
      onLogin({ email, tier: "unlimited" });
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{minHeight:"100vh",background:"#040408",display:"flex",
      alignItems:"center",justifyContent:"center",fontFamily:"'Syne',sans-serif"}}>
      <div style={{background:"#0e0e1e",border:"1px solid #7c3aed44",
        borderRadius:18,padding:"40px 32px",width:"100%",maxWidth:380,textAlign:"center"}}>
        <div style={{fontSize:32,marginBottom:8}}>🔐</div>
        <h2 style={{color:"#fff",margin:"0 0 20px",fontSize:24}}>Sign In</h2>
        <input type="email" placeholder="Email" value={email}
          onChange={e=>setEmail(e.target.value)}
          style={{width:"100%",padding:"12px",borderRadius:10,marginBottom:12,
            background:"#1a1a2e",border:"1px solid #302b63",color:"#fff",
            fontSize:14,fontFamily:"inherit",boxSizing:"border-box"}}/>
        <input type="password" placeholder="Password" value={password}
          onChange={e=>setPassword(e.target.value)}
          style={{width:"100%",padding:"12px",borderRadius:10,marginBottom:16,
            background:"#1a1a2e",border:"1px solid #302b63",color:"#fff",
            fontSize:14,fontFamily:"inherit",boxSizing:"border-box"}}/>
        {error && <p style={{color:"#ef4444",fontSize:12,marginBottom:12}}>{error}</p>}
        <button onClick={handleAuth}
          style={{width:"100%",padding:"13px",borderRadius:10,
            background:"linear-gradient(135deg,#7c3aed,#302b63)",
            border:"none",color:"#fff",fontSize:15,fontFamily:"inherit",
            fontWeight:700,cursor:"pointer"}}>
          Sign In
        </button>
      </div>
    </div>
  );
}
