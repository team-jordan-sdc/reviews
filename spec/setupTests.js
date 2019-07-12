import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
