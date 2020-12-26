<template>
  <div class="home">
    <div class="main-section">
      <div class="name-wrapper z-90">
        <h2>Hi, I’m Regan Duthie</h2>
        <h3>I'm a front end developer 😉 </h3>
        <br>
        <button class="input-button"> See My Work </button>
      </div>
    </div>
    <div id="particles-js" />
    <div class="section-wrapper">
      <div class="container">
        <h4 class="mb-4">I make websites</h4>
        <h5 class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec <br />
          sollicitudin ipsum dui, et rhoncus quam vehicula non. Nunc at porta
          <br />
          enim, sit amet convallis diam. Nam eu justo nulla.
        </h5>
      </div>
    </div>
    <!-- <div class="py-3">
      <div class="container inset-section">
        <div class="carousel-wrapper">
          <div class="row align-items-center">
            <div class="col-12 mb-4">
              <h3 class="title-sub mb-5">SERVICES</h3>
            </div>
            <div class="col text-center">
              <div class="service-item px-4">
                <div class="icon"></div>
                <h3>MOBILE FRIENDLY</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sollicitudin ipsum dui.
                </p>
              </div>
            </div>
            <div class="col text-center">
              <div class="service-item px-4">
                <div class="icon"></div>
                <h3>MOBILE FRIENDLY</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sollicitudin ipsum dui.
                </p>
              </div>
            </div>
            <div class="col text-center">
              <div class="service-item px-4">
                <div class="icon"></div>
                <h3>MOBILE FRIENDLY</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sollicitudin ipsum dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="secondary section-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 class="title-sub mb-5">ABOUT ME</h3>
          </div>
          <div class="col-4"></div>
          <div class="col-8">
            <article class="about-me-section">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                ex sodales, convallis leo vel, pulvinar sapien. Praesent leo
                metus, porttitor sed mi a, sodales aliquam sem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                ex sodales, convallis leo vel, pulvinar sapien. Praesent leo
                metus, porttitor sed mi a, sodales aliquam sem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                ex sodales, convallis leo vel, pulvinar sapien. Praesent leo
                metus, porttitor sed mi a, sodales aliquam sem.
              </p>
            </article>
            <div class="lang-skills-section my-5">
              <div class="row my-3">
                <div class="col">
                  <h2
                    style="font-size:1.3rem; font-weight: bold; text-align: left;"
                  >
                    TITLE
                  </h2>
                </div>
                <div class="col">
                  <h2
                    style="font-size:1.3rem; font-weight: bold; text-align: left;"
                  >
                    TITLE
                  </h2>
                </div>
                <div class="col">
                  <h2
                    style="font-size:1.3rem; font-weight: bold; text-align: left;"
                  >
                    TITLE
                  </h2>
                </div>
                <div class="col">
                  <h2
                    style="font-size:1.3rem; font-weight: bold; text-align: left;"
                  >
                    TITLE
                  </h2>
                </div>
                <div class="col">
                  <h2
                    style="font-size:1.3rem; font-weight: bold; text-align: left;"
                  >
                    TITLE
                  </h2>
                </div>
              </div>
              <div class="row my-3">
                <div class="col">
                  <h2
                    style="font-size:1.3rem; font-weight: bold; text-align: left;"
                  >
                    TITLE
                  </h2>
                </div>
                <div class="col">
                  <h2
                    style="font-size:1.3rem; font-weight: bold; text-align: left;"
                  >
                    TITLE
                  </h2>
                </div>
                <div class="col">
                  <h2
                    style="font-size:1.3rem; font-weight: bold; text-align: left;"
                  >
                    TITLE
                  </h2>
                </div>
                <div class="col">
                  <h2
                    style="font-size:1.3rem; font-weight: bold; text-align: left;"
                  >
                    TITLE
                  </h2>
                </div>
                <div class="col">
                  <h2
                    style="font-size:1.3rem; font-weight: bold; text-align: left;"
                  >
                    TITLE
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="container">
        <h4 class="mb-4">PRICE PER PACKAGE</h4>
      </div>
    </div>
    <div class="secondary section-wrapper">
      <div class="container contact-me">
        <div class="row justify-content-center">
          <div class="col-12">
            <h3 class="title-sub mb-4">CONTACT ME</h3>
            <p class="mb-5">Got a question? Fill in the form below.</p>
          </div>
          <div class="col-6">
            <input
              class="contact-input mb-3"
              type="text"
              placeholder="Your name"
            />
            <input
              class="contact-input mb-3"
              type="email"
              placeholder="Your email address"
            />
            <textarea
              rows="8"
              class="textarea-input mb-4"
              type="text"
              placeholder="How can I help you?"
            >
            </textarea>
            <input
              class="input-button mx-auto d-block"
              value="Submit"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/variables.scss";
