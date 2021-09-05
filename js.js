$('#myForm').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        name: {
            required: true,
            minlength: 3
        },
        password: {
            required: true,
            password: true,
            number: true,
            minlength: 6
        }
    },
    messages: {
        email: {
            required: 'Обовязково для заповнення'
        },
        name: {
            required: 'Обовязково для заповнення',
            minlength: 'Не меньше 3-х символів'
        },
        password: {
            required: 'Обовязково для заповнення',
            minlength: 'Пароль повинен бути не меньше 6 символів',
            number: 'Пароль повинен мати мінімум одну цифру'
        } 
    }
});