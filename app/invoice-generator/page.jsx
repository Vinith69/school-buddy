"use client";
import CustomCard from "@/components/Card/CustomCard";
import Navbar from "@/components/Navbar";
import styles from "./invoiceGenerator.module.css";
import { useRouter } from "next/navigation";

function InvoiceGenerator() {
	const { push } = useRouter();
	const handleTemplateClick = () => {
		push("/invoice-generator/template");
	};
	const handleHistoryClick = () => {
		push("/invoice-generator/history");
	};
	const handlePredefinedClick = () => {
		push("/invoice-generator/predefined");
	};
	return (
		<div>
			<Navbar title="Invoice Generator" />
			<main className={styles.main}>
				<div className={styles.cardContainer}>
					<div className={styles.row}>
						<CustomCard
							title="Create New"
							description="Create a new invoice"
						/>
						<CustomCard
							title="Predefined"
							description="Create a new invoice"
							handleOpen={handlePredefinedClick}
						/>
					</div>
					<div className={styles.row}>
						<CustomCard
							title="History"
							description="Check already created invoices"
							handleOpen={handleHistoryClick}
						/>
						<CustomCard
							title="Template"
							description="Add details about school"
							handleOpen={handleTemplateClick}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}

export default InvoiceGenerator;
