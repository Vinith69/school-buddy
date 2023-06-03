import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./customCard.module.css";

export default function CustomCard({ title, description, handleOpen }) {
	// const handleOpen = () => {};

	return (
		<Card sx={{ minWidth: 340, maxWidth: 360 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				image="/asset/girl.png"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<div className={styles.button}>
					<Button
						variant="contained"
						fullWidth
						onClick={handleOpen}
						style={{ height: "3rem" }}
					>
						Open
					</Button>
				</div>
			</CardActions>
		</Card>
	);
}
