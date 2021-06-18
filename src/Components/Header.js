import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import logo from './../Assets/img/logo.png';
import { Button, Container, Dialog, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Image from 'react-bootstrap/Image'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  logo: {
    marginTop: 6,
    height: 50,
  },
  button: {
    textTransform: 'none',
    marginRight: 10,
  },
}));

export default function Header() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Container className={classes.toolbar} >
        <Toolbar>
          <Image src={logo} alt={'logo'} className={classes.logo} />

          <div style={{ flex: 1 }}></div>

          {/* Profile : Login */}
          <Button
            color='primary'
            className={classes.button}
          >
            <PersonIcon style={{ marginRight: 3 }} />
            <Typography >
              Profile
            </Typography>
          </Button>

          {/* Log out button only is currently logged in */}
          <Button color='primary' className={classes.button} >
            <ExitToAppIcon style={{ marginRight: 3 }} />
            <Typography>
              Submit
            </Typography>
          </Button>

        </Toolbar>
      </Container>
    </React.Fragment >
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};