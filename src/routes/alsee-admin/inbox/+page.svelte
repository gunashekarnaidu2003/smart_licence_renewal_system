<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	// Mock Data for Query Instances
	let queries = $state([
		{
			id: 1,
			sourceType: 'Parent',
			sourceName: 'Sainsbury HQ',
			subject: 'API Rate Limit Increase Request',
			preview: 'We are deploying 50 new branches next week and need increased API throughput...',
			time: '10 mins ago',
			priority: 'High',
			status: 'New',
			avatar: 'S',
			color: 'bg-orange-500'
		},
		{
			id: 2,
			sourceType: 'Branch',
			sourceName: 'Manchester North',
			subject: 'Sync Failure Error 503',
			preview: 'The local sync engine is timing out during the nightly batch update...',
			time: '45 mins ago',
			priority: 'Critical',
			status: 'New',
			avatar: 'M',
			color: 'bg-brand-primary'
		},
		{
			id: 3,
			sourceType: 'Parent',
			sourceName: 'Mercedes-Benz UK',
			subject: 'Billing Cycle Adjustment',
			preview: 'Can we align the billing date for all London branches to the 1st of the month?',
			time: '2 hours ago',
			priority: 'Medium',
			status: 'Read',
			avatar: 'M',
			color: 'bg-brand-dark'
		},
		{
			id: 4,
			sourceType: 'Branch',
			sourceName: 'Leeds Central',
			subject: 'Hardware Replacement Inquiry',
			preview: 'Screen #4 in the checkout zone has a flickering led panel...',
			time: '5 hours ago',
			priority: 'Low',
			status: 'Read',
			avatar: 'L',
			color: 'bg-brand-secondary'
		},
		{
			id: 5,
			sourceType: 'Parent',
			sourceName: 'Ferrari SpA',
			subject: 'Custom Analytics Dashboard',
			preview: 'Requesting a quote for a custom telemetry view for our Maranello factory...',
			time: '1 day ago',
			priority: 'Medium',
			status: 'Read',
			avatar: 'F',
			color: 'bg-red-600'
		},
		{
			id: 6,
			sourceType: 'Parent',
			sourceName: 'Tesla Gigafactory',
			subject: 'Powerwall Integration Status',
			preview: 'The integration with the main grid shows a latency spike in sector 7...',
			time: '5 mins ago',
			priority: 'Critical',
			status: 'New',
			avatar: 'T',
			color: 'bg-red-500'
		},
		{
			id: 7,
			sourceType: 'Branch',
			sourceName: 'SpaceX Starbase',
			subject: 'Link Starlink Node 4',
			preview: 'Confirming uplink parameters for the new terminal installation...',
			time: '12 mins ago',
			priority: 'High',
			status: 'New',
			avatar: 'S',
			color: 'bg-slate-900'
		},
		{
			id: 8,
			sourceType: 'Parent',
			sourceName: 'Microsoft London',
			subject: 'Enterprise License Renewal',
			preview: 'We would like to discuss the upcoming renewal for 500 seats...',
			time: '1 hour ago',
			priority: 'Medium',
			status: 'New',
			avatar: 'M',
			color: 'bg-blue-600'
		}
	]);

	let selectedQueryId = $state<number | null>(null);

	const selectedQuery = $derived(queries.find((q) => q.id === selectedQueryId));

	function selectQuery(id: number) {
		selectedQueryId = id;
		// Mark as read mock logic
		const query = queries.find((q) => q.id === id);
		if (query && query.status === 'New') {
			query.status = 'Read';
		}
	}

	function getPriorityColor(priority: string) {
		switch (priority) {
			case 'Critical':
				return 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30';
			case 'High':
				return 'bg-orange-500 text-white shadow-lg shadow-orange-500/30';
			case 'Medium':
				return 'bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20';
			case 'Low':
				return 'bg-slate-100 text-slate-500';
			default:
				return 'bg-slate-100 text-slate-500';
		}
	}
</script>

<div
	class="animate-in fade-in slide-in-from-bottom-4 flex h-[calc(100vh-8rem)] gap-8 pb-8 duration-700 ease-out"
