"use client";

import styles from "./login.module.css";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

function Login() {
	const { push } = useRouter();

	const handleLogin = async (e) => {
		console.log("asdasd");
		push("/");
	};
	return (
		<>
			<main className={styles.main}>
				<section className={styles.loginContainer}>
					<h2>Login</h2>
					<div className={styles.textBox}>
						<TextField
							id="outlined-basic"
							label="Email"
							variant="outlined"
							fullWidth
						/>
					</div>
					<div className={styles.textBox}>
						<TextField
							id="outlined-basic"
							label="Password"
							variant="outlined"
							type="password"
							fullWidth
						/>
					</div>
					<ul className={styles.forgotPassword}>
						<li>
							<Link href="/">Forgot Password?</Link>
						</li>
					</ul>
					<div className={styles.button}>
						<Button
							variant="contained"
							fullWidth
							onClick={handleLogin}
						>
							Login
						</Button>
					</div>
				</section>
			</main>
		</>
	);
}

export default Login;
