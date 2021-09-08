export default {
    data() {
        return {
            data: []
        }
    },
    async created() {
        this.data = await this.fetchData();
    },
}

