import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

import './styles.scss';

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #121212",
    backgroundColor: "#2C1842",
    color: "#FFFFFF"
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "#3C2852",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        className="color__bug--MUI"
        onClick={handleClick}
      >
        osiujnlçaksjnlkajsn
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText className="profile__space" primary="Perfil" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText className="profile__space" primary="Mensagens salvas" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText className="profile__space" primary="Suporte" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Sair" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
