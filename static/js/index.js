(() => {
    const app = {
        init() {
            this.cacheElements();
            this.generateUI();
        },
        cacheElements() {
            this.$hamburger = document.querySelector('.hamburger-menu');
        },
        generateUI() {
            this.registerListeners();
        },
        registerListeners() {
            this.$hamburger.addEventListener('click', this.hamburgerToggler);
        },
        hamburgerToggler() {
            this.$html = document.querySelector('html');
            this.$hamburgerItems = document.querySelector('.nav__list--hamburger');
            const lock = this.$hamburgerItems.classList.toggle('hamburger-selected');
            if (lock) {
                this.$html.style.overflow="hidden";
            } else {
                this.$html.style.overflow="unset";
            }
        },
    }
    app.init()
})();