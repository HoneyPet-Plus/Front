import React from 'react'
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';


function FavBtn() {
    return (
        <div className="fab-btn-container">
            <IconButton aria-label="favorito" size="large">
                <StarIcon sx={{ color: 'white' }} fontSize="inherit" />
            </IconButton>
        </div>
    )
}

export default FavBtn
