"use client";
import styles from "./analytics.module.css";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AnalyticsBtn from "@/components/Analytics-Btn/AnalyticsBtn";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Avatar from "@mui/material/Avatar";

export default function Home() {
	const handleDownloadReport = async (e) => {
		console.log("handleDownloadReport");
	};
	return (
		<>
			<Navbar title="Analytics" />
			<main className={styles.main}>
				<div className={styles.analyticsContainer}>
					<AnalyticsBtn text="No. of visitors" />
					<AnalyticsBtn
						startIcon={<ShareOutlinedIcon />}
						text="No. of shares"
					/>
					<AnalyticsBtn
						startIcon={<DescriptionOutlinedIcon />}
						text="No. of invoices"
					/>
					<div className={styles.button}>
						<Button
							variant="contained"
							fullWidth
							onClick={handleDownloadReport}
							style={{ height: "4rem" }}
						>
							Download Report
						</Button>
					</div>
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
