<template>
    <main id="home" data-barba="container" data-barba-namespace="home">
        <Nuxt />
    </main>
</template>

<script>
import {gsap, Power4, Power2, Power3, Elastic} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import barba from "@barba/core";

if(process.client) gsap.registerPlugin(ScrollTrigger);
let scroll;

export default {
    data() {
        return {
            localTime: null,
            formatter: null,
        }
    },
    methods: {
        /**
        * Window Inner Height Check
        */
        initWindowInnerheight() {
            if(process.client) {
                $(document).ready(function(){
                    let vh = window.innerHeight * 0.01;
                    document.documentElement.style.setProperty('--vh', `${vh}px`);
                });
            }
        },
        /**
        * Check touch device
        */
        initCheckTouchDevice() {
            function isTouchScreendevice() {
                return 'ontouchstart' in window || navigator.maxTouchPoints;      
            };
            
            if(isTouchScreendevice()){
                $('main').addClass('touch');
                $('main').removeClass('no-touch');
            } else {
                $('main').removeClass('touch');
                $('main').addClass('no-touch');
            }
            $(window).resize(function() {
                if(isTouchScreendevice()){
                    $('main').addClass('touch');
                    $('main').removeClass('no-touch');
                } else {
                    $('main').removeClass('touch');
                    $('main').addClass('no-touch');
                }
            });
        },
        /**
         * Home Slider
         */
        initImageFadingSlider() {
            if(process.client) {
                let slides = document.querySelectorAll('.slide');

                let tl = gsap.timeline({
                    repeat: -1,
                    repeatDelay: 0
                });

                slides.forEach((slide) => {
                    tl.fromTo(slide, {duration: 1, opacity: 0}, {opacity: 1})   
                    .to(slide, {duration: 1, opacity: 0}, "+=1");
                });
            }
        },
        /**
        * Scrolltrigger Scroll Check
        */
        initScrolltriggerNav() {  
            ScrollTrigger.create({
                start: 'top -30%',
                onUpdate: self => {
                    $("main").addClass('scrolled');
                },
                onLeaveBack: () => {
                    $("main").removeClass('scrolled');
                },
            });
        },
        initScrollLetters() {
            if(process.client) {
                let direction = 1; // 1 = forward, -1 = backward scroll

                const roll1 = roll(".damilola-name .damilola-name-wrapper__inner--wrap", {duration: 18}),
                    roll2 = roll(".rollingText02", {duration: 10}, true),
                    scroll = ScrollTrigger.create({
                    trigger: document.querySelector('[data-scroll-container]'),
                    onUpdate(self) {
                        if (self.direction !== direction) {
                            direction *= -1;
                            gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
                        }
                    }
                });

                // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
                function roll(targets, vars, reverse) {
                    vars = vars || {};
                    vars.ease || (vars.ease = "none");
                    const tl = gsap.timeline({
                            repeat: -1,
                            onReverseComplete() { 
                                this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
                            }
                        }), 
                        elements = gsap.utils.toArray(targets),
                        clones = elements.map(el => {
                            let clone = el.cloneNode(true);
                            el.parentNode.appendChild(clone);
                            return clone;
                        }),
                        positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
                        positionClones();
                        elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
                        window.addEventListener("resize", () => {
                        let time = tl.totalTime(); // record the current time
                        tl.totalTime(0); // rewind and clear out the timeline
                        positionClones(); // reposition
                        tl.totalTime(time); // jump back to the proper time
                    });
                    return tl;
                }
            }
        },
        initMagneticButtons() {
            if(process.client) {
                var magnets = document.querySelectorAll('.magnetic');
                var strength = 100;
                
                // START : If screen is bigger as 540 px do magnetic
                if(window.innerWidth > 540){
                    // Mouse Reset
                    magnets.forEach( (magnet) => {
                        magnet.addEventListener('mousemove', moveMagnet );
                        $(this.parentNode).removeClass('not-active');
                        magnet.addEventListener('mouseleave', function(event) {
                            gsap.to( event.currentTarget, 1.5, {
                                x: 0, 
                                y: 0, 
                                ease: Elastic.easeOut
                            });
                            gsap.to( $(this).find(".btn-text"), 1.5, {
                                x: 0, 
                                y: 0, 
                                ease: Elastic.easeOut
                            });
                        });
                    });

                    // Mouse move
                    function moveMagnet(event) {
                        var magnetButton = event.currentTarget;
                        var bounding = magnetButton.getBoundingClientRect();
                        var magnetsStrength = magnetButton.getAttribute("data-strength");
                        var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
                        
                        gsap.to( magnetButton, 1.5, {
                            x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
                            y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrength,
                            rotate: "0.001deg",
                            ease: Power4.easeOut
                        });
                        gsap.to( $(this).find(".btn-text"), 1.5, {
                            x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
                            y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
                            rotate: "0.001deg",
                            ease: Power4.easeOut
                        });
                    }

                }; // END : If screen is bigger as 540 px do magnetic

                // Mouse Enter
                $('.btn-click.magnetic').on('mouseenter', function() {
                    if($(this).find(".btn-fill").length) {
                        gsap.to($(this).find(".btn-fill"), .6, {
                            startAt: {y: "76%"},
                            y: "0%",
                            ease: Power2.easeInOut
                        });
                    }
                    if($(this).find(".request.change").length) {
                        gsap.to($(this).find(".request.change"), .3, {
                            startAt: {color: "#1C1D20"},
                            color: "#FFFFFF",
                            ease: Power3.easeIn,
                        });
                    }

                    // For date location
                    if($(this).find(".btn-text-inner.change").length) {
                        gsap.to($(this).find(".btn-text-inner.change"), .3, {
                            startAt: {color: "#1C1D20"},
                            color: "#1C1D20",
                            ease: Power3.easeIn,
                        });
                    }

                    $(this.parentNode).removeClass('not-active');
                });

                // Mouse Leave
                $('.btn-click.magnetic').on('mouseleave', function() {
                    if($(this).find(".btn-fill").length) {
                        gsap.to($(this).find(".btn-fill"), .6, {
                            y: "-76%",
                            ease: Power2.easeInOut
                        });
                    }
                    if($(this).find(".request.change").length) {
                        gsap.to($(this).find(".request.change"), .3, {
                            color: "#1C1D20",
                            ease: Power3.easeOut,
                            delay: .3
                        });
                    }

                    // For date location
                    if($(this).find(".btn-text-inner.change").length) {
                        gsap.to($(this).find(".btn-text-inner.change"), .3, {
                            color: "#FEFBE8",
                            ease: Power3.easeOut,
                            delay: .3
                        });
                    }
                    $(this.parentNode).removeClass('not-active');
                });
            }
        },
        initSmoothScroll() {
            scroll = new this.LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true
            });

            window.onresize = scroll.update();

            scroll.on("scroll", () => ScrollTrigger.update());

            ScrollTrigger.scrollerProxy('[data-scroll-container]', {
                scrollTop(value) {
                    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
                }, // we don't have to define a scrollLeft because we're only scrolling vertically.
                getBoundingClientRect() {
                    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
                },
                // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
                pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
            });

            ScrollTrigger.defaults({
                scroller: document.querySelector('[data-scroll-container]'),
            });

            /**
            * Remove Old Locomotive Scrollbar
            */

            const scrollbar = document.querySelectorAll('.c-scrollbar');

            if(scrollbar.length > 1) {
                scrollbar[0].remove();
            }

            // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
            ScrollTrigger.addEventListener('refresh', () => scroll.update());

            // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
            ScrollTrigger.refresh();
        },
        /**
        * Scrolltrigger Animations Desktop + Mobile
        */
        initScrolltriggerAnimations() {
            // Disable GSAP on Mobile
            // Source: https://greensock.com/forums/topic/26325-disabling-scrolltrigger-on-mobile-with-mediamatch/
            ScrollTrigger.matchMedia({
                
                // Desktop Only Scrolltrigger 
                "(min-width: 721px)": function() {
                
                    if(document.querySelector(".damilola-footer")) {
                        // Scrolltrigger Animation : Footer General Footer
                        $(".damilola-footer").each(function (index) {
                            let triggerElement = $(this);
                            let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
                            let targetElementArrow = $("footer .arrow");
                        
                            let tl = gsap.timeline({
                                scrollTrigger: {
                                    trigger: triggerElement,
                                    start: "0% 100%",
                                    end: "100% 100%",
                                    scrub: 0
                                }
                            });
                            tl.to(targetElementRound, {
                                height: 0,
                                ease: "none"
                                }, 0)
                                .from(targetElementArrow, {
                                rotate: 15,
                                ease: "none"
                            }, 0);
                        });
                    }
                }, // End Desktop Only Scrolltrigger

                // Mobile Only Scrolltrigger
                "(max-width: 720px)": function() {
                
                if(document.querySelector(".damilola-footer")) {
                // Scrolltrigger Animation : Footer
                    $(".damilola-footer").each(function (index) {
                        let triggerElement = $(this);
                        let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
                    
                        let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "0% 100%",
                            end: "100% 100%",
                            scrub: 0
                        }
                        });
                        tl.to(targetElementRound, {
                        height: 0,
                        ease: "none"
                        }, 0);
                    });
                }
                
                } // End Mobile Only Scrolltrigger

            })
        },
        /**
        * Footer Time Zone
        */
        initTimeZone() {
            if(process.client){
                this.localTime = document.querySelector(".local-time");

                const optionsTime = {
                    timeZone: 'Africa/Lagos',
                    timeZoneName: 'short',
                    hour: '2-digit',
                    hour12: 'true',
                    minute: 'numeric',
                    second: 'numeric',
                };

                this.formatter = Intl.DateTimeFormat('en-US', optionsTime);
                // let getUserTimeZone = this.formatter.resolvedOptions();
                // log(getUserTimeZone.timeZone)
                this.updateTimeHelper();
                setInterval(this.updateTimeHelper, 1000);
            }
        },
        updateTimeHelper() {
            const dateTime = new Date();
            const formattedDateTime = this.formatter.format(dateTime);
            this.localTime.textContent = formattedDateTime;
        },
        initMusic() {
            // if(this.isSoundEnabled) { 
                let audio = new Audio(require('@/assets/sounds/sound.mp4'));
                audio.play();
            // }
        }
    },
    mounted() {
        this.initWindowInnerheight();
        this.initCheckTouchDevice();
        this.initScrolltriggerNav();
        this.initScrollLetters();
        this.initMagneticButtons();
        this.initTimeZone();
        this.initScrolltriggerAnimations();
        this.initImageFadingSlider();
        // this.initMusic();

        if(process.client) {
            window.addEventListener('load', () => {
                this.initSmoothScroll();
            });

            
        }
    }
}
</script>

<style>

</style>