import { Typography } from '@material-ui/core';
import React from 'react';
import useGlobalStyles from '../styles/GlobalStyles';

interface Props {

}

const About: React.FC<Props> = () => {
    const global = useGlobalStyles();

    return (
        <div>
            <Typography variant="h2">About</Typography>
        </div>
    );
};

export default About;