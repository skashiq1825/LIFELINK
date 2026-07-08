gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





var weekoptions = {
  series: [{
    name: "Health",
    data: [68, 72, 70, 75, 71, 78, 72]
  }],
  colors: ['#00A084'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 100]
    }
  },
  chart: {
    type: "area",
    height: 350,
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth"
  },
  yaxis: {
    min: 10,
    max: 80,
    tickAmount: 7
  },
  xaxis: {
    categories: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ]
  }
};

var weekchart = new ApexCharts(document.querySelector("#week-chart"), weekoptions);
weekchart.render();


var analyticoptions = {
  series: [{
    name: "hrv",
    data: [55, 58, 64, 59, 71, 67, 63, 54, 58, 65, 64, 67, 74, 54, 56]
  }],
  colors: ['#00A084'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 100]
    }
  },
  chart: {
    type: "area",
    height: 350,
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth"
  },
  yaxis: {
    min: 0,
    max: 80,
    tickAmount: 4
  },
  xaxis: {
    categories: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "15",

    ]
  }
};

var analyticchart = new ApexCharts(document.querySelector("#week-analytics-chart"), analyticoptions);
analyticchart.render();


var baroptions = {
  series: [
    {
      name: "Deep",
      data: [2.1, 2.8, 2.4, 2.2, 2.3, 2.1, 1.9]
    },
    {
      name: "REM",
      data: [1.8, 1.4, 2.0, 1.7, 1.6, 1.9, 2.2]
    },
    {
      name: "Light",
      data: [4.2, 4.5, 4.0, 3.8, 4.1, 4.2, 4.3]
    }
  ],

  chart: {
    type: "bar",
    height: 220,
    stacked: true,
    toolbar: {
      show: false
    }
  },

  colors: [
    "#009F83", // Deep
    "#07d6b0", // REM
    "#d3f0eb"  // Light
  ],

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 8
    }
  },

  dataLabels: {
    enabled: false
  },

  stroke: {
    show: false
  },

  xaxis: {
    categories: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ]
  },

  yaxis: {
    min: 0,
    max: 10,
    tickAmount: 5
  },

  legend: {
    position: "bottom",
    horizontalAlign: "center"
  },

  grid: {
    borderColor: "#E5E7EB",
    strokeDashArray: 5
  },

  fill: {
    opacity: 1
  }
};


var bar = new ApexCharts(document.querySelector("#bar"), baroptions);
bar.render();




var graphoptions = {
  series: [{
    name: "steps",
    data: [5544, 5823, 6423, 5349, 7591, 9087, 6390, 12000, 10766]
  }],
  colors: ['#f30f03'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 100]
    }
  },
  chart: {
    type: "area",
    height: 220,
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth"
  },
  yaxis: {
    min: 1000,
    max: 13000,
    tickAmount: 4
  },
  xaxis: {
    categories: [
      "W1",
      "W2",
      "W3",
      "W4",
      "W5",
      "W6",
      "W7",
      "W8",
      "W9"
    ]
  },

};

var graph = new ApexCharts(document.querySelector('#graph'), graphoptions)
graph.render()

var ov = document.querySelector(".ov");
var page = document.querySelector(".portal-page")
var analytic = document.querySelector(".an");


