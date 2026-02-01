<script lang="ts">
	import { clients } from '$lib/data/mockData';

	let selectedParentId = $state<number | null>(null);
	let showAddModal = $state(false);
	let modalType = $state<'Partner' | 'Site'>('Partner');

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

	const getLoyaltyStyles = (tier: string) => {
		switch (tier) {
			case 'Diamond':
				return 'bg-brand-accent/10 text-brand-accent border-brand-accent/20';
			case 'Platinum':
				return 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20';
			case 'Gold':
				return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
			default:
				return 'bg-slate-100 text-slate-500 border-slate-200';
		}
	};

	const getLoyaltyIcon = (tier: string) => {
		switch (tier) {
			case 'Diamond':
				return '💠';
			case 'Platinum':
				return '💎';
			case 'Gold':
				return '⭐';
			default:
				return '';
		}
	};

	const selectedParent = $derived(clients.find((c) => c.id === selectedParentId));

	function openModal(type: 'Partner' | 'Site') {
		modalType = type;
		showAddModal = true;
	}

	function closeModal() {
		showAddModal = false;
	}

	function handleSubmit() {
		closeModal();
		alert(`${modalType} added successfully (Mock only)`);
	}

	const displayItems = $derived(
		selectedParentId ? selectedParent?.branches || [] : (clients as any[])
	);
</script>

