import {
    Home,
    Receipt,
    WorkOutline,
    CrisisAlert,
    Grading,
    Calculate,
  } from "@mui/icons-material";
  import MenuItem from "../../interfaces/MenuItem";
  
  export const menuItems: MenuItem[] = [
    { text: "Dashboard", icon: Home, path: "/dashboard" },
    { text: "Transactions", icon: Receipt, path: "/transactions" },
    { text: "Budget", icon: WorkOutline, path: "/manage-budget" },
    { text: "Goals", icon: CrisisAlert, path: "/goals" },
    { text: "Reports", icon: Grading, path: "/reports" },
    { text: "Calculator", icon: Calculate, path: "/calculator" },
  ];
  