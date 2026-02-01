<script lang="ts">
	import { clients, renewalRequests } from '$lib/data/mockData';

	let activeRequests = $state([...renewalRequests]);
	let handlingRequestId = $state<number | null>(null);

	// Flatten all branches from all parents, filtering only for Sainsburry (Current Context)
	const allBranches = clients
		.filter((parent) => parent.name.toLowerCase().includes('sainsburry'))
		.flatMap((parent) =>
			parent.branches.map((branch) => ({
				...branch,
				parentName: parent.name,
				loyaltyTier: parent.loyaltyTier
			}))
		);

	// Sort by expiry date (nearer first)
	const sortedBranches = allBranches.sort((a, b) => {
		return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
	});

	// Renewal Risks (High priority)
	let highRiskBranches = sortedBranches.filter((b) => {
		const daysLeft =
			(new Date(b.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
		return daysLeft < 30;
	});

	// FORCE ADD INSTANCE IF EMPTY (For visual verification)
	if (highRiskBranches.length === 0) {
		highRiskBranches.push({
			id: 999,
			name: 'Sainsburry - London West (Mock)',
			status: 'Renewal Pending',
			location: 'London',
			licence: 'AL-MOCK-999',
			expiryDate: 'Feb 10, 2026',
			monitorsCount: 15,
			lastPaymentDate: 'Feb 10, 2025',
			paymentStatus: 'Renewal Pending',
			primaryAdmin: { name: 'Admin', email: 'admin@sainsburry.co.uk' },
			parentName: 'Sainsburry',
			loyaltyTier: 'Diamond'
		});
	}

	// Stats for representation
	const totalMonitors = allBranches.reduce((acc, branch) => acc + branch.monitorsCount, 0);
	const renewalCount = allBranches.filter((b) => b.status === 'Renewal Pending').length;

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'Paid':
				return 'bg-brand-success/10 text-brand-success border-brand-success/20';
			case 'Renewal Pending':
				return 'bg-brand-primary/10 text-brand-primary border-brand-primary/20';
			default:
				return 'bg-slate-100 text-slate-500 border-slate-200';
		}
	};

	function handleAction(requestId: number, action: 'Approve' | 'Dismiss') {
		if (action === 'Approve') {
			alert('Renewal payment triggered successfully for branch.');
		}
		activeRequests = activeRequests.filter((r) => r.id !== requestId);
	}

	// Logic for offer
	function getOfferEligibility(expiryDateStr: string) {
		const expiry = new Date(expiryDateStr);
		const today = new Date();
		const diffTime = expiry.getTime() - today.getTime();
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		// renewed 60 to 30 days prior
		if (diffDays >= 30 && diffDays <= 60) {
			return {
				eligible: true,
				text: '10% OFF + 1 Month Ext.',
				subtext: '*T&C Apply: Early Renewal'
			};
		}
		return null;
	}
</script>

