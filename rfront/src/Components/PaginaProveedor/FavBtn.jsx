import React from 'react'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


function FavBtn() {
    return (
        <div className="fab-btn-container">
            <IconButton aria-label="favorito" size="large">
                <FavoriteIcon sx={{ color: 'white' }} fontSize="inherit" />
            </IconButton>
        </div>
    )
}

export default FavBtn
