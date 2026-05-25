import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  return (
    <div style={{minHeight:"100vh",background:"#040408",display:"flex",
      alignItems:"center",justifyContent:"center",fontFamily:"'Syne',sans-serif"}}>
      <div style={{background:"#0e0e1e",border:"1px solid #7c3aed44",
        borderRadius:18,padding:"40px 32px",width:"100%",maxWidth:380,textAlign:"center"}}>
        <div style={{fontSize:32,marginBottom:8}}>🔐</div>
        <h2 style={{color:"#fff",margin:"0 0 20px",fontSize:24}}>Sign In</h2>
        <button onClick={()=>{onLogin({email:"test@test.com",tier:"trial"});navigate("/dashboard");}}
          style={{width:"100%",padding:"13px",borderRadius:10,
            background:"linear-gradient(135deg,#7c3aed,#302b63)",
            border:"none",color:"#fff",fontSize:15,fontFamily:"inherit",
            fontWeight:700,cursor:"pointer"}}>
          Test Login
        </button>
      </div>
    </div>
  );
}
