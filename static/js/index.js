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
            this.generateTile(this.projects);
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
            for (let i = 0; i < this.projects.length; i++) {
            const project = this.projects.find(e => e.order - 1 === i)
            if(project.workItem) {
                const items = `
                <div class="content-box ${project.important ? (project.breaking && project.important ? "box__large box__breaking" : "box__large") : ''} work-item" style="background-image: url(static/assets/images/${project.cover})">
                    <div class="work-item__ribbon">
                        <p class="ribbon__text">${project.title}</p>
                    </div>
                    <div class="work-item__bg">
                        <div class="work-item__btns">
                            <a class="link" href="${project.link.github}" target="_blank">
                                <div class="link__icon github"></div>
                                <span class="link__href">GitHub</span>
                            </a>
                            <a class="link" href="${project.link.details}" target="_blank">
                                <div class="link__icon linkedin"></div>
                                <span class="link__href">Details</span>
                            </a>
                        </div>
                    </div>
                </div>`
            this.$tiles.innerHTML += items;
            } else {
                let orangeTitle = project.text.shift();
                const items = `
                <div class="content-box left">
                    <h3 class="margin-bottom">${project.title}</h3>
                    ${project.text ? `
                        <ul>
                            <li>
                                <p class="yellow">${orangeTitle.title ? `<a class="yellow" href=${orangeTitle.url} target="_blank">${orangeTitle.title}</a>` : orangeTitle}</p>
                                ${project.text.map((text) => `<li>${text.title ? `<a href=${text.url} target="_blank">${text.title}</a>` : `<p>${text}</p>`}</li>`).join('')}
                            </li>
                        </ul>
                        ` : ""
                    }
                    ${project.button ? `<a href="pages/contact.html" class="btn btn--yellow margin-top">Contact</a>` : ''}
                </div>`
                this.$tiles.innerHTML += items;
            }};
        }
    }
    app.init()
})();