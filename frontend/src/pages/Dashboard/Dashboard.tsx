import { Grid } from "@mui/material";
import StatCard from "../../components/Card/StatCard"; 
import statData from "../../mocks/statData";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        {statData.map((item) => (
          <Grid key={item.title} className={styles.gridItem}>
            <StatCard {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
