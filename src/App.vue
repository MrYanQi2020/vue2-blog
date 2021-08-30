<template>
    <div id="app">
        <LeftAside />
    </div>
</template>

<script>
import LeftAside from "@/components/LeftAside";

export default {
    name: "App",
    components: {
        LeftAside,
    },
};
</script>
<style lang="less" scoped>
#app {
    height: 100vh;
    .LeftAside-container {
        width: 220px;
    }
}
</style>