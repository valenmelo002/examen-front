const API_URL = 'http://localhost:3333/especialistas'

interface Especialista {
  nombre_completo: string
  especialidad: string
  registro_profesional: string
}

export default {
  async getAll() {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error('Error al cargar especialistas')
    return await res.json()
  },

  async getById(id: number) {
    const res = await fetch(`${API_URL}/${id}`)
    if (!res.ok) throw new Error('Especialista no encontrado')
    return await res.json()
  },

  async create(data: Especialista) {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Error al crear especialista')
    return await res.json()
  },

  async update(id: number, data: Especialista) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Error al actualizar especialista')
    return await res.json()
  },

  async remove(id: number) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
    if (!res.ok) throw new Error('Error al eliminar especialista')
    return await res.json()
  },
}
