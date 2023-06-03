"use client";
import Navbar from "@/components/Navbar";
import styles from "./template.module.css";
import LGTextField from "@/components/Link-Generator-TextFields/LGTextField";

import Avatar from "@mui/material/Avatar";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import { Button, Divider } from "@mui/material";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import TemplateTextField from "@/components/Template-TextFields/TemplateTextField";

function Template() {
	const handleUpdate = () => {};
	const handleUploadIconClick = () => {};
	const handleDeleteIconClick = () => {};
	return (
		<div>
			<Navbar title="Template" />
			<main className={styles.main}>
				<div className={styles.templateContainer}>
					<TemplateTextField
						label="Email id"
						placeholder="Enter Email"
					/>
					<div className={styles.row}>
						<LGTextField
							label="Phone Number"
							placeholder="Enter Phone Number"
							startIcon={<LocalPhoneOutlinedIcon />}
						/>
						<LGTextField
							label="Phone Number"
							placeholder="Enter Phone Number"
							startIcon={<LocalPhoneOutlinedIcon />}
						/>
					</div>
					<br />
					<Divider style={{ width: "70%" }} />
					<TemplateTextField
						label="School Name"
						placeholder="Enter School Name"
					/>
					<TemplateTextField
						label="Address"
						placeholder="Enter Address"
					/>
					<br />
					<Divider style={{ width: "70%" }} />

					<TemplateTextField
						label="Account Number"
						placeholder="Enter Account Number"
						startIcon={<AccountBalanceWalletOutlinedIcon />}
					/>
					<div className={styles.row}>
						<LGTextField
							label="Beneficiary Name"
							placeholder="Enter Beneficiary Name"
							startIcon={<PeopleOutlineOutlinedIcon />}
						/>
						<LGTextField
							label="IFSC Code"
							placeholder="Enter IFSC Code"
							startIcon={<AccountBalanceOutlinedIcon />}
						/>
					</div>
					<div className={styles.row}>
						<LGTextField
							label="UPI ID"
							placeholder="Enter UPI ID"
							startIcon={<ContactPageOutlinedIcon />}
						/>
						<LGTextField
							label="GST Number"
							placeholder="Enter GST Number"
							startIcon={<SellOutlinedIcon />}
						/>
					</div>
					<div className={styles.button}>
						<Button
							variant="contained"
							fullWidth
							onClick={handleUpdate}
							style={{ height: "3.5rem" }}
						>
							Update
						</Button>
					</div>
				</div>
				<div className={styles.avatarContainer}>
					<Avatar
						alt="profile"
						src="/asset/school.png"
						className={styles.avatar}
					/>
					<h1 className={styles.profileTitle}>School Name</h1>
					<div className={styles.uploadIconContainer}>
						<FileUploadOutlinedIcon
							style={{ fontSize: 40, cursor: "pointer" }}
							onClick={handleUploadIconClick}
						/>

						<DeleteOutlinedIcon
							style={{ fontSize: 40, cursor: "pointer" }}
							onClick={handleDeleteIconClick}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Template;
