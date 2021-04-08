(function() {
    var hamburger = {
        ham: document.getElementById('hamburger'),
        mbmenu: document.getElementById('menu-mb'),
        doToggle: function(e) {
            e.preventDefault();
            this.ham.classList.toggle('opened');
            this.mbmenu.classList.toggle('opened');
        }
    };
    hamburger.ham.addEventListener('click', function(e) {
        hamburger.doToggle(e);
    });
    hamburger.mbmenu.addEventListener('click', function(e) {
        hamburger.doToggle(e);
    });
}());