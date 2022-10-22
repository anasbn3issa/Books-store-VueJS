const RegistrationForm= {
    props:
    [],
    template: `
    <h3>Registration Form</h3>
    <hr>
    <form autocomplete="off" class="needs-validation" novalidate>
    <text-input required="required" label="First Name" type="text" name="first-name"></text-input>
    <text-input required="true" label="Last Name" type="text" name="last-name"></text-input>
    <text-input required="required" label="Email" type="email" name="email"></text-input>
    <hr>
    <input type="submit" class="btn btn-primary" value="Register"> 
    </form>
    `,
    components:{
        'text-input': TextInput,
    },
    mounted() {
        (function () {
            'use strict'
          
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')
          
            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
              .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                  if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                  }
          
                  form.classList.add('was-validated')
                }, false)
              })
          })()
    }
}