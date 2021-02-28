const app = Vue.createApp({
    data() {
        return {
            image: [{
                    no: 0,
                    url: "images/genshin_01_4K.jpg",
                    title: "Genshin 1 4K",
                    done: false,
                },
                {
                    no: 1,
                    url: "images/genshin_02_4K.jpg",
                    title: "Genshin 2 4K",
                    done: false
                },

                {
                    no: 2,
                    url: "images/genshin_03_4K.png",
                    title: "Genshin 3 4K",
                    done: false,
                },
                {
                    no: 3,
                    url: "images/genshin_04_4K.jpg",
                    title: "Genshin 4 4K",
                    done: false,
                },
                {
                    no: 4,
                    url: "images/genshin_05_4K.png",
                    title: "Genshin 5 4K",
                    done: false,
                },
                {
                    no: 5,
                    url: "images/genshin_06_4K.png",
                    title: "Genshin 6 4K",
                    done: false,
                },
                {
                    no: 6,
                    url: "images/genshin_07_4K.png",
                    title: "Genshin 7 4K",
                    done: false,
                },
                {
                    no: 7,
                    url: "images/genshin_08_4K.jpg",
                    title: "Genshin 8 4K",
                    done: false,
                },
                {
                    no: 8,
                    url: "images/genshin_09_4K.jpg",
                    title: "Genshin 9 4K",
                    done: false,
                },
                {
                    no: 9,
                    url: "images/genshin_10_4K.jpg",
                    title: "Genshin 10 4K",
                    done: false,
                },
                {
                    no: 10,
                    url: "images/genshin_11_4K.jpg",
                    title: "Genshin 11 4K",
                    done: false,
                },
                {
                    no: 11,
                    url: "images/genshin_12_4K.jpg",
                    title: "Genshin 12 4K",
                    done: false,
                },
            ],
            // input text
            form: {
                text: "",
                search: false,
            },
            selectview: false,
            selectImg: "",
        };
    },
    methods: {
        toggleDone(image) {
            this.image[image.no].done = !this.image[image.no].done;
        },
        search() {
            this.form.search = !this.form.search;
        },

        // viewimg
        toggleView(image) {
            console.log(image);
            this.selectImg = this.image[image.no].url;
            this.selectview = true;
        },

        cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
        },

        close() {
            this.selectview = false;
        }

    },
    computed: {
        // countlikepicture
        countUndone() {
            return this.image.filter((t) => t.done).length;
        },
        //search
        searching() {
            return this.image.filter((member) => {
                return member.title.toLowerCase().includes(this.form.text.toLowerCase());
            });
        },
    },
})