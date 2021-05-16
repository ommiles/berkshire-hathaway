import Holding from './Holding'
import React from 'react'

export default function HoldingsList({ holdings }) {
    return (
        <div className="flex flex-wrap mw7 center mb6">
            {holdings.map(holding => <Holding key={holding.id} holding={holding} /> )}
        </div>
    )
}
