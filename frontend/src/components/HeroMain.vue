<script setup>
import { ref, onMounted } from 'vue'

const phrases = ['Web Programmer', 'IoT Engineer', 'Network Engineer']
const displayText = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)
const typingSpeed = 100
const pauseDelay = 2500
const showProfileAnimation = ref(false)

let typeTimeout

const typeEffect = () => {
  const currentPhrase = phrases[currentIndex.value]
  const currentLength = displayText.value.length

  if (!isDeleting.value) {
    displayText.value = currentPhrase.substring(0, currentLength + 1)
    if (displayText.value === currentPhrase) {
      isDeleting.value = true
      typeTimeout = setTimeout(typeEffect, pauseDelay)
      return
    }
  } else {
    displayText.value = currentPhrase.substring(0, currentLength - 1)
    if (displayText.value === '') {
      isDeleting.value = false
      currentIndex.value = (currentIndex.value + 1) % phrases.length
    }
  }

  typeTimeout = setTimeout(typeEffect, isDeleting.value ? 50 : typingSpeed)
}

onMounted(() => {
  typeEffect()

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showProfileAnimation.value = true
        }
      })
    },
    { threshold: 0.3 }
  )

  const el = document.getElementById('profil')
  if (el) observer.observe(el)
})
</script>

<template>
  <div>
    <section class="min-h-screen flex flex-col justify-center items-center text-white text-center bg-[#0f172a] px-6">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-jakarta">
        Rifky Danu Asmoro
      </h1>
      <p class="text-xl md:text-2xl font-medium text-white font-jakarta mt-3">
        I'm <span class="text-purple-400">{{ displayText }}</span><span class="animate-pulse">|</span>
      </p>
      <div class="flex flex-wrap justify-center gap-4 mt-8 text-sm font-medium">
        <a
          href="https://linkedin.com"
          target="_blank"
          class="flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-full shadow-md hover:bg-[#1e1f23] hover:text-white transition"
        >
          <i class="bi bi-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://instagram.com/rifky.danuu"
          target="_blank"
          class="flex items-center gap-2 bg-darkbtn text-white px-5 py-2 rounded-full shadow-md hover:bg-white hover:text-blue-600 transition"
        >
          <i class="bi bi-instagram"></i> Instagram
        </a>
        <a
          href="https://github.com/ddaannuu"
          target="_blank"
          class="flex items-center gap-2 bg-darkbtn text-white px-5 py-2 rounded-full shadow-md hover:bg-white hover:text-blue-600 transition"
        >
          <i class="bi bi-github"></i> GitHub
        </a>
      </div>
    </section>

    <section
      id="profil"
      class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center bg-white text-gray-800"
    >
      <div
        class="md:w-1/2 mb-10 md:mb-0"
        :class="showProfileAnimation ? 'animate-slide-in-left' : ''"
      >
        <h1 class="text-5xl font-bold text-gray-800 mb-4">
          Hi, My Name <span class="text-blue-600">Rifky Danu Asmoro</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          A highly motivated and responsible student at
          <b>Universitas Amikom Yogyakarta</b> with a strong interest in Software
          Engineering and Computer Networking. Passionate about continuous
          learning and self-improvement, with a deep dedication to developing
          technical skills and problem-solving abilities. Possesses a strong sense
          of responsibility and commitment to completing tasks efficiently and
          effectively. Experienced and passionate about internet of things and
          also has a background in Computer Networking.
        </p>
        <a
          href="#kontak"
          class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block"
        >
          Hubungi Saya
        </a>
      </div>

      <div
        class="md:w-1/2 flex justify-center"
        :class="showProfileAnimation ? 'animate-slide-in-right' : ''"
      >
        <img
          src="@/assets/images/mypictprofile.jpg"
          alt="Foto Profil"
          class="w-80 h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-pulse {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}
</style>
