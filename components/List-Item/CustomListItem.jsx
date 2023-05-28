import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/navigation";

function CustomListItem({ text, path = "/analytics" }) {
	const { push } = useRouter();
	const handleListOnClick = () => {
		push(path);
	};
	return (
		<ListItem onClick={handleListOnClick}>
			<ListItemButton>
				<ListItemIcon>
					<MailIcon />
				</ListItemIcon>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	);
}

export default CustomListItem;
