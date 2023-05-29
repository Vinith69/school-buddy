import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function LGTextField({
	label = "Google Map Link",
	placeholder = "Enter Map Link",
	startIcon = <LocationOnOutlinedIcon />,
}) {
	return (
		<TextField
			label={label}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						{startIcon}
					</InputAdornment>
				),
			}}
			variant="outlined"
			placeholder={placeholder}
		/>
	);
}

export default LGTextField;
