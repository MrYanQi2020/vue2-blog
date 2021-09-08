export default {
    data() {
        return {
            data: [],
        }
    },
    computed:{
        islodaing(){
            return !(this.data);
        }
    },
    async created() {
        this.data = await this.fetchData();
        console.log(this.data);
    },
   
}

