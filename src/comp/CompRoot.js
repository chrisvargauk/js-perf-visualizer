import {Component} from 'game-gui';
import './CompRoot.scss';
import CompGraph from './CompGraph';
import CompLog from "./CompLog";


class CompRoot extends Component {
  render () {
    return `
      ${this.include(CompGraph)}
      ${this.include(CompLog)}
    `;
  }
}

export default CompRoot;