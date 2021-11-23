import React from 'react'
import TextField from '@mui/material/TextField';

function CounterHelperText({maxSize}) {
    return "Límite de caracteres " + maxSize
}

function InfoForm() {
    return (
        <div>
            <TextField fullWidth label="Nombre del Negocio *" variant="standard" helperText={<CounterHelperText maxSize="99"/>} />
        </div>
    )
}

export default InfoForm
