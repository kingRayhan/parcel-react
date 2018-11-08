import React from 'react'
export default class App extends React.Component {
    state = {
        name: 'Orchie',
    }
    render() {
        return (
            <div className="wrapper">
                <img src={require('../images/react.png')} alt="Parcel React" />
                <h1>Parcel React</h1>
                <p>
                    📦 🚀 A minimal React.js boilerplate project with parcel as
                    bundler.
                </p>
            </div>
        )
    }
}
