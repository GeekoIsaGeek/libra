<script setup>
import CloseIcon from '@/components/icons/CloseIcon.vue';
import LogoutIcon from '@/components/icons/LogoutIcon.vue';
import { useUserStore } from '@/stores/UserStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import LibraryIcon from '../icons/LibraryIcon.vue';

defineEmits(['close']);

const { clearUser } = useUserStore();
const { isAuthenticated } = storeToRefs(useUserStore());
const { push: navigate } = useRouter();

const handleLogout = () => {
	clearUser();
	navigate({ name: 'login' });
};
const links = [
	{ name: 'home', label: 'routes.home' },
	{ name: 'add-book', label: 'routes.add' },
	{ name: 'about', label: 'routes.about' },
];
</script>

<template>
	<div class="sidebar">
		<div class="py-7 lg:py-0 sm:mr-12">
			<h1>
				<RouterLink :to="{ name: 'home' }" class="flex items-center flex-col">
					<LibraryIcon class="w-7 h-7" />
					Libra
				</RouterLink>
			</h1>
			<CloseIcon
				class="absolute lg:hidden fill-lightrown fill-gold w-8 h-8 right-1 top-5 cursor-pointer"
				@click="() => $emit('close')"
			/>
		</div>

		<div class="flex flex-col h-full justify-between pt-10">
			<nav class="flex flex-col items-start gap-6 ml-12 sm:ml-0 text-[28px] text-gold">
				<RouterLink :to="{ name: link.name }" v-for="link in links" :key="link.name" class="relative group">
					{{ $t(link.label) }}
					<span
						class="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gold transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"
					>
					</span>
				</RouterLink>
			</nav>

			<button
				type="submit"
				@click.prevent="handleLogout"
				class="mt-5 py-1 px-7 bg-wheat rounded-3xl self-center text-darkestBrown font-semibold hover:saturate-200 transition-all duration-200 ease-out flex items-center gap-2"
				v-if="isAuthenticated"
			>
				{{ $t('auth.logOut') }}
				<LogoutIcon class="icon" />
			</button>
			<RouterLink
				:to="{ name: 'login' }"
				class="mt-5 py-1 px-7 bg-wheat rounded-3xl self-center text-darkestBrown font-semibold hover:saturate-200 transition-all duration-200 ease-out flex items-center gap-2"
				v-else
			>
				{{ $t('auth.login') }}
				<LogoutIcon class="icon" />
			</RouterLink>
		</div>
	</div>
</template>

<style scoped>
.sidebar {
	position: fixed;
	min-width: max-content;
	width: 250px;
	height: 100%;
	min-height: 100vh;
	background-color: rgba(14, 14, 14, 0.5);
	backdrop-filter: blur(15px);
	box-shadow: 2px 0 5px rgb(0 0 0 / 18%);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding-bottom: 36px;
	z-index: 10;
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
	padding-bottom: 16px;
	border-bottom: #c6a965 1px solid;
	font-size: 38px;
}
@media screen and (max-width: 640px) {
	.sidebar {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 10;
		background-color: rgba(14, 14, 14, 0.8);
	}
}
</style>
