import Grid from "@material-ui/core/Grid";
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
  return (
    <Grid container>
      <div className={styles.container}>{children}</div>
    </Grid>
    );
};