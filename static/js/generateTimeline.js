import timeline from '../data/timeline.json' assert {type: 'json'};

(() => {
    const app = {
        init() {
            this.cacheElements();
            this.generateTimeline();
        },
        cacheElements() {
            this.timeline = timeline;
            this.$timeline = document.querySelector('.content-box__about');
        },
        generateTimeline() {
            const items = this.timeline.map(item => `
            <li class="list-item">
                <span class="list-item__year">${item.year}</span>
                <h4 class="list-item__title yellow margin-bottom">${item.title}</h4>
                <p class="list-item__p">${item.description}</p>
            </li>`).join('');
            this.$timeline.innerHTML = `
            <h3 class="content-box__h3 cookie">Milestones</h3>
            <ul class="list-items">
                ${items}
            </ul>`;
        },
    }
    app.init()
})();