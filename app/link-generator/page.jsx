"use client";
import styles from "./linkGenerator.module.css";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";

import Avatar from "@mui/material/Avatar";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import LGTextField from "@/components/Link-Generator-TextFields/LGTextField";
import TextFieldWithUploadButton from "@/components/Link-Generator-TextFields/LGTextFieldUpload";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function LinkGenerator() {
  const handleUpdate = async (e) => {
    console.log("handleDownloadReport");
  };
  const handleUploadIconClick = async () => {};
  const handleDeleteIconClick = async () => {};
  return (
    <>
      <Navbar title="Invoice Genrator" />
      <main className={styles.main}>
        <div className={styles.linkGeneratorContainer}>
          <LGTextField />
          <LGTextField
            label="Other Link"
            placeholder="Enter Link"
            startIcon={<LinkIcon />}
          />
          <LGTextField
            label="Text"
            placeholder="Enter Text"
            startIcon={<FormatUnderlinedOutlinedIcon />}
            multiline={true}
          />
          <TextFieldWithUploadButton
            label="School Brochure"
            placeholder="Upload Brochure"
            startIcon={<DescriptionOutlinedIcon />}
          />
          <LGTextField
            label="Phone Number"
            placeholder="Enter Phone Number"
            startIcon={<LocalPhoneOutlinedIcon />}
          />
          <div className={styles.button}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleUpdate}
              style={{ height: "3.5rem" }}
            >
              Update
            </Button>
          </div>
        </div>
        {/* Avatar container */}
        <div className={styles.avatarContainer}>
          <Avatar
            alt="profile"
            src="/asset/school.png"
            className={styles.avatar}
          />
          <h1 className={styles.profileTitle}>School Name</h1>
          <div className={styles.uploadIconContainer}>
            <FileUploadOutlinedIcon
              style={{ fontSize: 40, cursor: "pointer" }}
              onClick={handleUploadIconClick}
            />

            <DeleteOutlinedIcon
              style={{ fontSize: 40, cursor: "pointer" }}
              onClick={handleDeleteIconClick}
            />
          </div>
        </div>
      </main>
    </>
  );
}

// https://www.figma.com/proto/8Kll5DFYhz2LfPXOKlCI8O/School-Buddy?
// type=design&node-id=3-4511&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A4459
