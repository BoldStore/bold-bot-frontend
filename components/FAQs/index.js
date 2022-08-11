import React from "react";
import styles from "./styles.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { faqs } from "../DashboardComponents/Lists/faq";

function FAQs() {
  const AccordionStyle = {
    "&:before": {
      backgroundColor: "transparent !important",
    },
  };
  return (
    <div className={styles.container}>
      <h4>FAQs</h4>
      <div>
        {faqs.map((item, i) => (
          <Accordion className={styles.accordion} key={i} sx={AccordionStyle}>
            <AccordionSummary
              expandIcon={<ExpandMoreRoundedIcon className={styles.icon} />}
              className={styles.summary}
            >
              <Typography
                className={styles.typography}
                sx={{ color: "var(--black)" }}
              >
                <h6 style={{ margin: 0 }}>{item.heading}</h6>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.summary}>
              <Typography className={styles.typography}>
                <p>{item.answer}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
