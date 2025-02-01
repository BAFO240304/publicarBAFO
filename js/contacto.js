document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener todos los campos del formulario
    const form = event.target;
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const phoneInput = form.querySelector('#phone');
    const messageInput = form.querySelector('#message');
    
    // Reiniciar validaciones
    form.classList.remove('was-validated');
    let isValid = true;
    
    // Validar nombre
    if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.classList.add('is-invalid');
    } else {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        isValid = false;
        emailInput.classList.add('is-invalid');
    } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
    }
    
    // Validar teléfono
    const phoneRegex = /^[0-9]{9,}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        isValid = false;
        phoneInput.classList.add('is-invalid');
    } else {
        phoneInput.classList.remove('is-invalid');
        phoneInput.classList.add('is-valid');
    }
    
    // Validar mensaje
    if (!messageInput.value.trim()) {
        isValid = false;
        messageInput.classList.add('is-invalid');
    } else {
        messageInput.classList.remove('is-invalid');
        messageInput.classList.add('is-valid');
    }
    
    // Si todo es válido, mostrar mensaje de éxito
    if (isValid) {
        form.style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
        
        // Reiniciar formulario después de 3 segundos
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            document.querySelector('.success-message').style.display = 'none';
            document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
        }, 3000);
    }
});