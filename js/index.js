baseUri = "https://localhost:7095/Record";

Vue.createApp({
    data() {
        return {
            message: "oaushdoiusahd",
            output: "",
            error: null
        }
    },
    
    async created(){
        console.log(this.message)
        this.helperGetPosts(baseUri)
    },
    methods: {
             async helperGetPosts(uri){
                try{
                    const response = await axios.get(uri)
                    this.output = await response.data;
                    this.error = null;
                } catch(ex){
                    this.output = "not working";
                    this.error = ex.message;
                }
             }    
        
    }
}).mount("#app")