import { useNavigate } from "react-router-dom"
import { IoArrowBackCircleSharp } from 'react-icons/io5'

export const GoBackButton = () => {
    const navigate = useNavigate()
    return (
        <IoArrowBackCircleSharp
        color="white"
        size={40} 
        style={{position: 'absolute', top: 0, left: 0, cursor: 'pointer'}}
        onClick={() => navigate('/')} />
    )
}