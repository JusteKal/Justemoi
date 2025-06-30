<template>
  <section class="about-me-page">
    <div class="about-me-card">
      <img src="/avatar.jpg" alt="Ma photo" class="about-photo" />
      <div>
        <h2>{{ $t('hi') }}</h2>
        <p>
          {{ $t('portofilio') }}<br>
          {{ $t('créer') }}<br>
          {{ $t('passion') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-me-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
}
.about-me-card {
  display: flex;
  align-items: center;
  gap: 24px;
  background: #2F2F2F;
  color: #fff;
  border-radius: 8px;
  padding: 32px;
  max-width: 100%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  font-family: 'DM Sans', sans-serif;
}
.about-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #0051e7d5;
}
</style>