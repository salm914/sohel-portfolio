<template>
  <header class="bg-white">
    <div class="mx-auto flex w-[92%] max-w-[1440px] items-center justify-between border-b border-[#E2E5EC] py-3 sm:w-[94%]">
      <div class="flex items-center gap-2">
        <img src="/sohel-favicon.png" alt="favicon" class="h-5 w-5 md:h-6 md:w-6" />
        <h6 class="primary-text text-sm font-semibold md:text-base">Sohel Akram</h6>
      </div>
      <button class="rounded-full border border-[#E2E5EC] px-3 py-1.5 text-xs font-medium text-[#12203F] md:text-sm" @click="scrollToSection('contact')">
        Contact
      </button>
    </div>

    <div class="site-background mx-auto grid w-[92%] max-w-[1440px] gap-4 py-4 sm:w-[94%] md:gap-5 lg:grid-cols-12">
      <div class="flex min-w-0 min-h-[240px] flex-col justify-between rounded-[20px] bg-[#0D2B63] p-5 text-white lg:col-span-5">
        <div>
          <img src="/sohel-favicon.png" alt="favicon" class="h-16 w-16 md:h-20 md:w-20" />
        </div>
        <div>
          <h6 class="text-base font-semibold md:text-lg">Sohel Akram Shaikh</h6>
          <p class="mt-1 text-xs text-white/80 md:text-sm">PAM / IAM Engineer</p>
        </div>
        <hr class="mt-4 border-white/20" />
      </div>

      <div class="min-w-0 lg:col-span-7 lg:py-2">
        <span class="skill-group-labels mb-2 block text-[10px] font-medium md:text-xs">
          // CyberArk Defender – PAM certified
        </span>
        <h1 class="primary-text mb-3 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          Securing privileged access across the enterprise stack.
        </h1>
        <p class="secondary-text mb-4 text-xs leading-6 md:text-sm md:leading-7">
          IAM / PAM engineer with 7+ years administering CyberArk, CA PAM and IBM ISPIM in
          production environments for TCS, Amdocs and IBM.
        </p>

        <div class="secondary-text mb-5 flex flex-col gap-2 text-xs md:flex-row md:flex-wrap md:items-center md:gap-4 md:text-sm">
          <div><i class="fa-solid fa-map-pin"></i> Pune, India</div>
          <div><i class="fa-regular fa-envelope"></i> sksohelakram@gmail.com</div>
        </div>

        <div class="grid gap-2 sm:grid-cols-2">
          <button class="primary-button text-sm font-semibold md:text-base" @click="scrollToSection('experience')">
            View Experience
          </button>
          <button class="secondary-button text-sm font-semibold md:text-base" @click="scrollToSection('contact')">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
</style>