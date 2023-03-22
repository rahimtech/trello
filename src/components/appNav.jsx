import React, { Component, useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import ExtensionIcon from '@mui/icons-material/Extension'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded'
import { Routes, Route, Router, Link } from 'react-router-dom'
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#fef8e6 !important',
    boxShadow: 'none',
    color: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function PersistentDrawerLeft() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [show, showmodal] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <a href="https://rahimiblog.ir" className="no-underline text-black">
            <ListItem button>
              <HomeRoundedIcon />
              <ListItemText className="ml-2" primary="Main page" />
            </ListItem>
          </a>
          <ListItem button onClick={() => showmodal(true)}>
            <PermContactCalendarIcon />
            <ListItemText className="ml-2" primary="Contact Me" />
          </ListItem>

          <Link className="no-underline	text-black" to="/jsp">
            <ListItem button>
              <ExtensionIcon />
              <ListItemText className="ml-2" primary="JSP" />
            </ListItem>
          </Link>

          <Link className="no-underline	text-black" to="/task">
            <ListItem button>
              <ListAltRoundedIcon />
              <ListItemText className="ml-2" primary="Task Panel" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={show}
        onClose={() => showmodal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <Box sx={style}>
            <div className="flex items-center	">
              <AlternateEmailRoundedIcon />
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Email : rahimianalytic@gmail.com
              </Typography>
            </div>

            <div className="flex items-center	">
              <LocalPhoneRoundedIcon />

              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Phone : 09330513311
              </Typography>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
