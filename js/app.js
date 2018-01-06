var App = {
    init: function () {
        console.log("app starting");
        App.Slider.init();
    },
    Slider: {
        numberOfSlides: 0,
        currentSlide: 0,
        init: function () {
            console.log("slider starting");
            App.Slider.numberOfSlides = document.querySelector('.slider >div').children.length;
            document.querySelector('.slider >div').style.width = App.Slider.numberOfSlides + '00%';
            document.querySelector('.slide-prev').addEventListener('click', App.Slider.slidePrev);
            document.querySelector('.slide-next').addEventListener('click', App.Slider.slideNext);
        },

        animate: function (whichSlide) {
            var translatePercent = whichSlide / App.Slider.numberOfSlides * 100;
            document.querySelector('.slider >div').style.transform = 'translateX(-' + translatePercent + '%)';
            App.Slider.currentSlide = whichSlide;
        },

        slidePrev: function () {
            console.log("clicked prev");
            var prevSlide = App.Slider.currentSlide - 1;
            if (prevSlide < 0) {
                prevSlide = App.Slider.numberOfSlides - 1;
            }
            App.Slider.animate(prevSlide);
        },

        slideNext: function () {
            console.log("clicked next");
            var nextSlide = App.Slider.currentSlide + 1;
            if (nextSlide >= App.Slider.numberOfSlides) {
                nextSlide = 0;
            }
            App.Slider.animate(nextSlide);
        },
    },
};

App.init();