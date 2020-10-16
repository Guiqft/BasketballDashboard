<template>
	<div>
		<apexcharts
			class="chart"
			type="radar"
			:height="height"
			:options="chartOptions"
			:series="series"
		/>
	</div>
</template>

<script>
export default {
	name: "RadarChart",
	props: {
		labels: { type: Array, default: []},
		colors: { type: Object, default: {} },
		type: {type: String, default: "Team"},
		height: {type: String, default: '300px'},
		players: {type: Object},
		labelColor: {type: String, default: 'white'}
	},

	computed: {
		primaryValues() {
			let data = {} 

			if(this.$props.type === 'Team')
				data = this.$store.state.selectedTeamStats
			else
				data = this.$props.players.first.stats[0]

			const values = []

			this.$props.labels.map(el => values.push(data[el]))

			return values
		},

		secondaryValues() {
			let data = {} 

			if(this.$props.type === 'Team')
				return this.$store.state.teamsAverages;
			else
				data = this.$props.players.second.stats[0]

			const values = []

			this.$props.labels.map(el => values.push(data[el]))

			return values
		},
	
		series() {
			const series = [
				{
					name: "Primary Stats",
					data: this.primaryValues
				},
				{
					name: "Secondary Stats",
					data: this.secondaryValues
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
					type: "radar",
					stroke: {
						width: 2
					},
					y: 1,
					toolbar: {
						show: false
					},
				},
				labels: this.$props.labels,

				markers: {
					size: 0
				},

				legend: {
					show: false
				},
				stroke: {
					colors: [ "#000", this.$props.colors.primary_color],
				},
				fill: {
					colors: [ "#000", this.$props.colors.primary_color],
					opacity: [0.35, 0.45],
					type: ['solid', 'solid']
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
							colors: [this.$props.labelColor, this.$props.labelColor, this.$props.labelColor, this.$props.labelColor, this.$props.labelColor, this.$props.labelColor],
							fontSize: "60%",
							fontFamily: "Helvetica, Arial, sans-serif",
							fontWeight: 600,
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