ov.addEventListener("click", function () {
  page.innerHTML = ` <div class="headings">
                    <h5>GOOD MORNING.</h5>
                    <h3>Good morning, NAME...</h3>
                    <h4>Your recovery score is 88% — optimized for activity.</h4>

                </div>
                <div class="activity">
                    <div class="chart">
                        <div class="dis">
                            <h4>HEART RATE</h4>
                            <div class="status">
                                <h5>NORMAL</h5>
                            </div>
                        </div>
                       <h3>73 <span>bpm</span></h3>
                        <div class="bar">
                             <div class="graph one"></div>
                        </div>
                    </div>
                    <div class="chart">
                         <div class="dis">
                            <h4>BLOOD GLUCOSE</h4>
                            <div class="status">
                                <h5>STABLE</h5>
                            </div>
                        </div>
                       <h3>94 <span>mg/dL</span></h3>
                        <div class="bar">
                            <div class="graph two"></div>
                        </div>
                    </div>
                    <div class="chart">
                         <div class="dis">
                            <h4>RESTING 02</h4>
                            <div class="status optimal">
                                <h5>OPTIMAL</h5>
                            </div>
                        </div>
                       <h3>98 <span>%</span></h3>
                        <div class="bar">
                             <div class="graph three"></div>
                        </div>
                    </div>
                </div>
                <div class="weekchartbox">

                    <div class="wcb">
                        <div class="chartdis">
                            <div class="ldis">
                                <h3>Biometric Trend</h3>
                                <h6>7-day moving average</h6>
                            </div>
                            <div class="rdis">
                                <h4 class="week">WEEK</h4>
                                <h4 class="month">MONTH</h4>
                            </div>
                        </div>
                        <div id="week-chart"></div>
                    </div>
                    <div class="highscore">
                        <div class="hs-up">
                            <h5>HEALTH SCORE</h5>
                            <h2>88</h2>
                            <h6>Up 6 Points Fromk Last Week</h6>
                        </div>
                        <div class="hs-down">
                            <div class="hs-elem">
                                <h5>CARDIO</h5>
                                <div class="line">
                                    <div class="in ino"></div>
                                </div>
                            </div>
                            <div class="hs-elem">
                                <h5>SLEEP</h5>
                                <div class="line">
                                    <div class="in int"></div>

                                </div>

                            </div>
                            <div class="hs-elem">
                                <h5>ACTIVITY</h5>
                                <div class="line">
                                    <div class="in inth"></div>

                                </div>

                            </div>
                        </div>
                    </div>
                 
                 </div>
                 <div class="foot">
                    <h5>QUICK ACTIONS</h5>
                    <div class="foot-crd-box">
                        <div class="ftcrd">
                             <div class="clogo">
                            <i class="ri-shield-star-line"></i>
                        </div>
                        <div class="rcrd">
                        <h2>Trigger SOS</h2>
                       <i class="ri-arrow-right-up-line"></i>
                        </div>
                        </div>
                        <div class="ftcrd">
                            <div class="clogo med">
                              <i class="ri-hospital-line"></i>
                        </div>
                        <div class="rcrd">
                        <h2>Find Hospitals</h2>
                       <i class="ri-arrow-right-up-line"></i>
                        </div>
                        </div>
                        <div class="ftcrd">
                            <div class="clogo med">
                            <i class="ri-medicine-bottle-line"></i>
                        </div>
                        <div class="rcrd">
                        <h2>Today's Meds</h2>
                       <i class="ri-arrow-right-up-line"></i>
                        </div>
                        </div>
                        <div class="ftcrd">
                            <div class="clogo">
                            <i class="ri-contrast-drop-2-line"></i>
                        </div>
                        <div class="rcrd">
                        <h2>Blood Search</h2>
                       <i class="ri-arrow-right-up-line"></i>
                        </div>
                        </div>
                    </div>

                 </div>`

var weekchart = new ApexCharts(document.querySelector("#week-chart"), weekoptions);
weekchart.render();


  ov.style.backgroundColor = "#d1f5e9 ";
  ov.style.color = "#000000 ";
  analytic.style.color="#9d9d9df7";
  analytic.style.backgroundColor = "transparent ";


  health.style.color="#9d9d9df7";
  
  health.style.backgroundColor = "transparent ";
   hospital.style.color="#9d9d9df7";
hospital.style.backgroundColor = "transparent ";
medicine.style.backgroundColor = "transparent ";
  medicine.style.color = "#9d9d9df7 ";

  bloodbank.style.backgroundColor = "transparent ";
  bloodbank.style.color = "#9d9d9df7";
  setting.style.backgroundColor = "transparent ";
 setting.style.color = "#9d9d9df7";
  
 report.style.backgroundColor = "transparent";
report.style.color = "#9d9d9df7 ";


})
analytic.addEventListener("click", function () {
  page.innerHTML = `<div class="headings">
                    <h5>LONG-TERM TRENDS.</h5>
                    <h3>Analytics</h3>
                    <h4>Every biomarker, every week. Readable, actionable, beautiful.</h4>

                </div>
                <div class="analytics-bar-container">
                    <div class="analytic-bar">
                    <h5>Heart Rate Variability · 30 days</h5>
                    <h2>58ms <span><i class="ri-arrow-up-line"></i> 12%</span></h2>
                    <div class="anlbar">
                        <div id="week-analytics-chart"></div>
                    </div>
                    </div>
                </div>
                <div class="analytic-down">
                <div class="analytic-left">
                    <h5>SLEEP STAGES</h5>
                    <h2>7h 42m avg</h2>
                    <div class="analyticlftbar">
                        <div id="bar"></div>
                    </div>
                </div>
                <div class="analytic-right">
                    <h5>ACTIVITY STEPS</h5>
                    <h2>9,420 daily avg</h2>
                    <div class="analyticrightgraph">
                        <div id="graph"></div>
                    </div>
                </div>
                </div>`

  var analyticchart = new ApexCharts(document.querySelector("#week-analytics-chart"), analyticoptions);
  analyticchart.render();
  var bar = new ApexCharts(document.querySelector("#bar"), baroptions);
  bar.render();
  var graph = new ApexCharts(document.querySelector('#graph'), graphoptions)
  graph.render()

  analytic.style.backgroundColor = "#d1f5e9 ";
  analytic.style.color = "#000000 ";
  ov.style.color="#9d9d9df7";
  health.style.color="#9d9d9df7";
  ov.style.backgroundColor = "transparent ";
  health.style.backgroundColor = "transparent ";
   hospital.style.color="#9d9d9df7";
hospital.style.backgroundColor = "transparent ";
medicine.style.backgroundColor = "transparent ";
  medicine.style.color = "#9d9d9df7 ";

  bloodbank.style.backgroundColor = "transparent ";
  bloodbank.style.color = "#9d9d9df7";
  setting.style.backgroundColor = "transparent ";
 setting.style.color = "#9d9d9df7";
  
report.style.backgroundColor = "transparent";
report.style.color = "#9d9d9df7 ";

})


