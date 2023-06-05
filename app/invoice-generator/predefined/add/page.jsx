"use client";
import styles from "./add.module.css";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";

import LGTextField from "@/components/Link-Generator-TextFields/LGTextField";

export default function AddPredefined() {
	const handleUpdate = async (e) => {
		console.log("handleDownloadReport");
	};

	return (
		<>
			<Navbar title="Add Predefined" />
			<main className={styles.main}>
				<div className={styles.addPredefinedContainer}>
					<LGTextField
						label="Title"
						placeholder="Enter Title"
						startIcon={<></>}
					/>
					<LGTextField
						label="Description"
						placeholder="Enter Description"
						startIcon={<></>}
						multiline={true}
					/>

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
			</main>
		</>
	);
}

// https://www.figma.com/proto/8Kll5DFYhz2LfPXOKlCI8O/School-Buddy?
// type=design&node-id=3-4511&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A4459

// https://www.figma.com/proto/cR7m9KE3bLya7p6pUMPhV0/SB-Assets?type=design&node-id=30-7853&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A12652
