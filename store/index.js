export const state = () => ({
    isSoundEnabled: true,
})
  
export const mutations = {
    initializeSound(state) {
        const isSoundEnabled = JSON.parse(localStorage.getItem('isSoundEnabled'));
        if(!isSoundEnabled) {
            state.isSoundEnabled = false;
            localStorage.setItem("isSoundEnabled", false);
        } else if(isSoundEnabled) {
            state.isSoundEnabled = true;
            localStorage.setItem("isSoundEnabled", true);
        } else {
            state.isSoundEnabled = true;
            localStorage.setItem("isSoundEnabled", true);
        }
    },
}