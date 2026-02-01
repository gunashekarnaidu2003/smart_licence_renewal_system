<script lang="ts">
	import { renewalRisks } from '$lib/data/mockData';

	const getStatusClass = (status: string) => {
		switch (status) {
			case 'WARNING':
				return 'bg-red-50 text-brand-primary border-red-100';
			default:
				return 'bg-indigo-50 text-brand-secondary border-indigo-100';
		}
	};
</script>

<div class="animate-in fade-in space-y-12 pb-20 duration-1000">
	<div class="mx-auto max-w-7xl space-y-12">
		<!-- Title Section -->
		<div class="flex items-end justify-between">
			<div>
				<h1 class="text-3xl font-extrabold tracking-tight text-brand-dark">Renewal Centre</h1>
				<p class="mt-2 text-base font-medium text-slate-400">
					Managing high-risk subscription turnovers.
				</p>
			</div>
			<button class="btn-primary rounded-xl px-8 py-3 text-sm shadow-none">
				Push Global Sync
			</button>
		</div>

		<!-- Top Metrics -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div
				class="dashboard-card group rounded-[1.5rem] border-slate-100 bg-white p-10 shadow-xl shadow-slate-200/20"
			>
				<h4 class="mb-2 text-[11px] font-extrabold tracking-widest text-slate-400 uppercase">
					At Risk Licences
				</h4>
				<p class="text-5xl font-extrabold text-brand-dark">
					{renewalRisks.totalLicencesAtRisk}
				</p>
				<div class="mt-6 flex items-center gap-3 text-brand-minimal">
					<div class="h-2 flex-1 rounded-full bg-slate-50">
						<div class="h-full w-2/3 rounded-full bg-brand-primary"></div>
					</div>
					<span class="text-[10px] font-extrabold uppercase">Critical</span>
				</div>
			</div>

			<div
				class="dashboard-card rounded-[1.5rem] border-slate-100 bg-white p-10 shadow-xl shadow-slate-200/20"
			>
				<h4 class="mb-2 text-[11px] font-extrabold tracking-widest text-slate-400 uppercase">
					Securable Revenue
				</h4>
				<p class="text-5xl font-extrabold text-brand-dark">
					{renewalRisks.estRevenueToSecure}
				</p>
				<p class="mt-6 text-[10px] font-extrabold tracking-widest text-brand-success uppercase">
					Positive Flow
				</p>
			</div>

			<div
				class="dashboard-card rounded-[1.5rem] border-slate-100 bg-white p-10 shadow-xl shadow-slate-200/20"
			>
				<h4 class="mb-2 text-[11px] font-extrabold tracking-widest text-slate-400 uppercase">
					Manual Nodes
				</h4>
				<p class="text-5xl font-extrabold text-brand-dark">
					{renewalRisks.manualInterventions}
				</p>
				<button
					class="mt-6 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase transition-colors"
					>View Queue →</button
				>
			</div>
		</div>

		<!-- Priority Action Queue -->
		<div class="dashboard-card rounded-[1.5rem] border-none bg-slate-50/50 p-12 shadow-none">
			<div class="mb-10 flex items-center gap-4">
				<div class="h-8 w-1.5 rounded-full bg-brand-secondary"></div>
				<h3 class="text-xl font-extrabold text-brand-dark">Priority Action Queue</h3>
			</div>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each renewalRisks.priorityQueue as risk}
					<div
						class="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:shadow-indigo-500/5"
					>
						<div class="flex items-center gap-5">
							<div
								class={`flex h-14 w-14 items-center justify-center rounded-xl border-2 text-2xl ${getStatusClass(risk.status)}`}
							>
								⚠️
							</div>
							<div>
								<p class="text-base font-extrabold text-brand-dark">{risk.title}</p>
								<div class="mt-1 flex items-center gap-3">
									<span class="text-[10px] font-bold text-slate-400 uppercase">{risk.subtitle}</span
									>
									<span class="h-1.5 w-1.5 rounded-full bg-slate-100"></span>
									<span class="text-[10px] font-extrabold text-brand-primary/60 uppercase"
										>{risk.status}</span
									>
								</div>
							</div>
						</div>
						<button
							class="rounded-xl bg-brand-secondary/90 px-6 py-3 text-[10px] font-extrabold tracking-widest text-white uppercase shadow-lg shadow-indigo-500/10 transition-all"
						>
							Action
						</button>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
