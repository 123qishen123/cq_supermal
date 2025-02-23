<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="slot-icon"></slot>
        </div>
        <div v-else>
            <slot name="slot-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="slot-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    components: {

    },
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data() {
        return {

        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) != -1
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path)
        }
    }
}
</script>

<style scoped>
.tab-bar-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }

    .text {
        font-size: 14px;
    }

    .active {
        color: red;
    }
}
</style>