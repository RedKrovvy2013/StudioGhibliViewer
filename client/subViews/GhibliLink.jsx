import React from 'react'
import {Link} from 'react-router-dom'

var GhibliLink = (props) => {
    return (
        <Link to={ {pathname: "/"+props.uri+"/"+props.dataItemId} }>
            {props.dataItem}
        </Link>
    )
}

export default GhibliLink