@import "../assets/scss/components.scss";
#particles-js {
  width: 100vw;
  height: 100vh;
  @include gradient;
}
canvas.particles-js-canvas-el {
  position: absolute;
  top: 0;
  left: 0;
}
.contact-me {
  h3 {
  }
  p {
    text-align: center;
    font-size: 1rem;
  }
  %input-styling {
    width: 100%;
    border-width: 1.2px;
    border-style: solid;
    border-color: #979797;
    border-radius: 8px;
    padding: 1rem;
    outline: none;
    transition: border 0.3s ease-in;
    &:hover {
      border-color: #424242;
      transition: border 0.3s ease-out;
    }
    &:active {
      border-color: #424242;
      transition: border 0.3s ease-out;
    }
  }
  .contact-input {
    @extend %input-styling;
    height: 50px;
  }
  .textarea-input {
    @extend %input-styling;
    resize: none;
  }
}
.about-me-section {
  p {
    font-size: 1rem;
  }
}
.service-item {
  h3 {
    color: $color-primary;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  p {
    font-size: 1rem;
  }
}
.inset-section {
  margin-top: -170px;
}
.title-sub {
  color: $color-primary;
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 4px;
}
.section-wrapper {
  background: white;
  min-height: 100vh;
  padding: 5rem 0;
}
.carousel-wrapper {
  background: #fff;
  padding: 3rem;
  border: 1px solid #c1c1c1;
  border-radius: 23px;
  -webkit-box-shadow: 10px 10px 21px 17px rgba(58, 58, 58, 0.1);
  -moz-box-shadow: 10px 10px 21px 17px rgba(58, 58, 58, 0.1);
  box-shadow: 10px 10px 21px 17px rgba(58, 58, 58, 0.1);
}
.section-wrapper {
  h4 {
    text-align: center;
    font-weight: 500;
    font-size: 1.6rem;
    color: $color-primary;
  }
  .paragraph {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 400;
  }
}
.section-wrapper.secondary {
  h3 {
    color: #fff;
  }
  h4 {
    text-align: center;
    font-weight: 500;
    font-size: 1.6rem;
  }
  .paragraph {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 400;
  }
}
.secondary {
  @include gradient;
  color: rgb(255, 255, 255);
}
.main-section {
  .name-wrapper {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    max-height: 250px;
    max-width: 550px;
    z-index: 10000;
    padding: 1rem;
    border-radius: 13px;
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
  .name-wrapper {
    h2 {
      color: black;
      text-align: center;
      font-size: 2.6rem;
      font-weight: 600;
    }
    h3 {
      text-align: center;
      font-weight: 300;
      font-size: 1.3rem;
    }
  }
}
</style>
<script>
// @ is an alias to /src
export default {
  name: "Home",
  mounted() {
    require("particles.js");
    this.$nextTick(() => {
      this.initParticlesJS();
    });
  },
  methods: {
    initParticlesJS() {
      /* eslint-disable */
      particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    })
    }
  }
};
</script>
