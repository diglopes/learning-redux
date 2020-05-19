import React from 'react'
import Card from '../Card'
import { connect } from 'react-redux'
import './interval.css'

const Interval = props => {
    return (
        <Card title="Number interval" red>
            <div className="interval">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={props.min} readOnly/>
                </span>

                <span>
                    <strong>Max:</strong>
                    <input type="number" value={props.max} readOnly/>
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

export default connect(mapStateToProps)(Interval)