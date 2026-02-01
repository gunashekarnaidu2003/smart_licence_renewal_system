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

	const engagementData = [
		{ month: 'Sep', value: 65, secondary: 35 },
		{ month: 'Oct', value: 78, secondary: 42 },
		{ month: 'Nov', value: 72, secondary: 51 },
		{ month: 'Dec', value: 95, secondary: 68 },
		{ month: 'Jan', value: 88, secondary: 72 },
		{ month: 'Feb', value: 100, secondary: 81 }
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

	<!-- High Contrast Analytics Graph -->
	<div class="dashboard-card rounded-3xl border-none bg-white p-10 shadow-lg shadow-slate-200/40">
		<div class="mb-10 flex items-center justify-between">
			<div>
				<h3 class="text-xl font-extrabold text-brand-dark">Engagement Trend</h3>
				<p class="mt-1 text-sm font-medium text-slate-400">Active sessions monitoring</p>
			</div>
			<div class="flex gap-10">
				<div class="flex items-center gap-3">
					<div class="h-3 w-3 rounded-full bg-brand-primary"></div>
					<span class="text-[10px] font-extrabold tracking-widest text-slate-500 uppercase"
						>Primary Usage</span
					>
				</div>
				<div class="flex items-center gap-3">
					<div class="h-4 w-4 rounded-full bg-brand-secondary"></div>
					<span class="text-[11px] font-extrabold tracking-widest text-slate-500 uppercase"
						>System Load</span
					>
				</div>
			</div>
		</div>

		<div class="flex h-56 items-end gap-8 px-4 lg:gap-12">
			{#each engagementData as data}
				<div class="group flex h-full flex-1 flex-col items-center justify-end gap-8">
					<div class="relative flex h-full w-full items-end justify-center gap-4">
						<div class="relative flex h-full w-full items-end">
							<div
								class="relative z-10 w-full rounded-t-xl bg-brand-secondary/20 transition-all duration-700 group-hover:bg-brand-secondary/30"
								style="height: {data.secondary}%"
							></div>
						</div>

						<div class="relative flex h-full w-full items-end">
							<div
								class="absolute inset-x-0 bottom-0 rounded-t-2xl bg-brand-primary/20 opacity-0 blur-2xl transition-all duration-1000 group-hover:opacity-100"
								style="height: {data.value}%"
							></div>
							<div
								class="relative z-10 w-full cursor-pointer rounded-t-xl bg-brand-primary transition-all duration-1000 group-hover:scale-x-105"
								style="height: {data.value}%"
							>
								<div
									class="absolute -top-12 left-1/2 -translate-x-1/2 text-sm font-extrabold text-brand-primary opacity-0 transition-opacity group-hover:opacity-100"
								>
									{data.value}%
								</div>
							</div>
						</div>
					</div>
					<span class="text-[11px] font-extrabold tracking-[0.2em] text-slate-400 uppercase"
						>{data.month}</span
					>
				</div>
			{/each}
		</div>
	</div>

	<!-- Footprint & Calendar Grid -->
	<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
		<!-- Global Footprint -->
		<div
			class="dashboard-card relative overflow-hidden rounded-3xl border-none bg-gradient-to-br from-brand-dark via-slate-900 to-brand-secondary/50 p-10 text-white shadow-xl shadow-slate-900/30 transition-all duration-1000 lg:col-span-2"
		>
			<h3 class="relative z-10 mb-8 text-xl font-extrabold text-white">Global Footprint</h3>
			<div class="relative z-10 grid grid-cols-4 gap-6">
				{#each countryServiceData.slice(0, 4) as data}
					<div
						class="group/stat border-l border-brand-accent/30 pl-6 transition-all hover:border-brand-accent"
					>
						<p class="mb-1 text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
							{data.country}
						</p>
						<p
							class="text-xl font-extrabold text-white transition-colors duration-500 group-hover/stat:text-brand-accent"
						>
							{data.clientCount}
						</p>
						<p class="mt-0.5 text-[8px] font-bold text-white/30 uppercase">Clients</p>
					</div>
				{/each}
			</div>
			<!-- Dynamic Glow -->
			<div
				class="absolute -right-32 -bottom-32 h-48 w-48 animate-pulse rounded-full bg-brand-accent opacity-10 blur-[100px]"
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
