"use client";
import styles from "./view.module.css";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
export default function ViewPredefined() {
	const handleEdit = (name) => async (e) => {
		console.log("handleDownloadReport", e, name);
	};
	const handleDelete = (name) => async (e) => {
		console.log("handleDownloadReport", e, name);
	};

	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData("Frozen yoghurt", "asddsadasda", 6.0, 24, 4.0),
		createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
		createData("Eclair", 262, 16.0, 24, 6.0),
		createData("Cupcake", 305, 3.7, 67, 4.3),
		createData("Gingerbread", 356, 16.0, 49, 3.9),
	];

	return (
		<>
			<Navbar title="View Predefined" />
			<main className={styles.main}>
				<div className={styles.viewPredefinedContainer}>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead
								sx={{
									backgroundColor: "black",
								}}
							>
								<TableRow>
									<TableCell
										sx={{
											color: "white",
										}}
									>
										Name
									</TableCell>
									<TableCell
										sx={{
											color: "white",
										}}
										align="right"
									>
										Description
									</TableCell>
									<TableCell
										sx={{
											color: "white",
										}}
										align="right"
									>
										Edit
									</TableCell>
									<TableCell
										sx={{
											color: "white",
										}}
										align="right"
									>
										Delete
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row, index) => (
									<TableRow
										key={row.name}
										sx={{
											"&:last-child td, &:last-child th":
												{ border: 0 },
											backgroundColor:
												index % 2 === 0
													? "lightgray"
													: "white",
										}}
									>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="right">
											{row.calories}
										</TableCell>
										<TableCell align="right">
											<EditOutlinedIcon
												style={{ cursor: "pointer" }}
												onClick={handleEdit(row.name)}
											/>
										</TableCell>
										<TableCell align="right">
											<DeleteOutlineOutlinedIcon
												style={{ cursor: "pointer" }}
												onClick={handleDelete(row.name)}
											/>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</main>
		</>
	);
}
