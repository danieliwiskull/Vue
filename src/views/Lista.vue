<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Región</span>
        </th>
        <th>Comuna</th>
        <th>Sala</th>
        <th>Fecha</th>
        <th>Horario</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="hidden sm:block"></td>
      </tr>
      
  <div class="flex-col items-center">
    <router-link
      class="mt-5 text-xl text-green-600 hover:underline"
      to="/"
    >Volver a la página de Inicio</router-link>
  </div>

    </tbody>
  </table>

  
</template>

<script>
export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>

