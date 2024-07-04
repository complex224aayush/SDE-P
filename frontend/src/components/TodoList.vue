<template>
  <div class="todo-container">
    <h1>My Task</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
    <button @click="addTask">Add Task</button>
    <div class="container">
    <ul>
      <li v-for="task in tasks" :key="task._id">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <button @click="removeTask(task._id)">Remove</button>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    async fetchTasks() {
      const response = await axios.get('http://localhost:3000/todo');
      this.tasks = response.data;
    },
    async addTask() {
      if (this.newTask.trim() !== '') {
        const response = await axios.post('http://localhost:3000/todo', { text: this.newTask });
        this.tasks.push(response.data);
        this.newTask = '';
      }
    },
    async removeTask(id) {
      await axios.delete(`http://localhost:3000/todo/${id}`);
      this.tasks = this.tasks.filter(task => task._id !== id);
    }
  },
  async mounted() {
    await this.fetchTasks();
  }
};
</script>

<style scoped>
.todo-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  background-color:#E6B9A6;
  border-radius:10px;
  transform:translateY(-50%);
}
 
.todo-container>h1{
    margin-top:200px; 

}


.completed {
  text-decoration: line-through;
  background-color:#E6B9A6;
}
.container{
  background-color:#EEEDEB;
  border-radius:10px;
}
</style>
