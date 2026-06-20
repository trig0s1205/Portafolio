<template>
  <AppNav />
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectLog />
    <ContactSection />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectLog from '@/components/ProjectLog.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
