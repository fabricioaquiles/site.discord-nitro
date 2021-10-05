import Home from '../components/Home';
import Repositorio from '../components/Repositorio';
import Error404 from '../components/Error404'

import ReactDOM from 'react-dom';

interface routerInterface<T> {
    [id:string]:T
}

interface componentInterface {
    render: () => JSX.Element;
    title: () => string;
}

const routes : routerInterface<componentInterface> = {
    '/': Home,
    '/repositorio': Repositorio,
}

const loadComponentHtml = async function(component:string, placeholder:string, uri:string) {

    const title = document.querySelector(`title`) as HTMLTitleElement;

    const newUri = component + placeholder;
    let componentHtml = routes[uri] ?? routes[newUri];

    if(!componentHtml) {
        componentHtml = Error404;
    }

    title.innerHTML = componentHtml.title();
    ReactDOM.render(componentHtml.render(), document.getElementById("root"))
}

export default loadComponentHtml;