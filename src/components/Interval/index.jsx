import React from 'react'
import Card from '../Card'
import { connect } from 'react-redux'
import { changeMinNumber, changeMaxNumber } from '../../store/actions/numbers'
import './interval.css'

const Interval = props => {
    return (
        <Card title="Number interval" red>
            <div className="interval">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={props.min} onChange={e => props.changeMin(e.target.value)}/>
                </span>

                <span>
                    <strong>Max:</strong>
                    <input type="number" value={props.max} onChange={e => props.changeMax(e.target.value)}/>
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

function mapDispatchToProps(dispatch) {
    return {
        changeMin(val) {
            const action = changeMinNumber(val)
            dispatch(action)
        },
        changeMax(val) {
            const action = changeMaxNumber(val)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)