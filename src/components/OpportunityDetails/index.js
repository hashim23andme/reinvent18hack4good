import React, { Component } from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'

export default class OpportunityDetails extends Component {

    static propTypes = {
        opportunity: PropTypes.array,
        callbacks: PropTypes.object.isRequired
    }
  
    constructor(props) {
      super(props)
    }

    render() {
        const {opportunity, callbacks} = this.props
        return (
            <div className="detailPane">
                <h1>{opportunity.label}</h1>
                <button onClick={() => { callbacks.setOpportunity(null) }} className="closeButton">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style={{width: '24px', height: '24px', color: 'black'}}>
                        <path d="M13.06 12l5.72-5.72c.292-.292.292-.767 0-1.06-.294-.293-.768-.293-1.06 0L12 10.94 6.28 5.22c-.293-.293-.767-.293-1.06 0-.293.293-.293.768 0 1.06L10.94 12l-5.72 5.72c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.074.53-.22L12 13.06l5.72 5.72c.145.146.337.22.53.22.19 0 .383-.074.53-.22.292-.293.292-.768 0-1.06L13.06 12z"></path>
                    </svg>
                </button>
                <div>
                    <span>Time</span>{opportunity.time_commitment}
                </div>
                <div className="desc">{marked(opportunity.description, {sanitize:true})}</div>
                <ul>
                {
                    opportunity.steps.map((step, i) => (
                        <li key={`opportunity_step-${i}`}><span>{step.label}</span> {step.description}</li>
                    ))
                }
                </ul>
                <div className="ctas">
                <button onClick={() => { alert('Hooray!') }}>
                    Register
                </button>
                </div>
            </div>
        )
    }
}  