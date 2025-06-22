import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField
} from "@mui/material";
import styles from "./BudgetSection.module.css"

interface BudgetSectionProps {
    title: string;
    items: string[];
} 

const BudgetSection = ({ title, items }: BudgetSectionProps) => (
    <Paper className={styles.card}>
      <Typography variant="h6" className={styles.sectionTitle}>{title}</Typography>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid key={item}>
            <Box>
              <Typography className={styles.label}>{item}</Typography>
              <TextField
                label=""
                variant="outlined"
                size="small"
                fullWidth
                type="number"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
  
  export default BudgetSection;