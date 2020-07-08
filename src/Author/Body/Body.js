import React, { Component } from 'react'
import './body.css'
import Paragraph from '../components/Paragraph/Paragraph'
export default class Body extends Component {
    state = {
        value: ''
    }
    handleClick(e) {
        this.setState({ value: e })
        this.props.onSelectLanguage(e)
    }
    render() {
        return (
            <div className={this.state.value === 'The Shinning' ? 'body successbackgroundcolor' : ['Maceth', 'Heart Of Darkness', 'Hamlet'].includes(this.state.value) ? 'body redbackgroundcolor' : 'body'}>
                <div>
                    <h2>Image</h2>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className='options-main'>
                    {
                        this.props.options.map((name,index) => {
                            return <Paragraph key={index} text={name} onclick={() => this.handleClick(name)} value={this.state.value} />
                        })
                    }
                </div>
            </div>
        )
    }
}
