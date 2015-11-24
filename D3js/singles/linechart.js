var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    var parseDate = d3.time.format("%d-%b-%y").parse;

    var xScale = d3.time.scale()
        .range([0, width]);

    var yScale = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    var line = d3.svg.line()
        .x(function(d.receive_date) { return x(d.receive_date); })
        .y(function(d.responses) { return y(d.responses); });

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.json("data/firstmonth.json", function(error, json) {
        if (error) {
            return console.warn(error);
        }
        var data = json.responses;

        data.forEach(function(d) {
            d.receive_date = new Date(d.receive_date);
            d.responses = parseInt(d.responses);
        });

        console.log(data);
        var xScale = d3.scale.linear()
            .domain([0, d3.max(data, function(d) {
              return d.receive_date.length - 1;
            })])
            .range([0, width]);
//        xScale.domain(d3.extent(data, function(d) { return d.recieve_date; }));
        var yScale = d3.scale.linear()
            .domain([d3.min(data, function(d) {
                    return d3.min(d.reponses);
                }), d3.max(data, function(d) {
                    return d3.max(d.reponses);
                })
            ])
            .range([height, 0]);
        //yScale.domain(d3.extent(data, function(d) { return d.responses; }));

          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Responses");

          svg.append("path")
              .data(data, function(d) { return d.responses; })
              .attr("class", "line")
              .attr("d", line);
        });