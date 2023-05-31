"use client";
import CustomCard from "@/components/Card/CustomCard";
import Navbar from "@/components/Navbar";
import styles from "./invoiceGenerator.module.css";

function InvoiceGenerator() {
  return (
    <div>
      <Navbar title="Link Genrator" />
      <main className={styles.main}>
        <div className={styles.cardContainer}>
          <div className={styles.row}>
            <CustomCard title="Create New" description="Create a new invoice" />
            <CustomCard title="Create New" description="Create a new invoice" />
          </div>
          <div className={styles.row}>
            <CustomCard title="Create New" description="Create a new invoice" />
            <CustomCard title="Create New" description="Create a new invoice" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default InvoiceGenerator;
