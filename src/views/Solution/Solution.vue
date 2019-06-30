<template>
    <v-layout>
        <SrcCode :srcCode="srcCode">
        </SrcCode>
    </v-layout>
</template>

<script>
    import SrcCode from "../SrcCode/SrcCode";
    export default {
        props: ['srcCode'],
        name: "Solution",
        components: {SrcCode}
    }
</script>
