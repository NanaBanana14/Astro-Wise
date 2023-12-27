// Mengambil semua dropdown
const dropdowns = document.querySelectorAll('header.navbar-container .nav-list ul .dropdown');

dropdowns.forEach(dropdown => {
    // Mengambil inner elements dari setiap dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault();
            const optionText = option.innerText;

            if (selected.innerText !== optionText) {
                selected.innerText = optionText;
                options.forEach(opt => {
                    opt.classList.remove('active');
                });
                option.classList.add('active');
            }

            // Menutup dropdown setelah memilih opsi
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            // Mengarahkan ke tautan yang sesuai dengan opsi
            const link = option.querySelector('a');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });
    });    

    // Mencegah menutup dropdown saat mengklik di dalam dropdown
    dropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Menutup dropdown saat mengklik di luar dropdown
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        }
    });

    // Mencegah perpindahan saat menutup dropdown
    menu.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
