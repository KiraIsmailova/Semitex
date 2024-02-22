document.addEventListener('DOMContentLoaded', function () {
            var burgerMenu = document.getElementById('burger-menu');
            var menu = document.querySelector('.burger-menu__dropdown');
            var closeIcon = document.querySelector('.burger-menu__close-icon');

            burgerMenu.addEventListener('click', function () {
                menu.classList.toggle('active');
                burgerMenu.classList.toggle('active');
            });

            closeIcon.addEventListener('click', function () {
                menu.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        });
