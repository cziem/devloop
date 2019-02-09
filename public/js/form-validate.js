$('.ui.form')
  .form({
    fields: {
      username: {
        identifier: 'username',
        rules: [
          {
            type: 'empty',
            prompt: 'Please enter your username'
          }
        ]
      },
      email: {
        identifier: 'email',
        rules: [
          {
            type: 'empty',
            prompt: 'Please provide a valid email'
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type: 'empty',
            prompt: 'Please enter a password'
          },
          {
            type: 'minLength[6]',
            prompt: 'Your password must be at least {ruleValue} characters'
          }
        ]
      },
      adminCode: {
        identifier: 'adminCode',
        rules: [
          {
            type: 'empty',
            prompt: 'Cannot leave admin code blank'
          }
        ]
      }
    }
  })
  ;