<div class="animate-in fade-in relative min-h-screen space-y-12 pb-20 duration-1000">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-extrabold tracking-tight text-brand-dark">
				{#if selectedParentId}
					{selectedParent?.name} <span class="text-xl font-medium text-slate-400">/ Clients</span>
				{:else}
					Client Base
				{/if}
			</h1>
			<p class="mt-1 text-sm font-medium text-slate-500">
				{#if selectedParentId}
					Managing branch-level deployments.
				{:else}
					Global organizational partners and resellers.
				{/if}
			</p>
		</div>

		<div class="flex gap-4">
			{#if selectedParentId}
				<button
					onclick={() => (selectedParentId = null)}
					class="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-extrabold tracking-widest text-slate-500 uppercase shadow-sm transition-all"
					>← Back</button
				>
				<button
					onclick={() => openModal('Site')}
					class="btn-primary rounded-lg px-6 py-2.5 text-xs shadow-lg shadow-brand-primary/20"
				>
					+ Register Site
				</button>
			{:else}
				<button
					onclick={() => openModal('Partner')}
					class="btn-primary rounded-lg px-8 py-2.5 text-xs shadow-lg shadow-brand-primary/20"
				>
					+ Register Partner
				</button>
			{/if}
		</div>
	</div>

	<!-- Main Table -->
	<div
		class="dashboard-card overflow-hidden rounded-[2rem] border-none bg-white p-0 shadow-xl shadow-slate-200/40"
	>
		<table class="w-full table-auto border-collapse text-left">
			<thead>
				<tr
					class="bg-slate-50/50 text-[9px] font-extrabold tracking-widest text-slate-400 uppercase"
				>
					<th class="px-5 py-4 text-brand-secondary"
						>{selectedParentId ? 'Deployed Unit' : 'Partner'}</th
					>
					{#if !selectedParentId}<th class="px-5 py-4">Sector</th>{/if}
					{#if selectedParentId}<th class="px-5 py-4">Serial</th>{/if}
					<th class="px-5 py-4">Lead Admin</th>
					{#if !selectedParentId}<th class="px-5 py-4">Backup</th>{/if}
					{#if !selectedParentId}<th class="px-5 py-4">Loyalty Tier</th>{/if}
					{#if selectedParentId}
						<th class="px-5 py-4">Expiry</th>
						<th class="px-5 py-4">Status</th>
					{/if}
				</tr>
			</thead>
			<tbody class="divide-y divide-slate-50">
				{#each displayItems as item}
					<tr class="group transition-all hover:bg-slate-50/30">
						<td class="px-5 py-6">
							<div class="flex items-center gap-3">
								{#if !selectedParentId}
									<button
										onclick={() => (selectedParentId = item.id)}
										class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-dark font-extrabold text-white shadow-lg shadow-brand-dark/10 transition-all group-hover:-translate-y-0.5"
									>
										{item.name.charAt(0)}
									</button>
									<div>
										<button
											onclick={() => (selectedParentId = item.id)}
											class="text-sm font-extrabold text-brand-dark"
										>
											{item.name}
										</button>
									</div>
								{:else}
									<div
										class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/10 font-extrabold text-brand-secondary"
									>
										{item.name.charAt(0)}
									</div>
									<div>
										<p class="text-sm font-extrabold text-brand-dark">{item.name}</p>
										<span class="text-[9px] font-bold text-slate-400 uppercase"
											>{item.location}</span
										>
									</div>
								{/if}
							</div>
						</td>

						{#if !selectedParentId}
							<td class="px-5 py-6">
								<span
									class="rounded bg-slate-50 px-3 py-1 text-[9px] font-extrabold tracking-widest text-slate-500 uppercase"
								>
									{item.sector}
								</span>
							</td>
						{/if}

						{#if selectedParentId}
							<td class="px-5 py-6">
								<code
									class="rounded bg-brand-primary/5 px-3 py-1 font-mono text-[10px] font-bold text-brand-primary"
								>
									{item.licence}
								</code>
							</td>
						{/if}

						<td class="px-5 py-6">
							<div class="flex items-center gap-2">
								<div class="space-y-0.5">
									<p class="text-[11px] font-extrabold tracking-tight text-brand-dark uppercase">
										{item.primaryAdmin.name}
									</p>
								</div>
								<div class="flex gap-1">
									<a
										href="tel:+123456789"
										class="flex h-6 w-6 items-center justify-center rounded bg-slate-50 text-[10px] text-slate-400 transition-all hover:bg-brand-secondary hover:text-white"
									>
										📞
									</a>
									<a
										href="sms:+123456789"
										class="flex h-6 w-6 items-center justify-center rounded bg-slate-50 text-[10px] text-slate-400 transition-all hover:bg-emerald-500 hover:text-white"
									>
										💬
									</a>
									<a
										href="mailto:{item.primaryAdmin.email}"
										class="flex h-6 w-6 items-center justify-center rounded bg-slate-50 text-[10px] text-slate-400 transition-all hover:bg-brand-primary hover:text-white"
									>
										✉️
									</a>
								</div>
							</div>
						</td>

						{#if !selectedParentId}
							<td class="px-5 py-6">
								<div class="flex items-center gap-2">
									<div class="space-y-0.5">
										<p class="text-[11px] font-extrabold tracking-tight text-slate-500 uppercase">
											{item.secondaryAdmin?.name || '---'}
										</p>
									</div>
									{#if item.secondaryAdmin}
										<div class="flex gap-1">
											<a
												href="tel:+123456789"
												class="flex h-6 w-6 items-center justify-center rounded bg-slate-50 text-[10px] text-slate-400 transition-all hover:bg-brand-secondary hover:text-white"
											>
												📞
											</a>
											<a
												href="sms:+123456789"
												class="flex h-6 w-6 items-center justify-center rounded bg-slate-50 text-[10px] text-slate-400 transition-all hover:bg-emerald-500 hover:text-white"
											>
												💬
											</a>
											<a
												href="mailto:{item.secondaryAdmin.email}"
												class="flex h-6 w-6 items-center justify-center rounded bg-slate-50 text-[10px] text-slate-400 transition-all hover:bg-brand-primary hover:text-white"
											>
												✉️
											</a>
										</div>
									{/if}
								</div>
							</td>
						{/if}

						{#if !selectedParentId}
							<td class="px-5 py-6">
								<div class="flex items-center gap-2">
									<span
										class={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[9px] font-bold uppercase transition-all duration-300 hover:scale-105 ${getLoyaltyStyles(item.loyaltyTier)}`}
									>
										<span class="text-xs">{getLoyaltyIcon(item.loyaltyTier)}</span>
										{item.loyaltyTier}
									</span>
								</div>
							</td>
						{/if}

						{#if selectedParentId}
							<td class="px-5 py-6">
								<p class="font-mono text-[10px] font-extrabold text-slate-600">{item.expiryDate}</p>
							</td>
							<td class="px-5 py-6">
								<span
									class={`rounded px-2 py-1 text-[8px] font-extrabold uppercase ${getStatusColor(item.paymentStatus)}`}
								>
									{item.paymentStatus}
								</span>
							</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<!-- Modal -->
	{#if showAddModal}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/30 p-4 backdrop-blur-md transition-all duration-500"
		>
			<div
				class="animate-in zoom-in w-full max-w-md overflow-hidden rounded-[2.5rem] border-none bg-white shadow-2xl"
			>
				<div class="bg-brand-primary p-12 text-white">
					<h3 class="text-2xl font-extrabold">Register {modalType}</h3>
					<p class="mt-2 text-base font-medium text-white/80">
						Expand your distribution network today.
					</p>
				</div>
				<div class="space-y-10 p-12">
					<div class="space-y-3">
						<label
							for="name"
							class="ml-1 text-[11px] font-extrabold tracking-widest text-slate-400 uppercase"
							>Identity Name</label
						>
						<input
							id="name"
							type="text"
							class="w-full rounded-[1.25rem] border border-slate-100 bg-slate-50 px-8 py-5 text-base font-bold text-brand-dark transition-all outline-none focus:border-brand-primary focus:bg-white"
							placeholder="e.g. Global Tech Solutions"
						/>
					</div>
					<div class="flex gap-6">
						<button
							onclick={closeModal}
							class="flex-1 rounded-[1.25rem] bg-slate-100 py-5 text-[11px] font-extrabold tracking-widest text-slate-500 uppercase transition-all hover:bg-slate-200"
							>Cancel</button
						>
						<button
							onclick={handleSubmit}
							class="flex-1 rounded-[1.25rem] bg-brand-primary py-5 text-[11px] font-extrabold tracking-widest text-white uppercase shadow-xl shadow-brand-primary/20 transition-all active:scale-95"
							>Confirm Registration</button
						>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
