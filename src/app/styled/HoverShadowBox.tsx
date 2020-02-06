import React, { useState } from 'react'
import { Box, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    transition: 'box-shadow 0.3s',
  }
})

interface HoverShadowBoxType { elevation?: number }

const HoverShadowBox: React.FC<HoverShadowBoxType> = ({ elevation = 4, children }) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  return (
    <Box boxShadow={hover ? elevation : 0} className={classes.root}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {children}
    </Box>
  )
}

export default HoverShadowBox;