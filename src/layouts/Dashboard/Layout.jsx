import React from 'react';
import { Grid, Link, makeStyles, MenuItem } from '@material-ui/core';
import routes from '../../routes/constants';
import MenuListComposition from '../../components/Menu/Menu';
import { HEADERS_PROJECTS, HEADERS_BIO } from './constants';
const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.secondary.light
  }
}));
export default function Layout(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction='row' justify='flex-end' alignItems='center'>
        <Grid item>
          <Link color='textSecondary' variant='h4' href={routes.homePage.url}>
            Andrea Ratto
          </Link>
        </Grid>
        <Grid item>
          <MenuListComposition
            buttonText='projects'
            menuItem={HEADERS_PROJECTS.map((item) => (
              <MenuItem>
                <Link className={classes.link} href={item.url}>
                  {item.name}
                </Link>
              </MenuItem>
            ))}
          />
        </Grid>
        <Grid item>
          <MenuListComposition
            buttonText='About'
            menuItem={HEADERS_BIO.map((item) => (
              <MenuItem>
                <Link className={classes.link} href={item.url}>
                  {item.name}
                </Link>
              </MenuItem>
            ))}
          />
        </Grid>
        <Grid item>
          <Link href='https://andrearatto.bigcartel.com/'>Shop</Link>
        </Grid>
      </Grid>
      {props.children}
    </div>
  );
}
