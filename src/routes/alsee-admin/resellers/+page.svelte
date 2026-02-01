<script lang="ts">
	import { resellers } from '$lib/data/mockData';

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
</script>

<div class="animate-in fade-in space-y-12 pb-20 duration-1000">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-extrabold tracking-tight text-brand-dark">Reseller Network</h1>
			<p class="mt-1 text-sm font-medium text-slate-500">
				Managing distribution partners and margins.
			</p>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
		{#each resellers as reseller}
			<div class="dashboard-card rounded-[2rem] bg-white p-10">
				<div class="mb-8 flex items-start justify-between">
					<div class="flex items-center gap-4">
						<div
							class="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-2xl text-white shadow-lg shadow-brand-primary/20"
						>
							🤝
						</div>
						<div>
							<h3 class="text-xl font-extrabold text-brand-dark">{reseller.name}</h3>
							<p class="text-xs font-bold tracking-widest text-slate-400 uppercase">
								{reseller.contact}
							</p>
						</div>
					</div>
					<span
						class={`rounded-full border px-4 py-1.5 text-[10px] font-bold uppercase ${getLoyaltyStyles(reseller.loyaltyTier)}`}
					>
						{reseller.loyaltyTier}
					</span>
				</div>

				<div class="grid grid-cols-3 gap-6 border-y border-slate-50 py-8">
					<div>
						<p class="mb-1 text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
							Clients
						</p>
						<p class="text-2xl font-extrabold text-brand-dark">{reseller.clientCount}</p>
					</div>
					<div>
						<p class="mb-1 text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
							Margin
						</p>
						<p class="text-2xl font-extrabold text-brand-success">{reseller.margin}</p>
					</div>
					<div>
						<p class="mb-1 text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
							Cost
						</p>
						<p class="text-2xl font-extrabold text-slate-700">{reseller.cost}</p>
					</div>
				</div>

				<div class="mt-8">
					<p class="mb-4 text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
						Key Accounts
					</p>
					<div class="flex flex-wrap gap-2">
						{#each reseller.clientNames as client}
							<span
								class="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-[10px] font-bold text-slate-600"
							>
								{client}
							</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
