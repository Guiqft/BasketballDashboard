<template>
	<div>
		<apexcharts
			class="chart"
			type="radar"
			height="300px"
			:options="chartOptions"
			:series="series"
		/>
	</div>
</template>

<script>
export default {
	name: "RadarChart",
	props: {
		labels: { type: Array, default: []}
	},

	computed: {
		values() {
			const teamStats = this.$store.state.selectedTeamStats

			const values = []

			this.$props.labels.map(el => values.push(teamStats[el]))

			return values
		},

		averages() {
			const teamsAverages = this.$store.state.teamsAverages;

			return  teamsAverages
		},
	
		series() {
			const series = [
				{
					name: "Team Stats",
					data: this.values
				},
				{
					name: "Average Stats",
					data: this.averages
				}
			]

			return series
		}
	},

	data() {
		return {
			chartOptions: {
				chart: {
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
					stroke: {
						width: 2
					},
					y: 0.5,
					toolbar: {
						show: false
					},
				},
				labels: this.$props.labels,

				markers: {
					size: 2
				},

				legend: {
					show: false
				},
				fill: {
					colors: [ "#003363","#078A84"],
					opacity: 0.75,
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
					show: false,
					forceNiceScale: false,
				},

				xaxis: {
					type: "category",
					categories: [],
					labels: {
						//this remove '_' from label and capitalize it
						formatter: (label) => label.replace('_', ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))),
						style: {
							colors: ["white", "white", "white", "white", "white", "white"],
							fontSize: "12px",
							fontFamily: "Helvetica, Arial, sans-serif",
							fontWeight: 400,
							cssClass: "apexcharts-xaxis-label"
						},
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

.apexcharts-xaxis-label {
	text-transform: capitalize!important;
}
</style>
