<template>
	<div>
		<Nuxt />
	</div>
</template>

<style>
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	overflow: hidden;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.k-progress-text{
	font-weight: 600;
  	color: white!important
}

::-webkit-scrollbar {
    width: 8px;
}
 
/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: rgba(99, 94, 94, 0.8); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
::-webkit-scrollbar-thumb:window-inactive {
	background: rgba(99, 94, 94, 0.8);  
}
</style>
