<script></script>

<template>
	<div class="sidebar">
		<h1>
			<RouterLink :to="{ name: 'home' }">Libra</RouterLink>
		</h1>
	</div>
</template>

<style scoped>
.sidebar {
	min-width: max-content;
	min-height: 100vh;
	background-color: rgba(20, 20, 20, 0.95);
	box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 0 40px;
}

.sidebar h1 {
	font-family: 'Garamond', serif;
	color: #c6a965;
	font-size: 2.5em;
	margin: 0;
	padding: 0 10px 15px 10px;
	text-transform: uppercase;
	margin-top: 36px;
	letter-spacing: 2px;
	border-bottom: 2px solid #c6a965;
	padding-bottom: 15px;
}
@media screen and (max-width: 1024px) {
	.sidebar {
		padding: 0 20px;
	}
}
@media screen and (max-width: 640px) {
	.sidebar {
		display: none;
	}
}
</style>
