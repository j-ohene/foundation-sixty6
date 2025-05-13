

export function vueForm() {

    const app = Vue.createApp({
      data() {
        return {
          formData: {
                 name: '',
                email: '',
                phone: '',
                message: '',
                honeypot: '',
                testAnswer: '',
          },
          responseMessage: '',
          errors: '',
          buttonText: "Submit",
          tickMark: "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>",
          submitted: false
        };
      },
      methods: {
        submitForm() {
          // Send data to PHP file using Fetch API
          fetch('email.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(this.formData),
          })
          .then(response => response.json())
          .then(data => {
            if (data.errors) {
              this.errors = data.errors;
              this.responseMessage = ''; //if by chance the user submitted already and tries again
            } else {
              this.errors = ''; // Might be errors from previous attempts
              this.responseMessage = data.message;
              this.formData = {
                name: '',
                email: '',
                phone: '',
                message: '',
                honeypot: '',
                testAnswer: '',
                
              },
              this.buttonText = this.tickMark,
              this.submitted = true
            }
          })
          .catch(error => {
            console.error('Error:', error);
            this.errors = ['Opps Something went wrong. Did you lose your internet connection? Please Try Again.'];
            this.responseMessage = '';
          });
        }
      }
    });
    console.log(document.querySelector('#app')); // Should not be null

    
    app.mount('#app');

};




 