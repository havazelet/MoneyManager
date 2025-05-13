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
    { text: "Dashboard", icon: Home },
    { text: "Transactions", icon: Receipt },
    { text: "Budget", icon: WorkOutline },
    { text: "Goals", icon: CrisisAlert },
    { text: "Reports", icon: Grading },
    { text: "Calculator", icon: Calculate },
];