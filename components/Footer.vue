<template>
    <footer class="damilola-footer" data-scroll-section data-scroll-section-id="section4">
        <div class="damilola-footer--inner" data-scroll="" data-scroll-speed="-4" data-scroll-position="bottom">
            <div class="container medium">
                <div class="row">
                    <div class="flex-column">
                        <h2 class="">
                            <span>
                                <div class="profile-picture damilola-picture"></div>
                                Let's go on a 
                            </span>
                            <span>
                                date together 
                                <div class="profile-picture my-picture"></div>
                            </span>
                        </h2>
                        <img src="@/assets/images/arrow-down.svg" alt="" class="arrow">
                    </div>
                </div>
                <div class="row">
                    <div class="flex-column">
                        <div class="divider"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="flex-column">
                        <div class="date-info">
                            <div class="position-date-info">
                                <p>I’ve made a reservation for us at <a href="https://instagram.com/wakamelagos" target="_blank" rel="noreferrer noopener">Wakame Lagos</a> </p>
                                <small>***For more info, you can click on the below address</small>
                            </div>
                            <div class="position-date-address">
                                <a href="#" class="btn-click magnetic" data-strength="25" data-strength-text="15" style="transform: rotate(0.001deg);">
                                    <div class="btn-fill" style="transform: translate(0px, -76%);"></div>
                                    <span class="btn-text" style="transform: rotate(0.001deg);">
                                        <span class="btn-text-inner change">122, Joel Ogunnaike Street, Ikeja GRA</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="flex-column">
                        <div class="bottom-part">
                            <div class="bottom-part-item">
                                <p class="title">Version</p>
                                <p class="value">{{new Date().getFullYear()}} © Edition</p>
                            </div>
                            <div class="bottom-part-item">
                                <p class="title">Local Time</p>
                                <p class="value local-time">11:34 PM GMT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>