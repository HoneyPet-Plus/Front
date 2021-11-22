import React from 'react';
import Typography from '@mui/material/Typography';
import './Footer.css'
import Stack from '@mui/material/Stack';

export default function Footer () {
    
    return (
        <div>
            <Stack className='Footer' alignItems='center' justifyContent='center'>
                <Typography variant="body1" fontSize='10px' color="#7A9D96" align='center'>
                    © 2021 - TODOS LOS DERECHOS RESERVADOS HONEYPET+ -DEVELOP BY MTIC:UTP_G2-08
                </Typography>
            </Stack>
            
        </div>
    )
}
