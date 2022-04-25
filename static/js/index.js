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
            this.$hamburger.addEventListener('click', this.listener)
        },
        listener() {
            this.$hamburgerItems = document.querySelector('.nav__list--hamburger');
            this.$hamburgerItems.classList.toggle('hamburger-selected');
        }
        }
    app.init()
})();