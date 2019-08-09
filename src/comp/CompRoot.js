import {Component} from 'game-gui';
import './CompRoot.scss';
import CompGraph from './CompGraph';
import CompTab from "./CompTab";


class CompRoot extends Component {
  render () {
    return `
      ${this.include(CompGraph)}
      ${this.include(CompTab)}
    `;
  }
}

export default CompRoot;