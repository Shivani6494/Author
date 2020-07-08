import React, { Component } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
export default class Home extends Component {
    state = {
        value: ''
    }
    handleClick = (Value) => {
        this.setState({ value: Value });
    }
    render() {
        return (
            <div>
                <Header />
                <Body onSelectLanguage={this.handleClick} options={['Maceth', 'The Shinning', 'Heart Of Darkness', 'Hamlet']} />
                {this.state.value === 'The Shinning' ?
                    <Footer />
                    : null}
            </div>
        )
    }
}
