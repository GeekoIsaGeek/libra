<script setup>
import corner from '@/assets/images/corner.png';
</script>

<template>
	<div class="flex justify-center items-center w-full h-full bg-[#0f0f0f98]">
		<section class="flex flex-col justify-center items-start max-w-[80%] xl:max-w-[50%] py-6 rounded-lg relative">
			<img :src="corner" class="absolute w-[100px] h-[100px] top-0 -right-2 gold-filter hidden lg:block" />
			<img
				:src="corner"
				class="absolute w-[100px] h-[100px] top-0 -left-16 -rotate-90 gold-filter hidden lg:block"
			/>

			<h1 class="text-3xl self-center text-bold">About Us</h1>
			<p class="text-2xl mt-6">
				Welcome to Libra, an innovative online library created by four passionate Mathematics majors who believe
				that knowledge should be accessible to everyone.
			</p>
			<p class="self-start text-2xl mt-4">
				You can contact us via Email:
				<a href="mailto:libra.1.qwerty@gmail.com" class="text-gold italic cursor-pointer"
					>libra.1.qwerty@gmail.com</a
				>
			</p>
			<p class="text-xl mt-6">We are just trying to get an A in this class</p>
			<p class="text-xl mt-2">George is fighting for an E.</p>
		</section>
	</div>
</template>
