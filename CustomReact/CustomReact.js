//working of customRender
function customRender(reactElement,container){


   /* 
    // THIS CODE SUITUABLE FOR 2-3 ATTRIBUTES BECAUSE WE CANT ADD EVERY ATTRIBUTE THIS WAY
   const domElement = document.createElement
    (reactElement.type)

    domElement.innerHTML = reactElement.children

    domElement.setAttribute('href', reactElement.props.href ) // FOE ADDI
    domElement.setAttribute('target', reactElement.props.target )
    
    container.appendChild(domElement)

    */


    // LOOP BASED CODE FOR ABOVE TYPE
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if( prop == 'children') continue;
        domElement.setAttribute(prop , reactElement.props [prop])
 }
    container.appendChild(domElement)

}


const reactElement ={
    type: 'a', // type btata ha element kis type  ka tag  h yha a mtlb a tag
    props: { // properties  // iske undr jitni chye utni properties add kar skte hai // its a object
        href:  'https://google.com',
        target: '_blank'  // target means site open in new tab
     },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

  // ek method jo isko render kar de // mtlb ki reactElement jo humne bnya h usko root k undr add kar de

  customRender(reactElement , mainContainer )