<template>
    <div class="damilola-wrapper" data-scroll-container>
        <header class="damilola-header" data-scroll-section data-scroll-section-id="section1">
            <div class="damilola-header-image overlay" data-scroll data-scroll-speed="-3" data-scroll-position="top">
                <img src="@/assets/images/image-1.jpg" alt="" class="slide">
                <img src="@/assets/images/image-2.jpg" alt="" class="slide">
                <img src="@/assets/images/image-3.jpg" alt="" class="slide">
                <img src="@/assets/images/image-4.jpg" alt="" class="slide">
            </div>
            <Navbar />
            <div class="damilola-name">
                <div class="damilola-name-wrapper" data-scroll data-scroll-direction="horizontal" data-scroll-speed="4" data-scroll-position="top">
                    <div class="damilola-name-wrapper__inner--wrap">
                        <h1 class="no-select once-in once-in-secondary" style="">Damilola Olaleye<span class="spacer">—</span></h1>
                    </div>
                </div>
            </div>
        </header>
        <section class="damilola-body-intro" data-scroll-section data-scroll-section-id="section2">
            <div class="container medium">
                <div class="row">
                    <div class="flex-column">
                        <h4 class="span-lines animate">Hey Baby 💖,</h4>
                    </div>
                    <div class="flex-column">
                        <h4 class="span-lines animate">I want you to be my valentine! And to mark a milestone of our six months together, I would love to take you out on a date. How about we go to a movie and grab dinner next Friday evening?</h4>
                    </div>
                    <div class="flex-column place-item-center">
                        <div @click.prevent="playSound" class="damilola-accept-proposal btn-click magnetic accept-proposal place-item-center">
                            <div class="damilola-accept-proposal-fill btn-fill" style="transform: translate(0px, -76%);"></div>
                            <div class="damilola-accept-proposal-text btn-text text-center">
                                <p class="request">Kindly click on this button</p>
                                <h4 class="affirmation">YES</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="footer-rounded-div" data-scroll-section data-scroll-section-id="section3">
            <div class="rounded-div-wrap" style="height: 44px;">
                <div class="rounded-div"></div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import audioFile from "../assets/sounds/short-crowd-cheer.mp3";

let maxParticleCount = 150; //set max confetti count
let particleSpeed = 2;
let colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
let streamingConfetti = false;
let animationTimer = null;
let particles = [];
let waveAngle = 0;


export default {
    name: 'Index',
    methods: {
        playSound() {
            if(process.client) {
                let audio = new Audio(audioFile);
                audio.play();
                this.initConfetti();
            }
        },
        initConfetti() {
            this.$confetti.start({
                particles: [
                    {
                        type: 'rect',
                    }
                ],
                defaultColors: [
                    'red',
                    'pink',
                    '#ba0000',
                ],
            });

            setTimeout(this.stopConfetti, 8000);
        },
        stopConfetti() {
            this.$confetti.stop();
        }
    },
    beforeDestroy() {
        this.stopConfetti();
    },
    mounted() {
    }
}
</script>
