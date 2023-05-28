import React from "react";
import Button from "@mui/material/Button";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import styles from "./analyticsBtn.module.css";
import { styled } from "@mui/material/styles";

import { grey } from "@mui/material/colors";

function AnalyticsBtn({
	startIcon = <PeopleOutlineOutlinedIcon />,
	text = "Enter text",
}) {
	const handleBtnOnClick = async (e) => {
		console.log("handleDownloadReport");
	};
	return (
		<div className={styles.button}>
			<ColorButton
				variant="contained"
				fullWidth
				onClick={handleBtnOnClick}
				startIcon={startIcon}
				endIcon={<CachedIcon />}
			>
				<TextContainer>
					<span>{text}</span>
					<span>dummy</span>
				</TextContainer>
			</ColorButton>
		</div>
	);
}

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(grey[700]),
	backgroundColor: "#3B4744",
	"&:hover": {
		backgroundColor: "#313836",
	},
	height: "3.5rem",
	justifyContent: "space-between",
	alignItems: "center",
	paddingLeft: theme.spacing(2),
	paddingRight: theme.spacing(2),
	textTransform: "none",
	fontSize: ".8rem",
	"& .MuiButton-startIcon": {
		transform: "scale(1.2)", // Adjust the icon size using scale
		marginRight: theme.spacing(2), // Adds space between the start icon and text
	},
	"& .MuiButton-endIcon": {
		transform: "scale(1.2)", // Adjust the icon size using scale
		marginLeft: "auto", // Aligns the end icon to the right corner
	},

	"& .MuiButton-label": {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: theme.spacing(1), // Adds space between the text and number
	},
}));

const TextContainer = styled("div")({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "85%",
});

export default AnalyticsBtn;
