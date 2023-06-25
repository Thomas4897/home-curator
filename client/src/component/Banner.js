import { Box } from '@mantine/core'

export default function Banner() {

    return (
        <Box
            style={{
                border: '3px solid blue',
                display: 'flex',
                flexDirection: "row"
            }}
        >

                <Box
                    style={{
                        border: '3px solid purple',
                        flex: '1'
                    }}
                >
                    Left
                </Box>
                <Box
                    style={{
                        border: '3px solid purple',
                        flex: '1',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Box>
                        Right
                    </Box>
                </Box>
          
        </Box>


    )
}