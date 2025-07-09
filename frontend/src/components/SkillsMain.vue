<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])
const visibleIndexes = ref([])

const icons = import.meta.glob('@/assets/images/*', { eager: true, as: 'url' })

const getIcon = (filename) => {
  return icons[`/src/assets/images/${filename}`]
}

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills')
    skills.value = response.data

    await nextTick()
    observeSkills()
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

function observeSkills() {
  const options = { threshold: 0.3 }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index)
        if (!visibleIndexes.value.includes(index)) {
          setTimeout(() => {
            visibleIndexes.value.push(index)
          }, index * 300) // delay antar card
        }
      }
    })
  }, options)

  const elements = document.querySelectorAll('.skill-card')
  elements.forEach((el, i) => {
    el.dataset.index = i
    observer.observe(el)
  })
}
</script>

<template>
  <section id="sekill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Skills & Expertise" />

      <div v-for="(skillList, category) in groupedSkills" :key="category" class="mb-12">
        <h2 class="category-heading mb-6">{{ category }}</h2>

        <div class="flex flex-wrap justify-center gap-6">
          <div
            v-for="(skill, index) in skillList"
            :key="skill.name"
            class="skill-card group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white rounded-xl shadow-md p-6 text-center transition-all duration-500 ease-out transform opacity-0 translate-y-6 hover:bg-blue-600"
            :class="visibleIndexes.includes(index) ? 'opacity-100 translate-y-0' : ''"
          >
            <img
              :src="getIcon(skill.icon)"
              :alt="skill.name"
              class="h-12 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 class="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
              {{ skill.name }}
            </h3>
            <p class="text-sm text-gray-500 mt-1 group-hover:text-white transition-colors duration-300">
              {{ skill.level }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category-heading {
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #37517e;
  margin-bottom: 0;
}
</style>
