<template>
    <div class="damilola-navbar">
        <p class="damilola-navbar-title">Damilola Olaleye</p>
    </div>
</template>

<script>
export default {
    methods: {
        setHtmlAttribute() {
            if(process.client) {
                let html = document.querySelector('html');
                html.setAttribute('style', 'cursor: auto; --vh:9.75px;');
            }
        }
    },
    mounted() {
        this.setHtmlAttribute();
    }
}
</script>

<style>

</style>