//-------------index front-end-------------
const sidebar = document.querySelector('.side-bar');
const closeSidebar = document.querySelector('.close-sidebar');
const menuBtn = document.getElementById("top-bar-menu");

function openSidebar(){
  if (menuBtn.innerText === "menu"){
    sidebar.classList.add('active')
    closeSidebar.classList.add('active')
    menuBtn.innerText = "close";
  } else{
    closeSide();
  }
};

function closeSide(){
  sidebar.classList.remove('active')
  closeSidebar.classList.remove('active')
  menuBtn.innerText = "menu";
};

//-----accordion-functionality--------
const accContent1 = document.getElementById("acc-content1");
const accContent2 = document.getElementById("acc-content2");

let status = 'none';

function showacc1(){
  if (status == 'none'){
    status = 'flex';
    accContent1.style.display = status;
  } else{
    status = 'none';
    accContent1.style.display = status;
  }
}
function showacc2(){
  if (status == 'none'){
    status = 'flex';
    accContent2.style.display = status;
  } else{
    status = 'none';
    accContent2.style.display = status;
  }
}

const Ad1 = document.querySelector('.ad-1')
const Ad2 = document.querySelector('.ad-2')
const Ad3 = document.querySelector('.ad-3')

let adv1 = true;
let adv2 = false;
let adv3 = false;
setInterval(() => {
  if (adv1 === true){
    Ad1.classList.add('show')
    Ad2.classList.remove('show')
    Ad3.classList.remove('show')
    adv1 = false;
    adv2 = true;
    adv3 = false;
  } else if (adv2 === true){
    Ad1.classList.remove('show')
    Ad2.classList.add('show')
    Ad3.classList.remove('show')
    adv1 = false;
    adv2 = false;
    adv3 = true;
  } else{
    Ad1.classList.remove('show')
    Ad2.classList.remove('show')
    Ad3.classList.add('show')
    adv1 = true;
    adv2 = false;
    adv3 = false;
  }
}, 2500);

//chart
let chart, candleSeries, originalData = [];

async function loadChart(symbol = "GBPUSD") {
  try {
    // Clear previous chart
    const container = document.getElementById("chart");
    container.innerHTML = "";
    chart = LightweightCharts.createChart(container, {
      width: container.offsetWidth,
      height: 600,
      layout: { background: { color: "#fff" }, textColor: "#000" },
      grid: { vertLines: { color: "#eee" }, horzLines: { color: "#eee" } },
      crosshair: { mode: LightweightCharts.CrosshairMode.Normal },
      rightPriceScale: { borderColor: '#ccc' },
      timeScale: { borderColor: '#ccc', timeVisible: true },
    });

    candleSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderUpColor: "#26a69a",
      borderDownColor: "#ef5350",
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    // Fetch symbol candles
    const res = await fetch(`/candles/${symbol}`);
    const data = await res.json();
    originalData = data;

    candleSeries.setData(data);

    // Responsive
    window.onresize = () => chart.applyOptions({ width: container.offsetWidth });

  } catch (err) {
    console.error("Error loading chart:", err);
  }
}

// Timeframe aggregation
function setTimeframe(minutes) {
  if (!candleSeries || !originalData.length) return;

  if (minutes === 1) {
    candleSeries.setData(originalData);
    return;
  }

  const aggregated = [];
  let bucket = null;

  originalData.forEach(c => {
    const slot = Math.floor(c.time / (minutes * 60)) * (minutes * 60);
    if (!bucket || bucket.time !== slot) {
      if (bucket) aggregated.push(bucket);
      bucket = { time: slot, open: c.open, high: c.high, low: c.low, close: c.close };
    } else {
      bucket.high = Math.max(bucket.high, c.high);
      bucket.low = Math.min(bucket.low, c.low);
      bucket.close = c.close;
    }
  });
  if (bucket) aggregated.push(bucket);
  candleSeries.setData(aggregated);
}

// Bind buttons
document.querySelectorAll(".symbol-buttons button").forEach(btn => {
  btn.onclick = () => loadChart(btn.dataset.symbol);
});
document.querySelectorAll(".timeframe-buttons button").forEach(btn => {
  btn.onclick = () => setTimeframe(parseInt(btn.dataset.timeframe));
});

// Load default
loadChart("GBPUSD");