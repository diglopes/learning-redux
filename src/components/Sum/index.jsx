import React from 'react'
import Card from '../Card'

export default props => {
    return (
        <Card title="Sum numbers" blue>
            <div className="interval">
                <span>
                    <span>Result: </span>
                    <strong>10</strong>
                </span>
            </div>
        </Card>
    )
}