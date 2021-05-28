module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		scale: {
			0: "0",
			25: ".25",
			50: ".5",
			75: ".75",
			90: ".9",
			95: ".95",
			100: "1",
			105: "1.05",
			110: "1.1",
			125: "1.25",
			150: "1.5",
			200: "2",
		},
		extend: {
			height: {
				100: "30rem",
				110: "40rem",
				115: "45rem",
				120: "50rem",
				125: "55rem",
				130: "60rem",
			},
			minHeight: {
				0: "0",
				"1/4": "25%",
				"1/2": "50%",
				"3/4": "75%",
				full: "100%",
				20: "19rem",
				10: "9.5rem",
			},
			transitionDuration: {
				0: "0ms",
				5000: "5000ms",
			},
			animation: {
				"gradient-x": "gradient-x 5s ease infinite",
				"gradient-y": "gradient-y 5s ease infinite",
				"gradient-xy": "gradient-xy 5s ease infinite",
			},
			keyframes: {
				"gradient-y": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "center top",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "center center",
					},
				},
				"gradient-x": {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
				"gradient-xy": {
					"0%, 100%": {
						"background-size": "400% 400%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
			colors: {
				orange: {
					50: "#faf7ed",
					100: "#faf3d0",
					200: "#f6e895",
					300: "#f1d54f",
					400: "#e7b51b",
					500: "#df930a",
					600: "#c96e06",
					700: "#a2520a",
					800: "#7f4010",
					900: "#643311",
					light: "#ff9d2f",
					DEFAULT: "#ff6126",
				},
				bareapp: {
					DEFAULT: "#231611",
					light: "#4B3013",
					lighter: "#F6B216",
				},
			},
		},
		fontFamily: {
			display: ["Montserrat", "system-ui"],
			sans: [
				"Montserrat",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				'"Noto Sans"',
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: [
				"Georgia",
				"Cambria",
				'"Times New Roman"',
				"Times",
				"serif",
			],
			mono: [
				"Menlo",
				"Monaco",
				"Consolas",
				'"Liberation Mono"',
				'"Courier New"',
				"monospace",
			],
		},
	},
	variants: {
		extend: {
			scale: ["group-hover"],
			translate: ["group-hover"],
			animation: ["hover"],
		},
	},
	plugins: [],
};
