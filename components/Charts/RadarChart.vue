<template>
	<div>
		<apexcharts
			class="chart"
			type="radar"
			height="110%"
			:options="chartOptions"
			:series="series"
		/>
	</div>
</template>

<script>
export default {
	name: "RadarChart",
	data() {
		return {
			series: [
				{
					name: "Series 1",
					data: [80, 50, 30, 40, 100, 20]
				},
				{
					name: "Series 2",
					data: [20, 30, 40, 80, 20, 80]
				}
			],
			chartOptions: {
				chart: {
					height: 350,
					background: "none",
					dropShadow: {
						enabled: false,
						enabledOnSeries: undefined,
						top: 0,
						left: 0,
						blur: 3,
						color: "#000",
						opacity: 0.35
					},
					foreColor: "#272b2c",
					type: "radar",
					toolbar: {
						show: false
					},
					legend: {
						show: true
					},
					stroke: {
						width: 2
					},
					xaxis: {
						categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
					},
					y: 0.5
				},
				labels: ["Apples", "Oranges", "Berries", "Grapes"],

				markers: {
					size: 0
				},

				legend: {
					show: false
				},
				fill: {
					colors: undefined,
					opacity: 0.8,
					type: "solid",
					gradient: {
						shade: "dark",
						type: "horizontal",
						shadeIntensity: 0.1,
						gradientToColors: undefined,
						inverseColors: true,
						opacityFrom: 0.2,
						opacityTo: 0.8,
						stops: [0, 50, 100],
						colorStops: []
					}
				},
				dataLabels: {
					enabled: false
				},
				grid: {
					show: false
				},
				theme: {
					palette: "palette1",
					monochrome: {
						enabled: false,
						color: "white",
						shadeTo: "dark",
						shadeIntensity: 0.65
					}
				},

				yaxis: {
					show: false
				},

				xaxis: {
					type: "category",
					categories: [],
					labels: {
						style: {
							colors: ["black", "black"],
							fontSize: "12px",
							fontFamily: "Helvetica, Arial, sans-serif",
							fontWeight: 400,
							cssClass: "apexcharts-xaxis-label"
						}
					}
				}
			}
		};
	}
};
</script>

<style scoped>
.chart {
}
</style>
