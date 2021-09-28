<template>
  <div>
    <header class="site-header">
      <div class="header-container">
        <div class="header-title">
          <NuxtLink to="/">Kakubin</NuxtLink>
        </div>
        <nav class="site-nav">
          <ul>
            <li><NuxtLink to="/about_me">AboutMe</NuxtLink></li>
            <li><NuxtLink to="/works">Works</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class=main>
      <Nuxt />
    </div>
  </div>
</template>

<style lang="sass">
html
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*,
*::before,
*::after
  box-sizing: border-box
  margin: 0

a
  color: #35495e

header
  position: -webkit-sticky
  position: sticky
  // なんかいけてない
  z-index: 2
  top: 0
  background-color: #fff
  margin-bottom: 32px!important

.header-container
  margin: 0 auto
  display: flex
  justify-content: space-between
  align-items: center
  text-align: center
  width: 540px

.site-header
  min-height: 50px
  border-bottom: 1px solid #e8e8e8

.header-title
  font-size: 26px
  font-weight: 300
  line-height: 54px
  letter-spacing: -1px
  margin-bottom: 0
  float: left

.site-nav
  float: right
  ul
    display: flex
  li
    margin-left: 12px

.main
  max-width:600px
  min-height: 100vh
  margin: 0 auto

  display: flex
  justify-content: center
</style>
