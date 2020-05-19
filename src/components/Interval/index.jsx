import React from 'react'
import Card from '../Card'
import './interval.css'

export default props => {

    return (
        <Card title="Number interval" red>
            <div className="interval">
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={0} readOnly/>
                </span>

                <span>
                    <strong>Max:</strong>
                    <input type="number" value={10} readOnly/>
                </span>
            </div>
        </Card>
    )
}