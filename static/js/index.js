import projects from '../data/projects.json' assert {type: 'json'};

(() => {
    const app = {
        init() {
            this.projects = projects;
            this.cacheElements();
            this.generateUI();
        },
        cacheElements() {
            this.$hamburger = document.querySelector('.hamburger-menu');
            this.$tiles = document.querySelector('.container');
        },
        generateUI() {
            this.registerListeners();
            this.$tiles.innerHTML += this.generateTile(this.projects);
        },
        registerListeners() {
            this.$hamburger.addEventListener('click', this.toggler)
        },
        toggler() {
            this.$hamburgerItems = document.querySelector('.nav__list--hamburger');
            this.$html = document.querySelector('html');
            const lock = this.$hamburgerItems.classList.toggle('hamburger-selected');
            if (lock) {
                this.$html.style.overflow="hidden";
            } else {
                this.$html.style.overflow="unset";
            }
        },
        generateTile() {
            return this.projects.map((p) => {
                if (p.workItem) {
                    return `
                    <div class="content-box ${p.important ? (p.breaking && p.important ? "box__large box__breaking" : "box__large") : ''} work-item" style="background-image: url(static/assets/images/${p.cover})">
                    <div class="work-item__ribbon">
                        <p class="ribbon__text">${p.title}</p>
                    </div>
                    <div class="work-item__bg">
                        <div class="work-item__btns">
                            <a class="link" href="${p.link.github}" target="_blank">
                                <div class="link__icon github"></div>
                                <span class="link__href">GitHub</span>
                            </a>
                            <a class="link" href="${p.link.details}" target="_blank">
                                <div class="link__icon linkedin"></div>
                                <span class="link__href">Details</span>
                            </a>
                        </div>
                    </div>
                </div>`
            }}).join('');
        }
    }
    app.init()
})();