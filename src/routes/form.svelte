<script>
    import Filter from "./filter.svelte";

    /** @type {string[]} */
    export let keys = [];
    
    /** @type {Record<string, string>[]} */
    export let rows = [];

    /** @type {Record<string, string>} */
    let searchTerms = {}
    keys.forEach((key) => searchTerms[key] = "")

    $: filteredList = rows.filter(item => {
        return keys.every(key =>
            item[key].includes(searchTerms[key])
        );
    });
</script>

<div class="filters">
{#each keys as key}
    <Filter propertyName={key}
        bind:searchTerm={searchTerms[key]}
        rows={filteredList} />
{/each}
</div>

<table>
    <tr>
        {#each keys as key}
            <th>{key}</th>
        {/each}
    </tr>
    {#each filteredList as c}
        <tr>
            {#each keys as key}
                <td>{c[key]}</td>
            {/each}
        </tr>
    {/each}
</table>

<style>
.filters {
    margin: 20px;
}
table {
    margin: 20px;
}

tr:nth-child(even) {background: #eeeeee;}
tr:nth-child(odd) {background: #ffffff;}
</style>