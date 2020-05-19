import React from 'react'
import Card from '../Card'
import { connect } from 'react-redux'

const Sum = props => {
    return (
        <Card title="Sum numbers" blue>
            <div className="interval">
                <span>
                    <span>Result: </span>
                    <strong>{props.min + props.max}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Sum)