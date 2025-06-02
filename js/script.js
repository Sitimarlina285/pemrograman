document.addEventListener("DOMContentLoaded", function () {
      const popup = document.getElementById("popup");
      const popupImg = document.getElementById("popup-img");
      const popupDesc = document.getElementById("popup-desc");
      const closePopup = document.getElementById("close-popup");

      document.querySelectorAll(".product-button").forEach(button => {
        button.addEventListener("click", () => {
          const imgSrc = button.getAttribute("data-img");
          const desc = button.getAttribute("data-desc");
          const title = button.getAttribute("data-title");

          popupImg.src = imgSrc;
          popupImg.alt = title;
          popupDesc.innerHTML = desc;
          popup.classList.add("show");
        });
      });

      closePopup.addEventListener("click", () => {
        popup.classList.remove("show");
      });

      popup.addEventListener("click", (e) => {
        if (e.target === popup) {
          popup.classList.remove("show");
        }
      });
    });

    function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const navMenu = document.getElementById('navMenu');
            const menuButton = document.querySelector('.menu-image');
            
            if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking on menu items
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('navMenu').classList.remove('active');
            });
        });