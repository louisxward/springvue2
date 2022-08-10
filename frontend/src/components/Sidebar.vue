<template>
    <div class="sidebar" :style=" {width: sidebarWidth}">
        <router-link class="link" to="/">
            <i class="icon"><font-awesome-icon :icon="['fas', 'house-chimney']"/></i>
            <transition name="fade">
                <span v-if="!collapsed">
                    Home
                </span>
            </transition>
        </router-link>
        
        <router-link class="link" to="/about">
            <i class="icon"><font-awesome-icon :icon="['fas', 'address-card']"/></i>
            <transition name="fade">
                <span v-if="!collapsed">
                    About
                </span>
            </transition>
        </router-link>

        <router-link class="link" to="/users">
            <i class="icon"><font-awesome-icon :icon="['fas', 'users']"/></i>
            <transition name="fade">
                <span v-if="!collapsed">
                    Users
                </span>
            </transition>
        </router-link>

        <span 
            class="collapse-icon"
            :class="{'rotate-180': collapsed}"
            @click="toggleSidebar"
        >
            <i><font-awesome-icon :icon="['fas', 'angle-left']"/></i>
        </span>
    </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth} from './state'
    export default{
        props:{},
        comments:{
        },
        setup(){
            return{ collapsed, toggleSidebar, sidebarWidth}
        }
    }
</script>

<style>
:root{
    --sidebar-bg-colour: #3742fa;
    --sidebar-item-hover: #5352ed;
    --sidebar-item-active: #1e90ff;
}
</style>

<style scoped>
.sidebar{
    color:white;
    background-color: var(--sidebar-bg-colour);
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon{
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to{
    opacity: 0;
}

.link{
    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;

    margin: 0.1em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;

    color: white;
    text-decoration: none;
}

.link:hover{
    background-color: var(--sidebar-item-hover);
}

.link:active{
    background-color: var(--sidebar-item-active);
}

.link .icon{
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}
</style>