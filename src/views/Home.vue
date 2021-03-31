<template>
  <div class="home">
    <header>
      <Navbar :style="{ background: navBackground }"></Navbar>
    </header>
    <main class="banner">
      <div class="background"></div>
      <div class="content">
        <div class="title">Commercial builders with pride – workmanship that values quality</div>
        <div class="subtitle">Acclaim Contractors are a highly specialised local business with over 20 years building and civil industry experience with many accolades, commendations and awards recognising their workmanship.</div>
      </div>
      <div class="copyright">
        Block Studio©2018 Copyright. All Rights Reserved.
      </div>
      <div class="icon-group">
        <img class="icon" src="../assets/facebook.png">
        <img class="icon" src="../assets/instagram.png">
        <img class="icon" src="../assets/youtube.png">
      </div>
      <div class="hint">
        Scroll
        <div class="vertical-line"></div>
      </div>
    </main>
    <div class="container">
      <div class="main-title">Works</div>
      <div class="row">
        <div class="col-4 left">
          <div class="card">
            <div class="card-title">
              Award winning civil contractors that partner with all levels of government.
            </div>
            <div class="divider"></div>
            <div class="card-text">
              The Australian Treasury Building % King Edward TCE Barton Canberra City.
            </div>
            <div class="half-arrow">
              <img class="icon" src="../assets/half-arrow.png">
            </div>
          </div>
          <div class="card picture">
            <div class="card-img-wrapper">
              <img class="card-img-top" src="https://images.unsplash.com/photo-1508253552165-b64eef2bd8ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=783&q=80">
            </div>
            <div class="card-content">
              <div class="tag-wrapper">
                <span class="tag">Award</span>
              </div>
              <div class="description">Woden Public Realm improvements Works Package 1 Including Lift & Stairs</div>
              <div class="card-text">Urban Public Realm Refurbishment.</div>
              <div class="information">
                <div class="info-item">
                  <div class="title">CLIENT</div>
                  <div class="name">ACT Government</div>
                </div>
                <div class="info-item">
                  <div class="title">STATUS</div>
                  <div class="name">Completed 2017</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 middle">
          <div class="card">
            <div class="card-title">
              Known for their innovation in providing solutions.
            </div>
            <div class="divider"></div>
            <div class="card-text">
              The Australian Treasury Building % King Edward TCE Barton Canberra City.
            </div>
            <div class="half-arrow">
              <img class="icon" src="../assets/half-arrow.png">
            </div>
          </div>
          <div class="card picture">
            <div class="card-img-wrapper">
              <img class="card-img-top" src="https://images.unsplash.com/photo-1538378918848-29dbc0910082?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=808&q=80">
            </div>
            <div class="card-content">
              <div class="tag-wrapper">
                <span class="tag">Award</span>
              </div>
              <div class="description">Woden Public Realm improvements Allara Street Segrated Cycleway</div>
              <div class="card-text">Urban Public Realm Refurbishment.Urban Public Realm Refurbishment.</div>
              <div class="information">
                <div class="info-item">
                  <div class="title">CLIENT</div>
                  <div class="name">ACT Government</div>
                </div>
                <div class="info-item">
                  <div class="title">STATUS</div>
                  <div class="name">Completed 2017</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 right">
          <div class="card">
            <div class="card-title">
              Woden Public Realm improvements Works Package 1
            </div>
            <div class="divider"></div>
            <div class="card-text">
              The Australian Treasury Building % King Edward TCE Barton Canberra City.
            </div>
            <div class="half-arrow">
              <img class="icon" src="../assets/half-arrow.png">
            </div>
          </div>
          <div class="card picture">
            <div class="card-img-wrapper">
              <img class="card-img-top" src="https://images.unsplash.com/photo-1511143635062-219d1242e01c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80">
            </div>
            <div class="card-content">
              <div class="tag-wrapper">
                <span class="tag">Award</span>
              </div>
              <div class="description">Allara Street Segrated Cycleway</div>
              <div class="card-text">Urban Public Realm Refurbishment.Urban Public Realm Refurbishment.Urban Public Realm Refurbishment.</div>
              <div class="information">
                <div class="info-item">
                  <div class="title">CLIENT</div>
                  <div class="name">ACT Government</div>
                </div>
                <div class="info-item">
                  <div class="title">STATUS</div>
                  <div class="name">Completed 2017</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="vertical-line"></div>
      <div class="main-text">Woden Public Realm improvements Works Package 1 Including Lift & Stairs.</div>
      <div class="more-wrapper">
        <div class="more">More</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  data () {
    return {
      scrollY: 0,
      navBackground: 'transparent'
    }
  },
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  mounted () {
    document.querySelector('body').style.overflow = 'auto'
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      this.scrollY = window.scrollY
      if (this.scrollY > 0) {
        this.navBackground = '#000000'
      } else {
        this.navBackground = 'transparent'
      }
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  header {
    z-index: 999;
    width: 100%;
    position: fixed;
    top: 0;
  }
  .banner {
    height: 768px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .background {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: url(https://images.unsplash.com/photo-1519195728061-279b4e41cc15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80) no-repeat center / cover;
      filter: grayscale(100%) brightness(0.6);
    }
    .content {
      width: 80%;
      .title {
        font-size: 64px;
        font-weight: 800;
        color: #ffffff;
      }
      .subtitle {
        margin: auto;
        width: 66.7%;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .copyright {
      color: #ffffff;
      position: absolute;
      left: 24px;
      font-size: 14px;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      cursor: default;
    }
    .icon-group {
      width: 100%;
      position: absolute;
      bottom: 0;
      padding: 18px 0;
      display: flex;
      justify-content: flex-start;
      .icon {
        cursor: pointer;
        margin: 0 30px;
        width: 24px;
        height: 24px;
      }
    }
    .hint {
      position: absolute;
      bottom: 12px;
      color: #ffffff;
      cursor: default;
      .vertical-line {
        margin: 8px auto 0;
        background: #ffffff;
        width: 1px;
        height: 60px;
      }
    }
  }
  .container {
    padding: 100px 0;
    .main-title {
      margin-bottom: 24px;
      font-size: 48px;
      font-weight: 800;
    }
    .col-4 {
      padding: 0 10px;
      .card {
        cursor: pointer;
        width: 100%;
        margin-bottom: 24px;
        padding: 18px;
        border: none;
        &:hover {
          box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
        }
        .card-title {
          margin-top: 18px;
          height: 204px;
          line-height: 1.2;
          font-size: 36px;
          font-weight: 800;
          text-align: left;
        }
        .divider {
          margin: 16px 0;
          height: 4px;
          width: 20px;
          background: #000000;
        }
        .card-text {
          font-size: 14px;
          font-weight: 500;
          text-align: left;
        }
        .half-arrow {
          margin: 12px 0;
          height: 24px;
          display: flex;
          justify-content: flex-end;
          .icon {
            width: 36px;
            object-fit: contain;
          }
        }
        .card-img-wrapper {
          width: 100%;
          padding-top: 100%;
          position: relative;
          .card-img-top {
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            object-fit: cover;
          }
        }
        .card-content {
          padding: 18px;
          .tag-wrapper {
            margin-bottom: 18px;
            display: flex;
            justify-content: flex-start;
            .tag {
              font-size: 14px;
              font-weight: 800;
              padding: 8px 16px;
              display: inline;
              color: #ffffff;
              background: #000000;
            }
          }
          .description {
            font-size: 20px;
            font-weight: 800;
            text-align: left;
            margin-bottom: 12px;
          }
          .information {
            margin: 24px 0 12px;
            display: flex;
            flex-direction: row;
            .info-item {
              flex: 1;
              text-align: left;
              font-size: 14px;
              .title {
                color: #919191;
                font-weight: 500;
                margin-bottom: 12px;
              }
              .name {
                font-weight: 600;
              }
            }
          }
        }
      }
      .card.picture {
        padding: 0;
      }
    }
    .col-4.middle {
      margin-top: 36px;
    }
    .col-4.right {
      margin-top: 72px;
    }
    .vertical-line {
      margin: 36px auto;
      height: 120px;
      width: 1px;
      background: #000000;
    }
    .main-text {
      margin: auto;
      width: 58%;
      font-weight: 500;
      font-size: 28px;
    }
    .more-wrapper {
      margin: 24px;
      .more {
        font-size: 20px;
        font-weight: 500;
        display: inline-block;
        border: 1px solid #000000;
        padding: 10px 100px;
        cursor: pointer;
        &:hover {
          color: #ffffff;
          background: #000000;
        }
      }
    }
  }
}
</style>
