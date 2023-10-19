import React, {useState, useEffect } from "react";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";



function LandingPage() {
    const [accounts, setAccounts] = useState({});
    const { token } = useAuthContext();
    const getData = async () => {
        const url = "http://localhost:8000/token/";
        const config = {credentials: "include"}
        const response = await fetch(url, config);
        if (response.ok) {
            const data = await response.json();
            // console.log(data)
            setAccounts(data);
        }
    }
    useEffect (() => {
        if(token) {
        getData()
        }
    }, [token]);
    console.log(accounts)
    console.log(token)
    // console.log(accounts)
    // if (token && accounts) {
    //     return (
    //         <>
    //         User is logged in
    //             {/* <h1>Hello {accounts?.account.first_name}</h1> */}
    //         </>
    //     );
    // } else {
    //     return (
    //     <>
    //         <h1>Hello World</h1>
    //     </>
    //     );
    // }
    return (
      <>
        {token && accounts ? <h1>Hello, {accounts?.account.first_name} </h1> : <h1>Hello World</h1>}
      </>
    );
}



export default LandingPage
