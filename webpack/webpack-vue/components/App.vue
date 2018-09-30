<template>
    <div>
        {{msg}}
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'hello world'
        }
    }
}
</script>
<style>
div{
    color: red;
}
</style>

