"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import styles from "./signup.module.css";



// export default function SignupPage() {
//     const router = useRouter();
//     const [user, setUser] = React.useState({
//         email: "",
//         password: "",
//         username: "",
//     })
//     const [buttonDisabled, setButtonDisabled] = React.useState(false);
//     const [loading, setLoading] = React.useState(false);

//     const onSignup = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.post("/api/users/signup", user);
//             console.log("Signup success", response.data);
//             router.push("/login");
            
//         } catch (error:any) {
//             console.log("Signup failed", error.message);
            
//             toast.error(error.message);
//         }finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
//             setButtonDisabled(false);
//         } else {
//             setButtonDisabled(true);
//         }
//     }, [user]);


//     return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//         <h1>{loading ? "Processing" : "Signup"}</h1>
//         <hr />
//         <label htmlFor="username">username</label>
//         <input 
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//             id="username"
//             type="text"
//             value={user.username}
//             onChange={(e) => setUser({...user, username: e.target.value})}
//             placeholder="username"
//             />
//         <label htmlFor="email">email</label>
//         <input 
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//             id="email"
//             type="text"
//             value={user.email}
//             onChange={(e) => setUser({...user, email: e.target.value})}
//             placeholder="email"
//             />
//         <label htmlFor="password">password</label>
//         <input 
//         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//             id="password"
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({...user, password: e.target.value})}
//             placeholder="password"
//             />
//             <button
//             onClick={onSignup}
//             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
//             <Link href="/login">Visit login page</Link>
//         </div>
//     )

// }



export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
        } catch (error: any) {
            console.log("Signup failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        
        <div className={styles.container}> {/* Apply container class */}
            <div className={styles.box}> {/* Apply box class */}
                <h1>{loading ? "Processing" : "Signup"}</h1>
                <hr />
                <label htmlFor="username" className={styles.label}>username</label> {/* Apply label class */}
                <input
                    className={styles.input} // Apply input class
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="username"
                />
                <label htmlFor="email" className={styles.label}>email</label> {/* Apply label class */}
                <input
                    className={styles.input} // Apply input class
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="email"
                />
                <label htmlFor="password" className={styles.label}>password</label> {/* Apply label class */}
                <input
                    className={styles.input} // Apply input class
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="password"
                />
                <button
                    onClick={onSignup}
                    className={styles.button} // Apply button class
                >
                    {buttonDisabled ? "No signup" : "Signup"}
                </button>
                <div className={styles.linkContainer}> {/* Add a container for the link */}
                <Link href="/login" className={styles.loginLink}>Visit login page</Link>
                </div>
            </div>
        </div>
    );
}