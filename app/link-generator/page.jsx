"use client";
import styles from "./analytics.module.css";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";

import Avatar from "@mui/material/Avatar";
import LGTextField from "@/components/Link-Generator-TextFields/LGTextField";

export default function Home() {
	const handleDownloadReport = async (e) => {
		console.log("handleDownloadReport");
	};
	return (
		<>
			<Navbar title="Link Genrator" />
			<main className={styles.main}>
				<div className={styles.linkGeneratorContainer}>
					<LGTextField />
					<LGTextField />
					<LGTextField />
					<LGTextField />
					<LGTextField />
				</div>
				{/* Avatar container */}
				<div className={styles.avatarContainer}>
					<Avatar
						alt="profile"
						src="/asset/school.png"
						className={styles.avatar}
					/>
				</div>
			</main>
		</>
	);
}
