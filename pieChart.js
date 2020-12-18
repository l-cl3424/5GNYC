
    /*   var i=0;
			 var j=0;
			 var dataset;
			 dataset = d3.geojson("NYC_Amp_Final.geojson");
			 var l = dataset.features.length;            */



			//Width and height
      var tt=7415
			var w = 300;
			var h = 300;
	    var datasets = [ 29, 22, 29, 183, 608, 105, 864, 1445, 320, 897, 1139, 1774 ];
			var dataset = [
			    {label: "0.00-0.20", count: 29, index: 0, Num: 0.39},
			    {label: "0.20-0.27", count: 22, index: 1, Num:0.30},
			    {label: "0.27-0.33", count: 29, index: 2, Num:0.39},
			    {label: "0.33-0.40", count: 183, index: 3, Num:2.47},
			    {label: "0.40-0.47", count: 608, index: 4, Num:8.20},
			    {label: "0.47-0.53", count: 105, index: 5, Num:1.42},
			    {label: "0.53-0.60", count: 864, index: 6, Num:11.65},
			    {label: "0.60-0.67", count: 1445, index: 7, Num:19.49},
			    {label: "0.67-0.73", count: 320, index: 8, Num:4.32},
			    {label: "0.73-0.80", count: 897, index: 9, Num:12.10},
			    {label: "0.80-0.87", count: 1139, index: 10, Num:15.36},
			    {label: "0.87-1.00", count: 1774, index: 11, Num:23.92}
			  ];

			var outerRadius = w / 2;
			var innerRadius = 0;
			var arc = d3.arc()
						.innerRadius(innerRadius)
						.outerRadius(outerRadius);

			var pie = d3.pie()
			.value(function(d){
				return d.count;
			})
			.sort(null);

			//Easy colors accessible via a 10-step ordinal scale
			var color = d3.scaleOrdinal( )
			.domain(dataset)
		 .range(["#FF0000", "#fff2f2", "#ffdcdc", "#FFC6C6", "#FFB0B0", "#FF9A9A", "#FF8484", "#FF6E6E",
	 "#FF5858", "#FF4242", "#FF2C2C", "#FF1616"]);

	   //var colorSet = ["#fff2f2", "#ffdcdc", "#FFC6C6", "#FFB0B0", "#FF9A9A", "#FF8484", "#FF6E6E",
	 //"#FF5858", "#FF4242", "#FF2C2C", "#FF1616", "#FF0000"];

			//Create SVG element
			var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			//Set up groups
			var arcs = svg.selectAll("g.arc")
						  .data(pie(dataset))
						  .enter()
						  .append("g")
						  .attr("class", "arc")
						  .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

			var showAmount = function(){
					svg.selectAll("g.arc")
								.append("title")
								.attr("id","tooltip")
								.text(function(d){
									if(d.index == 0){
									return "Signals of 0.00-0.20 intensity cover 0.39% area of NYC";
								}else if(d.index == 1){
									return "Signals of 0.20-0.27 intensity cover 0.30% area of NYC";
								}else if(d.index == 2){
									return "Signals of 0.27-0.33 intensity cover 0.39% area of NYC";
								}else if(d.index == 3){
									return "Signals of 0.33-0.40 intensity cover 2.47% area of NYC";
								}else if(d.index == 4){
									return "Signals of 0.40-0.47 intensity cover 8.20% area of NYC";
								}else if(d.index == 5){
									return "Signals of 0.47-0.53 intensity cover 1.42% area of NYC";
								}else if(d.index == 6){
									return "Signals of 0.53-0.60 intensity cover 11.65% area of NYC";
								}else if(d.index == 7){
									return "Signals of 0.60-0.67 intensity cover 19.49% area of NYC";
								}else if(d.index == 8){
									return "Signals of 0.67-0.73 intensity cover 4.32% area of NYC";
								}else if(d.index == 9){
									return "Signals of 0.73-0.80 intensity cover 12.10% area of NYC";
								}else if(d.index == 10){
									return "Signals of 0.80-0.87 intensity cover 15.36% area of NYC";
								}else {
									return "Signals of 0.87-1.00 intensity cover 23.92% area of NYC";
								}
								})
							};


			//Draw arc paths
			arcs.append("path")
			.attr("fill", function(d, i) {
				 return color(i);
			 })
			 .attr("d", arc)

				.on("mouseover",function(d,i){
							d3.select(this).attr("fill","rgba(255,255,255,0.5)");
						 showAmount();
			})
     	.on("mouseout",function(d){
				d3.select(this)
			  .attr("fill",function(d) {
					if(d.index == 0){
						return '#fff2f2';
					}else if(d.index == 1){
						return '#ffdcdc';
					}else if(d.index == 2){
						return '#FFC6C6';
					}else if(d.index == 3){
						return '#FFB0B0';
					}else if(d.index == 4){
						return '#FF9A9A';
					}else if(d.index == 5){
						return '#FF8484';
					}else if(d.index == 6){
						return '#FF6E6E';
					}else if(d.index == 7){
						return '#FF5858';
					}else if(d.index == 8){
						return '#FF4242';
					}else if(d.index == 9){
						return '#FF2C2C';
					}else if(d.index == 10){
						return '#FF1616';
					}else {
						return '#FF0000';
					}
				})
			})
			;

	/*		 d3.csv("data.csv")
			 .then(function(data){
				 var dataset1 = data;

				arcs.on("mouseover",function(d){
						 d3.select(this).attr("fill","white");
					 // showAmount();
		 });

	 });   */
		//		select("#tooltip").remove()


			//Labels
	/*		arcs.append("text")
			    .attr("transform", function(d) {
			    	return "translate(" + arc.centroid(d) + ")";
			    })
			    .attr("text-anchor", "middle")
			    .text(function(d) {
			    	return d.value;
			    });         */
