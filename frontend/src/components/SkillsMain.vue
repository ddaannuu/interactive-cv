<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])

// import semua file di /src/assets/images
const icons = import.meta.glob('@/assets/images/*', { eager: true, as: 'url' })

const getIcon = (filename) => {
  return icons[`/src/assets/images/${filename}`]
}

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error(error)
  }
})

const groupedSkills = computed(() => {
  const grouped = {}
  skills.value.forEach((skill) => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = []
    }
    grouped[skill.category].push(skill)
  })
  return grouped
})
</script>

<template>
  <section id="skillss" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Skills & Expertise" />

      <div v-for="(skillList, category) in groupedSkills" :key="category" class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">{{ category }}</h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div
            v-for="skill in skillList"
            :key="skill.name"
            class="bg-white rounded-xl shadow-md p-6 text-center transition-transform transform hover:-translate-y-2 duration-300"
          >
            <img
              :src="getIcon(skill.icon)"
              :alt="skill.name"
              class="h-12 mx-auto mb-4"
            />
            <h3 class="text-lg font-semibold text-gray-800">{{ skill.name }}</h3>
            <p class="text-sm text-gray-500 mt-1">{{ skill.level }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
