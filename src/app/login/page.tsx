"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import styles from "./login.module.css";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
        setLoading(true);
        const response = await axios.post("/api/users/login", user);
        console.log("Login success", response.data);
        toast.success("Login success");
        router.push("/home");
    } catch (error:any) {
        console.log("Login failed", error.message);
        toast.error(error.message);
    } finally{
    setLoading(false);
    }
}

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>{loading ? "Processing" : "Login"}</h1>
        <hr />

        <label htmlFor="email">Email</label>
        <input
          className={styles.input}
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />
        <label htmlFor="password">Password</label>
        <input
          className={styles.input}
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        <button
          onClick={onLogin}
          className={styles.button}
          disabled={buttonDisabled}
        >
          Login here
        </button>
        <div className={styles.linkContainer}> {/* Add a container for the link */}
          <Link href="/home" className={styles.loginLink}>
            Visit Signup page
          </Link>
          </div>
      </div>
    </div>
  );
}



               
                