var health = document.querySelector(".hp");
health.addEventListener("click", function () {
  page.innerHTML = `<div class="headings">
                    <h5>SINGLE SOURCE OF TRUTH</h5>
                    <h3>Health Profile</h3>
                    <h4>Your medical fingerprint, always in sync.</h4>

                </div>
                <div class="health-content">
                    <div class="idcard">
                        <div class="idnaam">
                            <div class="pic">
                                <h5>AI</h5>
                            </div>
                            <div class="det">
                                <h1>NAME NAME</h1>
                                <h5>Member since 2024 · Profile 98% complete</h5>
                            </div>
                        </div>
                        <div class="idspec">
                            <div class="specleft">
                                <div class="specbox">
                                    <h5>FULL NAME</h5>
                                    <h3>Name Name Name</h3>
                                </div> <div class="specbox">
                                    <h5>GENDER</h5>
                                    <h3>Male/Female</h3>
                                </div>
                                 <div class="specbox">
                                    <h5>WEIGHT</h5>
                                    <h3>62 kg</h3>
                                </div>
                                 <div class="specbox">
                                    <h5>BMI</h5>
                                    <h3>21.9(Normal)</h3>
                                </div>
                            </div>
                            <div class="specright">
                                  <div class="specbox">
                                    <h5>D.O.B</h5>
                                    <h3>Apr/June 1825 ,2004/6</h3>
                                </div> <div class="specbox">
                                    <h5>BLOOD GROUP</h5>
                                    <h3>A+</h3>
                                </div>
                                 <div class="specbox">
                                    <h5>HEIGHT</h5>
                                    <h3>168 cm</h3>
                                </div>
                                 <div class="specbox">
                                    <h5>PRIMARY PHSICIAN</h5>
                                    <h3>Dr. Arjun Mehta</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="condition">
                        <div class="allergies">
                            <div class="cap">
                                <i class="ri-error-warning-line"></i>
                                <h3>ALLERGIES</h3>
                            </div>
                            <div class="alname">
                                <h5>Penicillin</h5>
                                <h5>Tree nuts</h5>
                                <h5>Latex</h5>
                            </div>
                        </div>
                        <div class="con">
                            <h3>CONDITIONS</h3>
                            <h5>•Mild asthma (managed)</h5>
                              <h5>•Vitamin D deficiency</h5> 
                        </div>
                    </div>
                </div>
`


health.style.backgroundColor = "#d1f5e9 ";
  health.style.color = "#000000 ";
  ov.style.backgroundColor = "transparent ";
  ov.style.color="#9d9d9df7";
  analytic.style.color="#9d9d9df7";
  analytic.style.backgroundColor = "transparent ";
 hospital.style.color="#9d9d9df7";
hospital.style.backgroundColor = "transparent ";
medicine.style.backgroundColor = "transparent ";
  medicine.style.color = "#9d9d9df7 ";

  bloodbank.style.backgroundColor = "transparent ";
  bloodbank.style.color = "#9d9d9df7";
  setting.style.backgroundColor = "transparent ";
 setting.style.color = "#9d9d9df7";

 report.style.backgroundColor = "transparent";
report.style.color = "#9d9d9df7 ";

})




