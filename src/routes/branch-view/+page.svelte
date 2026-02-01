<script lang="ts">
	let requestSent = $state(false);

	const branchDetails = {
		name: 'Sainsbury - Manchester North',
		expiryDate: 'Feb 15, 2026',
		status: 'Action Required',
		monitorsCount: 42,
		parentOrg: 'Sainsbury & Co',
		supportID: `AL-${Math.floor(1000 + Math.random() * 9000)}-MN`
	};

	const consequences = [
		{
			icon: '🔒',
			title: 'System Access Lockout',
			desc: 'Administrative portal will be restricted to read-only mode.'
		},
		{
			icon: '🌑',
			title: 'Monitor Black-out',
			desc: 'All 42 active displays will cease broadcasting after the grace period.'
		},
		{
			icon: '⚠️',
			title: 'Data Retention Risk',
			desc: 'Historical analytics may be archived and require retrieval fees.'
		}
	];
</script>

<div class="animate-in fade-in space-y-12 pb-20 duration-1000">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-extrabold tracking-tight text-brand-dark">Branch Terminal</h1>
			<p class="mt-1 text-sm font-medium text-slate-500">
				Managing local deployment for {branchDetails.name}.
			</p>
		</div>
		<a
			href="/"
			class="rounded-xl bg-slate-100 px-6 py-3 text-xs font-bold text-slate-500 transition-all hover:bg-brand-dark hover:text-white"
		>
			← Back to Parent Dashboard
		</a>
	</div>

	<!-- Main Grid -->
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
		<!-- Expiry Alert Card -->
		<div
			class="dashboard-card relative overflow-hidden rounded-[2.5rem] border-none bg-white p-12 shadow-2xl shadow-slate-200/50 lg:col-span-2"
		>
			<div
				class="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-brand-primary/5 blur-3xl"
			></div>

			<div class="relative z-10 flex flex-col items-start justify-between gap-10 md:flex-row">
				<div class="space-y-6">
					<div>
						<span
							class="mb-4 inline-block animate-pulse rounded-full bg-brand-primary/10 px-4 py-1.5 text-[10px] font-black tracking-widest text-brand-primary uppercase"
						>
							Status: {branchDetails.status}
						</span>
						<h2 class="text-4xl font-black tracking-tighter text-brand-dark">
							Your Licence Expires in 14 Days
						</h2>
						<p class="mt-2 text-xl font-bold text-slate-400">
							Final Date: <span class="font-black text-brand-dark">{branchDetails.expiryDate}</span>
						</p>
					</div>

					<div class="flex items-center gap-6 py-4">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-3xl"
						>
							🖥️
						</div>
						<div>
							<p class="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
								Active Fleet
							</p>
							<p class="text-2xl font-black text-brand-dark">
								{branchDetails.monitorsCount} Monitors
							</p>
						</div>
					</div>
				</div>

				<div class="shrink-0 space-y-4">
					<div class="rounded-3xl border border-slate-100 bg-slate-50 p-8">
						<p
							class="mb-6 max-w-xs text-xs leading-loose font-bold tracking-widest text-slate-500 uppercase"
						>
							Renewals are managed centrally by <span class="font-black text-brand-primary"
								>{branchDetails.parentOrg}</span
							> administration.
						</p>

						{#if !requestSent}
							<button
								onclick={() => (requestSent = true)}
								class="w-full rounded-2xl bg-brand-primary px-8 py-5 text-xs font-black tracking-widest text-white uppercase shadow-xl shadow-brand-primary/20 transition-all hover:scale-[1.02] active:scale-95"
							>
								Request Renewal Approval
							</button>
						{:else}
							<div
								class="w-full rounded-2xl border border-emerald-100 bg-emerald-50 px-8 py-5 text-center text-xs font-black tracking-widest text-emerald-600 uppercase"
							>
								Request Sent to Parent Admin
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>

		<!-- Consequences Section -->
		<div class="space-y-6">
			<h3 class="px-4 text-lg font-extrabold text-brand-dark uppercase tracking-tight">Impact Analysis</h3>
			{#each consequences as item}
				<div
					class="dashboard-card group rounded-[2rem] border-none bg-white p-6 shadow-lg shadow-slate-200/40 transition-all duration-500 hover:bg-brand-dark"
				>
					<div class="flex gap-4">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-2xl transition-all duration-500 group-hover:rotate-6 group-hover:bg-white/10"
						>
							{item.icon}
						</div>
						<div class="space-y-1">
							<p
								class="text-sm font-black text-brand-dark transition-colors group-hover:text-white"
							>
								{item.title}
							</p>
							<p
								class="text-[11px] font-medium text-slate-500 transition-colors group-hover:text-white/60"
							>
								{item.desc}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Support Terminal Section -->
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">


		<!-- Regional Info -->
		<div class="dashboard-card rounded-[2.5rem] border-none bg-white p-12 shadow-xl shadow-slate-200/40">
			<h3 class="mb-6 text-xl font-black text-brand-dark uppercase tracking-tighter">Operational Guidelines</h3>
			<div class="space-y-6">
				<div class="flex items-start gap-5">
					<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-black">01</div>
					<p class="text-sm font-medium leading-relaxed text-slate-500">Ensure all <span class="font-bold text-brand-dark">Sainsbury</span> branding assets are locally cached before next sync cycle.</p>
				</div>
				<div class="flex items-start gap-5">
					<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-black">02</div>
					<p class="text-sm font-medium leading-relaxed text-slate-500">Report hardware anomalies via the terminal ticket system using ID <span class="font-mono font-bold text-brand-primary">{branchDetails.supportID}</span>.</p>
				</div>
				<div class="flex items-start gap-5">
					<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-black">03</div>
					<p class="text-sm font-medium leading-relaxed text-slate-500">Regional managers must authorize billing requests at least <span class="font-bold text-brand-dark">30 days</span> prior to expiration.</p>
				</div>
			</div>
		</div>
	</div>
</div>
