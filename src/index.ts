import 'alpinejs';

//Src
import nitro from './nitro';
import voltar from './voltar'

//Helpers
import hashInfo from '../helpers/hashHelper'
import loadComponentHtml from '../helpers/componentsHelper';

function loadComponent() {

    const {component, placeholder, uri} = hashInfo();
    loadComponentHtml(component, placeholder, uri);

}

loadComponent();
voltar();
nitro();

window.addEventListener("hashchange", () => {
    loadComponent();
    voltar();
    nitro();
});