var hospital = document.querySelector(".hs");
hospital.addEventListener("click", function () {
  page.innerHTML = `   <div class="headings">
                    <h5>NETWORK</h5>
                    <h3>Hospital Search</h3>
                    <h4>2,400+ verified clinics. Filtered by 10km radius.</h4>

                </div>
                <div class="hospital-list">
                    <div class="hoscard">
                        <div class="hoscardleft">
                            <div class="hoslogo">
                                <h3>CC</h3>
                            </div>
                            <div class="hosdes">
                                <h3>City Care Multispecialty</h3>
                                <h5>0.8 km &nbsp;
                                    4.8 &nbsp;
                                    Emergency · Cardiology · Neurology</h5>
                            </div>
                        </div>
                        <div class="hoscardright">
                            <div class="hoscontact">
                                <div class="available">
                                    <h5>12 beds available</h5>
                                </div>
                                <div class="phone">
                                    <i class="ri-phone-line"></i>
                                </div>
                                <div class="arrw">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hoscard">
                        <div class="hoscardleft">
                            <div class="hoslogo">
                                <h3>LM</h3>
                            </div>
                            <div class="hosdes">
                                <h3>LifeLine Medical Hub</h3>
                                <h5>2.4 km &nbsp;
                                    4.6 &nbsp;
                                    Specialists · ICU · Pediatrics</h5>
                            </div>
                        </div>
                        <div class="hoscardright">
                            <div class="hoscontact">
                                <div class="available">
                                    <h5>8 beds available</h5>
                                </div>
                                <div class="phone">
                                    <i class="ri-phone-line"></i>
                                </div>
                                <div class="arrw">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hoscard">
                        <div class="hoscardleft">
                            <div class="hoslogo">
                                <h3>SH</h3>
                            </div>
                            <div class="hosdes">
                                <h3>Sunrise Hospital & Research</h3>
                                <h5>3.1 km &nbsp;
                                    4.4 &nbsp;
                                    Oncology · Orthopedics</h5>
                            </div>
                        </div>
                        <div class="hoscardright">
                            <div class="hoscontact">
                                <div class="available">
                                    <h5>23 beds available</h5>
                                </div>
                                <div class="phone">
                                    <i class="ri-phone-line"></i>
                                </div>
                                <div class="arrw">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hoscard">
                        <div class="hoscardleft">
                            <div class="hoslogo">
                                <h3>AT</h3>
                            </div>
                            <div class="hosdes">
                                <h3>Apex Trauma Center</h3>
                                <h5>5.6 km &nbsp;
                                    4.9 &nbsp;
                                    Trauma · Burns · Emergency</h5>
                            </div>
                        </div>
                        <div class="hoscardright">
                            <div class="hoscontact">
                                <div class="available">
                                    <h5>4 beds available</h5>
                                </div>
                                <div class="phone">
                                    <i class="ri-phone-line"></i>
                                </div>
                                <div class="arrw">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hoscard">
                        <div class="hoscardleft">
                            <div class="hoslogo">
                                <h3>HW</h3>
                            </div>
                            <div class="hosdes">
                                <h3>Harmony Wellness Clinic</h3>
                                <h5>6.5 km &nbsp;
                                    4.5 &nbsp;
                                    General · Diagnostics</h5>
                            </div>
                        </div>
                        <div class="hoscardright">
                            <div class="hoscontact">
                                <div class="available close">
                                    <h5>closed</h5>
                                </div>
                                <div class="phone">
                                    <i class="ri-phone-line"></i>
                                </div>
                                <div class="arrw">
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`


hospital.style.backgroundColor = "#d1f5e9 ";
  hospital.style.color = "#000000 ";
  ov.style.backgroundColor = "transparent ";
  ov.style.color="#9d9d9df7";
  analytic.style.color="#9d9d9df7";
  analytic.style.backgroundColor = "transparent ";
  health.style.color="#9d9d9df7";
health.style.backgroundColor = "transparent ";
medicine.style.backgroundColor = "transparent ";
  medicine.style.color = "#9d9d9df7 ";

  bloodbank.style.backgroundColor = "transparent ";
  bloodbank.style.color = "#9d9d9df7";
  setting.style.backgroundColor = "transparent ";
 setting.style.color = "#9d9d9df7";
  
report.style.backgroundColor = "transparent";
report.style.color = "#9d9d9df7 ";

})


