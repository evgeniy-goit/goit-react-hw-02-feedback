import {Component} from 'react';
import Controls from '../Controls/Controls';
import PropTypes from 'prop-types';

class FeedbackSection extends Component {
  static propTypes = {
    onIncrement: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
  };

  render () {
  return (
    <Controls 
    onIncrement = {this.props.onIncrement}
    options={this.props.options} 
    />);
  }
};

export default FeedbackSection;