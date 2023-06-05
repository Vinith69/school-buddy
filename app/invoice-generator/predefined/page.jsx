"use client";
import CustomCard from "@/components/Card/CustomCard";
import Navbar from "@/components/Navbar";
import styles from "./predefined.module.css";
import { useRouter } from "next/navigation";

function Predefined() {
	const { push } = useRouter();

	const handleAddPredefinedClick = () => {
		push("/invoice-generator/predefined/add");
	};
	const handleViewPredefinedClick = () => {
		push("/invoice-generator/predefined/view");
	};
	return (
		<div>
			<Navbar title="Predefined" />
			<main className={styles.main}>
				<div className={styles.cardContainer}>
					<div className={styles.row}>
						<CustomCard
							title="Add Predefined"
							description="Add Predefined of a bill"
							handleOpen={handleAddPredefinedClick}
						/>
						<CustomCard
							title="View Predefined"
							description="View Previously added Predefined text"
							handleOpen={handleViewPredefinedClick}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Predefined;
