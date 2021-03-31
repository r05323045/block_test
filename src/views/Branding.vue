<template>
  <div class="branding" ref="branding">
    <header>
      <Navbar></Navbar>
    </header>
    <div class="banner"></div>
    <main>
      <div class="container">
        <div class="row award">
          <div class="background">
            <div class="brand">
              <span class="brand-text">
                B
              </span>
            </div>
          </div>
          <div class="col-7">
            <div class="main-title">
              Woden Public Realm improvements Works Package 1 Including Lift & Stairs
              <div class="line"></div>
            </div>
          </div>
          <div class="col-5">
            <div class="right">
              <div class="side-title">Award</div>
              <div class="info-container">
                <div class="information">
                  <div class="info-item">
                    <div class="info-line"></div>
                    <div class="title">CLIENT</div>
                    <div class="name">ACT Government</div>
                  </div>
                  <div class="info-item">
                    <div class="info-line"></div>
                    <div class="title">STATUS</div>
                    <div class="name">Completed 2017</div>
                  </div>
                </div>
                <div class="information">
                  <div class="info-item">
                    <div class="info-line"></div>
                    <div class="title">SUMMARY</div>
                    <div class="name">On time and on budget - 2017 MBA Award Winning Project</div>
                  </div>
                  <div class="info-item">
                    <div class="info-line"></div>
                    <div class="title">LOCATION</div>
                    <div class="name">Woden Bus Interchange Bradely Street Phillip ACT 2606</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row intro">
          <div class="col-7">
            <div class="intro-container">
              <div class="intro-title">INTRO</div>
              <div class="intro-content">
                Acclaim Contractors have achieved the Joint Accreditation Scheme for Australia and New Zealand (JAS-ANZ) in the three aspects of Quality, Environmental and Occupational Health and Safety.who are also pre-qualified with ACT and National Governments. Acclaim Contractors have achieved the Joint Accreditation Scheme for Australia and New Zealand (JAS-ANZ) in the three aspects of Quality, Environmental and Occupational Health and Safety.who are also pre-qualified with ACT and National Governments.
              </div>
            </div>
          </div>
          <div class="col-5">
            <img class="picture" src="https://images.unsplash.com/photo-1565060169194-19fabf63012c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80">
          </div>
        </div>
        <div class="row description">
          <div class="col-7">
            <img class="picture" src="https://images.unsplash.com/photo-1539895360896-16462a60ad12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80">
          </div>
          <div class="description-wrapper">
            <div class="description-line"></div>
            <div class="description-text">
              Acclaim Contractors have achieved the Joint Accreditation Scheme for Australia and New Zealand (JAS-ANZ) in the three aspects of Quality, Environmental and Occupational Health and Safety.who are also pre-qualified with ACT and National Governments. Acclaim Contractors have achieved the Joint Accreditation Scheme for Australia and New Zealand (JAS-ANZ) in the three aspects of Quality, Environmental and Occupational Health and Safety.who are also pre-qualified with ACT and National Governments.
            </div>
            <div class="lean-line"></div>
          </div>
        </div>
        <div class="row photo">
          <div class="background">
            <img class="icon" src="../assets/up-arrow.png" @click="scrollToTop">
            <img class="picture" src="https://images.unsplash.com/photo-1606223348388-e82369c2d836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
          </div>
        </div>
        <div class="row explain">
          <div class="background">
            <div class="company-name">Block Studio</div>
          </div>
          <div class="vertical-line"></div>
          <div class="text">Woden Public Realm improvements Works Package 1 Including Lift & Stairs</div>
        </div>
      </div>
    </main>
    <div class="action-wrapper">
      <div class="action previous">
        <img class="icon" src="../assets/half-arrow.png">
        <span>Previous</span>
      </div>
      <div class="action next">
        <span>Next</span>
        <img class="icon" src="../assets/half-arrow-white.png">
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
    }
  },
  components: {
    Navbar,
    Footer
  },
  mounted () {
    document.querySelector('body').style.overflow = 'auto'
  },
  methods: {
    scrollToTop () {
      this.$refs.branding.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
      })
    }
  }
}
</script>

