
// line chart on arrest rates

// label
var years = [2011,2012,2013,2014,2015,2016,2017,2018, 2019];
// For drawing the line
var arrestrate = [87.6, 85.2, 91, 96.1, 97.6, 94.6, 96.2, 94.7, 94.4];
var arrestrate_porn = [94.7, 90.7, 88.9, 83.3, 76, 85.4, 84.8, 83.5, 78.5]

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
		data: arrestrate,
        label: "The Special Act on Punishment of Sexual Violence Crimes (Photography by Camera, etc.)",
        borderColor: "#a3dcff",
        pointHoverBorderColor: 'white',
        pointHoverBackgroundColor: 'black',
        fill: false
      },
      { 
		data: arrestrate_porn,
        label: "The Act on Promotion of Information and Communications Network Utilization and Data Protection, etc.",
        borderColor: "#f28927",
        pointHoverBorderColor: 'white',
        pointHoverBackgroundColor: 'black',
        fill: false
      }

    ]
  },
    options: {
	  scales: {
	    yAxes: [{
	      scaleLabel: {
	        display: true,
	        labelString: 'Arrest rate (%)'
	      }
	    }],
	    xAxes: [{
	    	scaleLabel: {
	    		display: true,
	    		labelString: 'Year'
	    	}
	    }]
	  }     
	}
});


// accessible drop down menu

// change dropdown label - signifies what chart you're on

// AND load bar chart for special act on sexual violence

function load_specialact(){
    var name = document.getElementById("specialact").innerHTML;
    document.getElementById("dropdown-name").innerHTML = name;
    document.getElementById("grouped-bar").setAttribute('aria-label', 'Graph of Crime Statistics under the Act on the Promotion of Information and Communication Network Utilization and Information Protection, etc. (Distribution of Pornography)from 2011 to 2019');

    if (window.barchart != null) {
    	window.barchart.destroy();
    }

    window.barchart = new Chart(document.getElementById("grouped-bar"), {
    type: 'bar',
    data: {
      labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
      datasets: [
        {
          label: "Number of cases",
          backgroundColor: "#f7e592",
          data: [1535, 2412, 4841, 6635, 7615, 5170, 6465, 5925, 5764]
        },
        {
          label: "Number of arrests (count)",
          backgroundColor: "#ebab96",
          data: [1344, 2054, 4405, 6379, 7430, 4891, 6220, 5613, 5442]
        },
        {
          label: "Number of men arrested (persons)",
          backgroundColor: "#a89df2",
          data: [1322, 1786, 2773, 2854, 3832, 4340, 5174, 5108, 5108]
        },
        {
          label: "Number of women arrested (persons)",
          backgroundColor: "#8ad8ff",
          data: [24, 36, 62, 50, 92, 117, 166, 188, 278]
        },
      ]
    },
    options: {
	  scales: {
	    yAxes: [{
	      scaleLabel: {
	        display: true,
	        labelString: 'Count or Persons'
	      }
	    }],
	    xAxes: [{
	    	scaleLabel: {
	    		display: true,
	    		labelString: 'Year'
	    	}
	    }]
	  }     
	}
    }
);
};

// change dropdown label - signifies what chart you're on

// AND load bar chart on distribution of pornography

function load_distporn(){
    var name = document.getElementById("actdistporn").innerHTML;
    document.getElementById("dropdown-name").innerHTML = name;
	document.getElementById("grouped-bar").setAttribute('aria-label', "Graph of Crime Statistics under the Act on Promotion of Information and Communications Network Utilization and Data Protection, etc. (Distribution of Pornography) from 2011 to 2019 in Korea");

    if (window.barchart != null) {
    	window.barchart.destroy();
    }

	window.barchart = new Chart(document.getElementById("grouped-bar"), {
	    type: 'bar',
	    data: {
	      labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
	      datasets: [
	        {
	          label: "Number of cases",
	          backgroundColor: "#f7e592",
	          data: [8190, 5708, 6525, 3717, 3419, 2412, 1986, 2463, 1482]
	        },
	        {
	          label: "Number of arrests (count)",
	          backgroundColor: "#ebab96",
	          data: [7758, 5176, 5802, 3095, 2598, 2059, 1684, 2056, 1163]
	        },
	        {
	          label: "Number of men arrested (persons)",
	          backgroundColor: "#a89df2",
	          data: [8341, 5952, 6772, 3614, 2898, 1931, 1677, 2167, 1575]
	        },
			{
	          label: "Number of women arrested (persons)",
	          backgroundColor: "#8ad8ff",
	          data: [317, 288, 303, 142, 106, 127, 174, 194, 121]
	        },
	      ]
	    },
	    options: {
		  scales: {
		    yAxes: [{
		      scaleLabel: {
		        display: true,
		        labelString: 'Count or Persons'
		      }
		    }],
		    xAxes: [{
		    	scaleLabel: {
		    		display: true,
		    		labelString: 'Year'
		    	}
		    }]
		  }     
		}
	    }
	);
};

