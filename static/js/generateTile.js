import projects from '../data/projects.json' assert {type: 'json'};
import textItems from '../data/textItems.json' assert {type: 'json'};

(() => {
    const app = {
        init() {
            this.cacheElements();
            this.generateUI();
        },
        cacheElements() {
            this.projects = projects;
            this.textItems = textItems;
            this.$tiles = document.querySelector('.container');
            this.$workItem = document.querySelectorAll('.work-item');
            this.$modal = document.querySelector('.modal')
        },
        generateUI() {
            this.generateTile();
            this.registerListeners();
        },
        registerListeners() {
            this.$workItem.forEach(workItem => {
                workItem.addEventListener('click', () => this.generateModal(workItem));
            });
        },
        generateTile() {
            this.projects.push(...this.textItems);
            for (let i = 0; i < this.projects.length; i++) {
            const project = this.projects.find(e => e.order - 1 === i)
            if(project.workItem) {
                const items = `
                <div class="content-box ${
                    project.important ? 
                    (project.breaking && project.important ? 
                        "box__large box__breaking" 
                        : "box__large") 
                        : ''} work-item" data-id=${project.order} style="background-image: url(static/assets/images/${project.images.cover})">
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
                                <span class="link__href">Deployed</span>
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
                            <p class="yellow">${
                                orangeTitle.title ? `<a class="yellow" href=${orangeTitle.url} target="_blank">${orangeTitle.title}</a>` 
                                : orangeTitle}</p>
                            ${project.text.map((text) => 
                                `<li>${text.title ? `<a href=${text.url} target="_blank">${text.title}</a>` 
                                : `<p>${text}</p>`}</li>`).join('')}
                        </li>
                        </ul>
                        ` : ""
                    }
                    ${project.button ? `<a href="./static/pages/contact.html" class="btn btn--yellow margin-top">Contact</a>` : ''}
                </div>`
                this.$tiles.innerHTML += items;
                this.cacheElements();
            }}
        },
        generateModal (workItem) {
            const project = this.projects.find(project => project.order == workItem.dataset.id);
            console.log(project);
            this.$modal.innerHTML = `
            <div class="modal__box">
                <button class="modal__close">x</button>
                <h2 class="h1-cookie yellow">${project.title}</h2>
                <h3 class="modal__year">This project was created by Michiel Willems in <span class="yellow">${project.year}</span>.</h3>
                <p class="modal__paragraph">${project.description}</p>
                <div class="modal__image-box" style="background-image: url(static/assets/images/${project.images.cover})"></div>
                <div class="work-item__bg">
                    <div class="work-item__btns work-item__btns--modal">
                        <a class="link" href="${project.link.github}" target="_blank">
                            <div class="link__icon github"></div>
                            <span class="link__href">GitHub</span>
                        </a>
                        <a class="link" href="${project.link.details}" target="_blank">
                            <div class="link__icon linkedin"></div>
                            <span class="link__href">Deployed</span>
                        </a>
                    </div>
                </div>               
            </div>
            `
            this.$close = document.querySelector('.modal__close');
            this.$close.addEventListener('click', () => this.$modal.innerHTML = "");
        },
    }
    app.init()
})();