import React , { Component, PropTypes } from 'react';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';
import { fetchKey, delKey, addKey, resetErrorMessage } from '../actions';
import IndexTable from '../components/IndexTable';
import KeyModal from '../components/KeyModal';

class Index extends Component {
  componentWillMount() {
    this.props.fetchKey();
  }
  render() {
    const {keys, delKey, fetchKey, addKey, errorMessage, resetErrorMessage} = this.props;
    return (
      <Row>
        <br/>
        <Col className="table" span="22" offset="1">
          <KeyModal addKey={addKey} keys={keys}/>
          <IndexTable resetErrorMessage={resetErrorMessage} error={errorMessage} keys={keys} delKey={delKey}/>
        </Col>
      </Row>
      );
  }
}

Index.proptypes = {
  keys: PropTypes.array.isRequired,
  fetchKey: PropTypes.func.isRequired,
  delKey: PropTypes.func.isRequired,
  addKey: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
  return {
    keys: state.entities.keys,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, {
  fetchKey,
  delKey,
  addKey,
  resetErrorMessage
})(Index);
