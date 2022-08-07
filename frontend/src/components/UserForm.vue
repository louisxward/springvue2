<template>
    <div class="container clearfix">
        <h1 class="text-center">User Form</h1>
        <form @submit.prevent="onSubmit"> 
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" required="true" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="username"> 
            </div>
            <div class="input-group mb-3">
                <input class="form-control" type="text" placeholder="First Name" aria-label="First Name" v-model="firstName"/>
            </div>
            <div class="input-group mb-3">
                <input class="form-control" type="text" placeholder="Last Name" aria-label="First Name" v-model="lastName"/>
            </div>
            <div class="input-group mb-3">
                <input type="text" required="true" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" v-model="email">
                <span class="input-group-text" id="basic-addon2">@wanopy.com</span>
            </div>

            <button type="submit" class="btn btn-primary  float-end"><font-awesome-icon :icon="['fas', 'floppy-disk']"/></button>
        </form>
    </div>
</template>

<script>
    export default{
        name: 'UserForm',
        data(){
            return{
                username:null,
                email:null,
                firstName:null,
                lastName:null,
            }
        },
        methods:{
            onSubmit(){
                let userForm = {
                    username: this.username,
                    email: this.email + '@wanopy.com',
                    firstName: this.firstName,
                    lastName: this.lastName
                }
                this.$emit('user-submitted', userForm)
                this.username = ''
                this.email = ''
                this.firstName = ''
                this.lastName = ''
            }
        }
    }
</script>