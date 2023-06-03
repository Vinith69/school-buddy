"use client";
import CustomInvoiceCard from "@/components/Invoice-Card/CustomInvoiceCard";
import Navbar from "@/components/Navbar";
import styles from "./history.module.css";

function InvoiceGenerator() {
	return (
		<div>
			<Navbar title="Invoice History" />
			<main className={styles.main}>
				<div className={styles.cardContainer}>
					<div className={styles.row}>
						<CustomInvoiceCard
							title="Invoice 1"
							description="Create a new invoice"
						/>
						<CustomInvoiceCard
							title="Invoice 2"
							description="Create a new invoice"
						/>
					</div>
					<div className={styles.row}>
						<CustomInvoiceCard
							title="Invoice 3"
							description="Create a new invoice"
						/>
						<CustomInvoiceCard
							title="Invoice 4"
							description="Create a new invoice"
						/>
					</div>
				</div>
			</main>
		</div>
	);
}

export default InvoiceGenerator;
