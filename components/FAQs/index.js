import React from "react";
import styles from "./styles.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQs() {
  const accordians = [
    { heading: "What is BOLDBot and How can I Use it?", answer: "hi" },
    { heading: "I am an influencer, how can I use BOLDBot?", answer: "hhsuu" },
  ];
  return (
    <div className={styles.container}>
      <h4>FAQs</h4>
      <div>
        {accordians.map((item, i) => (
          <Accordion className={styles.accordion} key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
