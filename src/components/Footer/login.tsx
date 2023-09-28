'use client'
import * as React from 'react'
import { useAuth } from '@/lib/authContext'

export const Login = ()=> {
   const { loggedIn, login } = useAuth();
    const [signInState, setSignInState] = React.useState(false)
    const [txt, setTxt] = React.useState<undefined | string>(undefined)
    const [err, setErr] = React.useState<undefined | string>(undefined)

    const handleSetSignInState = ()=> setSignInState(prev => !prev)

    return (
      <div className="mt-2">
        <span className="text-green-400 text-sm">
          {loggedIn && "You are logged in..."}
        </span>
        <span className="text-red-400 text-sm">{err}</span>
        {signInState ? (
          <div>
            <input
              className="border text-black"
              value={txt}
              onChange={(e) => {
                setTxt(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setErr(undefined)
                const res = login(txt);
                if (res) {
                  handleSetSignInState();
                } else {
                  setErr("password not correct");
                }
              }}
            >
              Sign In
            </button>
          </div>
        ) : (
          loggedIn ? '' : <button onClick={handleSetSignInState}>Login</button>
        )}
      </div>
    );
}