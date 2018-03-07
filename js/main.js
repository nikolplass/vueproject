const aquarius = {
	template: `
		<div class="text-center">
			<h1>Aquarius</h1>
			<img src="img/Aquarius1.png" alt="Aquarius">
			<p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.</p>
		</div>
		`
	}

const aries = {
	template: `
		<div class="text-center">
			<h1>Aries</h1>
			<img src="img/Aries1.jpg" alt="Aries">
			<p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.</p>
		</div>
		`
	}

const cancer = {
	template: `
		<div class="text-center">
			<h1>Cancer</h1>
			<img src="img/Cancer1.png" alt="Cancer">
			<p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.</p>
		</div>
		`
	}

const gemini = {
	template: `
		<div class="text-center">
			<h1>Gemini</h1>
			<img src="img/Gemini1.png" alt="Gemini">
			<p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.</p>
		</div>
		`
	}

const leo = {
	template: `
		<div class="text-center">
			<h1>Leo</h1>
			<img src="img/Leo1.png" alt="Leo">
			<p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.</p>
		</div>
		`
	}

const router = new VueRouter ({
	routes: [
		{
			path: "/one",
			component: aquarius
		},
		{
			path: "/two",
			component: aries
		},
		{
			path: "/three",
			component: cancer
		},
		{
			path: "/four",
			component: gemini
		},
		{
			path: "/five", //router-link to=
			component: leo //what is being populated
		}
	]
})

var routeTest = new Vue ({
	router,
	el: '#app'
	// data: {
	// },
	// methods: {
	// }
}).$mount('#app')
