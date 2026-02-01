<script lang="ts">
	import { page } from '$app/state';
	
	const isBranchView = $derived(page.url?.pathname?.includes('branch-view') ?? false);
</script>

<div class="animate-in fade-in slide-in-from-bottom-4 space-y-12 pb-20 duration-1000 ease-out">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-extrabold tracking-tight text-brand-dark">
				{isBranchView ? 'Branch Support Terminal' : 'Executive Support Terminal'}
			</h1>
			<p class="mt-1 text-sm font-medium text-slate-500">
				{isBranchView ? 'Local troubleshooting and regional assistance.' : 'Direct access to the ALSEE technical root team.'}
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
		<!-- Support Card -->
		<div
			class="dashboard-card relative overflow-hidden rounded-[2.5rem] border-none bg-white p-12 shadow-2xl shadow-slate-200/50"
		>
			<!-- Decoration -->
			<div
				class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-primary/5 blur-3xl"
			></div>

			<div class="relative z-10 space-y-10">
				<div>
					<h2 class="mb-4 text-2xl font-extrabold text-brand-dark">
						{isBranchView ? 'Branch Assistance' : 'Need Support?'}
					</h2>
					<p class="text-base leading-relaxed font-medium text-slate-500">
						{isBranchView 
							? 'Our regional support specialists are available to help with local monitor synchronization and branch-level billing inquiries.'
							: 'Our technical root team is available 24/7 to assist ALSEE Technology administrators with critical system deployments and billing inquiries.'
						}
					</p>
				</div>

				<div class="flex items-center gap-8 border-y border-slate-50 py-10">
					<div
						class="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-primary text-4xl text-white shadow-xl shadow-brand-primary/20"
					>
						📞
					</div>
					<div>
						<p class="mb-1 text-[10px] font-extrabold tracking-[0.2em] text-slate-400 uppercase">
							{isBranchView ? 'Regional Helpline' : 'Priority Phone'}
						</p>
						<p
							class="cursor-pointer text-3xl font-black tracking-tighter text-brand-dark transition-all hover:text-brand-primary"
						>
							{isBranchView ? '+44 (0) 20 7946 0123' : '+1 (800) ALSEE-TECH'}
						</p>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center gap-3">
						<div class="h-3 w-3 animate-pulse rounded-full bg-brand-success"></div>
						<span class="text-xs font-extrabold tracking-widest text-brand-success uppercase"
							>Immediate Response Active</span
						>
					</div>
					<button
						class="rounded-[1.25rem] bg-brand-dark px-8 py-4 text-xs font-extrabold tracking-widest text-white uppercase shadow-lg shadow-brand-dark/10 transition-all hover:bg-brand-primary active:scale-95"
					>
						{isBranchView ? 'Submit Branch Ticket' : 'Open Root Ticket'}
					</button>
				</div>
			</div>
		</div>

		<!-- Status / Global Info -->
		<div class="space-y-8">
			<div
				class="dashboard-card rounded-3xl border-none bg-brand-dark p-8 text-white shadow-xl shadow-brand-dark/20"
			>
				<h3 class="mb-6 text-lg font-extrabold uppercase tracking-tight">System Infrastructure Status</h3>
				<div class="space-y-6">
					<div class="flex items-center justify-between">
						<span class="text-xs font-bold text-white/60">Local Sync Engine</span>
						<span
							class="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-[10px] font-black text-emerald-400"
							>ACTIVE</span
						>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-xs font-bold text-white/60">Regional API</span>
						<span
							class="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-[10px] font-black text-emerald-400"
							>OPERATIONAL</span
						>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-xs font-bold text-white/60">Billing Unit</span>
						<span
							class="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-[10px] font-black text-emerald-400"
							>SYNCED</span
						>
					</div>
				</div>
			</div>

			<div class="dashboard-card rounded-3xl border-none bg-slate-50 p-8 shadow-sm">
				<h3 class="mb-4 text-lg font-extrabold text-brand-dark">Support ID: <span class="text-brand-primary">#AL-{Math.floor(1000 + Math.random() * 9000)}-支</span></h3>
				<p class="text-sm leading-relaxed font-medium text-slate-500">
					Quote your branch Support ID for faster verification. Average response time for {isBranchView ? 'regional' : 'root'} level queries is <span class="font-bold text-brand-primary">under 3 minutes</span>.
				</p>
			</div>
		</div>
	</div>
</div>
