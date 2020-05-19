import React from 'react'
import Card from '../Card'

export default props => {
    return (
        <Card title="Get average" green>
            <div className="interval">
                <span>
                    <span>Result: </span>
                    <strong>5</strong>
                </span>
            </div>
        </Card>
    )
}