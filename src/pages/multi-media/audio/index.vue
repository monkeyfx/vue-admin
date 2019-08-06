<template>
  <div
    class="audio-container"
    v-loading="loading"
    element-loading-text="音乐加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.3)"
  >
    <canvas id="canvas" />
    <audio hidden :src="`${publicPath}mp3/1.mp3`" id="audio" controls loop>
      audio element not supported
    </audio>
    <hr />
    <br />
    <el-button v-show="isbtn" @click="play">播放</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      isbtn: false,
      publicPath: process.env.BASE_URL
    };
  },
  methods: {
    play() {
      window.AudioContext =
        window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext;
      var audio = document.getElementById("audio");

      var ctx = new AudioContext();
      var analyser = ctx.createAnalyser();
      var audioSrc = ctx.createMediaElementSource(audio);
      // we have to connect the MediaElementSource with the analyser
      audioSrc.connect(analyser);
      analyser.connect(ctx.destination);
      // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
      // analyser.fftSize = 64;
      // frequencyBinCount tells you how many values you'll receive from the analyser
      // var frequencyData = new Uint8Array(analyser.frequencyBinCount);

      // we're ready to receive some data!
      var canvas = document.getElementById("canvas"),
        cwidth = canvas.width,
        cheight = canvas.height - 2,
        meterWidth = 1, //width of the meters in the spectrum
        gap = 4, //gap between meters
        capHeight = 2,
        capStyle = "#00CCFF",
        meterNum = cwidth, //count of the meters
        capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
      // eslint-disable-next-line no-redeclare
      var ctx = canvas.getContext("2d");
      // var gradient = ctx.createLinearGradient(0, 0, 0, 100);
      // gradient.addColorStop(0.5, "#eeeeee");
      // gradient.addColorStop(1, " #00CCFF");
      // gradient.addColorStop(0, "#D24D57");

      // loop
      function renderFrame() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var step = Math.round(array.length / meterNum); //sample limited data from the total array
        ctx.clearRect(0, 0, cwidth, cheight);
        for (var i = 0; i < meterNum; i++) {
          var value = array[i * step];
          if (capYPositionArray.length < Math.round(meterNum)) {
            capYPositionArray.push(value);
          }
          ctx.fillStyle = capStyle;
          //draw the cap, with transition effect
          if (value < capYPositionArray[i]) {
            ctx.fillRect(
              i * gap,
              cheight - --capYPositionArray[i],
              meterWidth,
              capHeight
            );
          } else {
            ctx.fillRect(i * gap, cheight - value, meterWidth, capHeight);
            capYPositionArray[i] = value;
          }
          ctx.fillStyle = "#000000"; //set the filllStyle to gradient for a better look
          ctx.fillRect(
            i * gap /*meterWidth+gap*/,
            cheight - value + capHeight,
            meterWidth,
            cheight
          ); //the meter
        }
        requestAnimationFrame(renderFrame);
      }
      renderFrame();
      audio.play();
      this.isbtn = false;
    }
  },
  mounted() {
    let canvas = document.getElementById("canvas");
    let div = document.querySelector(".audio-container");
    canvas.height = div.clientHeight / 2;
    canvas.width = div.clientWidth;
    document.getElementById("audio").addEventListener("canplay", () => {
      this.loading = false;
      this.isbtn = true;
    });
  }
};
</script>

<style lang="scss" scoped>
.audio-container {
  height: calc(100vh - 80px - 30px);
  background: #ffffff;
  text-align: center;
}
</style>
