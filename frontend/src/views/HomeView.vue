<script setup>
import Navbar from '@/components/NavbarMain.vue';
import Hero from '@/components/HeroMain.vue';
import Education from '@/components/EducationMain.vue';
import Skills from '@/components/SkillsMain.vue';
import Projects from '@/components/ProjectsMain.vue';
import Contact from '@/components/ContactMain.vue';
</script>
<template>
<div>
<Navbar />
<main>
<Hero />
<div v-animate-on-scroll><Education /></div>
<div v-animate-on-scroll><Skills /></div>
<div v-animate-on-scroll><Projects /></div>
<div v-animate-on-scroll><Contact /></div>
</main>
</div>
</template>
