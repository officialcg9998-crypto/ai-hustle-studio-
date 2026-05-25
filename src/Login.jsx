import { useState } from "react";
import { auth, db } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", cred.user.uid), {
          email: cred.user.email,
          tier: "trial",
          trialStart: serverTimestamp(),
          createdAt: serverTimestamp(),
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      window.location.href = "/dashboard";
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div style={{minHeight:"100vh",background:"#040408",display:"flex",
      alignItems:"center",justifyContent:"center",fontFamily:"'Syne',sans-serif"}}>
      <div style={{background:"#0e0e1e",border:"1px solid #302b6344",borderRadius:18,
        padding:"40px 32px",width:"100%",maxWidth:380,textAlign:"center"}}>
        <div style={{fontSize:32,marginBottom:8}}>🔐</div>
        <h2 style={{color:"#fff",margin:"0 0 4px",fontSize:24}}>
          {isSignUp ? "Create Account" : "Welcome back"}
        </h2>
        <p style={{color:"#64748b",fontSize:13,marginBottom:28}}>
          {isSignUp ? "Start your 7-day free trial" : "Sign in to AI Hustle Studio"}
        </p>
        <input type="email" placeholder="Email" value={email}
          onChange={e=>setEmail(e.target.value)}
          style={{width:"100%",padding:"12px 16px",borderRadius:10,marginBottom:12,
            background:"#1a1a2e",border:"1px solid #302b63",color:"#fff",
            fontSize:14,fontFamily:"inherit",boxSizing:"border-box"}}/>
        <input type="password" placeholder="Password" value={password}
          onChange={e=>setPassword(e.target.value)}
          style={{width:"100%",padding:"12px 16px",borderRadius:10,marginBottom:16,
            background:"#1a1a2e",border:"1px solid #302b63",color:"#fff",
            fontSize:14,fontFamily:"inherit",boxSizing:"border-box"}}/>
        {error && <p style={{color:"#ef4444",fontSize:12,marginBottom:12}}>{error}</p>}
        <button onClick={handleAuth}
          style={{width:"100%",padding:"13px 0",borderRadius:10,
            background:"linear-gradient(135deg,#7c3aed,#302b63)",
            border:"none",color:"#fff",fontSize:15,fontFamily:"inherit",
            fontWeight:700,cursor:"pointer",marginBottom:12}}>
          {isSignUp ? "Create Account & Start Trial" : "Sign In"}
        </button>
        <p style={{color:"#64748b",fontSize:12}}>
          {isSignUp ? "Already have an account? " : "No account? "}
          <span onClick={()=>setIsSignUp(!isSignUp)}
            style={{color:"#a78bfa",cursor:"pointer"}}>
            {isSignUp ? "Sign In" : "Sign up free"}
          </span>
        </p>
      </div>
    </div>
  );
}
