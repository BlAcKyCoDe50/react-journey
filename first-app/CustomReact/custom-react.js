const maincontainer = document.querySelector("#root");

function customRender(reactElement, container)
{
    // const domelement = document.createElement(reactElement.type);
    // domelement.innerHTML = reactElement.children;
    // domelement.setAttribute('href',reactElement.props.href);
    // domelement.setAttribute('target',reactElement.props.target);

    // container.appendChild(domelement);

    const domelement = document.createElement(reactElement.type);
    domelement.innerHTML = reactElement.children; 
    for(const key in reactElement.props)

    {
        if(key=='children') continue;
        domelement.setAttribute(key,reactElement.props[key]);
    }
    maincontainer.appendChild(domelement);
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },
    children : 'Click Here to visit google.com'
}

customRender(reactElement, maincontainer);