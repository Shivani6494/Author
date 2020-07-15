import React, { Component } from 'react'
import './paragraph.css'
export default class Paragraph extends Component {
    render() {
        return (
            // <p className='options' onClick={() => alert('clicked')}>{this.props.text}</p>
            <p key={this.props.key} className={this.props.value===this.props.text?"options red":"options"} onClick={this.props.onclick}>{this.props.text}</p>
        )
    }

}
