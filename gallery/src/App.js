import logo from './logo.svg';
import './App.css';


const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const caption = document.querySelector('.caption')

let load = 0
let int = setInterval(blurring, 30)
    // ^^ runs the blurring function every 30 milliseconds

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
            // ^^ stops the count from running forever
        caption.style.visibility = `visible`;
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
        // ^^ makes text become transparent w/ load Number. rever 1 and 0 for opposite effect
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
        // ^^ makes image blur change from 30 px to 0px
    
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max
    - in_min) + out_min;
}
    // ^^ maps the opacity to the load number



function App() {
  return (
    <div className="App">
      <section class="bg"></section>
      <div class="loading-text">0%</div>
      <button class="caption"><a href="#" target="_blank"> enter the museum </a></button>
    </div>
  );
}

export default App;
