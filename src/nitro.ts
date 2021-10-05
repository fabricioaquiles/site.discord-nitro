const nitro = function() {

    const nitroButton = document.querySelector(`#nitroButton`) as HTMLButtonElement;

    if(nitroButton) {
        nitroButton.addEventListener('click', function(e) {
            e.preventDefault();

            const input = document.querySelector(`#nitroCode`) as HTMLInputElement;

            const random = (length = 8) => {
                let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

                let str = '';
                for (let i = 0; i < length; i++) {
                    str += chars.charAt(Math.floor(Math.random() * chars.length));
                }
            
                return str;
            
            };

            input.value = "https://discord.gift/"+random(17);
        });
    }

}

export default nitro;