import React from 'react'
import getIconList from './iconList'

const Icon = ({type})=>( 

    <div> 
        <img src={getIconList(type)} alt=""/>      
     </div>
)

export default Icon
