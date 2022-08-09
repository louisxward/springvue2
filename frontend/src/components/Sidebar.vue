<template>
    <div class="sidebar" :style=" {width: sidebarWidth}">
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
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth} from './state'
    export default{
        props:{},
        comments:{
            SidebarLink
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

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>