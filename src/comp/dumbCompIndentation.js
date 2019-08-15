import './dumbCompIndentation.scss';

const dumbCompIndentation = indentLevel => {
  if(indentLevel === 0) return '';

  let html = '<span style="display: inline-block;">';
  for (let i=0; i<indentLevel; i++) {
    html+='<span  class="indentation">|</span>';
  }
  html += '</span>';

  return html;
};

export default dumbCompIndentation;