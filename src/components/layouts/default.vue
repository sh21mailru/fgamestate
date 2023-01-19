<template>
    <div class="page-wrap">
        <Header/>
        <main class="page-workarea">
            <Sidebar/>

            <div class="page-container">
                <router-view/>
            </div>
        </main>
    </div>
</template>

<script>
/* Import components */
import Header from "../../components/Header.vue";
import Sidebar from "../../components/Sidebar/Index.vue";

export default {
    name      : 'LayoutDefault',
    components: {
        Header,
        Sidebar
    }
};
</script>