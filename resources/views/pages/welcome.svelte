<script lang="ts">
import LaravelLogo from '@/views/components/laravel-logo.svelte';
import InertiaLogo from '@/views/components/inertia-logo.svelte';

export let versions = {
    php: '',
    laravel:''
};

</script>
<div class="relative flex items-top justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900 sm:items-center py-4 sm:pt-0">
	<div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
		<div class="flex justify-center items-center pt-8 space-x-12 sm:pt-0">
			<LaravelLogo className="h-20 w-auto text-[#EF3B2D]" />
			<InertiaLogo className="h-11 w-auto text-[#826ded]" />
		</div>
		
		<div class="flex justify-center mt-4 sm:items-center sm:justify-between">
			<div class="text-center text-sm text-zinc-500 sm:text-left">
				<div class="flex items-center">
					<svg
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="-mt-px w-5 h-5 text-zinc-400"
					>
						<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>

					<a href="https://laravel.bigcartel.com" class="ml-1 underline">
						Shop
					</a>

					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						class="ml-4 -mt-px w-5 h-5 text-zinc-400"
					>
						<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
					</svg>

					<a href="https://github.com/sponsors/taylorotwell" class="ml-1 underline">
						Sponsor
					</a>
				</div>
			</div>

			<div class="text-center text-sm text-zinc-500 sm:text-left space-x-2">
				<span>Laravel { versions.laravel }</span>
				<span>{ versions.php }</span>
			</div>
		</div>
	</div>
</div>