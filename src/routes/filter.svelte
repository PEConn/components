<script>
    /** @type string searchTerm */
    export let searchTerm = "";
    /** @type string propertyName */
    export let propertyName;
    /** @type {Record<string, string>[]} rows */
    export let rows;

    $: possibleValues = [...new Set(rows.map(item => item[propertyName]))]

    // TODO: Does this need to be reactive?
    // TODO: Is this needed? Will the datalist be global?
    const dataListName = propertyName + "-values";
</script>

<div>
<i>{propertyName}</i> includes:

<datalist id={dataListName}>
    {#each possibleValues as v}
        <option value="{v}"></option>
    {/each}
</datalist>

<input 
    list={dataListName}
    bind:value={searchTerm} 
    disabled={searchTerm === "" && rows.length <= 1}/>
</div>