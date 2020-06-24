import React from 'react'
import {Button} from '@material-ui/core'
import {FormGroup, FormControlLabel, Checkbox } from '@material-ui/core/FormGroup';


export default ()=>{

    const checkBox = ()=>{
        const [state, setState] = React.useState({
            checkedA: true,
            checkedB: true,
            checkedF: true,
            checkedG: true,
          });
        
          const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
          };
        return(
        
        <FormGroup row>
            <FormControlLabel
            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
            label="Secondary"
          />
        </FormGroup>
        )
    }

return(
   <>
   <navbar>
   <Button onclick ={()=> checkBox()} variant="contained">Products</Button>
   </navbar>
   </>
    )
}