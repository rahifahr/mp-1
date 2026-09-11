document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Hide all sections
            document.querySelectorAll('main section').forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});