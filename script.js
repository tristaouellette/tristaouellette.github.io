// Automatically display the current year in the footer.

document.getElementById("year").textContent = new Date().getFullYear();


// Smooth scrolling for internal navigation links.

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
