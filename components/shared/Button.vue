<template>
  <component 
    :is="tag" 
    :to="to"
    :href="href"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  to: String,
  href: String
})

const tag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return 'button'
})

const buttonClasses = computed(() => {
  const classes = ['btn']
  
  if (props.variant === 'primary') classes.push('btn--primary')
  if (props.variant === 'secondary') classes.push('btn--secondary')
  
  if (props.size === 'small') classes.push('btn--small')
  if (props.size === 'large') classes.push('btn--large')
  
  return classes
})
</script>

<!-- 스타일은 assets/scss/main.scss에서 관리 -->