<div class="animate-in fade-in slide-in-from-bottom-4 space-y-12 pb-20 duration-1000 ease-out">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-extrabold tracking-tight text-brand-dark">Executive Oversight</h1>
			<p class="mt-1 text-sm font-medium text-slate-500">
				Centralized control for regional branch deployments and billing.
			</p>
		</div>
		<div class="flex gap-4">
			<a
				href="/branch-view"
				class="rounded-xl bg-brand-dark px-8 py-3 text-xs font-black tracking-widest text-white uppercase shadow-lg shadow-brand-dark/20 transition-all hover:bg-brand-primary"
			>
				Switch to Branch Admin
			</a>
		</div>
	</div>

	<!-- Special Offer Banner -->
	<div
		class="dashboard-card relative overflow-hidden rounded-[2rem] border-none bg-gradient-to-r from-brand-primary to-orange-500 p-8 text-white shadow-xl shadow-brand-primary/20"
	>
		<div class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
		<div class="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
			<div class="flex items-center gap-6">
				<div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl">
					🎁
				</div>
				<div>
					<h2 class="text-xl font-black tracking-tight uppercase">Early Renewal Reward</h2>
					<p class="text-sm font-medium text-white/80">
						Renew between 30-60 days before expiry to claim <span class="font-black text-white"
							>10% DISCOUNT</span
						>
						and a <span class="font-black text-white">1 MONTH FREE EXTENSION</span>.
					</p>
				</div>
			</div>
			<div class="text-right">
				<a
					href="/terms"
					class="decoration-offset-4 text-[10px] font-black tracking-[0.2em] text-white/60 uppercase underline decoration-white/30 transition-colors hover:text-white"
					>Terms & Conditions Apply</a
				>
			</div>
		</div>
	</div>

	<!-- High Priority Section: Renewal Risks & Requests -->
	<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
		<!-- Renewal Risks -->
		<div class="dashboard-card rounded-[2.5rem] border-none bg-brand-primary/5 p-10">
			<div class="mb-8 flex items-center justify-between">
				<div>
					<h3 class="text-xl font-black tracking-tighter text-brand-primary uppercase">
						Renewal Risks
					</h3>
					<p class="mt-1 text-xs font-bold tracking-widest text-slate-400 uppercase">
						Immediate Attention Required
					</p>
				</div>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary text-2xl text-white shadow-lg shadow-brand-primary/20"
				>
					⚠️
				</div>
			</div>

			<div class="space-y-4">
				{#each highRiskBranches.slice(0, 3) as branch}
					<div
						class="group flex items-center justify-between rounded-3xl border border-brand-primary/10 bg-white/50 p-6 backdrop-blur-sm transition-all hover:bg-white"
					>
						<div>
							<p class="text-sm font-black text-brand-dark">{branch.name}</p>
							<p class="mt-1 text-[10px] font-bold tracking-tighter text-slate-400 uppercase">
								Org: {branch.parentName} • {branch.monitorsCount} Units
							</p>
						</div>
						<div class="text-right">
							<p class="text-xs font-black text-brand-primary">{branch.expiryDate}</p>
							<p class="text-[9px] font-bold tracking-widest text-slate-400 uppercase">CRITICAL</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Incoming Requests -->
		<div
			class="dashboard-card relative overflow-hidden rounded-[2.5rem] border-none bg-brand-dark p-10 text-white shadow-2xl shadow-brand-dark/30"
		>
			<div class="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>

			<div class="relative z-10">
				<div class="mb-8 flex items-center justify-between">
					<div>
						<h3 class="text-xl font-black tracking-tighter uppercase">Regional Requests</h3>
						<p class="mt-1 text-xs font-bold tracking-widest text-white/40 uppercase">
							Approval Queue
						</p>
					</div>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl text-white"
					>
						📩
					</div>
				</div>

				<div class="space-y-6">
					{#if activeRequests.length === 0}
						<div class="py-10 text-center">
							<p class="text-xs font-bold tracking-[0.2em] text-white/30 uppercase">Queue Empty</p>
						</div>
					{/if}

					{#each activeRequests as request}
						<div
							class="group rounded-[2rem] border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10"
						>
							<div class="mb-4 flex items-start justify-between">
								<div>
									<p class="text-base font-black">{request.branchName}</p>
									<p class="mt-1 text-[10px] font-bold tracking-tighter text-white/40 uppercase">
										Requested at {request.requestedAt}
									</p>
								</div>
								<div class="flex flex-col items-end gap-2">
									<span
										class="rounded-full bg-brand-primary px-3 py-1 text-[9px] font-black text-white shadow-lg shadow-brand-primary/20"
										>URGENT</span
									>
									<span
										class="text-[9px] leading-none font-bold tracking-widest text-white/30 uppercase"
										>High Priority</span
									>
								</div>
							</div>
							<p class="mb-6 text-xs leading-relaxed font-medium text-white/60 italic">
								"{request.reason}"
							</p>

							<div class="grid grid-cols-2 gap-4">
								<button
									onclick={() => handleAction(request.id, 'Dismiss')}
									class="rounded-[1.25rem] bg-white/5 px-6 py-5 text-[10px] font-black tracking-widest uppercase transition-all hover:bg-white/20 active:scale-95"
								>
									Dismiss
								</button>
								<button
									onclick={() => handleAction(request.id, 'Approve')}
									class="rounded-[1.25rem] bg-brand-primary px-6 py-5 text-[10px] font-black tracking-widest uppercase shadow-xl shadow-brand-primary/20 transition-all hover:brightness-110 active:scale-95"
								>
									Trigger Payment
								</button>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Main Stats Representation -->
	<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
		<div
			class="dashboard-card rounded-[2.5rem] border-none bg-white p-10 shadow-xl shadow-slate-200/40 lg:col-span-2"
		>
			<div class="mb-10 flex items-center justify-between">
				<h3 class="text-lg font-extrabold text-brand-dark">Fleet Distribution</h3>
				<span class="text-[10px] font-bold tracking-widest text-slate-400 uppercase"
					>Regional Breakdown</span
				>
			</div>

			<div class="space-y-8">
				{#each sortedBranches.slice(0, 5) as branch}
					<div class="group">
						<div class="mb-2 flex items-center justify-between">
							<span class="text-xs font-bold tracking-tight text-slate-600 uppercase"
								>{branch.name}</span
							>
							<span class="text-xs font-black text-brand-dark">{branch.monitorsCount} Units</span>
						</div>
						<div class="h-3 w-full overflow-hidden rounded-full bg-slate-50">
							<div
								class="h-full rounded-full bg-brand-primary transition-all duration-1000 group-hover:brightness-110"
								style="width: {(branch.monitorsCount / 100) * 100}%"
							></div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="space-y-8">
			<div
				class="dashboard-card rounded-3xl border-none bg-brand-dark p-8 text-white shadow-xl shadow-brand-dark/20"
			>
				<p class="mb-2 text-[10px] font-extrabold tracking-widest text-white/60 uppercase">
					Network Yield
				</p>
				<p class="mb-1 text-4xl font-extrabold">94.2%</p>
				<p class="text-[10px] font-bold text-white/80 uppercase">Uptime Performance</p>
			</div>
			<div
				class="dashboard-card rounded-3xl border-none bg-white p-8 shadow-lg shadow-slate-200/40"
			>
				<p class="mb-2 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
					System Health
				</p>
				<div class="flex items-center gap-4">
					<p class="mb-1 text-4xl font-extrabold text-brand-success">A+</p>
					<div class="h-10 w-1 rounded-full bg-slate-100"></div>
					<p class="text-[9px] leading-relaxed font-bold text-slate-400 uppercase">
						No critical system failures recorded in the last 24h.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div
		class="dashboard-card overflow-x-auto rounded-[2.5rem] border-none bg-white shadow-xl shadow-slate-200/40"
	>
		<div class="flex items-center justify-between border-b border-slate-50 bg-white p-8">
			<h3 class="text-lg font-extrabold text-brand-dark">Full Deployment Ledger</h3>
			<div class="flex gap-2">
				<button
					class="rounded-xl bg-slate-50 px-6 py-2 text-[10px] font-extrabold tracking-widest text-slate-500 uppercase transition-all hover:bg-slate-100"
					>Bulk Renewal</button
				>
			</div>
		</div>
		<table class="w-full min-w-[1000px] table-auto border-collapse text-left">
			<thead>
				<tr
					class="bg-slate-50/50 text-[9px] font-extrabold tracking-widest text-slate-400 uppercase"
				>
					<th class="px-8 py-5">Branch Identity</th>
					<th class="px-8 py-5">Monitor Count</th>
					<th class="px-8 py-5">Renewal Date</th>
					<th class="px-8 py-5">Special Offer</th>
					<th class="px-8 py-5">Status</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-slate-50">
				{#each sortedBranches as branch}
					<tr class="group transition-all hover:bg-slate-50/30">
						<td class="px-8 py-6">
							<div class="flex items-center gap-3">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-brand-dark/0 font-extrabold text-brand-dark shadow-sm transition-all group-hover:bg-brand-primary group-hover:text-white"
								>
									{branch.name.charAt(0)}
								</div>
								<div>
									<p class="text-sm font-extrabold text-brand-dark">{branch.name}</p>
									<p class="text-[10px] font-bold tracking-tighter text-slate-400 uppercase">
										{branch.location}
									</p>
								</div>
							</div>
						</td>
						<td class="px-8 py-6">
							<div class="flex items-center gap-2">
								<span class="text-base font-extrabold text-brand-dark">{branch.monitorsCount}</span>
								<span class="text-[10px] font-bold text-slate-400 uppercase">Screens</span>
							</div>
						</td>
						<td class="px-8 py-6">
							<p class="font-mono text-xs font-black text-slate-600">{branch.expiryDate}</p>
						</td>
						<td class="px-8 py-6">
							{#if getOfferEligibility(branch.expiryDate)}
								<div class="space-y-1">
									<span
										class="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-[10px] font-black tracking-tight text-emerald-600 uppercase"
									>
										{getOfferEligibility(branch.expiryDate)?.text}
									</span>
									<p class="text-[8px] font-bold text-slate-400 italic">
										{getOfferEligibility(branch.expiryDate)?.subtext}
									</p>
								</div>
							{:else}
								<span class="text-[10px] font-bold tracking-widest text-slate-300 uppercase"
									>No Offer</span
								>
							{/if}
						</td>
						<td class="px-8 py-6">
							<div class="flex items-center justify-between">
								<span
									class={`inline-block rounded-full border px-5 py-2 text-[9px] font-extrabold whitespace-nowrap uppercase ${getStatusColor(branch.status)}`}
								>
									{branch.status}
								</span>
								<button
									class="rounded-lg bg-brand-dark px-4 py-1.5 text-[9px] font-black text-white uppercase opacity-0 transition-opacity group-hover:opacity-100"
									>Deep Audit</button
								>
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
