import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { SvgIconComponent } from "@mui/icons-material";

interface StatData {
  title: string;
  value: string;
  change: number;
  description: string;
  icon: SvgIconComponent;
  iconBg: string;
}

const statData: StatData[] = [
  {
    title: "Total Income",
    value: "$16,085k",
    change: 32.45,
    description: "Increased last month",
    icon: SavingsIcon,
    iconBg: "#8e66ff",
  },
  {
    title: "Total Savings",
    value: "$38,503k",
    change: 32.45,
    description: "Increased last month",
    icon: AccountBalanceIcon,
    iconBg: "#1976d2",
  },
  {
    title: "Financial Goals",
    value: "$25,786k",
    change: -32.45,
    description: "Decreased last month",
    icon: TrackChangesIcon,
    iconBg: "#4db6ac",
  },
  {
    title: "Total Expense",
    value: "$27,432k",
    change: -32.45,
    description: "Decreased last month",
    icon: CalendarMonthIcon,
    iconBg: "#ffb300",
  },
];

export default statData;
