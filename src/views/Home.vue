<template>
  <div>
    <px-assets-table :regiones = "regiones" :salas = "salas"/>
  </div>
</template>

<script>

import axios from 'axios'

import PxAssetsTable from "@/components/PxAssetsTable";

const baseURL = 'http://localhost:3000/regions'

const URL = 'http://localhost:3000/salas'

export default {
  name: "Home",
  components: { PxAssetsTable },

  data() {
    return {
      regiones: [],
      select: null,
      salas: [],
    }
  },

async created() {

      const res = await axios.get(baseURL);

      const sal = await axios.get(URL);

      this.salas = sal.data;

      this.regiones = res.data;

  },
};

</script>