<template>
  <header
    :class="[
      'sticky top-0 z-50 duration-500 transition-all ease-in-out ',
      isScrolled
        ? 'bg-[#0f172a]/50 shadow-md backdrop-blur-md'
        : 'bg-[#0f172a]'
    ]"
  >


    <nav
      class="container mx-auto px-6 py-4 flex items-center transition-all duration-500"
      :class="isScrolled ? 'justify-between' : 'justify-center'"
    >
      <div v-if="isScrolled">
        <img
          src="@/assets/images/mypictprofile.jpg"
          alt="Foto Profil"
          class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover shadow-md"
        />
      </div>

      <ul
        class="flex space-x-6 transition-all duration-500"
        :class="isScrolled ? 'text-white' : 'text-white'"
      >
        <li><a href="#profil" :class="navClass('profil')">Profile</a></li>
        <li><a href="#pendidikan" :class="navClass('pendidikan')">Education</a></li>
        <li><a href="#skill" :class="navClass('skill')">Skill</a></li>
        <li><a href="#proyek" :class="navClass('proyek')">Project</a></li>
        <li><a href="#kontak" :class="navClass('kontak')">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      activeSection: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.observeSections();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
    observeSections() {
      const sections = ['profil', 'pendidikan', 'skill', 'proyek', 'kontak'];
      const options = { root: null, threshold: 0.6 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, options);
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    },
    navClass(id) {
      return [
        'transition duration-300 hover:text-blue-500 hover:-translate-y-0.5',
        this.activeSection === id
          ? 'text-blue-600 font-semibold'
          : 'text-white'
      ];
    }
  }
};
</script>

<style scoped>
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.animate-pulse {
  animation: blink 2s step-start infinite;
}
</style>
