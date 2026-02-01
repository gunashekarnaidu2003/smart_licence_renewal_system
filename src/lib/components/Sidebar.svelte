<script lang="ts">
	import { page } from '$app/state';

	// Define role-based menus
	const rootItems = [
		{ name: 'Clients', path: '/alsee-admin/clients', icon: '🏢' },
		{ name: 'Resellers', path: '/alsee-admin/resellers', icon: '🤝' },
		{ name: 'Renewal Centre', path: '/alsee-admin/renewal-centre', icon: '🎯' },
		{ name: 'Global Payments', path: '/alsee-admin/global-payments', icon: '💳' },
		{ name: 'Reports', path: '/alsee-admin/reports', icon: '📊' },
		{ name: 'Inbox', path: '/alsee-admin/inbox', icon: '📨' }
	];

	const parentItems = [
		{ name: 'Payment Analytics', path: '/payments', icon: '💳' },
		{ name: 'Payment Plans', path: '/plans', icon: '💎' },
		{ name: 'Support', path: '/support', icon: '❓' }
	];

	const branchItems = [{ name: 'Support', path: '/branch-view/support', icon: '❓' }];

	function isActive(path: string) {
		const pathname = page.url?.pathname ?? '';

		// Special case for Home items
		if (path === '/') {
			if (isParentView) return pathname === '/parent-view';
			if (isBranchView) return pathname === '/branch-view';
			// Default to ALLSEE Root home
			return pathname === '/' || pathname === '/alsee-admin';
		}

		return pathname.startsWith(path);
	}

	const isBranchView = $derived(page.url?.pathname?.includes('branch-view') ?? false);
	const isParentView = $derived(
		page.url?.pathname?.includes('parent-view') ||
			page.url?.pathname?.includes('/payments') ||
			page.url?.pathname?.includes('/plans') ||
			page.url?.pathname === '/support' ||
			false
	);
	const isAlseeAdmin = $derived(!isBranchView && !isParentView);

	// Select current menu based on role
	const currentMenu = $derived(isAlseeAdmin ? rootItems : isBranchView ? branchItems : parentItems);

	// Available views for switcher
	const views = [
		{ id: 'alsee', name: 'ALLSEE Root', path: '/', desc: 'Global Admin Terminal' },
		{ id: 'parent', name: 'Parent Admin', path: '/parent-view', desc: 'Super Root Terminal' },
		{ id: 'branch', name: 'Branch Admin', path: '/branch-view', desc: 'Regional Client Terminal' }
	];

	// Filter out the current view to show only switchable options
	const switchableViews = $derived(
		views.filter((v) => {
			if (isAlseeAdmin) return v.id !== 'alsee';
			if (isParentView) return v.id !== 'parent';
			if (isBranchView) return v.id !== 'branch';
			return true;
		})
	);
</script>

<aside class="sticky top-0 flex h-screen w-72 flex-col border-r border-slate-50 bg-white">
	<div class="p-10">
		<div class="flex items-center gap-4">
			<div
				class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary shadow-lg shadow-brand-primary/20 transition-transform hover:rotate-6"
			>
				<span class="text-2xl font-extrabold text-white">A</span>
			</div>
			<div>
				<h1 class="text-2xl font-extrabold tracking-tighter text-brand-dark">ALLSEE</h1>
				<p class="text-[10px] font-extrabold tracking-[0.3em] text-slate-400 uppercase">
					Technologies
				</p>
			</div>
		</div>
	</div>

	<nav class="flex-1 space-y-2 overflow-y-auto px-6 py-6">
		<!-- Dynamic Home Link -->
		<a
			href={isAlseeAdmin ? '/' : isBranchView ? '/branch-view' : '/parent-view'}
			class={isActive('/')
				? 'flex items-center gap-4 rounded-xl bg-brand-primary px-5 py-4 text-[15px] font-extrabold text-white shadow-lg shadow-brand-primary/20'
				: 'flex items-center gap-4 rounded-xl px-5 py-4 text-[15px] font-bold text-slate-500 transition-all duration-200 hover:bg-slate-50'}
		>
			<span
				class="flex h-7 w-7 items-center justify-center text-xl transition-transform group-hover:scale-110"
				>🏠</span
			>
			<span class="tracking-tight">Home</span>
		</a>

		<!-- Role-Specific Items -->
		{#each currentMenu as item}
			<a
				href={item.path}
				class={isActive(item.path)
					? 'flex items-center gap-4 rounded-xl bg-brand-primary px-5 py-4 text-[15px] font-extrabold text-white shadow-lg shadow-brand-primary/20'
					: 'flex items-center gap-4 rounded-xl px-5 py-4 text-[15px] font-bold text-slate-500 transition-all duration-200 hover:bg-slate-50'}
			>
				<span
					class="flex h-7 w-7 items-center justify-center text-xl transition-transform group-hover:scale-110"
				>
					{item.icon}
				</span>
				<span class="tracking-tight">{item.name}</span>
			</a>
		{/each}
	</nav>

	<div class="mt-auto space-y-3 p-6">
		<p class="px-2 text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
			Switch Terminal
		</p>

		{#each switchableViews as view}
			<a
				href={view.path}
				class="group flex w-full items-center justify-between rounded-2xl bg-slate-50 p-4 text-left transition-all hover:bg-brand-dark hover:shadow-lg hover:shadow-brand-dark/20"
			>
				<div>
					<p
						class="mb-0.5 text-[9px] font-extrabold tracking-widest text-slate-400 uppercase group-hover:text-white/60"
					>
						{view.desc}
					</p>
					<p
						class="text-xs leading-none font-black tracking-tight text-brand-dark uppercase group-hover:text-white"
					>
						{view.name}
					</p>
				</div>
				<span
					class="flex h-6 w-6 items-center justify-center rounded-lg bg-white text-xs text-brand-dark transition-transform group-hover:translate-x-1"
					>→</span
				>
			</a>
		{/each}
	</div>
</aside>
