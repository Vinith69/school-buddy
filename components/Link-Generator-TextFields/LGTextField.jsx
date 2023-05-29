import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./lgTextField.module.css";

function LGTextField({
	label = "Google Map Link",
	placeholder = "Enter Map Link",
	startIcon = <LocationOnOutlinedIcon />,
	multiline = false,
}) {
	return (
		<div className={styles.textContainer}>
			<TextField
				label={label}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							{startIcon}
						</InputAdornment>
					),
					className: styles.textFieldInput,
				}}
				variant="outlined"
				placeholder={placeholder}
				fullWidth
				multiline={multiline}
				rows={multiline ? 3 : 1}
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</div>
	);
}

export default LGTextField;
