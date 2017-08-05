var React = require('react')

var getDataAndPresent = require('./../network/getDataAndPresent')

var List = function(props) {
    return (
        <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-1 list-label-container">
                <h4>{props.title}</h4>
            </div>
            <div className="col-md-8 list-container">
                {function() {
                    var elems = []
                    for(var i=0; i < props.items.length; ++i) {
                        elems.push(<div key={i}><span>{props.items[i]}</span></div>)
                    }
                    return elems
                }()}
            </div>
        </div>
    )
}

// module.exports = List

module.exports = getDataAndPresent([
            "https://ghibliapi.herokuapp.com/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
            "https://ghibliapi.herokuapp.com/people/d5df3c04-f355-4038-833c-83bd3502b6b9",
            "https://ghibliapi.herokuapp.com/people/3031caa8-eb1a-41c6-ab93-dd091b541e11",
            "https://ghibliapi.herokuapp.com/people/87b68b97-3774-495b-bf80-495a5f3e672d",
            "https://ghibliapi.herokuapp.com/people/d39deecb-2bd0-4770-8b45-485f26e1381f",
            "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
            "https://ghibliapi.herokuapp.com/people/08ffbce4-7f94-476a-95bc-76d3c3969c19",
            "https://ghibliapi.herokuapp.com/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a"
        ], "name")(List)
