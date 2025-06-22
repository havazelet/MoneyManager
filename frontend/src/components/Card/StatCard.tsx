import {
  Card as MuiCard,
  CardContent,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  description: string;
  icon: SvgIconComponent;
  iconBg: string;
}

const StatCard = ({
  title,
  value,
  change,
  description,
  icon: Icon,
  iconBg,
}: StatCardProps) => {
  const isPositive = change >= 0;

  return (
    <MuiCard sx={{ borderRadius: 3, boxShadow: 1, p: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar sx={{ bgcolor: iconBg, mr: 2 }}>
            <Icon />
          </Avatar>
          <Box>
            <Typography variant="subtitle2" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              {value}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" mt={1}>
          <Box
            display="flex"
            alignItems="center"
            bgcolor={isPositive ? "#e5fbef" : "#fdecea"}
            color={isPositive ? "#34c77b" : "#f44336"}
            px={1}
            py={0.5}
            borderRadius={1}
            mr={1}
          >
            <Typography variant="body2" fontWeight={500} ml={0.5}>
              {isPositive ? "+" : ""}
              {Math.abs(change).toFixed(2)}%
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </MuiCard>
  );
};

export default StatCard;
