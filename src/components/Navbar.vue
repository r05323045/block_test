<template>
  <nav class="navbar" :class="{ branding: $route.path === '/branding' }">
    <a class="navbar-brand" @click="$router.push('/').catch(()=>{})">B</a>
    <div class="navbar-group">
      <ul class="item-wrapper row">
        <li class="nav-item" :class="{ active: $route.path === '/'}" @click="$router.push('/').catch(()=>{})">
          <span>About</span>
        </li>
        <li class="nav-item">
          <span>Website</span>
        </li>
        <li class="nav-item"  :class="{ active: $route.path === '/branding'}" @click="$router.push('/branding').catch(()=>{})">
          <span>Branding</span>
        </li>
        <li class="hamburger-menu" @click="showModal = true">
          <span class="hamburger">&equiv;</span>
        </li>
      </ul>
    </div>
    <Modal v-show="showModal" @closeModal="showModal = false"></Modal>
  </nav>
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
  data () {
    return {
      showModal: false
    }
  },
  watch: {
    showModal () {
      if (this.showModal) {
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        document.querySelector('body').style.overflow = 'auto'
      }
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped lang="scss">
.navbar {
  z-index: 999;
  position: fixed;
  width: 100%;
  padding: 0;
  .navbar-brand {
    cursor: pointer;
    padding: 0;
    margin: 24px 32px;
    color: #ffffff;
    font-weight: 800;
    font-size: 40px;
    line-height: 52px;
    -webkit-text-decoration-line: overline;
    text-decoration-line: overline;
  }
  .navbar-group {
    .item-wrapper {
      margin: 0;
      list-style-type: none;
      height: 100%;
      .nav-item {
        cursor: pointer;
        color: #ffffff;
        font-size: 18px;
        line-height: 22px;
        padding: 36px 32px;
      }
      .nav-item.active {
        span {
          display:inline-block;
          border-bottom: 1px solid #ffffff;
          padding-bottom: 4px;
        }
      }
      .hamburger-menu {
        cursor: pointer;
        background: #000000;
        color: #ffffff;
        height: 100px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        .hamburger {
          font-size: 32px;
        }
      }
    }
  }
}
.navbar.branding {
  background: #ffffff;
  .navbar-brand {
    color: #000000;
  }
  .navbar-group {
    .item-wrapper {
      .nav-item {
        color: #000000;
        }
        .nav-item.active {
          span {
            border-bottom: 1px solid #000000;
          }
        }
    }
    .hamburger-menu {
      background: #ffffff;
      color: #000000;
    }
  }
}
</style>
