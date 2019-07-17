import React from 'react';
import { Route, Link } from 'react-router-dom';
import BandDetail from './BandDetail';

class Band extends React.Component {
  render() {
    // const { url } = this.props.match
    return (
      <div>
        <h1>Bands</h1>
        <strong>select a band</strong>
        <ul>
          <li>
            <Link to="/band/1">Band 1 </Link>
          </li>
          <li>
            <Link to="/band/2">Band 2 </Link>
          </li>
          <li>
            <Link to="/band/3">Band 3 </Link>
          </li>
        </ul>
        <Route path="/band/:id" component={BandDetail} />
      </div>
    );
  }
}
export default Band;
