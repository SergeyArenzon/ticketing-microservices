import React,{useState} from 'react'

export default function signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
    }
  return (
    <form onSubmit={onSubmit}>
        <h1>signup</h1>
        <div className="form-group">
            <label>Email Address</label>
            <input className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <button className="btn btn-primary"> Sign Up</button>
    </form>
  )
}
