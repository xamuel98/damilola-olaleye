<template>
    <div class="damilola-wrapper" data-scroll-container>
        <header class="damilola-header" data-scroll-section>
            <div class="damilola-header-image overlay" data-scroll data-scroll-speed="-3" data-scroll-position="top">
                <img src="@/assets/images/image-1.jpg" alt="">
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
        <section class="damilola-body-intro" data-scroll-section>
            <div class="container medium">
                <div class="row">
                    <div class="flex-column">
                        <h4 class="span-lines animate">Hey Baby 💖,</h4>
                    </div>
                    <div class="flex-column">
                        <h4 class="span-lines animate">I want you to be my valentine! And to mark a milestone of our six months together, I would love to take you out on a date. How about we go to a movie and grab dinner next Friday evening?</h4>
                    </div>
                    <div class="flex-column place-item-center">
                        <div class="damilola-accept-proposal btn-click magnetic accept-proposal place-item-center">
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
    </div>
</template>

<script>
export default {
    name: 'Index',
}
</script>
