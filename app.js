const App = {
  data(){
    return{
      placeholder: 'Введите задачу',
      inputValue: '',
      todos:[]
    }
  },
  methods: {
    createNewTodo(){
      if(this.inputValue !== ''){
       
        this.todos.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeTodo(index){
      this.todos.splice(index, 1)
    },
    getTime(){
      let date = new Date()
      let hours = date.getHours()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds()

      if(hours < 10){
        return `0${hours} : ${minutes} : ${seconds}`
      }else if(minutes < 10){
        return `${hours} : 0${minutes} : ${seconds}`
      }else if(seconds < 10){
        return `${hours} : ${minutes} : 0${seconds}`
      }else{
        return `${hours} : ${minutes} : ${seconds}`
      }
    }
  }
}

Vue.createApp(App).mount('#app')