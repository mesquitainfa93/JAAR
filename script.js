<!-- Bootstrap JS Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

<script>
    
// Validação de formulário com Bootstrap
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
})();

// Atualize a função de submit do formulário existente
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
e.preventDefault();

if (contactForm.checkValidity()) {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Mostra mensagem no idioma atual
    const successMessages = {
        'pt': `Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve através do e-mail ${email}.`,
        'en': `Thank you, ${name}! Your message has been sent successfully. We will contact you soon via email ${email}.`,
        'es': `¡Gracias, ${name}! Su mensaje ha sido enviado con éxito. Nos pondremos en contacto pronto a través del correo electrónico ${email}.`
    };
    
    // Feedback visual
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Mensagem Enviada!';
    submitBtn.classList.remove('btn-primary-custom');
    submitBtn.classList.add('btn-success');
    
    // Reset após 3 segundos
    setTimeout(() => {
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        submitBtn.innerHTML = originalText;
        submitBtn.classList.remove('btn-success');
        submitBtn.classList.add('btn-primary-custom');
    }, 3000);
}
});
</script>
