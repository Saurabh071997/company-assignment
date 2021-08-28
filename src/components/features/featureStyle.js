import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(()=>({
    featureCard:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#E4E4E7",
        padding:'1.5rem',
        borderRadius:'0.5rem'
    },

    description: {
        color:"#52525B",
        marginTop:'0.5rem'
    }
}))