var medicine = document.querySelector(".m");
medicine.addEventListener("click", function () {
  page.innerHTML = `               <div class="headings">
                    <h5>ADHERENCE 92%</h5>
                    <h3>Medicine Reminders</h3>
                    <h4>Synced with your circadian rhythm and meal times.</h4>

                </div>
                <div class="medicardlist">
                    <div class="medicard fst">
                             <div class="time">
                            <div class="timelogo">
                               <i class="ri-sun-line"></i>
                            </div>
                            <div class="timedet">
                                <h3>Morning</h3>
                                <h5>08:00 AM</h5>
                            </div>
                        </div>
                        <div class="medimid">
                            <div class="icon">
                              <i class="ri-check-line"></i>
                            </div>
                               <div class="timedet">
                                <h4>Atorvastatin</h4>
                                <h5>10mg · After breakfast</h5>
                            </div>

                        </div>
                        <div class="medidown">
                                    <div class="icon">
                              <i class="ri-check-line"></i>
                            </div>
                               <div class="timedet">
                                <h4>Vitamin D3</h4>
                                <h5>1 capsule · With water</h5>
                            </div>

                        </div>
                    </div>
                    <div class="medicard snd">
                         <div class="time">
                            <div class="timelogo">
                                <i class="ri-sun-foggy-line"></i>
                            </div>
                            <div class="timedet">
                                <h3>Afternoon</h3>
                                <h5>02:00 PM</h5>
                            </div>
                        </div>
                        <div class="medimid">
                            <div class="icon">
                                <i class="ri-medicine-bottle-line"></i>
                            </div>
                               <div class="timedet">
                                <h4>Lisinopril</h4>
                                <h5>500mg · After dinner</h5>
                            </div>

                        </div>
                    </div>
                    <div class="medicard">
                        <div class="time">
                            <div class="timelogo">
                                <i class="ri-moon-line"></i>
                            </div>
                            <div class="timedet">
                                <h3>Night</h3>
                                <h5>10:00 PM</h5>
                            </div>
                        </div>
                        <div class="medimid">
                            <div class="icon">
                                <i class="ri-medicine-bottle-line"></i>
                            </div>
                               <div class="timedet">
                                <h4>Metformint</h4>
                                <h5>500mg · After dinner</h5>
                            </div>

                        </div>
                        <div class="medidown">
                                    <div class="icon">
                                <i class="ri-medicine-bottle-line"></i>
                            </div>
                               <div class="timedet">
                                <h4>Melatonin</h4>
                                <h5>3mg · Before sleep</h5>
                            </div>

                        </div>
                    </div>

                </div>`


  medicine.style.backgroundColor = "#d1f5e9 ";
  medicine.style.color = "#000000 ";
  ov.style.color="#9d9d9df7";
  health.style.color="#9d9d9df7";
  ov.style.backgroundColor = "transparent ";
  health.style.backgroundColor = "transparent ";
   hospital.style.color="#9d9d9df7";
hospital.style.backgroundColor = "transparent ";
analytic.style.color="#9d9d9df7";
analytic.style.backgroundColor = "transparent ";


  bloodbank.style.backgroundColor = "transparent ";
  bloodbank.style.color = "#9d9d9df7";
  setting.style.backgroundColor = "transparent ";
 setting.style.color = "#9d9d9df7";
  report.style.backgroundColor = "transparent";
report.style.color = "#9d9d9df7 ";


})
const allButtons = document.querySelectorAll('.on');


allButtons.forEach((singleButton) => {

  singleButton.addEventListener('click', (event) => {

    const child = event.currentTarget.querySelector('.onchild');
    
   
    child.classList.toggle('hidden');
  });

});



