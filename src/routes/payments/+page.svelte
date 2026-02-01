<script lang="ts">
	import { paymentStats, renewalRequests } from '$lib/data/mockData';

	const getStatusStyle = (status: string) => {
		switch (status) {
			case 'Paid':
				return 'bg-brand-success/10 text-brand-success border-brand-success/20';
			case 'Pending':
				return 'bg-brand-primary/10 text-brand-primary border-brand-primary/20';
			case 'Upcoming':
				return 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20';
			default:
				return 'bg-slate-100 text-slate-500 border-slate-200';
		}
	};

	let approvals = $state([...renewalRequests]);
</script>

<div class="animate-in fade-in space-y-12 pb-20 duration-1000">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-extrabold tracking-tight text-brand-dark">Payment Analytics</h1>
			<p class="mt-1 text-sm font-medium text-slate-500">
				Financial oversight of system renewals and deployment costs.
			</p>
		</div>
	</div>

	<!-- Financial Overview -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
		<div class="dashboard-card rounded-3xl border-none bg-white p-8 shadow-lg shadow-slate-200/40">
			<p class="mb-4 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
				Total Screens
			</p>
			<p class="text-3xl font-extrabold text-brand-dark">{paymentStats.totalScreens}</p>
			<div class="mt-4 flex items-center gap-2">
				<div class="h-1 w-full overflow-hidden rounded-full bg-slate-50">
					<div class="h-full w-3/4 bg-brand-primary"></div>
				</div>
			</div>
		</div>
		<div class="dashboard-card rounded-3xl border-none bg-white p-8 shadow-lg shadow-slate-200/40">
			<p class="mb-4 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
				Renewal Paid
			</p>
			<p class="text-3xl font-extrabold text-brand-success">{paymentStats.amountPaid}</p>
			<p class="mt-2 text-[10px] font-bold text-slate-400 uppercase">FY 2026 To Date</p>
		</div>
		<div class="dashboard-card rounded-3xl border-none bg-white p-8 shadow-lg shadow-slate-200/40">
			<p class="mb-4 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
				Balance Amount
			</p>
			<p class="text-3xl font-extrabold text-slate-700">{paymentStats.balanceAmount}</p>
			<p class="mt-2 text-[10px] font-bold text-slate-400 uppercase">Credit Facility</p>
		</div>
		<div
			class="dashboard-card rounded-3xl border-none bg-brand-primary p-8 shadow-xl shadow-brand-primary/20"
		>
			<p class="mb-4 text-[10px] font-extrabold tracking-widest text-white/60 uppercase">
				Upcoming Pending
			</p>
			<p class="text-3xl font-extrabold text-white">{paymentStats.upcomingRenewal}</p>
			<p class="mt-2 animate-pulse text-[10px] font-bold tracking-tighter text-white/80 uppercase">
				Action Required
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
		<!-- New Section: Pending Approvals Queue -->
		<div class="space-y-6 lg:col-span-1">
			<h3 class="px-4 text-lg font-extrabold text-brand-dark">Approval Queue</h3>
			{#each approvals as req}
				<div
					class="dashboard-card relative overflow-hidden rounded-[2rem] border-none bg-brand-dark p-8 text-white shadow-xl shadow-brand-dark/20"
				>
					<div
						class="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/5 blur-2xl"
					></div>
					<div class="relative z-10">
						<div class="mb-4 flex items-center justify-between">
							<span class="rounded-full bg-brand-primary px-3 py-1 text-[9px] font-black"
								>ACTION REQ</span
							>
							<span class="text-[10px] font-bold text-white/40 uppercase">{req.requestedAt}</span>
						</div>
						<p class="mb-2 text-lg font-black">{req.branchName}</p>
						<p class="mb-6 text-xs font-medium text-white/60 italic">"{req.reason}"</p>
						<button
							onclick={() => (approvals = approvals.filter((a) => a.id !== req.id))}
							class="w-full rounded-xl bg-white py-4 text-[10px] font-black tracking-widest text-brand-dark uppercase transition-all hover:bg-brand-primary hover:text-white"
						>
							Process Renewal
						</button>
					</div>
				</div>
			{/each}
			{#if approvals.length === 0}
				<div class="rounded-[2rem] border-2 border-dashed border-slate-100 p-10 text-center">
					<p class="text-[10px] font-black tracking-widest text-slate-300 uppercase">
						No Pending Approvals
					</p>
				</div>
			{/if}
		</div>

		<!-- Transaction Table -->
		<div
			class="dashboard-card overflow-hidden rounded-[2.5rem] border-none bg-white shadow-xl shadow-slate-200/40 lg:col-span-2"
		>
			<div class="flex items-center justify-between border-b border-slate-50 bg-slate-50/30 p-8">
				<h3 class="text-lg font-extrabold text-brand-dark">Renewal Ledger</h3>
				<button
					class="rounded-xl bg-brand-dark px-6 py-2 text-[10px] font-extrabold tracking-widest text-white uppercase transition-all hover:bg-brand-primary"
					>Export Report</button
				>
			</div>
			<table class="w-full table-auto border-collapse text-left">
				<thead>
					<tr
						class="bg-slate-50/50 text-[9px] font-extrabold tracking-widest text-slate-400 uppercase"
					>
						<th class="px-8 py-5">Branch / Unit</th>
						<th class="px-8 py-5">Amount</th>
						<th class="px-8 py-5">Due Date</th>
						<th class="px-8 py-5">Status</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-50">
					{#each paymentStats.transactions as tx}
						<tr class="group transition-all hover:bg-slate-50/30">
							<td class="px-8 py-6">
								<p class="text-sm font-extrabold text-brand-dark">{tx.branch}</p>
								<p class="text-[10px] font-bold tracking-tighter text-slate-400 uppercase">
									ID: TX-{tx.id}4492
								</p>
							</td>
							<td class="px-8 py-6">
								<p class="text-base font-extrabold text-brand-dark">{tx.amount}</p>
							</td>
							<td class="px-8 py-6">
								<p class="font-mono text-xs font-bold text-slate-600">{tx.date}</p>
							</td>
							<td class="px-8 py-6">
								<span
									class={`rounded-full border px-4 py-1.5 text-[9px] font-extrabold uppercase ${getStatusStyle(tx.status)}`}
								>
									{tx.status}
								</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
