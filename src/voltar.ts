import hashInfo from '../helpers/hashHelper'
import loadComponentHtml from '../helpers/componentsHelper';

const voltar = function() {

    const voltarButton = document.querySelector(`#voltarButton`) as HTMLButtonElement;

    if(voltarButton) {
        voltarButton.addEventListener('click', function(e) {
            e.preventDefault();

            location.href = "/#/";

            const{component, placeholder, uri} = hashInfo();
            loadComponentHtml(component, placeholder, uri); 
        });
    }

}

export default voltar;