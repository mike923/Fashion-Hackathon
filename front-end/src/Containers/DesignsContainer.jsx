import React, {Component} from 'react'
import axios from 'axios'

class DesignsContainer extends Component {


 fetchAllDesigns = async () =>{
     try {
         const{data :{payload}} = await axios.get(`api/products`)
     } catch (error) {
         
     }
 }




    render(){
        return(
            <div>

            </div>
        )
    }
}

export default DesignsContainer