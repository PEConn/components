<script>
    import Form from "./form.svelte";

    export let data;

    const components = data.components;
    const keys = data.components.keys;
    const rows = data.components.rows;
</script>

<h1>Components</h1>

<Form keys={keys} rows={rows}/>
