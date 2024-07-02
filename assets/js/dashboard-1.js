(function ($) {
  /* "use strict" */

  var dlabChartlist = (function () {
    var screenWidth = $(window).width();
    var donutChart1 = function () {
      $("span.donut1").peity("donut", {
        width: "60",
        height: "60",
      });
    };
    var chartBar = function () {
      var options = {
        series: [
          {
            name: "Running",
            data: [50, 18, 70, 40, 90, 70, 20],
            //radius: 12,
          },
          {
            name: "Cycling",
            data: [80, 40, 55, 20, 45, 30, 80],
          },
        ],
        chart: {
          type: "bar",
          height: 300,

          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "57%",
            endingShape: "rounded",
            borderRadius: 8,
          },
        },
        states: {
          hover: {
            filter: "none",
          },
        },
        colors: ["#FFA26D", "#FF5ED2"],
        dataLabels: {
          enabled: false,
        },
        markers: {
          shape: "circle",
        },

        legend: {
          show: false,
          fontSize: "12px",
          labels: {
            colors: "#000000",
          },
          markers: {
            width: 18,
            height: 18,
            strokeWidth: 10,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 12,
          },
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              plotOptions: {
                bar: {
                  horizontal: true,
                  columnWidth: "100%",
                  borderRadius: 5,
                },
              },
              legend: {
                position: "bottom",
                horizontalAlign: "center",
              },
            },
          },
        ],
        stroke: {
          show: true,
          width: 4,
          curve: "smooth",
          lineCap: "round",
          colors: ["transparent"],
        },
        grid: {
          borderColor: "var(--border)",
        },
        xaxis: {
          position: "bottom",
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "poppins",
              fontWeight: 100,
              cssClass: "apexcharts-xaxis-label",
            },
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
        },

        yaxis: {
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "poppins",
              fontWeight: 100,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "white",
            type: "vertical",
            shadeIntensity: 0.2,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 50],
            colorStops: [],
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      };

      if (jQuery("#chartBar").length > 0) {
        var chartBar1 = new ApexCharts(
          document.querySelector("#chartBar"),
          options
        );
        chartBar1.render();

        jQuery(".card-tabs .nav-link").on("click", function () {
          if ($(this).attr("href") == "#monthly") {
            chartBar1.updateSeries([
              {
                name: "Running",
                data: [40, 20, 10, 50, 60, 90, 80],
              },
              {
                name: "Cycling",
                data: [40, 50, 10, 20, 50, 90, 80],
              },
            ]);
          } else if ($(this).attr("href") == "#weekly") {
            chartBar1.updateSeries([
              {
                name: "Running",
                data: [50, 30, 40, 30, 40, 70, 90],
              },
              {
                name: "Cycling",
                data: [30, 40, 30, 10, 60, 80, 90],
              },
            ]);
          } else if ($(this).attr("href") == "#today") {
            chartBar1.updateSeries([
              {
                name: "Running",
                data: [30, 20, 30, 40, 50, 60, 70],
              },
              {
                name: "Cycling",
                data: [20, 60, 40, 60, 10, 50, 70],
              },
            ]);
          }
        });
      }
    };

    /* Function ============ */
    return {
      init: function () {},

      load: function () {
        donutChart1();
        chartBar();
      },

      resize: function () {},
    };
  })();

  jQuery(window).on("load", function () {
    setTimeout(function () {
      dlabChartlist.load();
    }, 1000);
  });
})(jQuery);
