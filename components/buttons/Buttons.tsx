import React, { CSSProperties } from 'react'
import {Button} from "@mui/material"


type Props = {
    title?: string;
    // children?: React.ReactNode;


}

const CommonButton = (props: Props) => {
    const {title} = props
  return (
    <Button sx={{}}> {title} </Button>
  )
}
export default CommonButton