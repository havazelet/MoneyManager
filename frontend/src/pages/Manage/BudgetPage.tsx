import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import styles from "./BudgetPage.module.css";
import BudgetSection from "../../components/BudgetSection/BudgetSection";

const incomeSources = ["Income 1", "Income 2", "Extra income"];
const housingItems = [
  "Mortgage or rent",
  "Second mortgage or rent",
  "Phone",
  "Electricity",
  "Gas",
  "Water and sewer",
  "Cable",
  "Waste removal",
  "Maintenance or repairs",
  "Supplies",
  "Other",
];
const transportationItems = [
  "Vehicle 1 payment",
  "Vehicle 2 payment",
  "Bus/taxi fare",
  "Insurance",
  "Licensing",
  "Fuel",
  "Maintenance",
  "Other",
];
const foodItems = ["Groceries", "Dining out", "Other"];
const entertainmentItems = [
  "Streaming apps",
  "Online games",
  "Movies",
  "Concerts",
  "Sporting events",
  "Live theater",
  "Other",
];
const personalCareItems = [
  "Medical",
  "Hair/nails",
  "Clothing",
  "Dry cleaning",
  "Health club",
  "Organization dues/fees",
  "Other",
];


export default function StyledMonthlyBudget() {
  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.typographyHeader}>
        Monthly Family Budget
      </Typography>

      <Paper className={styles.card}>
        <Typography variant="h6" className={styles.sectionTitle}>Monthly Income</Typography>
        <Grid container spacing={2}>
          {incomeSources.map((label) => (
            <Grid key={label}>
              <Typography className={styles.label}>{label}</Typography>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                size="small"   
                 />
            </Grid>
          ))}
        </Grid>
      </Paper>

      <BudgetSection title="Housing" items={housingItems} />
      <BudgetSection title="Transportation" items={transportationItems} />
      <BudgetSection title="Food" items={foodItems} />
      <BudgetSection title="Entertainment" items={entertainmentItems} />
      <BudgetSection title="Personal Care" items={personalCareItems} />

      <Box textAlign="right" mt={4}>
        <Button variant="contained" className={styles.saveButton}>
          Save Budget
        </Button>
      </Box>
    </Box>
  );
}
