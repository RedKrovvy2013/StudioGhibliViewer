import React from 'react'
import {Link} from 'react-router-dom'

var List = function(props) {
    return (
        <details className="label-and-list">
            <summary>
                <h4 className="list-label">{props.title}</h4>
            </summary>
            <p className="list">
                {function() {
                    var elems = []
                    for(var i=0; i < props.items.length; ++i) {
                        var isLast = i === props.items.length - 1
                        elems.push(
                                <Link to={ {pathname: "/"+props.uri+"/"+props.items[i].id} }
                                      key={i} >
                                    {props.items[i].value}
                                </Link>
                        )
                    }
                    return elems
                }()}
            </p>
        </details>
    )
}

export default List
