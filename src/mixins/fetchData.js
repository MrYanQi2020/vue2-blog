export default {
    data() {
        return {
            data: [],
            islodaing:true,
        }
    },
    async created() {
        this.data = await this.fetchData();
        this.islodaing = false;
    },
}

