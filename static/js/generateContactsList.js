import contacts from '../data/contacts.json' assert {type: 'json'};

(() => {
    const app = {
        init() {
            this.cacheElements();
            this.generateUI();
        },
        cacheElements() {
            this.contacts = contacts;
            this.$contactsItem = document.querySelector('.contact-form__socials');
        },
        generateUI() {
            this.generateContactList();
        },
        generateContactList () {
            console.log(this.contacts);
            const contacts = this.contacts.map(contact => `
            <a class="link" href="${contact.url}" target="_blank">
                <div class="link__icon" style="background-image: url(assets/images/${contact.icon})"></div>
                <span class="link__href">${contact.title}</span>
            </a>
            `).join('');
            this.$contactsItem.innerHTML = contacts;
        }
    }
    app.init()
})();