<script lang="ts">
	import { stats, countryServiceData } from '$lib/data/mockData';

	const cards = [
		{
			title: 'Achievements',
			value: stats.achievements,
			sub: 'Weekly goal',
			bg: 'bg-brand-secondary/5',
			accent: 'text-brand-secondary',
			glow: 'bg-brand-secondary/10',
			icon: '🏆'
		},
		{
			title: 'Targets',
			value: stats.targets,
			sub: 'Overall performance',
			bg: 'bg-brand-accent/5',
			accent: 'text-brand-accent',
			glow: 'bg-brand-accent/10',
			icon: '🎯'
		},
		{
			title: 'System Rating',
			value: stats.rating,
			sub: 'User feedback',
			bg: 'bg-brand-success/5',
			accent: 'text-brand-success',
			glow: 'bg-brand-success/10',
			icon: '⭐️'
		},
		{
			title: 'Pending Payments',
			value: stats.pendingPayments,
			sub: 'Action required',
			bg: 'bg-brand-primary/5',
			accent: 'text-brand-primary',
			glow: 'bg-brand-primary/10',
			icon: '💰'
		}
	];
</script>

<div class="animate-in fade-in slide-in-from-bottom-4 space-y-12 pb-20 duration-1000 ease-out">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-extrabold tracking-tight text-brand-dark">Executive Overview</h1>
			<p class="mt-1 text-sm font-medium text-slate-500">
				ALLSEE Technology Core Operational Terminal.
			</p>
		</div>
		<div class="flex gap-3">
			<a
				href="/alsee-admin/clients"
				class="rounded-xl bg-brand-primary px-8 py-3 text-xs font-black tracking-widest text-white uppercase shadow-lg shadow-brand-primary/20 transition-all hover:bg-brand-dark"
			>
				+ New Record
			</a>
		</div>
	</div>

	<!-- Stats Grid -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		{#each cards as card}
			<div
				class={`dashboard-card group relative overflow-hidden rounded-3xl border-slate-50 ${card.bg} p-6 transition-all duration-500`}
			>
				<!-- Subtle Accent Glow -->
				<div
					class={`absolute -right-6 -bottom-6 h-24 w-24 rounded-full ${card.glow} blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100`}
				></div>

				<div class="relative z-10">
					<div class="mb-6 flex items-start justify-between">
						<div
							class={`flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm transition-all duration-700 group-hover:scale-110`}
						>
							{card.icon}
						</div>
					</div>
					<h3 class={`mb-1 text-[9px] font-extrabold tracking-[0.15em] ${card.accent} uppercase`}>
						{card.title}
					</h3>
					<div class="flex items-baseline gap-2">
						<span class="text-2xl font-extrabold text-brand-dark">{card.value}</span>
						<span class="text-[9px] font-bold text-slate-400 uppercase">{card.sub}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Company Growth Graph -->
	<div
		class="dashboard-card group relative overflow-hidden rounded-3xl border-none bg-white p-10 shadow-lg shadow-slate-200/40 transition-all hover:shadow-xl hover:shadow-brand-primary/5"
	>
		<!-- Background Decor -->
		<div
			class="pointer-events-none absolute -top-20 -right-20 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/5 blur-3xl transition-transform duration-1000 group-hover:scale-110"
		></div>

		<div class="relative z-10 mb-10 flex items-center justify-between">
			<div>
				<h3 class="text-xl font-extrabold text-brand-dark">Company Growth</h3>
				<p class="mt-1 text-sm font-medium text-slate-400">Inclination & Market Share</p>
			</div>
			<div class="flex items-center gap-4">
				<div class="text-right">
					<p
						class="text-3xl font-black tracking-tighter text-brand-primary transition-all duration-300 group-hover:scale-105"
					>
						+124%
					</p>
					<p class="text-[10px] font-bold tracking-widest text-slate-400 uppercase">YTD Growth</p>
				</div>
			</div>
		</div>

		<!-- Graph Area -->
		<div class="relative h-64 w-full">
			<!-- SVG Curve -->
			<svg class="h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
				<!-- Grid Lines -->
				<path d="M0 80 L100 80" stroke="#f1f5f9" stroke-width="0.5" stroke-dasharray="4 4" />
				<path d="M0 50 L100 50" stroke="#f1f5f9" stroke-width="0.5" stroke-dasharray="4 4" />
				<path d="M0 20 L100 20" stroke="#f1f5f9" stroke-width="0.5" stroke-dasharray="4 4" />

				<!-- Gradient Defs -->
				<defs>
					<linearGradient id="growthGradient" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stop-color="#ff6b6b" stop-opacity="0.2" />
						<stop offset="100%" stop-color="#ff6b6b" stop-opacity="0" />
					</linearGradient>
				</defs>

				<!-- Area Path -->
				<path
					d="M0 100 L0 80 C10 80 15 75 25 70 C35 65 40 60 50 45 C60 30 70 25 80 15 C90 5 95 0 100 0 L100 100 Z"
					fill="url(#growthGradient)"
					class="animate-in fade-in slide-in-from-bottom-5 opacity-0 duration-1000"
					style="animation-delay: 0.2s; animation-fill-mode: forwards;"
				/>

				<!-- Line Path -->
				<path
					d="M0 80 C10 80 15 75 25 70 C35 65 40 60 50 45 C60 30 70 25 80 15 C90 5 95 0 100 0"
					fill="none"
					stroke="#ff6b6b"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="animate-in fade-in duration-1000"
				/>

				<!-- Data Points -->
				{#each [{ x: 0, y: 80, val: 'Start' }, { x: 25, y: 70, val: 'Q1' }, { x: 50, y: 45, val: 'Q2' }, { x: 80, y: 15, val: 'Q3' }, { x: 100, y: 0, val: 'Proj' }] as point, i}
					<g class="group/point">
						<circle
							cx={point.x}
							cy={point.y}
							r="2"
							class="translate-y-4 cursor-pointer fill-white stroke-brand-primary stroke-2 opacity-0 transition-all duration-500 hover:scale-150 hover:stroke-4"
							style={`animation: fadeInUp 0.5s forwards ${0.5 + i * 0.1}s`}
						/>
						<!-- Tooltip -->
						<g
							class="pointer-events-none opacity-0 transition-opacity duration-300 group-hover/point:opacity-100"
							transform={`translate(${point.x}, ${point.y - 15})`}
						>
							<rect x="-10" y="-8" width="20" height="10" rx="3" fill="#0f172a" />
							<text
								x="0"
								y="0"
								text-anchor="middle"
								font-size="4"
								fill="white"
								font-weight="bold"
								dy="0.3em">{point.val}</text
							>
						</g>
					</g>
				{/each}
			</svg>
		</div>

		<!-- X-Axis Labels -->
		<div class="mt-4 flex justify-between px-2">
			{#each ['Sep', 'Nov', 'Jan', 'Mar'] as label}
				<span class="text-[10px] font-extrabold tracking-widest text-slate-300 uppercase"
					>{label}</span
				>
			{/each}
		</div>
	</div>

	<!-- Footprint & Calendar Grid -->
	<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
		<!-- Global Footprint Map -->
		<div
			class="dashboard-card relative overflow-hidden rounded-3xl border-none bg-brand-dark p-0 text-white shadow-xl shadow-slate-900/30 transition-all duration-1000 lg:col-span-2"
		>
			<div class="absolute inset-0 z-0 opacity-20">
				<!-- Abstract Map Grid -->
				<svg width="100%" height="100%">
					<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
						<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5" />
					</pattern>
					<rect width="100%" height="100%" fill="url(#grid)" />
				</svg>
			</div>

			<div class="relative z-10 flex h-full flex-col p-10">
				<h3 class="mb-4 text-xl font-extrabold text-white">Global Footprint</h3>

				<div class="relative flex-1">
					<!-- Detailed World Map SVG -->
					<svg viewBox="0 0 1000 500" class="h-full w-full drop-shadow-2xl">
						<!-- Detailed World Map Path -->
						<path
							d="m 497.5,236.8 c 1.2,-0.3 2.5,-3.3 2.8,-5 l 8,-30.2 16.5,-16 2.3,-5.7 c 0,0 2.2,-6.2 3.8,-5.5 1.5,0.7 4,3 4,3 l 14.5,-2.2 4.2,-1.3 5.3,-18 -4.8,-8.5 7.8,-6.7 c 0,0 0.8,-12 4.2,-13 3.5,-1 30,-5 30,-5 l 20,4.5 18,17 -3.5,6 -6.5,-2.5 -5.8,7.8 -21.8,7.5 7.8,11 6.5,-0.5 -0.2,5 6.2,2 c 0,0 3.8,-11.8 11.2,-12.2 7.5,-0.5 25.8,-0.2 25.8,-0.2 l 0.5,5.2 c 0,0 -8.8,1.5 -8.2,3 0.5,1.5 8.2,9 8.2,9 l 15,2.2 3,6.2 -3.8,4.2 3,5.5 v 7.8 l -13,0.8 c 0,0 -2.5,10.2 -1,11.2 1.5,1 4.5,-1.2 4.5,-1.2 l 5.2,4.8 11.2,1.8 c 0,0 -3.2,12.5 -0.5,14 2.8,1.5 14,0.5 14,0.5 l 8.8,-4 8.5,1 4,7.8 c 0,0 -5.8,12 -1.2,13 4.5,1 7.2,-5.5 7.2,-5.5 l 6.2,-8.5 7.8,1 3,-3.8 v -7.2 l 7,-5.5 h 5 l 7,-8 -6,-11.2 -15,-6.5 -0.5,-6.8 -10,-8.8 c 0,0 0.2,-8.2 2.8,-7.8 2.5,0.5 13.5,6.5 13.5,8 l 18.5,-0.5 13,-9 11.5,-1.5 19.5,4.5 14.8,-2.8 11.5,12 8.8,-5.8 4,-12.2 -3.5,-3.8 -10.5,-1.5 -5,4 -8,0.2 -2.5,-3.8 2.2,-5.5 14,-1.2 16.5,-8.5 1.2,-7.5 c 0,0 -16,-5.5 -15.5,-8.8 0.5,-3.2 12.8,-10.5 16,-10 3.2,0.5 26.2,0.8 28.5,3.2 2.2,2.5 4.5,9.5 7.5,10.2 3,0.8 13.2,-0.2 11.8,-3 -1.5,-2.8 -11.2,-17.8 -9,-19 2.2,-1.2 12.5,-3 14.8,-1 2.2,2 4.5,9.2 8,9.5 3.5,0.2 13,-0.5 13,-0.5 l 3.2,9.2 c 0,0 -3.8,11.5 2,13.8 5.8,2.2 20.8,9 23,12 2.2,3 -5,7.5 -5,7.5 l 11.2,28 17.5,7.8 2.2,9 c 0,0 -8.2,16.5 -5.8,17.2 2.5,0.8 8.5,-3 10.2,-2 1.8,1 5,14.8 5,14.8 l -3.5,23.5 -5.2,0.8 c 0,0 -9.2,-13.8 -13,-14.2 -3.8,-0.5 -19,-1.2 -19,-1.2 l -4.2,-11.2 -11,0.5 c 0,0 -7,-8.2 -9.5,-10 -2.5,-1.8 -8,4 -8,4 l -2.5,-7.2 -16,8.2 -3.8,9.8 c 0,0 6.5,7.2 4.5,9.5 -2,2.2 -23.5,28.8 -23.5,28.8 l -2,9.2 5.5,1.2 3,-3.5 6.2,0.2 5.5,5.2 -1.2,7.5 c 0,0 6.8,1.2 8.5,3.8 1.8,2.5 3.2,11.8 1.5,13 -1.8,1.2 -11,4 -11,4 l -1,7.8 -5.5,-0.2 -7,-5.5 -7.2,5.5 v 7.8 l -8,4.5 c 0,0 -7.2,-7.2 -8.5,-5.5 -1.2,1.8 2,11 2,11 l 3.5,3.2 -1.8,5.2 -10.2,0.2 -11.5,12 3.8,7.8 -2.5,7.8 c 0,0 -16,11.5 -14.8,14.2 1.2,2.8 13.8,22 13.8,22 l -9.8,2.2 -6.2,9.2 c 0,0 2.2,5.2 0.8,7 -1.5,1.8 -6.2,4.8 -6.2,4.8 l 9,14 11.5,1.5 13,8 2.2,12.5 -0.5,11 -13.5,9.8 -10,3.8 -7.5,-5 -6.2,3 -9.8,-5.5 -1.8,-6.2 3.2,-14.8 c 0,0 -7.8,-6.8 -10.2,-7.5 -2.5,-0.8 -9,-6.2 -9,-6.2 l 2.8,-11.8 c 0,0 -7.8,-10.8 -6,-13.5 1.8,-2.8 7.2,-7.2 7.2,-7.2 l -2.5,-5.8 -7.8,2 -0.8,-7.5 c 0,0 -12.5,-16.8 -12.2,-19.5 0.2,-2.8 5,-8.8 5,-8.8 l -3.8,-3.8 -8.5,-0.8 1.5,-4 -4.8,-8.5 -10,0.5 -12.8,12.2 -4.8,11 l -7.5,1.5 -2,-5.5 -15.8,-4.2 -4.8,-6.5 -0.8,-11.2 -14,1.8 -4.8,7.5 -3.5,-5.5 -6.2,3.8 -3.8,-0.2 -5.5,-8 -12,-0.2 -8.5,8 -11,-1.8 c 0,0 -6,-10 -8,-10.2 -2,-0.2 -8.5,1.5 -8.5,1.5 l -6.8,-6.8 0.2,-7.2 -6,-2.8 c 0,0 -7,-20.5 -7.8,-20.2 -0.8,0.2 -19.5,-0.8 -19.5,-0.8 l -1.2,11 -5.2,5.8 -1.2,10.2 c 0,0 -6.5,5.8 -5.2,7.5 1.2,1.8 12,8.8 12,8.8 l -0.8,9.2 -11,8 1.5,10.5 c 0,0 -5,8.2 -7.5,8.2 -2.5,0 -12.8,4.2 -12.8,4.2 l -4,6 -10.5,1.8 -4,13.2 -9.8,2.8 -12,25.2 -9.5,9 -11.5,0.5 -5,11.2 -8,7.8 -16,-6 -4.8,5 l -13,0.5 4,11.5 -9.8,7.5 c 0,0 -8.5,-2.2 -10.5,-2.8 -2,-0.5 -19.5,-10.2 -19.5,-10.2 l -9.5,-0.8 -11.8,6.8 -1.5,8 -10.2,4.8 -9.5,-0.8 -9,-6.2 -3.8,-14.8 c 0,0 2.5,-14 -1.5,-13.2 -4,0.8 -10.8,5.2 -10.8,5.2 l -11.5,-6 v -13.2 l -5.2,-7.2 -11,-3.2 -4,-4.5 0.5,-5.8 4.2,-4.2 0.8,-13.5 -5,-8.5 -5,-2 -7.2,5.5 -8,-1.2 -5.2,-6.2 -8.2,-2.2 -3.8,2 -3.2,-2.2 -11.5,0.2 -0.2,5 -5.8,0.8 -3.8,-3.8 c 0,0 3.2,-10 -0.5,-10.2 -3.8,-0.2 -18.2,-12 -18.2,-12 l -6.8,4 -10,12.5 -4.8,2.2 -7.8,-9.5 c 0,0 -5.5,5.2 -8,5 -2.5,-0.2 -3.8,-4 -3.8,-4 l -5.2,-2 -5.5,-8.8 0.5,-6 -8.2,-2.2 -3.8,-7.8 -4,-1.8 -4.8,3.2 -3.8,-2.8 1.2,-5.8 -2,-6.5 -7.8,-2.2 -3,-8.5 -12.2,-3.5 -4.5,-6.2 -13.2,0.8 -7.5,-4.5 4.8,-8.5 -3.8,-8.8 -6.2,-4.2 4,-10 6.5,-3 4.2,-10.8 -5.5,-4.2 -3,-14.5 3,-5 0.5,-13 c 0,0 6.2,-7.5 8,-9 1.8,-1.5 -1.2,-6.8 -1.2,-6.8 l -3.8,-7.8 c 0,0 9.8,-9.2 12.2,-10.8 2.5,-1.5 5,-12.2 5,-12.2 l -3,-6.2 5.5,-3.8 0.2,-8.5 l -3.8,-1.2 3.8,-16.2 12.8,-11 2.2,-11 6.8,-9.5 0.5,-7.2 4.2,-5.5 10,-0.8 v -4.2 l 20.8,-0.5 4.8,-4.8 1.5,-10 -4.5,-8.5 7.8,-16.2 -0.5,-10 -5,-3 -2.2,-6.5 -0.5,-0.8 -7,-3 1.2,-6.8 6.5,-5.2 0.2,-5 9.8,-8.2 3.8,-13.2 4,-2 13.8,7.2 c 0,0 0.2,9.2 3.8,11.5 3.5,2.2 7,8 7,8 l 10.2,-4.8 5.5,-0.8 7.5,7 4.2,0.2 12.5,-5 2.8,0.5 4.8,5.2 10.2,4.8 0.5,5.8 4.2,4.8 7,-0.5 5.5,-10 c 0,0 -1.5,-8.2 0.8,-9.5 2.2,-1.2 13,-9.5 13,-9.5 l 8.2,3.5 c 0,0 5.5,-2.2 7,1.5 1.5,3.8 2.5,9.5 2.5,9.5 l 9,2.5 11.2,-1.2 8.5,8 18.2,-1.5 8,7.2 -1.2,4.8 3.8,3.2 26,-5.8 c 0,0 2.2,-4.5 5.2,-3 3,1.5 11.2,2.8 11.2,2.8 l 11.2,-6.2 6.5,1.2 12.5,-4.8 2.2,-3.5 -1.5,-3.5 1.8,-2 12.8,3.5 17.5,-5.2 1.2,-3.8 7.5,-3.5 2,2.8 -3.5,5.8 0.5,2 14.5,11 c 0,0 4.8,2 5,5 0.2,3 7,7.8 8.8,7 1.8,-0.8 10,-8.8 10,-8.8 l -3.2,-2.8 c 0,0 3.2,-5.5 1,-7 -2.2,-1.5 -8.2,-3.8 -8.2,-3.8 l 6.5,-2.5 1.5,-8.8 -4.8,-5.8 5.5,-7 8.2,-2 6.5,7.2 9.5,-1.2 2,2.5 -4.5,4.8 1.8,4.5 10.5,4.2 9.2,2.5 7.2,-2.2 4.2,-6 -1.2,-7 14,3 5.5,-0.5 8,7 5.5,-1 3.5,-5.5 0.5,-5.5 10.2,-0.5 h 5 z M 892.2,374.2 c 0,0 -5.5,5.8 -4.5,8.2 1,2.5 7,14 7,14 v 6 l 10.8,6.8 9.5,0.2 9.8,-5.5 v -5.5 l -8.2,-10 c 0,0 -2.5,-6.5 -4.2,-8 -1.8,-1.5 -13,-9.5 -13,-9.5 l -4,1.8 z m -3.5,-49.5 c -1.8,-1.2 -10.5,-7.2 -10.5,-7.2 l 2.8,-7.5 -2.2,-4.5 2.2,-4.8 10.8,-3 4.5,2.5 -2.2,4.8 h 5 l 5.8,7.8 -2.8,5 4.8,3 0.2,7 -6.8,2.2 z m -51.2,-18.2 c -1.2,0.8 -9,7.2 -9,7.2 l -7.8,-0.2 -2.5,-3.2 0.8,-7 -5.5,-3 c 0,0 3.5,-8 1.8,-8.5 -1.8,-0.5 -14.2,-6.2 -14.2,-6.2 l 4.2,-5.2 11.2,-1.5 5.5,-4.8 7.8,1.2 2.8,4.8 9.5,5 v 6 l -5.2,5.2 2.8,8 v 3.8 z m -66.5,4.5 c 0,0 -4.5,3.8 -5.2,6 -0.8,2.2 -2.5,12.2 -2.5,12.2 l 5.2,6 9.5,-0.2 4.8,-8.8 c 0,0 4.2,-8.5 2.2,-10 -2,-1.5 -11.5,-5.8 -11.5,-5.8 z m -6,-28.5 7.8,2.5 c 0,0 2.2,3.8 4.2,3.5 2,-0.2 7.5,-7 7.5,-7 l -2.8,-5.2 7.2,-13.2 8.5,-5.8 4,-12.5 c 0,0 -7,-2.5 -8.2,0.5 -1.2,3 -9.2,14.2 -9.2,14.2 l -6.8,4.5 -3.8,6 -6.5,6.5 z m 17.5,-90.8 -5.5,1.5 -6.2,6 3,5.2 6.5,-0.8 5.8,-4.2 1.5,-5.2 z"
							fill="#1e293b"
							stroke="#334155"
							stroke-width="1"
						/>

						<!-- Map Points -->
						{#each countryServiceData as branch, i}
							<g
								class="group/pin cursor-pointer"
								transform={`translate(${
									branch.country === 'United Kingdom'
										? 470
										: branch.country === 'Croatia'
											? 520
											: branch.country === 'France'
												? 480
												: branch.country === 'Germany'
													? 500
													: branch.country === 'Spain'
														? 460
														: branch.country === 'United States'
															? 250
															: branch.country === 'China'
																? 750
																: branch.country === 'India'
																	? 640
																	: 500
								}, ${
									branch.country === 'United Kingdom'
										? 140
										: branch.country === 'Croatia'
											? 160
											: branch.country === 'France'
												? 160
												: branch.country === 'Germany'
													? 150
													: branch.country === 'Spain'
														? 170
														: branch.country === 'United States'
															? 180
															: branch.country === 'China'
																? 200
																: branch.country === 'India'
																	? 220
																	: 250
								})`}
							>
								<!-- Ripple Effect -->
								<circle
									r="6"
									fill="#ff6b6b"
									class="animate-ping opacity-75"
									style={`animation-duration: ${2 + i}s`}
								/>

								<!-- Pin Point -->
								<circle
									r="4"
									fill="#ff6b6b"
									class="transition-all duration-300 group-hover/pin:scale-150 group-hover/pin:fill-white"
								/>

								<!-- Interactive Pop-up -->
								<g
									class="pointer-events-none opacity-0 transition-opacity duration-500 group-hover/pin:opacity-100"
									transform="translate(0, -50)"
								>
									<foreignObject x="-100" y="-100" width="200" height="100">
										<div xmlns="http://www.w3.org/1999/xhtml" class="flex flex-col items-center">
											<div class="rounded-2xl bg-white p-4 shadow-xl backdrop-blur-md">
												<div class="mb-2 flex items-center gap-2">
													<div class="h-2.5 w-2.5 rounded-full bg-brand-success"></div>
													<span class="text-xs font-black tracking-wider text-brand-dark uppercase"
														>{branch.country}</span
													>
												</div>
												<div class="flex gap-6">
													<div>
														<p class="text-[10px] font-bold text-slate-400 uppercase">Clients</p>
														<p class="text-sm font-black text-brand-primary">
															{branch.clientCount}
														</p>
													</div>
													<div>
														<p class="text-[10px] font-bold text-slate-400 uppercase">Monitors</p>
														<p class="text-sm font-black text-brand-secondary">
															{branch.activeMonitors}
														</p>
													</div>
												</div>
											</div>
											<!-- Arrow -->
											<div class="-mt-1.5 h-3 w-3 rotate-45 bg-white"></div>
										</div>
									</foreignObject>
								</g>
							</g>
						{/each}
					</svg>
				</div>
			</div>

			<!-- Dynamic Background Glow -->
			<div
				class="absolute -right-32 -bottom-32 h-64 w-64 animate-pulse rounded-full bg-brand-primary opacity-20 blur-[120px]"
			></div>
		</div>

		<!-- Terminal Calendar -->
		<div class="dashboard-card rounded-3xl border-slate-50 bg-white p-8">
			<div class="mb-6 flex items-center justify-between">
				<h3 class="text-xs font-extrabold tracking-widest text-brand-dark uppercase">
					Terminal Calendar
				</h3>
				<span class="text-[10px] font-bold text-slate-400 uppercase">Feb 2026</span>
			</div>
			<div class="grid grid-cols-7 gap-1 text-center">
				{#each ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as day}
					<span class="pb-2 text-[9px] font-extrabold text-slate-300">{day}</span>
				{/each}
				{#each Array(28) as _, i}
					<button
						class={`flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-extrabold transition-all ${i + 1 === 14 ? 'scale-110 bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-slate-600 hover:bg-slate-50'}`}
					>
						{i + 1}
					</button>
				{/each}
			</div>
			<div class="mt-6 flex items-center gap-3 border-t border-slate-50 pt-4">
				<div class="h-1.5 w-1.5 rounded-full bg-brand-primary"></div>
				<p class="text-[9px] font-extrabold tracking-tight text-slate-500 uppercase">
					Audit Cycle Phase 4
				</p>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
		<!-- Operation Feed -->
		<div class="dashboard-card rounded-3xl border-slate-50 bg-white p-10">
			<h3 class="mb-10 text-xl font-extrabold text-brand-dark">Operation Feed</h3>
			<div class="space-y-8">
				{#each stats.reminders.slice(0, 3) as reminder}
					<div
						class="group flex cursor-pointer items-center justify-between border-b border-slate-50 pb-5 last:border-0 last:pb-0"
					>
						<p
							class="text-base font-bold text-slate-700 transition-all duration-500 group-hover:translate-x-1"
						>
							{reminder.title}
						</p>
						<span class="text-[10px] font-extrabold tracking-widest text-slate-300 uppercase"
							>{reminder.time}</span
						>
					</div>
				{/each}
			</div>
			<button
				class="mt-10 w-full border-t border-slate-50 pt-8 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase transition-all hover:text-brand-dark"
			>
				Full Operation Log ⚡️
			</button>
		</div>

		<!-- Terminal Reminders -->
		<div class="dashboard-card rounded-3xl border-slate-50 bg-white p-10">
			<h3 class="mb-10 text-xl font-extrabold text-brand-dark">Terminal Reminders</h3>
			<div class="space-y-6">
				{#each stats.reminders as reminder}
					<div
						class="flex items-center justify-between rounded-xl bg-slate-50/50 p-4 transition-all hover:bg-slate-50"
					>
						<div class="flex items-center gap-4">
							<div
								class={`h-2 w-2 rounded-full ${
									reminder.priority === 'Critical'
										? 'animate-pulse bg-brand-primary'
										: reminder.priority === 'High'
											? 'bg-orange-500'
											: reminder.priority === 'Medium'
												? 'bg-brand-secondary'
												: 'bg-slate-300'
								}`}
							></div>
							<div class="space-y-0.5">
								<p class="text-xs font-extrabold tracking-tight text-brand-dark uppercase">
									{reminder.title}
								</p>
								<p class="text-[9px] font-bold text-slate-400 uppercase">{reminder.time}</p>
							</div>
						</div>
						<span
							class={`rounded px-2 py-1 text-[8px] font-black tracking-tighter uppercase ${
								reminder.priority === 'Critical'
									? 'bg-brand-primary/10 text-brand-primary'
									: reminder.priority === 'High'
										? 'bg-orange-100 text-orange-600'
										: reminder.priority === 'Medium'
											? 'bg-brand-secondary/10 text-brand-secondary'
											: 'bg-slate-100 text-slate-500'
							}`}
						>
							{reminder.priority}
						</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
