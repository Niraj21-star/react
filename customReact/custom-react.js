function cusstomRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
container.appendChild(domElement);
}
// const reactElement={
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank',
//     },
//     children:'Go to Google'
//}

const reactelement=React.createElement(
    'a',
    {href:'https://www.google.com', target:'_blank'},
    'Go to Google'
)
const mainContainer = document.querySelector('#root');