<style lang="scss">
.branding {
  .banner {
    height: 768px;
    width: 100%;
    background: url(https://images.unsplash.com/photo-1496262967815-132206202600?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1395&q=80) no-repeat center / cover;
  }
  .container {
    .row.award {
      height: 400px;
      position: relative;
      .background {
        position: absolute;
        top: 0;
        left: calc(-1 * (100vw - 100%)/2);
        width: 100vw;
        background: #FAFAFA;
        padding: 50px 0 0 30px;
        .brand {
          cursor: default;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          .brand-text {
            border-top: 20px #E0E0E0 solid;
            padding-top: 30px;
            line-height: 300px;
            color: #E0E0E0;
            font-weight: 800;
            font-size: 300px;
          }
        }
      }
      .col-7,
      .col-5 {
        padding: 0;
        height: 100%;
        display: flex;
        align-items: center;
        .main-title {
          font-size: 48px;
          font-weight: 800;
          text-align: left;
          line-height: 1.2;
          color: #000000;
        }
        .line {
          margin-top: 40px;
          width: 50%;
          background: #000000;
          height: 2px;
        }
        .right {
          width: 100%;
          .side-title {
            font-size: 28px;
            font-weight: 800;
            text-align: left;
          }
          .info-container {
            .information {
              margin: 24px 0 12px;
              display: flex;
              flex-direction: row;
              .info-item {
                margin-right: 12px;
                flex: 1;
                text-align: left;
                font-size: 14px;
                .info-line {
                  width: 24px;
                  height: 1px;
                  margin-bottom: 12px;
                  background: #000000;
                }
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
      }
    }
    .row.intro {
      padding: 96px 0;
      .col-5,
      .col-7 {
        padding: 0;
        .picture {
          width: 100%;
          object-fit: center;
          height: 400px;
        }
        .intro-container {
          margin-right: 80px;
          text-align: left;
          font-size: 14px;
          line-height: 1.8;
          .intro-title {
            color:#919191;
            margin-bottom: 12px;
          }
        }
      }
    }
    .row.description {
      margin-top: 48px;
      margin-bottom: 144px;
      position: relative;
      .col-7 {
        padding: 0;
        .picture {
          object-fit: cover;
          width: 100%;
          height: 440px;
        }
      }
      .description-wrapper {
        position: absolute;
        width: 60%;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        background: #ffffff;
        padding: 72px 48px 0 48px;
        .description-line {
          width: 24px;
          height: 2px;
          background: #000000;
          margin-bottom: 12px;
        }
        .description-text {
          text-align: left;
          font-size: 14px;
          line-height: 1.8;
        }
        .lean-line {
          height: 200px;
          width: 1px;
          background: #2c2c2c;
          position: absolute;
          bottom: -50px;
          right: 120px;
          transform: rotate(45deg)
        }
      }
    }
    .row.photo {
      margin-top: 48px;
      margin-bottom: 96px;
      height: 680px;
      position: relative;
      .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          cursor: pointer;
          width: 80px;
          z-index: 2;
        }
        .picture {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
    .row.explain {
      flex-direction: column;
      position: relative;
      height: 340px;
      .background {
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        color: #FAFAFA;
        z-index: -1;
        width: 100%;
        display: flex;
        align-items: flex-end;
        .company-name {
          font-size: 190px;
          font-weight: 900;
          text-align: justify;
        }
      }
      .vertical-line {
        margin: 0 auto;
        height: 120px;
        background: #000000;
        width: 1px;
        margin-bottom: 36px;
      }
      .text {
        font-size: 28px;
        font-weight: 500;
        width: 60%;
        margin: 0 auto;
      }
    }
  }
  .action-wrapper {
    border-top: 1px solid #000000;
    display: flex;
    flex-direction: row;
    width: 100%;
    .action {
      cursor: pointer;
      padding: 40px;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 600;
      position: relative;
    }
    .previous {
      .icon {
        position: absolute;
        left: 200px;
        width: 36px;
        -moz-transform:scaleX(-1);
        -webkit-transform:scaleX(-1);
        -o-transform:scaleX(-1);
        transform:scaleX(-1);
      }
    }
    .next {
      color: #ffffff;
      background: #2C2C2C;
      .icon {
        position: absolute;
        right: 200px;
        width: 36px;
      }
    }
  }
}
</style>
