import React from "react";
import styles from "./styles.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

function FAQs({ faqArr }) {
  const accordians = [
    { heading: "What is BOLDbot and how can I Use it?", answer: "hi" },
    { heading: "I am an influencer, how can I use BOLDbot?", answer: "hhsuu" },
  ];
  return (
    <div className={styles.container}>
      <h4>FAQs</h4>
      <div>
        {accordians.map((item, i) => (
          <Accordion className={styles.accordion} key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreRoundedIcon className={styles.icon} />}
              className={styles.summary}
            >
              <Typography className={styles.typography}>
                {item.heading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.summary}>
              <Typography className={styles.typography}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
