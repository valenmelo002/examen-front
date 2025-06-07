<template>
  <v-container>
    <h2 class="text-h5 mb-4">Gestión de Especialistas</h2>

    <v-data-table
      :headers="headers"
      :items="especialistas"
      item-value="id"
      class="elevation-1"
    >
      <template #item.acciones="{ item }">
        <v-btn icon color="blue" @click="verEspecialista(item)">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-btn icon color="orange" @click="editarEspecialista(item)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon color="red" @click="eliminarEspecialista(item.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const especialistas = ref([])

const headers = [
  { title: 'Nombre Completo', key: 'nombre_completo' },
  { title: 'Especialidad', key: 'especialidad' },
  { title: 'Registro Profesional', key: 'registro_profesional' },
  { title: 'Acciones', key: 'acciones', sortable: false },
]

const cargarEspecialistas = async () => {
  const res = await axios.get('http://localhost:3333/especialistas')
  especialistas.value = res.data
}

const verEspecialista = (item) => {
  alert(`Ver: ${item.nombre_completo}`)
}

const editarEspecialista = (item) => {
  alert(`Editar: ${item.nombre_completo}`)
}

const eliminarEspecialista = async (id) => {
  if (confirm('¿Estás seguro de eliminar este especialista?')) {
    await axios.delete(`http://localhost:3333/especialistas/${id}`)
    cargarEspecialistas()
  }
}

onMounted(cargarEspecialistas)
</script>