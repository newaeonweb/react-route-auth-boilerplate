import React from 'react'

class BandDetail extends React.Component {
  render() {
    const match = this.props.match;
    return (
        <div>
          <p>Selected a band: {match.params.id}</p>
        </div>
      )
  }
}
export default BandDetail