var bloodbank = document.querySelector(".bb");
bloodbank.addEventListener("click", function () {
  page.innerHTML = `      <div class="headings">
                    <h5>LIVE INVENTORY.</h5>
                    <h3>Blood Bank</h3>
                    <h4>Real-time availability across nearby blood repositories.</h4>

                </div>
                <div class="blood-card-list">
                    <div class="bloodcard">
                        <div class="blood-up">
                            <h3>O+</h3>
                            <i class="ri-drop-line"></i>
                        </div>
                        <div class="blood-down">
                            <h2>240</h2>
                            <h5>units available</h5>
                            <div class="represent">
                                <div class="rep oplus"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bloodcard">
                        <div class="blood-up">
                            <h3>O-</h3>
                            <i class="ri-drop-line"></i>
                        </div>
                        <div class="blood-down">
                            <h2>42</h2>
                            <h5>units available</h5>
                            <div class="represent">
                                <div class="rep ominus"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bloodcard">
                        <div class="blood-up">
                            <h3>A+</h3>
                            <i class="ri-drop-line"></i>
                        </div>
                        <div class="blood-down">
                            <h2>188</h2>
                            <h5>units available</h5>
                            <div class="represent">
                                <div class="rep aplus"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bloodcard">
                        <div class="blood-up">
                            <h3>A-</h3>
                            <i class="ri-drop-line"></i>
                        </div>
                        <div class="blood-down">
                            <h2>28</h2>
                            <h5>units available</h5>
                            <div class="represent">
                                <div class="rep aminus"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bloodcard">
                        <div class="blood-up">
                            <h3>B+</h3>
                            <i class="ri-drop-line"></i>
                        </div>
                        <div class="blood-down">
                            <h2>156</h2>
                            <h5>units available</h5>
                            <div class="represent">
                                <div class="rep bplus"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bloodcard">
                        <div class="blood-up">
                            <h3>B-</h3>
                            <i class="ri-drop-line"></i>
                        </div>
                        <div class="blood-down">
                            <h2>36</h2>
                            <h5>units available</h5>
                            <div class="represent">
                                <div class="rep bminus"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bloodcard">
                        <div class="blood-up">
                            <h3>AB+</h3>
                            <i class="ri-drop-line"></i>
                        </div>
                        <div class="blood-down">
                            <h2>64</h2>
                            <h5>units available</h5>
                            <div class="represent">
                                <div class="rep abplus"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bloodcard">
                        <div class="blood-up">
                            <h3>AB-</h3>
                            <i class="ri-drop-line"></i>
                        </div>
                        <div class="blood-down">
                            <h2>18</h2>
                            <h5>units available</h5>
                            <div class="represent">
                                <div class="rep abminus"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sechead">
                    <h5>Nearby Repositories</h5>
                </div>

                <div class="blood-box">
                    
                    <div class="hoscard">
                        <div class="hoscardleft">
                            <div class="hoslogo hoslogobank">
                               <i class="ri-drop-line"></i>
                            </div>
                            <div class="hosdes">
                                <h3>Red Cross Central</h3>
                                <h5>1.2 km &nbsp;
                                    4.8 &nbsp;
                                    All groups stocked</h5>
                            </div>
                        </div>
                        <div class="hoscardright">
                           <div class="send">
                                <h3>Request Unit</h3>
                            </div>
                        </div>
                    </div>
                    <div class="hoscard">
                        <div class="hoscardleft">
                            <div class="hoslogo hoslogobank">
                                <i class="ri-drop-line"></i>
                            </div>
                            <div class="hosdes">
                                <h3>MetroLife Blood Bank</h3>
                                <h5>3.8 km &nbsp;
                                    4.8 &nbsp;
                                    Low on O-</h5>
                            </div>
                        </div>
                        <div class="hoscardright">
                             <div class="send">
                                <h3>Request Unit</h3>
                            </div>
                        </div>
                    </div>
                    <div class="hoscard">
                        <div class="hoscardleft">
                            <div class="hoslogo hoslogobank">
                               <i class="ri-drop-line"></i>
                            </div>
                            <div class="hosdes">
                                <h3>Apollo Plasma Center</h3>
                                <h5>5.5 km &nbsp;
                                    4.8 &nbsp;
                                    Plasma & platelets</h5>
                            </div>
                        </div>
                        <div class="hoscardright">
                            <div class="send">
                                <h3>Request Unit</h3>
                            </div>
                        </div>
                    </div>
                </div>`


  bloodbank.style.backgroundColor = "#d1f5e9 ";
  bloodbank.style.color = "#000000 ";
  ov.style.color="#9d9d9df7";
  health.style.color="#9d9d9df7";
  ov.style.backgroundColor = "transparent ";
  health.style.backgroundColor = "transparent ";
   hospital.style.color="#9d9d9df7";
hospital.style.backgroundColor = "transparent ";
analytic.style.color="#9d9d9df7";
analytic.style.backgroundColor = "transparent ";
medicine.style.color="#9d9d9df7";
medicine.style.backgroundColor = "transparent ";

setting.style.backgroundColor = "transparent ";
 setting.style.color = "#9d9d9df7";


report.style.backgroundColor = "transparent";
report.style.color = "#9d9d9df7 ";
  


})


var setting = document.querySelector(".s");
setting.addEventListener("click", function () {
  page.innerHTML = `     <div class="headings">
                    <h5>PREFERENCES.</h5>
                    <h3>Settings</h3>
                    <h4>Tune the experience to your rhythm.</h4>

                </div>

                <div class="setting-box">
                    <div class="settingline">
                        <div class="settingline-left">
                            <h3>Notifications</h3>
                            <h5>Choose what reaches you and when.</h5>
                        </div>
                      
                    </div>

                        <div class="settingline">
                        <div class="settingline-left">
                            <h3>Push notifications</h3>
                            <h5>Reminders, dose alerts, recovery scores.</h5>
                        </div>
                        <div class="settingline-right">
                            <div class="on">
                                <div class="onchild"></div>
                            </div>
                        </div>
                    </div>

                        <div class="settingline">
                        <div class="settingline-left">
                            <h3>Emergency alerts</h3>
                            <h5>Always-on. Critical only.</h5>
                        </div>
                        <div class="settingline-right">
                            <div class="on">
                                <div class="onchild"></div>
                            </div>
                        </div>
                    </div>

                        <div class="settingline">
                        <div class="settingline-left">
                            <h3>Weekly health report</h3>
                            <h5>A Sunday digest of your trends.</h5>
                        </div>
                        <div class="settingline-right">
                            <div class="on">
                                <div class="onchild"></div>
                            </div>
                        </div>
                    </div>

                </div>   `



  ov.style.color="#9d9d9df7";
  health.style.color="#9d9d9df7";
  ov.style.backgroundColor = "transparent ";
  health.style.backgroundColor = "transparent ";
   hospital.style.color="#9d9d9df7";
hospital.style.backgroundColor = "transparent ";
analytic.style.color="#9d9d9df7";
analytic.style.backgroundColor = "transparent ";
medicine.style.color="#9d9d9df7";
medicine.style.backgroundColor = "transparent ";
  bloodbank.style.backgroundColor = "transparent";
  bloodbank.style.color = "#9d9d9df7 ";

setting.style.backgroundColor = "#d1f5e9 ";
 setting.style.color = "#000000 ";

report.style.backgroundColor = "transparent";
report.style.color = "#9d9d9df7 ";
  
const allButtons = document.querySelectorAll('.on');


allButtons.forEach((singleButton) => {

  singleButton.addEventListener('click', (event) => {

    const child = event.currentTarget.querySelector('.onchild');
    
   
    child.classList.toggle('hidden');
  });

});

})



