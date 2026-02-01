<script lang="ts">
	import { stats } from '$lib/data/mockData';
</script>

<div class="animate-in fade-in space-y-12 pb-20 duration-1000 ease-out">
	<!-- Refined Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-extrabold tracking-tight text-brand-dark">Cash Liquidity</h1>
			<p class="mt-1 text-sm font-medium text-slate-500">
				Financial health monitoring and invoicing cycles.
			</p>
		</div>

		<div class="flex gap-3">
			<button
				class="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-[9px] font-extrabold tracking-widest text-slate-500 uppercase shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
			>
				Billing Cycle
			</button>
			<button class="btn-primary rounded-lg px-6 py-2.5 text-xs shadow-lg shadow-brand-primary/10">
				Export Ledger 📑
			</button>
		</div>
	</div>

	<!-- Refined Revenue Cards -->
	<div class="grid grid-cols-1 gap-10 md:grid-cols-3">
		<div
			class="dashboard-card group relative overflow-hidden rounded-3xl border-slate-100 bg-brand-success/5 p-8 text-brand-dark shadow-sm transition-all duration-700"
		>
			<div
				class="absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-brand-success/10 blur-[50px] transition-all duration-700 group-hover:bg-brand-success/20"
			></div>
			<div class="relative z-10">
				<h4 class="mb-2 text-[10px] font-extrabold tracking-[0.2em] text-brand-success uppercase">
					Total Net revenue
				</h4>
				<p class="text-3xl font-extrabold tracking-tighter text-brand-dark">£428,900</p>
				<div class="mt-6 flex items-center gap-3">
					<span
						class="rounded-lg bg-brand-success px-4 py-1.5 text-[9px] font-extrabold text-white shadow-lg shadow-brand-success/20"
						>+24% Growth</span
					>
				</div>
			</div>
		</div>

		<div
			class="dashboard-card group relative overflow-hidden rounded-3xl border-slate-100 bg-brand-secondary/5 p-8 text-brand-dark shadow-sm transition-all duration-700"
		>
			<div
				class="absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-brand-secondary/10 blur-[50px]"
			></div>
			<h4
				class="relative z-10 mb-2 text-[10px] font-extrabold tracking-[0.2em] text-brand-secondary uppercase"
			>
				Total Collected
			</h4>
			<p class="relative z-10 text-3xl font-extrabold tracking-tighter text-brand-dark">£390,450</p>
			<div class="relative z-10 mt-6 flex items-center gap-2">
				<span
					class="rounded-lg bg-brand-secondary px-4 py-1.5 text-[9px] font-extrabold text-white shadow-lg shadow-brand-secondary/20"
					>Rate 91%</span
				>
			</div>
		</div>

		<div
			class="dashboard-card group rounded-3xl border-none bg-white p-8 shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1"
		>
			<h4 class="mb-2 text-[10px] font-extrabold tracking-widest text-brand-primary uppercase">
				Outstanding
			</h4>
			<p class="text-3xl font-extrabold tracking-tighter text-brand-dark">£38,450</p>
			<div class="mt-6 flex items-center gap-2">
				<span
					class="rounded-lg bg-brand-primary px-5 py-1.5 text-[9px] font-extrabold text-white shadow-lg shadow-brand-primary/20"
					>12 Actions Required</span
				>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
		<!-- Refined Invoices -->
		<div class="dashboard-card rounded-3xl border-none bg-white p-8 shadow-lg shadow-slate-200/40">
			<div class="mb-8 flex items-center justify-between">
				<div class="flex items-center gap-4">
					<div
						class="h-8 w-1 rounded-full bg-brand-secondary shadow-md shadow-brand-secondary/20"
					></div>
					<h3 class="text-xl font-extrabold tracking-tight text-brand-dark">Live Invoices</h3>
				</div>
				<button
					class="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase transition-colors hover:text-brand-dark"
					>Audit Log →</button
				>
			</div>
			<div class="space-y-4">
				{#each [1, 2, 3, 4] as i}
					<div
						class="group flex items-center justify-between rounded-2xl border border-slate-50 bg-slate-50/50 p-5 transition-all duration-500 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-slate-200/30"
					>
						<div class="flex items-center gap-4">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg text-brand-secondary shadow-sm transition-all duration-700 group-hover:scale-105"
							>
								📄
							</div>
							<div>
								<p class="text-base font-extrabold text-brand-dark">
									INV-ALP-00{i}
								</p>
								<p class="mt-0.5 text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
									Node {i}
								</p>
							</div>
						</div>
						<div class="text-right">
							<p
								class="text-lg font-extrabold text-brand-dark transition-colors group-hover:text-brand-success"
							>
								£4,500
							</p>
							<span
								class="mt-0.5 inline-block text-[9px] font-extrabold tracking-widest text-brand-success uppercase"
								>Success</span
							>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div
			class="dashboard-card flex flex-col items-center justify-center rounded-3xl border-none bg-brand-dark/70 p-8 text-center text-white shadow-xl transition-all duration-1000"
		>
			<div class="mb-10">
				<h3 class="text-xl font-extrabold tracking-tight text-white">Renewal Streams</h3>
				<p class="mt-1 text-sm font-medium text-slate-400 opacity-80">
					Fiscal quarter cycle analysis.
				</p>
			</div>
			<div class="flex h-56 w-full max-w-sm items-end gap-6 text-center">
				{#each [40, 80, 60, 30] as h, i}
					{@const label = ['Dmd', 'Plt', 'Gld', 'Oth'][i]}
					<div
						class="group/bar relative flex h-full flex-1 flex-col items-center justify-end gap-4"
					>
						<div
							class="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-extrabold text-brand-primary opacity-0 transition-all duration-500 group-hover/bar:opacity-100"
						>
							{h}%
						</div>
						<div
							class={`w-full rounded-t-xl bg-white/10 transition-all duration-700 ease-out group-hover/bar:bg-brand-primary group-hover/bar:shadow-lg group-hover/bar:shadow-brand-primary/20`}
							style="height: {h}%"
						></div>
						<span
							class="text-[9px] font-extrabold tracking-widest text-slate-500 uppercase transition-colors group-hover/bar:text-white"
							>{label}</span
						>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
