<template>
    <div class="container clearfix">
        <h1 class="text-center">User List</h1>
        <button class="btn btn-primary  float-end" v-on:click="toggleUserForm()"><font-awesome-icon :icon="['fas', 'plus']"/></button>
        <table class="table table-stripped">
            <thead>
                <th>User ID</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                
            </thead>
            <tbody>
                <tr v-for="user in users" v-bind:key="user.id">
                    <td> {{user.id}} </td>
                    <td> {{user.username}} </td>
                    <td> {{user.firstName}} </td>
                    <td> {{user.lastName}} </td>
                    <td> {{user.email}} </td>
                    <td> <button type="button" class="btn btn-danger" v-on:click="deleteUser(user.id)"><font-awesome-icon :icon="['fas', 'trash']"/></button> </td>
                </tr>
            </tbody>
        </table>
            <UserForm @user-submitted="addUser" v-show="showUserFormVar"></UserForm>
    </div>


</template>

<script>
import UserService from '../services/UserService'
import UserForm from '../components/UserForm.vue'
    export default{
        name: 'UserTable',
        components: {
            UserForm
        },
        data(){
            return{
                users : [],
                showUserFormVar: false
            }
        },
        methods: {
            getUsers(){
                UserService.getUsers().then((response) => {
                    this.users = response.data;
                });
            },
            deleteUser(id){
                UserService.deleteUser(id).then(() => {
                    this.users = this.getUsers();
                });
            },
            addUser(user){
              UserService.addUser(user).then(() => {
                    this.users = this.getUsers();
                    this.showUserFormVar = false;
                });
            },
            toggleUserForm(){
                this.showUserFormVar = !this.showUserFormVar;
            }
        },
        created(){
            this.getUsers();
        }
    }
</script>