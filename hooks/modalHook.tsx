import {useState} from 'react'

const UseModal =()=> {
    const [openModal, setOpen] = useState<boolean>(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  return   {
    handleOpen, 
    handleClose,
     openModal
    }
  
}
export default UseModal;

