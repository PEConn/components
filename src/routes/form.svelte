<script>
    import Filter from "./filter.svelte";

    /**
     * @type {string[]} keys
     */
    export let keys = [];
    
    /**
     * @type {Record<string, string>[]} rows
     */
    export let rows = [];

    // TODO: Generate this from keys.
    let searchTerms = {
        MANUFACTURER: "",
        COMP_TYPE: "",
        SERIES: "",
        COMP_IDENT: "",
        GENDER: "",
        CABLE_SIZE_AWG: "",
        CABLE_SIZE_MM2: "",
        MATES_WITH: "",
        NOTES: ""
    }

    $: filteredList = rows.filter(item => {
        return keys.every(key => 
            item[key].includes(searchTerms[key])
        );
    });
</script>

{#each keys as key}
    <Filter propertyName={key}
        bind:searchTerm={searchTerms[key]}
        rows={filteredList} />
{/each}

<ul>
    {#each filteredList as c}
        <li>
            {#each keys as key}
                {c[key]},&nbsp;
            {/each}
        </li>
    {/each}
</ul>

<style>

</style>