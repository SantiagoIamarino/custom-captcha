# custom-captcha

Easy-to-use custom captcha

<h2>Steps:</h2>

- Add the custom-captcha.js file before body ending.
- Create a div where you want to have the custom captcha with the id = "custom_captcha".
- Define config (object with just one property called "text" which defines the text that the captcha will display before the numbers).
- Execute createCaptcha method which require a config as a parameter
- Execute verifyCaptcha method before to submit the form and it will return an object with two properties: "ok" (type boolean) = status of captcha solving) and "message" (type string) = captcha solving status message.


<h3>Example:</h3>

```
 let config = {
    text: 'Verifica que no eres un robot'
}

customCaptcha.createCaptcha(config);

function sendMessage(event) {

    event.preventDefault();
    const captchaVerification = customCaptcha.verifycaptcha();

    if(captchaVerification.ok) {

        $('#contact_form').submit();
        return;

    }

    alert(captchaVerification.message);

}
```

