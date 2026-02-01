<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let activeMode = $state('branch');

	const branchPlans = [
		{
			id: 'essential',
			name: 'Standard Client',
			duration: '1 Year',
			price: '£80',
			period: 'per unit / year',
			description: 'Ideal for small scale regional deployments with standard sync.',
			features: ['Standard Support', 'Core Analytics', '7-Day Data Retention', 'Basic Customization'],
			accent: 'bg-white',
			text: 'text-brand-dark',
			badge: 'Standard',
			popular: false
		},
		{
			id: 'advanced',
			name: 'Elite Network',
			duration: '3 Years',
			price: '£65',
			period: 'per unit / year',
			description: 'Premium choice for growing organizations requiring deeper insights.',
			features: ['24/7 Priority Support', 'Advanced Analytics', '30-Day Data Retention', 'Extended Customization', 'Regional Load Balancing'],
			accent: 'bg-brand-primary',
			text: 'text-white',
			badge: 'Best Experience',
			popular: true
		},
		{
			id: 'enterprise',
			name: 'Diamond Global',
			duration: '5 Years',
			price: '£55',
			period: 'per unit / year',
			description: 'Maximum value for long-term deployments with global scale.',
			features: ['Technical Root Access', 'Custom BI Reporting', 'Unlimited Data Retention', 'Full Whitelabeling', 'Hardware Warranty Extension'],
			accent: 'bg-brand-dark',
			text: 'text-white',
			badge: 'Max Savings',
			popular: false
		}
	];

	const volumePlans = [
		{
			id: 'vol-50',
			name: 'Regional Cluster',
			duration: '50 Monitors',
			price: '£70',
			period: 'per unit / year',
			description: 'Ideal for medium-sized regional networks.',
			features: ['Priority Support', 'Bulk Sync Tools', '15% Early Bird Eligible', 'Standard SLAs'],
			accent: 'bg-white',
			text: 'text-brand-dark',
			badge: 'Entry Volume',
			popular: false
		},
		{
			id: 'vol-250',
			name: 'National Grid',
			duration: '250 Monitors',
			price: '£58',
			period: 'per unit / year',
			description: 'Optimized for large-scale national infrastructure.',
			features: ['Dedicated Case Mgr', 'Custom Deployment API', '20% Bundle Discount', 'Enhanced Security'],
			accent: 'bg-brand-primary',
			text: 'text-white',
			badge: 'Recommended',
			popular: true
		},
		{
			id: 'vol-1000',
			name: 'Global Backbone',
			duration: '1000+ Monitors',
			price: '£45',
			period: 'per unit / year',
			description: 'Ultimate scale for international enterprise networks.',
			features: ['Root Root Access', 'Direct Engineering Line', 'Zero-Latency Global Grid', 'Full Brand Sovereignty'],
			accent: 'bg-brand-dark',
			text: 'text-white',
			badge: 'Enterprise',
			popular: false
		}
	];

	const currentPlans = $derived(activeMode === 'branch' ? branchPlans : volumePlans);
</script>

<div class="animate-in fade-in space-y-16 pb-20 duration-1000 ease-out">
	<div class="space-y-4 text-center">
		<h1 class="text-4xl font-black tracking-tighter text-brand-dark uppercase lg:text-5xl">Licensing Tiers</h1>
		<p class="mx-auto max-w-2xl text-base font-medium text-slate-500">
			Optimized pricing for the <span class="font-bold text-brand-primary">ALSEE Technologies</span> ecosystem.
		</p>
	</div>

	<div class="flex justify-center mb-24">
		<div class="relative inline-flex rounded-[1.25rem] bg-slate-100 p-1.5 shadow-inner">
			<div 
				class="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-sm transition-all duration-500 ease-out z-0"
				style="transform: translateX({activeMode === 'branch' ? '0%' : '100%'})"
			></div>
			
			<button
				onclick={() => activeMode = 'branch'}
				class={`relative z-10 w-48 rounded-xl px-8 py-3.5 text-xs font-black tracking-widest uppercase transition-colors duration-300 ${activeMode === 'branch' ? 'text-brand-dark' : 'text-slate-400 hover:text-brand-primary'}`}
			>
				Duration Based
			</button>
			<button
				onclick={() => activeMode = 'volume'}
				class={`relative z-10 w-48 rounded-xl px-8 py-3.5 text-xs font-black tracking-widest uppercase transition-colors duration-300 ${activeMode === 'volume' ? 'text-brand-dark' : 'text-slate-400 hover:text-brand-primary'}`}
			>
				Volume Based
			</button>
		</div>
	</div>

	{#key activeMode}
		<div 
			in:fly={{ y: 20, duration: 600, delay: 100, easing: cubicOut }}
			out:fade={{ duration: 200 }}
			class="grid grid-cols-1 gap-12 lg:grid-cols-3 min-h-[600px] items-stretch"
		>
			{#each currentPlans as plan, i}
				<div class={`group relative flex flex-col rounded-[3rem] p-10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl border border-slate-50 ${plan.accent} ${plan.text} ${plan.popular ? 'z-10 scale-[1.03] bg-brand-primary shadow-2xl shadow-brand-primary/20 border-none' : 'bg-white shadow-xl shadow-slate-200/40'}`}>
					{#if plan.badge}
						<div class={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-6 py-2.5 text-[10px] font-black tracking-[0.2em] uppercase shadow-lg transition-transform group-hover:scale-110 ${plan.popular ? 'bg-brand-dark text-white' : 'bg-brand-primary text-white'}`}>
							{plan.badge}
						</div>
					{/if}

					<div class="mb-10 space-y-4">
						<p class={`text-[11px] font-black tracking-[0.3em] uppercase ${plan.popular ? 'text-white/60' : 'text-slate-400'}`}>{plan.duration} Deployment</p>
						<h3 class="text-3xl font-black tracking-tighter uppercase leading-none">{plan.name}</h3>
						<div class="flex items-baseline gap-2 pt-2">
							<span class="text-6xl font-black tracking-tighter">{plan.price}</span>
							<span class={`text-[10px] font-extrabold uppercase tracking-widest ${plan.popular ? 'text-white/60' : 'text-slate-400'}`}>{plan.period}</span>
						</div>
						<p class={`text-sm leading-relaxed font-medium ${plan.popular ? 'text-white/80' : 'text-slate-500'}`}>{plan.description}</p>
					</div>

					<div class="flex-1 space-y-8">
						<div class={`h-px w-full ${plan.popular ? 'bg-white/10' : 'bg-slate-100'}`}></div>
						<ul class="space-y-5">
							{#each plan.features as feature}
								<li class="flex items-center gap-4 text-sm font-bold tracking-tight">
									<div class={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${plan.popular ? 'bg-white/20' : 'bg-brand-primary/10 text-brand-primary'}`}>✓</div>
									{feature}
								</li>
							{/each}
						</ul>
					</div>

					<div class="mt-12">
						<button class={`w-full rounded-2xl py-5 text-[10px] font-black tracking-[0.2em] uppercase transition-all active:scale-95 ${plan.popular ? 'bg-white text-brand-primary hover:bg-brand-dark hover:text-white' : 'bg-brand-dark text-white shadow-brand-primary/20 hover:bg-brand-primary hover:shadow-xl'}`}>
							Configure Deployment
						</button>
					</div>
				</div>
			{/each}
		</div>
	{/key}
</div>