var report = document.querySelector(".mr");
report.addEventListener("click", function () {
  page.innerHTML = `   <div class="headings">
                    <h5>ARCHIVE</h5>
                    <h3>Medical Reports</h3>
                    <h4>Every report, indexed and ready to share.</h4>

                </div>

                <div class="report-card-list">
                    <div class="repcard">
                        <div class="repcardup">
                            <div class="replogo repone">
                                <i class="ri-file-text-line"></i>
                            </div>
                            <h3>Complete Blood Count</h3>
                            <h5>Metropolis Labs · Oct 24, 2026
                            </h5>
                        </div>
                        <div class="repcarddown">
                            <h5>PDF · 2.4 MB</h5>
                            <div class="download">
                                <i class="ri-download-2-line"></i>
                            </div>
                        </div>
                    </div>
                    <div class="repcard">
                        <div class="repcardup">
                            <div class="replogo reptwo">
                                <i class="ri-file-text-line"></i>
                            </div>
                            <h3>Lipid Profile</h3>
                            <h5>Dr. Lal PathLabs · Oct 12, 2026
                            </h5>
                        </div>
                        <div class="repcarddown">
                            <h5>PDF · 2.4 MB</h5>
                            <div class="download">
                                <i class="ri-download-2-line"></i>
                            </div>
                        </div>
                    </div>
                    <div class="repcard">
                        <div class="repcardup">
                            <div class="replogo repthree">
                                <i class="ri-file-text-line"></i>
                            </div>
                            <h3>Chest X-Ray</h3>
                            <h5>Metropolis Labs · Oct 24, 2026
                            </h5>
                        </div>
                        <div class="repcarddown">
                            <h5>PDF · 2.4 MB</h5>
                            <div class="download">
                                <i class="ri-download-2-line"></i>
                            </div>
                        </div>
                    </div>
                    <div class="repcard">
                        <div class="repcardup">
                            <div class="replogo repfour">
                                <i class="ri-file-text-line"></i>
                            </div>
                            <h3>Thyroid Panel</h3>
                            <h5>Metropolis Labs · Oct 24, 2026
                            </h5>
                        </div>
                        <div class="repcarddown">
                            <h5>PDF · 2.4 MB</h5>
                            <div class="download">
                                <i class="ri-download-2-line"></i>
                            </div>
                        </div>
                    </div>
                    <div class="repcard">
                        <div class="repcardup">
                            <div class="replogo repfive">
                                <i class="ri-file-text-line"></i>
                            </div>
                            <h3>MRI Brain Scan</h3>
                            <h5>Metropolis Labs · Oct 24, 2026
                            </h5>
                        </div>
                        <div class="repcarddown">
                            <h5>PDF · 2.4 MB</h5>
                            <div class="download">
                                <i class="ri-download-2-line"></i>
                            </div>
                        </div>
                    </div>
                    <div class="repcard">
                        <div class="repcardup">
                            <div class="replogo repsix">
                                <i class="ri-file-text-line"></i>
                            </div>
                            <h3>ECG Resting</h3>
                            <h5>Metropolis Labs · Oct 24, 2026
                            </h5>
                        </div>
                        <div class="repcarddown">
                            <h5>PDF · 2.4 MB</h5>
                            <div class="download">
                                <i class="ri-download-2-line"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rep-upload">
                    <h2>+</h2>
                    <h3>Upload Report</h3>
                </div>  `



  ov.style.color="#9d9d9df7";
  health.style.color="#9d9d9df7";
  ov.style.backgroundColor = "transparent ";
  health.style.backgroundColor = "transparent ";
   hospital.style.color="#9d9d9df7";
hospital.style.backgroundColor = "transparent ";
analytic.style.color="#9d9d9df7";
analytic.style.backgroundColor = "transparent ";
medicine.style.color="#9d9d9df7";
medicine.style.backgroundColor = "transparent ";
  bloodbank.style.backgroundColor = "transparent";
  bloodbank.style.color = "#9d9d9df7 ";

setting.style.backgroundColor = "transparent";
 setting.style.color = "#9d9d9df7  ";

report.style.backgroundColor = "#d1f5e9 ";
report.style.color = "#000000 ";


  


})


 var pointer = document.querySelector("#pointer");
