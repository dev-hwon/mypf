<template>
    <div>
        <form>
            <input type="text" v-model="input_initial" />
            <input type="text" v-model="input_local" />
            <button type="button" @click="getData">get Data</button>
            <button type="button" @click="setData">set Data</button>

        </form>

        <table>
            <tr>
                <th>No.</th>
                <th>Name</th>
            </tr>
            <tr v-for="(data, idx) in options" :data-value="data.initial">
                <td>{{ data.initial }}</td>
                <td>{{ data.local }}</td>
            </tr>
        </table>

        <div class="">
            <h2>get data API</h2>
            <div class="">postId : {{ pageNo }}</div>
            <button type="button" @click="getDataAPI">get DataAPI</button>
            <button type="button" @click="nextPost">btn nextPost</button>
            <button type="button" @click="prevPost">btn prevPost</button>
        </div>
        <table>
            <tr>
                <th colspan="4">요기요</th>
            </tr>
            <tr>
                <td colspan="4">{{ loading ? "loading..." : "" }}</td>
            </tr>
            <tr v-for="(data, idx) in comments">
                <td>{{ data.id }}</td>
                <td>{{ data.postId }}</td>
                <td>{{ data.name }}</td>
                <td>{{ data.email }}</td>
                <td>{{ data.body }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
const counter = {
	data : function(){
		return { count : 0}
	},
	methods : {
		countPlus() {
			this.count++;
		}	
	}
}
export default {
    data() {
        return {
					input_initial : "Kevin",
					input_local : "010-8738-7473",
					loading: false,
					options : [
						{initial : "S", local : "seoul"},
						{initial : "J", local : "jeju"},
						{initial : "B", local : "busan"},
					],
					comments : [],
					currentPage: 1,
					perPage: 10,
        }
    },
		watch:{
			loading(){
				console.log( this.loading );
			},
			pageNo() {
				console.log( this.pageNo );
			}
		},	
    methods: {
        getData() {
            console.log( this.input_initial );
        },
				setData() {
					this.options.push({initial : this.input_initial , local : this.input_local})
					console.log( this.options );
				},
				getDataAPI() {
					const url = `https://jsonplaceholder.typicode.com/comments?_page=${this.currentPage}&_limit=${this.perPage}`;
					this.loading = true;
					this.$axios.get(url)
					.then(res => {
						console.log(res.data)
						this.comments = [...this.comments, ...res.data];
					})
					.catch(error => {
						console.error('Error loading comments:', error);
					})
					.finally(() => {
						console.log("finally");
						this.loading = false;
					})
        },
				nextPost() {
					this.currentPage++;
					this.getDataAPI()
				},
				prevPost() {
					if( this.currentPage !== 1 ) {
						this.currentPage--;
					}
				}
    },
}
</script>
<style lang="">
    
</style>