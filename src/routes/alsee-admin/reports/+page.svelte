<script lang="ts">
	import { issues } from '$lib/data/mockData';

	const getIssueStatusStyle = (status: string) => {
		switch (status) {
			case 'Active':
				return 'bg-brand-primary text-white border-transparent shadow-sm shadow-brand-primary/20';
			case 'Processing':
				return 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20';
			case 'Solved':
				return 'bg-brand-success/10 text-brand-success border-brand-success/20';
			default:
				return 'bg-slate-100 text-slate-500 border-slate-200';
		}
	};
</script>

<div class="animate-in fade-in space-y-16 pb-20 duration-1000 ease-out">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-extrabold tracking-tight text-brand-dark">Reports Base</h1>
			<p class="mt-1 text-sm font-medium text-slate-500">
				System engagement and terminal diagnostics.
			</p>
		</div>
		<button class="btn-primary rounded-lg px-8 py-3 text-xs shadow-lg shadow-brand-primary/20">
			Generate Global Feed
		</button>
	</div>

	<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
		<!-- Intensity Graph -->
		<div
			class="dashboard-card group flex flex-col rounded-3xl border-none bg-white p-10 shadow-lg shadow-slate-200/40 lg:col-span-2"
		>
			<div class="mb-10 flex items-center justify-between">
				<div>
					<h3 class="text-xl font-extrabold text-brand-dark">Engagement Intensity</h3>
					<p class="mt-0.5 text-sm font-medium text-slate-400">
						Cyclical monitoring per node hour.
					</p>
				</div>
				<div class="flex gap-6">
					<div class="flex items-center gap-2">
						<div class="h-2 w-2 rounded-full bg-brand-primary shadow-sm"></div>
						<span class="text-[10px] font-extrabold tracking-widest text-slate-500 uppercase">Peak</span
						>
					</div>
					<div class="flex items-center gap-2">
						<div class="h-2 w-2 rounded-full bg-brand-dark shadow-sm"></div>
						<span class="text-[10px] font-extrabold tracking-widest text-slate-500 uppercase"
							>System Peak</span
						>
					</div>
				</div>
			</div>
			<div class="flex h-[250px] flex-1 items-end gap-5 px-4 text-center">
				{#each [45, 62, 85, 30, 55, 92, 75, 40, 68, 81, 35, 50] as h, i}
					<div
						class="group/bar relative flex h-full flex-1 flex-col items-center justify-end gap-8"
					>
						<div
							class="absolute -top-12 left-1/2 -translate-x-1/2 text-sm font-extrabold whitespace-nowrap text-brand-primary opacity-0 transition-all duration-300 group-hover/bar:scale-110 group-hover/bar:opacity-100"
						>
							{h}%
						</div>
						<div
							class="relative h-full w-full overflow-hidden rounded-t-[1rem] bg-slate-50 transition-all duration-700"
						>
							<div
								class="absolute inset-x-0 bottom-0 bg-brand-primary transition-all duration-1000 ease-in-out group-hover/bar:brightness-110"
								style="height: {h}%"
							></div>
						</div>
						<span class="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase"
							>{i}:00</span
						>
					</div>
				{/each}
			</div>
		</div>

		<div class="space-y-12">
			<!-- Growth Matrix - Updated to Dynamic Emerald/Mint Gradient -->
			<div
				class="dashboard-card relative overflow-hidden rounded-3xl border-none bg-gradient-to-br from-brand-success/80 via-emerald-500/70 to-teal-500/80 p-10 text-white shadow-xl shadow-emerald-500/20 transition-all duration-1000"
			>
				<div
					class="absolute -top-8 -right-8 h-32 w-32 animate-pulse rounded-full bg-white/20 blur-[50px]"
				></div>
				<h3 class="relative z-10 mb-1 text-xl font-extrabold text-white">Growth Matrix</h3>
				<p
					class="relative z-10 mb-10 text-sm leading-relaxed font-medium text-emerald-50 opacity-90"
				>
					Network expansion forecasting based on high throughput metrics.
				</p>
				<div class="relative z-10 mb-10">
					<div class="mb-4 flex items-center justify-between">
						<span class="text-[10px] font-extrabold tracking-widest text-emerald-100 uppercase"
							>Confidence Score</span
						>
						<span class="text-xl font-extrabold text-white">88%</span>
					</div>
					<div class="h-2 w-full overflow-hidden rounded-full bg-white/20 shadow-inner">
						<div
							class="h-full bg-white shadow-xl transition-all duration-1000 ease-out"
							style="width: 88%"
						></div>
					</div>
				</div>
				<button
					class="relative z-10 w-full rounded-xl bg-white/10 py-4 text-[10px] font-extrabold tracking-widest text-white uppercase shadow-sm transition-all hover:bg-white/20 active:scale-95"
				>
					Push Live Forecast
				</button>
			</div>

			<div
				class="dashboard-card rounded-3xl border-none bg-white p-10 shadow-lg shadow-slate-200/40"
			>
				<h3 class="mb-4 ml-0.5 text-[11px] font-extrabold tracking-widest text-slate-400 uppercase">
					Active Units
				</h3>
				<p class="text-3xl font-extrabold tracking-tight text-brand-dark">1,240</p>
				<p class="mt-4 text-[10px] font-extrabold tracking-widest text-brand-success uppercase">
					↑ 4.2% Regional Peak
				</p>
			</div>
		</div>
	</div>

	<!-- Issues -->
	<section class="space-y-14 pt-10">
		<div class="flex items-center gap-5">
			<div class="h-10 w-1.5 rounded-full bg-brand-primary shadow-lg shadow-brand-primary/20"></div>
			<h2 class="text-3xl font-extrabold tracking-tight text-brand-dark">Active Issues</h2>
		</div>

		<div
			class="dashboard-card overflow-hidden rounded-3xl border-none bg-white p-0 shadow-lg shadow-slate-200/40"
		>
			<table class="w-full table-auto text-left">
				<thead>
					<tr class="bg-slate-50 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
						<th class="px-8 py-5">Diagnostic Case</th>
						<th class="px-8 py-5">Operational Status</th>
						<th class="px-8 py-5">Timestamp</th>
						<th class="px-8 py-5 text-right">Action Log</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-50">
					{#each issues as issue}
						<tr class="group text-brand-dark transition-all duration-300 hover:bg-slate-50/50">
							<td class="px-8 py-6">
								<div class="flex items-center gap-6">
									<div
										class={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${issue.status === 'Active' ? 'scale-110 bg-brand-primary shadow-md shadow-brand-primary/60' : 'bg-slate-300'}`}
									></div>
									<span
										class="text-base font-extrabold tracking-tight text-slate-700 uppercase transition-colors group-hover:text-brand-dark"
										>{issue.title}</span
									>
								</div>
							</td>
							<td class="px-8 py-6">
								<span
									class={`rounded-lg border px-4 py-2 text-[9px] font-extrabold tracking-widest uppercase ${getIssueStatusStyle(issue.status)}`}
								>
									{issue.status}
								</span>
							</td>
							<td
								class="px-8 py-6 font-mono text-[10px] font-bold tracking-tighter text-slate-400 uppercase"
							>
								{issue.date}
							</td>
							<td class="px-8 py-6 text-right">
								<button
									class="rounded-lg border border-slate-100 bg-slate-50 px-5 py-2.5 text-[9px] font-extrabold tracking-widest text-slate-500 uppercase transition-all duration-300 hover:border-brand-dark hover:bg-brand-dark hover:text-white hover:shadow-lg hover:shadow-brand-dark/20"
									>Inspect Trace</button
								>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</div>
