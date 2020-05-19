import React from 'react'
import Card from '../Card'
import { connect } from 'react-redux'

const Random = props => {
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <Card title="Pick random" purple>
            <div className="interval">
                <span>
                    <span>Result: </span>
                    <strong>{getRandom(props.min, props.max)}</strong>
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

export default connect(mapStateToProps)(Random)