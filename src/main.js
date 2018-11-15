import Vue  from 'vue';
import App  from '@/App';


Vue.config.productionTip = false;
const app = new Vue({
    data: {
        ViewComp: App,
    },

    created: function(){
    },

    render: function(h){
        return h(this.ViewComp);
    },
});
app.$mount('#app');
