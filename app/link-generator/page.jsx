"use client";
import styles from "./analytics.module.css";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";

import Avatar from "@mui/material/Avatar";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import LGTextField from "@/components/Link-Generator-TextFields/LGTextField";
import TextFieldWithUploadButton from "@/components/Link-Generator-TextFields/LGTextFieldUpload";

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
					<LGTextField
						label="Other Link"
						placeholder="Enter Link"
						startIcon={<LinkIcon />}
					/>
					<LGTextField
						label="Text"
						placeholder="Enter Text"
						startIcon={<FormatUnderlinedOutlinedIcon />}
						multiline={true}
					/>
					<TextFieldWithUploadButton
						label="School Brochure"
						placeholder="Upload Brochure"
						startIcon={<DescriptionOutlinedIcon />}
					/>
					<LGTextField
						label="Phone Number"
						placeholder="Enter Phone Number"
						startIcon={<LocalPhoneOutlinedIcon />}
					/>
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

// https://www.figma.com/proto/8Kll5DFYhz2LfPXOKlCI8O/School-Buddy?
// type=design&node-id=3-4511&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A4459
