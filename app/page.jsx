"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";

export default function Home() {
	const handleGetStarted = async (e) => {
		console.log("asdasd");
	};
	return (
		<>
			<Navbar />
			<main className={styles.main}>
				<div className={styles.homeContainer}>
					<h2>Welcome</h2>
					<p className={styles.thankText}>
						Thank you for choosing School Buddy
					</p>
					<div className={styles.button}>
						<Button
							variant="contained"
							fullWidth
							onClick={handleGetStarted}
						>
							Get Started
						</Button>
					</div>
				</div>
			</main>
		</>
	);
}