var main = document.querySelector("#main");
main.addEventListener("mousemove",function(dets){
    gsap.to(pointer,{
       top:"0%",
       opacity:1
    })
    gsap.to(pointer,{
        x:dets.x,
        y:dets.y,
        duration:0.3,
      duration:0.8,
      ease:"power3.out"
    })
   
})
main.addEventListener("mouseleave",function(dets){
    gsap.to(pointer,{
       opacity:0                                  
    })
  })


var sidesos = document.querySelector("#sos");
sidesos.addEventListener("click", function () {
  page.innerHTML = `     <div class="headings">
                    <h5>CRITICAL</h5>
                    <h3>Emergency SOS.</h3>
                    <h4>One tap dispatches your location, vitals and contacts to the nearest verified responder.</h4>

                </div>

                <div class="critical-box">
                    <div class="critical-btn">
                        <div class="emergency">
                            <i class="ri-error-warning-line"></i>
                            <h3>HOLD TO SEND</h3>
                        </div>
                        <h5>Your location and medical profile will be shared instantly with paramedics and your emergency contacts.</h5>
                        <div class="concancel">
                           <h5>CANCEL</h5>
                        </div>
                       
                    </div>
                    <div class="critical-des">
                        <div class="critical-contact">
                            <h5>EMERGENCY CONTACTS</h5>
                            <div class="cri-con-box">
                            
                                <div class="conbox">
                                  <div class="conleft">
                                        <div class="conlogo">
                                            <i class="ri-user-3-line"></i>
                                        </div>
                                        <div class="condet">
                                            <h3>Maya Rivera</h3>
                                            <h5>Family — Spouse</h5>
                                        </div>
                                    </div>
                                    <div class="conright">
                                        <div class="conphone">
                                            <i class="ri-phone-line"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="conbox">
                               <div class="conleft">
                                        <div class="conlogo">
                                            <i class="ri-user-3-line"></i>
                                        </div>
                                        <div class="condet">
                                            <h3>City Care</h3>
                                            <h5>24/7 Hotline</h5>
                                        </div>
                                    </div>
                                    <div class="conright">
                                        <div class="conphone">
                                            <i class="ri-phone-line"></i>
                                        </div>
                                    </div>
                                </div>
                                    <div class="conbox">
                                    <div class="conleft">
                                        <div class="conlogo">
                                            <i class="ri-user-3-line"></i>
                                        </div>
                                        <div class="condet">
                                            <h3>ADD CONTACT</h3>
                                            
                                        </div>
                                    </div>
                                    <div class="conright">
                                        <div class="conphone">
                                           <h3 style="color:rgb(255, 255, 255)">+</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="critical-location">
                            
                                <h5><i class="ri-map-pin-line"></i> CURRENT LOCATION</h5>
                                <h5>19.0760° &nbsp; N,  &nbsp; 72.8777°  &nbsp; E</h5>
                                <h5>Bandra West, Mumbai · Accuracy ±4m</h5>

                            
                        </div>
                    </div>
                </div>
              
    `

  
var criticalbtn = document.querySelector(".critical-btn");

criticalbtn.addEventListener("click", function (e) {

    if (e.target.closest(".emergency")) {

        criticalbtn.innerHTML = `
            <div class="emergency">
                <i class="ri-error-warning-line"></i>
                <h3>DISPATCHED</h3>
            </div>

            <h5>Ambulance #A-241 en route. ETA 4 minutes. Stay calm.</h5>

            <div class="concancel" style="display:flex;">
                <h5>CANCEL</h5>
            </div>
        `;
    }

   
    if (e.target.closest(".concancel")) {

        console.log("hello");

        criticalbtn.innerHTML = `
            <div class="emergency">
                <i class="ri-error-warning-line"></i>
                <h3>HOLD TO SEND</h3>
            </div>

            <h5>Your location and medical profile will be shared instantly with paramedics and your emergency contacts.</h5>
        `;
    }

});


  ov.style.color="#9d9d9df7";
  health.style.color="#9d9d9df7";
  ov.style.backgroundColor = "transparent ";
  health.style.backgroundColor = "transparent ";
   hospital.style.color="#9d9d9df7";
hospital.style.backgroundColor = "transparent ";
analytic.style.color="#9d9d9df7";
analytic.style.backgroundColor = "transparent ";
medicine.style.color="#9d9d9df7";
medicine.style.backgroundColor = "transparent ";
  bloodbank.style.backgroundColor = "transparent";
  bloodbank.style.color = "#9d9d9df7 ";

setting.style.backgroundColor = "transparent";
 setting.style.color = "#9d9d9df7  ";

report.style.backgroundColor = "transparent";
report.style.color = "#9d9d9df7 ";





})

