import React from 'react'
import Card from '../Card'
import {connect} from 'react-redux'

const Average = props => {
    return (
        <Card title="Get average" green>
            <div className="interval">
                <span>
                    <span>Result: </span>
                    <strong>{(props.min + props.max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect(mapStateToProps)(Average)