const customCaptcha = {

    captchaUniqueResult: 0,

    createCaptcha: function(config) {

        const captchaContainer = document.getElementById('custom_captcha');

        captchaContainer.innerHTML = `
            <p class='mb-1'>${config.text}</p>

            <div class="d-flex align-items-center pl-3">

                <div class="numbers mr-3">
                    <span id="number_1" class='captcha-number'></span>
                    <span class='signo-suma'>+</span>
                    <span id="number_2" class='captcha-number'></span>
                </div>

                <div class="result" style='max-width: 100px'>
                    <input id='custom_captcha_result'
                        type="text" class="form-control" placeholder='Ej: 10'>
                </div>

            </div>
        `;

        const numbers = document.getElementsByClassName('captcha-number');

        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            
            const randomNumber = this.getRandomNumber()
            number.innerHTML = randomNumber;

            this.captchaUniqueResult += randomNumber;
        }

    },

    getRandomNumber: function() {

        const max = 15;
        const min = 1;

        let number = Math.random() * (max - min) - min;

        if(number < 0) {
            number++;
        }

        return Math.ceil(number);

    },

    verifycaptcha: function() {
        const result = document.getElementById('custom_captcha_result').value;

        if(!result || isNaN(result)) {
            return {
                ok: false,
                message: 'Debes ingresar un resultado válido para verificar que no eres un robot!'
            }
        }

        if(result != this.captchaUniqueResult)  {
            return {
                ok: false,
                message: 'El resultado ingresado no es válido'
            }
        }

        return {
            ok: true
        }
    }

}
