import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useGlobalStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexFlow: "column",
            height: "100vh"
        },
        content: {
            flex: "1 1 auto",
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        }
    })
);

export default useGlobalStyles;