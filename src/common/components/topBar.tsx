import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Badge,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Home as HomeIcon,
  CalendarMonth as CalendarMonthIcon,
  Chat as ChatIcon,
  Notifications as NotificationsIcon,
  LocalLibrary as LocalLibraryIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
  Person as PersonIcon,
  History as HistoryIcon,
  Payment as PaymentIcon,
  Topic as TopicIcon,
  AccessTime as AvailabilityIcon,
  AccountBalance as EarningsIcon,
  AccountBalanceWallet as BankAccountIcon,
  School as BecomeTeacherIcon,
} from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../data/authStore";

interface MenuItem {
  icon: React.ReactElement;
  text: string;
  link?: string;
  onClick?: () => void;
}

export const TopBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const { clear } = useAuthStore();
  const navigate = useNavigate();

  const [settingsAnchorEl, setSettingsAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [teacherAnchorEl, setTeacherAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleTeacherClick = (event: React.MouseEvent<HTMLElement>) => {
    setTeacherAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSettingsAnchorEl(null);
    setTeacherAnchorEl(null);
  };

  const pagesWithoutTopBar = ["/", "/signup", "/signin"];
  if (pagesWithoutTopBar.includes(location.pathname)) {
    return null;
  }

  const menuItems: MenuItem[] = [
    { icon: <PersonIcon />, text: "User Details", link: "/user-details" },
    { icon: <HistoryIcon />, text: "Calls History", link: "/calls-history" },
    {
      icon: <PaymentIcon />,
      text: "Payment Methods",
      link: "/payment-methods",
    },
    {
      icon: <LogoutIcon />,
      text: "Logout",
      onClick: () => {
        handleClose();
        clear();
        alert("Logged out");
        navigate("/");
      },
    },
  ];

  const teacherMenuItems: MenuItem[] = [
    { icon: <TopicIcon />, text: "My Topics", link: "/my-topics" },
    {
      icon: <AvailabilityIcon />,
      text: "Availabilities",
      link: "/edit-availability",
    },
    { icon: <EarningsIcon />, text: "Earnings", link: "/earnings" },
    {
      icon: <BankAccountIcon />,
      text: "Bank Accounts",
      link: "/bank-accounts",
    },
    {
      icon: <BecomeTeacherIcon />,
      text: "Become Teacher",
      link: "/become-consultant",
    },
  ];

  const isSelected = (path: string) => location.pathname === path;

  const isMenuSelected = (items: MenuItem[]) => {
    return items.some(
      (item) => item.link && location.pathname.startsWith(item.link)
    );
  };

  const getIconStyle = (isSelected: boolean) => ({
    bgcolor: isSelected ? "white" : "transparent",
    color: isSelected ? theme.palette.primary.main : "white",
  });

  const getButtonStyle = (path: string) => ({
    bgcolor: isSelected(path) ? "white" : "transparent",
    color: isSelected(path) ? theme.palette.primary.main : "white",
    "&:hover": {
      bgcolor: isSelected(path) ? "white" : "rgba(255, 255, 255, 0.08)",
    },
    marginRight: 1, // Add a little space between buttons
  });

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: theme.palette.primary.main, maxHeight: 64 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            color="white"
            sx={{ mr: 2, fontWeight: "bold", cursor: "pointer" }}
            component={Link}
            to="/home"
          >
            Consultify
          </Typography>
          {!isMobile && (
            <>
              <Button
                component={Link}
                to="/home"
                startIcon={<HomeIcon />}
                sx={getButtonStyle("/home")}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/upcoming-meetings"
                startIcon={<CalendarMonthIcon />}
                sx={getButtonStyle("/upcoming-meetings")}
              >
                Meetings
              </Button>
            </>
          )}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton component={Link} to="/chat">
            <Badge
              badgeContent={7}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  zIndex: 1,
                  right: -3,
                  top: 3,
                },
              }}
            >
              <Avatar sx={getIconStyle(isSelected("/chat"))}>
                <ChatIcon />
              </Avatar>
            </Badge>
          </IconButton>
          <IconButton component={Link} to="/notifications">
            <Badge
              badgeContent={4}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  zIndex: 1,
                  right: -3,
                  top: 3,
                },
              }}
            >
              <Avatar sx={getIconStyle(isSelected("/notifications"))}>
                <NotificationsIcon />
              </Avatar>
            </Badge>
          </IconButton>
          <IconButton onClick={handleTeacherClick}>
            <Avatar sx={getIconStyle(isMenuSelected(teacherMenuItems))}>
              <LocalLibraryIcon />
            </Avatar>
          </IconButton>
          <IconButton onClick={handleSettingsClick}>
            <Avatar sx={getIconStyle(isMenuSelected(menuItems))}>
              <SettingsIcon />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        anchorEl={settingsAnchorEl}
        open={Boolean(settingsAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={item.onClick || handleClose}
            component={item.link ? Link : "li"}
            to={item.link}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
      <Menu
        anchorEl={teacherAnchorEl}
        open={Boolean(teacherAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {teacherMenuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={item.onClick || handleClose}
            component={item.link ? Link : "li"}
            to={item.link}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};
