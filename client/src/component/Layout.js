import { Box, MantineProvider } from '@mantine/core';
import React from 'react';

function Layout(props) {
    const { children } = props;

    return (
        <Box
            style={{
                margin: '0px',
                border: '3px solid red',
                color: 'white',
                height: "100vh",
            }}
        >
                <Box>
                    {children}
                </Box>
        </Box>

    )

}

export default Layout;
