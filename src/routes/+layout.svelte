<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { page } from '$app/state';
	import './layout.css';

	let { children } = $props();

	const isBranchView = $derived(page.url?.pathname?.includes('branch-view') ?? false);
	const isParentView = $derived(
		page.url?.pathname?.includes('parent-view') ||
			page.url?.pathname?.includes('/payments') ||
			page.url?.pathname?.includes('/plans') ||
			page.url?.pathname === '/support' ||
			false
	);
	const isAlseeAdmin = $derived(!isBranchView && !isParentView);
</script>

<div
	class="flex min-h-screen bg-brand-bg font-sans selection:bg-brand-primary/10 selection:text-brand-primary"
>
	<Sidebar />

	<main class="flex min-w-0 flex-1 flex-col">
		<header
			class="sticky top-0 z-30 flex h-24 items-center justify-between border-b border-slate-100/30 bg-white/90 px-12 backdrop-blur-3xl transition-all duration-500"
		>
			<div class="flex items-center gap-8"></div>

			<div class="flex items-center gap-10">
				<div class="flex items-center gap-6">
					<div class="group relative cursor-pointer">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-brand-minimal shadow-sm transition-all hover:shadow-lg hover:shadow-brand-primary/20"
						>
							🔔
						</div>
						<span
							class="absolute top-0 right-0 h-3 w-3 animate-pulse rounded-full border-2 border-white bg-brand-primary shadow-lg shadow-brand-primary/40"
						></span>
					</div>
				</div>
				<div class="flex items-center gap-8 border-l border-slate-100 pl-12">
					<div class="text-right">
						<p class="text-base font-extrabold tracking-tight text-brand-dark uppercase">
							{isAlseeAdmin ? 'ALLSEE Root' : isBranchView ? 'Branch Admin' : 'Parent Admin'}
						</p>
						<p class="text-[11px] font-bold tracking-tight text-brand-primary uppercase">
							{isAlseeAdmin
								? 'Global Infrastructure'
								: isBranchView
									? 'Regional Client Terminal'
									: 'Super Root Terminal'}
						</p>
					</div>
					<div
						class="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl bg-brand-dark font-extrabold text-white shadow-xl shadow-brand-dark/20 transition-all hover:rotate-6"
					>
						<span class="text-lg">{isAlseeAdmin ? 'A' : isBranchView ? 'C' : 'P'}</span>
					</div>
				</div>
			</div>
		</header>

		<div class="p-12 pb-24">
			{@render children()}
		</div>
	</main>
</div>
