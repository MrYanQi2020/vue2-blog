
export default {
    data() {
        return {
            data: [],
            isloading:true,
        }
    },
    async created() {
        this.data = await this.fetchData();
        this.isloading = false;
    },
   
}

