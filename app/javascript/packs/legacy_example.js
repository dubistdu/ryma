import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class LegacyModeExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      delay: 100,
      result: 'No result'
    }

    this.handleScan = this.handleScan.bind(this)
    this.openImageDialog = this.openImageDialog.bind(this)
  }
  handleScan (result) {
    if (result) {
      this.setState({ result })
    }
  }
  handleError (err) {
    console.error(err)
  }
  openImageDialog () {
    this.refs.qrReader.openImageDialog()
  }

  render () {
    const previewStyle = {
      height: 0,
      width: 0,
      backgroundSize: '100% auto',

    }

    return (
      <div className="center">
        <p className="header-subtitle">Take a picture of your luggage code.</p>   
        <p>Please scan your luggage QR Code with your phone and we will send a notification when your luggage arrives in your stateroom.</p>   <QrReader
          ref='qrReader'
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          legacyMode
        />
        <img src="../assets/sampleQRCode.jpg" />
        <br/>
<button className="btn btn-default cta btn-primary-rivers btn-red" onClick={this.openImageDialog}> <span className="camIcon"></span><span className="btnText">Tap to Scan</span></button>
  
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default LegacyModeExample