>
	<!-- Inbox List -->
	<div
		class="flex w-full max-w-md flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/40"
	>
		<div class="border-b border-slate-50 p-8">
			<div class="flex items-center justify-between">
				<h1 class="text-2xl font-extrabold tracking-tight text-brand-dark">Inbox</h1>
				<span
					class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 text-xs font-black text-brand-primary"
				>
					{queries.filter((q) => q.status === 'New').length}
				</span>
			</div>
			<div class="mt-6 flex gap-2">
				<button
					class="rounded-xl bg-brand-dark px-4 py-2 text-[10px] font-bold text-white transition-all hover:bg-brand-primary"
				>
					All Queries
				</button>
				<button
					class="rounded-xl bg-slate-50 px-4 py-2 text-[10px] font-bold text-slate-500 transition-all hover:bg-slate-100"
				>
					Unread
				</button>
				<button
					class="rounded-xl bg-slate-50 px-4 py-2 text-[10px] font-bold text-slate-500 transition-all hover:bg-slate-100"
				>
					High Priority
				</button>
			</div>
		</div>

		<div class="custom-scrollbar flex-1 overflow-y-auto p-4">
			<div class="space-y-2">
				{#each queries as query (query.id)}
					<button
						onclick={() => selectQuery(query.id)}
						class={`group relative w-full rounded-[1.5rem] p-5 text-left transition-all duration-300 hover:bg-slate-50 ${selectedQueryId === query.id ? 'bg-slate-50 ring-2 ring-brand-primary/5' : ''}`}
					>
						{#if query.status === 'New'}
							<div
								class="absolute top-6 right-5 h-2 w-2 rounded-full bg-brand-primary shadow-sm"
							></div>
						{/if}

						<div class="flex items-start gap-4">
							<div
								class={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white shadow-md ${query.color}`}
							>
								{query.avatar}
							</div>
							<div class="min-w-0 flex-1">
								<div class="mb-1 flex items-center justify-between">
									<p class="truncate text-xs font-extrabold text-brand-dark">{query.sourceName}</p>
									<span class="text-[9px] font-bold text-slate-400">{query.time}</span>
								</div>
								<h3 class="mb-1 truncate text-xs font-bold text-slate-700">{query.subject}</h3>
								<p
									class="line-clamp-2 text-[10px] leading-relaxed font-medium text-slate-400 group-hover:text-slate-500"
								>
									{query.preview}
								</p>
								<div class="mt-3 flex gap-2">
									<span
										class="rounded border border-slate-100 bg-white px-2 py-0.5 text-[8px] font-bold tracking-wider text-slate-400 uppercase"
									>
										{query.sourceType}
									</span>
									<span
										class={`rounded px-2 py-0.5 text-[8px] font-bold tracking-wider uppercase ${getPriorityColor(query.priority)}`}
									>
										{query.priority}
									</span>
								</div>
							</div>
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Message Content View -->
	<div
		class="relative flex flex-1 flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/40"
	>
		{#if selectedQuery}
			<div in:fly={{ y: 20, duration: 400, easing: cubicOut }} class="flex h-full flex-col">
				<!-- Header -->
				<div class="border-b border-slate-50 bg-slate-50/30 p-10">
					<div class="flex items-start justify-between">
						<div class="flex items-center gap-5">
							<div
								class={`flex h-16 w-16 items-center justify-center rounded-3xl text-3xl font-black text-white shadow-xl shadow-brand-dark/10 ${selectedQuery.color}`}
							>
								{selectedQuery.avatar}
							</div>
							<div>
								<h2 class="text-xl font-extrabold text-brand-dark">{selectedQuery.subject}</h2>
								<div class="mt-2 flex items-center gap-3">
									<p class="text-xs font-bold text-slate-500">
										From <span class="text-brand-dark">{selectedQuery.sourceName}</span>
									</p>
									<span class="h-1 w-1 rounded-full bg-slate-300"></span>
									<span class="text-[10px] font-bold tracking-wider text-slate-400 uppercase"
										>{selectedQuery.sourceType} Client</span
									>
								</div>
							</div>
						</div>
						<div class="flex gap-3">
							<button
								class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition-all hover:border-brand-primary hover:text-brand-primary hover:shadow-lg hover:shadow-brand-primary/10"
							>
								📌
							</button>
							<button
								class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition-all hover:bg-slate-50"
							>
								🗑️
							</button>
						</div>
					</div>
				</div>

				<!-- Body -->
				<div class="custom-scrollbar flex-1 overflow-y-auto p-12">
					<div class="text-sm leading-loose font-medium text-slate-600">
						{selectedQuery.preview} <br /><br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
						<br /><br />
						<div class="mt-6 rounded-xl bg-slate-900 p-6 font-mono text-xs shadow-inner">
							<div class="mb-2 flex items-center justify-between border-b border-white/10 pb-2">
								<span class="text-slate-500">Device Identity</span>
								<span class="text-brand-success"
									>{selectedQuery.sourceType === 'Branch' ? 'BR-8821-X' : 'P-CORP-01-A'}</span
								>
							</div>
							<div class="mb-2 flex items-center justify-between border-b border-white/10 pb-2">
								<span class="text-slate-500">Timestamp</span>
								<span class="text-brand-success"
									>{new Date().toISOString().split('T')[0]} <span class="text-slate-600">|</span>
									{new Date().toLocaleTimeString()}</span
								>
							</div>
							<div class="flex items-center justify-between">
								<span class="text-slate-500">System Integrity</span>
								<span
									class={selectedQuery.priority === 'Critical'
										? 'animate-pulse font-bold text-red-500'
										: 'font-bold text-emerald-400'}
								>
									{selectedQuery.priority === 'Critical' ? 'CRITICAL FAILURE' : 'OPTIMAL (100%)'}
								</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Actions -->
				<div class="border-t border-slate-50 bg-slate-50/50 p-8">
					<div class="flex gap-4">
						<button
							class="rounded-xl border border-slate-200 bg-white px-8 py-4 text-xs font-extrabold text-slate-600 shadow-sm transition-all hover:bg-slate-50"
						>
							Forward to Tech
						</button>
						<button
							class="flex-1 rounded-xl bg-brand-dark px-8 py-4 text-xs font-extrabold tracking-widest text-white uppercase shadow-xl shadow-brand-dark/20 transition-all hover:bg-brand-primary hover:shadow-brand-primary/30"
						>
							Reply to {selectedQuery.sourceType}
						</button>
					</div>
				</div>
			</div>
		{:else}
			<div class="flex h-full flex-col items-center justify-center p-12 text-center">
				<div
					class="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-50 text-4xl shadow-inner"
				>
					📨
				</div>
				<h3 class="text-xl font-extrabold text-slate-300">No Message Selected</h3>
				<p class="mt-2 text-sm font-medium text-slate-300">
					Select a query from the inbox to view details.
				</p>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Custom Scrollbar for this component */
	.custom-scrollbar::-webkit-scrollbar {
		width: 6px;
	}
	.custom-scrollbar::-webkit-scrollbar-track {
		background: transparent;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background-color: #f1f5f9;
		border-radius: 20px;
	}
	.custom-scrollbar:hover::-webkit-scrollbar-thumb {
		background-color: #cbd5e1;
	}
</style>
