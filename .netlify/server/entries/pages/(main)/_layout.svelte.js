import {
	c as create_ssr_component,
	v as validate_component,
	l as getContext,
	s as setContext,
	b as subscribe,
	h as compute_rest_props,
	i as spread,
	j as escape_attribute_value,
	k as escape_object,
	a as add_attribute,
	g as escape
} from '../../../chunks/ssr.js';
import { p as page } from '../../../chunks/stores.js';
import {
	w as withGet,
	m as makeElement,
	s as styleToString,
	p as portalAttr,
	e as effect,
	i as isHTMLElement,
	a as executeCallbacks,
	b as addMeltEventListener,
	F as FIRST_LAST_KEYS,
	k as kbd,
	S as SELECTION_KEYS,
	u as useEscapeKeydown,
	n as noop,
	c as isElementDisabled,
	d as safeOnMount,
	f as isBrowser,
	g as addEventListener,
	h as createElHelpers,
	j as disabledAttr,
	o as omit,
	l as is_void,
	q as cn,
	r as flyAndScale,
	B as Button
} from '../../../chunks/button.js';
import { w as writable, d as derived } from '../../../chunks/index2.js';
import {
	I as Icon,
	c as createTypeaheadSearch,
	t as toWritableStores,
	g as generateIds,
	d as derivedVisible,
	a as tick,
	u as usePopper,
	b as getPortalDestination,
	h as handleRovingFocus,
	e as usePortal,
	s as sleep,
	r as removeHighlight,
	f as handleFocus,
	i as removeScroll,
	j as getNextFocusable,
	k as getPreviousFocusable,
	l as addHighlight,
	o as overridable,
	m as createBitAttrs,
	n as removeUndefined,
	p as getOptionUpdater,
	q as generateId,
	v as getPositioningUpdater,
	w as createDispatcher,
	x as disabledAttrs
} from '../../../chunks/helpers.js';
import 'clsx';
const Navigators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { path } = $$props;
	if ($$props.path === void 0 && $$bindings.path && path !== void 0) $$bindings.path(path);
	return `<div class="main flex w-full items-center justify-center gap-x-32 py-6"><div class="folder relative flex flex-col items-center"><a class="text-[15px] font-medium text-gray-700" href="/" data-svelte-h="svelte-fc7q4d">Folders</a> ${path === '/' ? `<div class="indicator absolute bottom-[-6px] h-[2px] w-[80px] bg-gray-600"></div>` : ``}</div> <div class="note relative flex flex-col items-center"><a class="text-[15px] font-medium text-gray-700" href="/notes" data-svelte-h="svelte-14rntu9">All notes</a> ${path === '/notes' ? `<div class="indicator absolute bottom-[-6px] h-[2px] w-[90px] bg-gray-600"></div>` : ``}</div></div>`;
});
const Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [['path', { d: 'm9 18 6-6-6-6' }]];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'chevron-right' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Circle_plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		['circle', { cx: '12', cy: '12', r: '10' }],
		['path', { d: 'M8 12h8' }],
		['path', { d: 'M12 8v8' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'circle-plus' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Ellipsis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		['circle', { cx: '12', cy: '12', r: '1' }],
		['circle', { cx: '19', cy: '12', r: '1' }],
		['circle', { cx: '5', cy: '12', r: '1' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'ellipsis' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Keyboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		['path', { d: 'M10 8h.01' }],
		['path', { d: 'M12 12h.01' }],
		['path', { d: 'M14 8h.01' }],
		['path', { d: 'M16 12h.01' }],
		['path', { d: 'M18 8h.01' }],
		['path', { d: 'M6 8h.01' }],
		['path', { d: 'M7 16h10' }],
		['path', { d: 'M8 12h.01' }],
		[
			'rect',
			{
				width: '20',
				height: '16',
				x: '2',
				y: '4',
				rx: '2'
			}
		]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'keyboard' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Life_buoy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		['circle', { cx: '12', cy: '12', r: '10' }],
		['path', { d: 'm4.93 4.93 4.24 4.24' }],
		['path', { d: 'm14.83 9.17 4.24-4.24' }],
		['path', { d: 'm14.83 14.83 4.24 4.24' }],
		['path', { d: 'm9.17 14.83-4.24 4.24' }],
		['circle', { cx: '12', cy: '12', r: '4' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'life-buoy' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Log_out = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'
			}
		],
		['polyline', { points: '16 17 21 12 16 7' }],
		[
			'line',
			{
				x1: '21',
				x2: '9',
				y1: '12',
				y2: '12'
			}
		]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'log-out' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Message_square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
			}
		]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'message-square' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		['circle', { cx: '11', cy: '11', r: '8' }],
		['path', { d: 'm21 21-4.3-4.3' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'search' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'
			}
		],
		['circle', { cx: '12', cy: '12', r: '3' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'settings' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const User_plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'
			}
		],
		['circle', { cx: '9', cy: '7', r: '4' }],
		[
			'line',
			{
				x1: '19',
				x2: '19',
				y1: '8',
				y2: '14'
			}
		],
		[
			'line',
			{
				x1: '22',
				x2: '16',
				y1: '11',
				y2: '11'
			}
		]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'user-plus' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'
			}
		],
		['circle', { cx: '12', cy: '7', r: '4' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'user' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'
			}
		],
		['circle', { cx: '9', cy: '7', r: '4' }],
		['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }],
		['path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'users' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const avatar = '/_app/immutable/assets/IMG_20240725_224057.epMa6g3X.jpg';
const SUB_OPEN_KEYS = {
	ltr: [...SELECTION_KEYS, kbd.ARROW_RIGHT],
	rtl: [...SELECTION_KEYS, kbd.ARROW_LEFT]
};
const SUB_CLOSE_KEYS = {
	ltr: [kbd.ARROW_LEFT],
	rtl: [kbd.ARROW_RIGHT]
};
const menuIdParts = ['menu', 'trigger'];
const defaults$2 = {
	arrowSize: 8,
	positioning: {
		placement: 'bottom'
	},
	preventScroll: true,
	closeOnEscape: true,
	closeOnOutsideClick: true,
	portal: void 0,
	loop: false,
	dir: 'ltr',
	defaultOpen: false,
	typeahead: true,
	closeOnItemClick: true,
	onOutsideClick: void 0
};
function createMenuBuilder(opts) {
	const { name, selector } = createElHelpers(opts.selector);
	const {
		preventScroll,
		arrowSize,
		positioning,
		closeOnEscape,
		closeOnOutsideClick,
		portal,
		forceVisible,
		typeahead,
		loop,
		closeFocus,
		disableFocusFirstItem,
		closeOnItemClick,
		onOutsideClick
	} = opts.rootOptions;
	const rootOpen = opts.rootOpen;
	const rootActiveTrigger = opts.rootActiveTrigger;
	const nextFocusable = opts.nextFocusable;
	const prevFocusable = opts.prevFocusable;
	const isUsingKeyboard = withGet.writable(false);
	const lastPointerX = withGet(writable(0));
	const pointerGraceIntent = withGet(writable(null));
	const pointerDir = withGet(writable('right'));
	const currentFocusedItem = withGet(writable(null));
	const pointerMovingToSubmenu = withGet(
		derived([pointerDir, pointerGraceIntent], ([$pointerDir, $pointerGraceIntent]) => {
			return (e) => {
				const isMovingTowards = $pointerDir === $pointerGraceIntent?.side;
				return isMovingTowards && isPointerInGraceArea(e, $pointerGraceIntent?.area);
			};
		})
	);
	const { typed, handleTypeaheadSearch } = createTypeaheadSearch();
	const rootIds = toWritableStores({ ...generateIds(menuIdParts), ...opts.ids });
	const isVisible = derivedVisible({
		open: rootOpen,
		forceVisible,
		activeTrigger: rootActiveTrigger
	});
	const rootMenu = makeElement(name(), {
		stores: [isVisible, portal, rootIds.menu, rootIds.trigger],
		returned: ([$isVisible, $portal, $rootMenuId, $rootTriggerId]) => {
			return {
				role: 'menu',
				hidden: $isVisible ? void 0 : true,
				style: styleToString({
					display: $isVisible ? void 0 : 'none'
				}),
				id: $rootMenuId,
				'aria-labelledby': $rootTriggerId,
				'data-state': $isVisible ? 'open' : 'closed',
				'data-portal': portalAttr($portal),
				tabindex: -1
			};
		},
		action: (node) => {
			let unsubPopper = noop;
			const unsubDerived = effect(
				[isVisible, rootActiveTrigger, positioning, closeOnOutsideClick, portal, closeOnEscape],
				([
					$isVisible,
					$rootActiveTrigger,
					$positioning,
					$closeOnOutsideClick,
					$portal,
					$closeOnEscape
				]) => {
					unsubPopper();
					if (!$isVisible || !$rootActiveTrigger) return;
					tick().then(() => {
						unsubPopper();
						setMeltMenuAttribute(node, selector);
						unsubPopper = usePopper(node, {
							anchorElement: $rootActiveTrigger,
							open: rootOpen,
							options: {
								floating: $positioning,
								modal: {
									closeOnInteractOutside: $closeOnOutsideClick,
									shouldCloseOnInteractOutside: (e) => {
										onOutsideClick.get()?.(e);
										if (e.defaultPrevented) return false;
										if (
											isHTMLElement($rootActiveTrigger) &&
											$rootActiveTrigger.contains(e.target)
										) {
											return false;
										}
										return true;
									},
									onClose: () => {
										rootOpen.set(false);
										$rootActiveTrigger.focus();
									},
									open: $isVisible
								},
								portal: getPortalDestination(node, $portal),
								escapeKeydown: $closeOnEscape ? void 0 : null
							}
						}).destroy;
					});
				}
			);
			const unsubEvents = executeCallbacks(
				addMeltEventListener(node, 'keydown', (e) => {
					const target = e.target;
					const menuEl = e.currentTarget;
					if (!isHTMLElement(target) || !isHTMLElement(menuEl)) return;
					const isKeyDownInside = target.closest('[role="menu"]') === menuEl;
					if (!isKeyDownInside) return;
					if (FIRST_LAST_KEYS.includes(e.key)) {
						handleMenuNavigation(e, loop.get() ?? false);
					}
					if (e.key === kbd.TAB) {
						e.preventDefault();
						rootOpen.set(false);
						handleTabNavigation(e, nextFocusable, prevFocusable);
						return;
					}
					const isCharacterKey = e.key.length === 1;
					const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
					if (!isModifierKey && isCharacterKey && typeahead.get() === true) {
						handleTypeaheadSearch(e.key, getMenuItems(menuEl));
					}
				})
			);
			return {
				destroy() {
					unsubDerived();
					unsubEvents();
					unsubPopper();
				}
			};
		}
	});
	const rootTrigger = makeElement(name('trigger'), {
		stores: [rootOpen, rootIds.menu, rootIds.trigger],
		returned: ([$rootOpen, $rootMenuId, $rootTriggerId]) => {
			return {
				'aria-controls': $rootMenuId,
				'aria-expanded': $rootOpen,
				'data-state': $rootOpen ? 'open' : 'closed',
				id: $rootTriggerId,
				tabindex: 0
			};
		},
		action: (node) => {
			applyAttrsIfDisabled(node);
			rootActiveTrigger.update((p) => {
				if (p) return p;
				return node;
			});
			const unsub = executeCallbacks(
				addMeltEventListener(node, 'click', (e) => {
					const $rootOpen = rootOpen.get();
					const triggerEl = e.currentTarget;
					if (!isHTMLElement(triggerEl)) return;
					handleOpen(triggerEl);
					if (!$rootOpen) e.preventDefault();
				}),
				addMeltEventListener(node, 'keydown', (e) => {
					const triggerEl = e.currentTarget;
					if (!isHTMLElement(triggerEl)) return;
					if (!(SELECTION_KEYS.includes(e.key) || e.key === kbd.ARROW_DOWN)) return;
					e.preventDefault();
					handleOpen(triggerEl);
					const menuId = triggerEl.getAttribute('aria-controls');
					if (!menuId) return;
					const menu = document.getElementById(menuId);
					if (!menu) return;
					const menuItems = getMenuItems(menu);
					if (!menuItems.length) return;
					handleRovingFocus(menuItems[0]);
				})
			);
			return {
				destroy: unsub
			};
		}
	});
	const rootArrow = makeElement(name('arrow'), {
		stores: arrowSize,
		returned: ($arrowSize) => ({
			'data-arrow': true,
			style: styleToString({
				position: 'absolute',
				width: `var(--arrow-size, ${$arrowSize}px)`,
				height: `var(--arrow-size, ${$arrowSize}px)`
			})
		})
	});
	const overlay = makeElement(name('overlay'), {
		stores: [isVisible],
		returned: ([$isVisible]) => {
			return {
				hidden: $isVisible ? void 0 : true,
				tabindex: -1,
				style: styleToString({
					display: $isVisible ? void 0 : 'none'
				}),
				'aria-hidden': 'true',
				'data-state': stateAttr($isVisible)
			};
		},
		action: (node) => {
			let unsubEscapeKeydown = noop;
			if (closeOnEscape.get()) {
				const escapeKeydown = useEscapeKeydown(node, {
					handler: () => {
						rootOpen.set(false);
						const $rootActiveTrigger = rootActiveTrigger.get();
						if ($rootActiveTrigger) $rootActiveTrigger.focus();
					}
				});
				if (escapeKeydown && escapeKeydown.destroy) {
					unsubEscapeKeydown = escapeKeydown.destroy;
				}
			}
			const unsubPortal = effect([portal], ([$portal]) => {
				if ($portal === null) return noop;
				const portalDestination = getPortalDestination(node, $portal);
				if (portalDestination === null) return noop;
				return usePortal(node, portalDestination).destroy;
			});
			return {
				destroy() {
					unsubEscapeKeydown();
					unsubPortal();
				}
			};
		}
	});
	const item = makeElement(name('item'), {
		returned: () => {
			return {
				role: 'menuitem',
				tabindex: -1,
				'data-orientation': 'vertical'
			};
		},
		action: (node) => {
			setMeltMenuAttribute(node, selector);
			applyAttrsIfDisabled(node);
			const unsub = executeCallbacks(
				addMeltEventListener(node, 'pointerdown', (e) => {
					const itemEl = e.currentTarget;
					if (!isHTMLElement(itemEl)) return;
					if (isElementDisabled(itemEl)) {
						e.preventDefault();
						return;
					}
				}),
				addMeltEventListener(node, 'click', (e) => {
					const itemEl = e.currentTarget;
					if (!isHTMLElement(itemEl)) return;
					if (isElementDisabled(itemEl)) {
						e.preventDefault();
						return;
					}
					if (e.defaultPrevented) {
						handleRovingFocus(itemEl);
						return;
					}
					if (closeOnItemClick.get()) {
						sleep(1).then(() => {
							rootOpen.set(false);
						});
					}
				}),
				addMeltEventListener(node, 'keydown', (e) => {
					onItemKeyDown(e);
				}),
				addMeltEventListener(node, 'pointermove', (e) => {
					onMenuItemPointerMove(e);
				}),
				addMeltEventListener(node, 'pointerleave', (e) => {
					onMenuItemPointerLeave(e);
				}),
				addMeltEventListener(node, 'focusin', (e) => {
					onItemFocusIn(e);
				}),
				addMeltEventListener(node, 'focusout', (e) => {
					onItemFocusOut(e);
				})
			);
			return {
				destroy: unsub
			};
		}
	});
	const group = makeElement(name('group'), {
		returned: () => {
			return (groupId) => ({
				role: 'group',
				'aria-labelledby': groupId
			});
		}
	});
	const groupLabel = makeElement(name('group-label'), {
		returned: () => {
			return (groupId) => ({
				id: groupId
			});
		}
	});
	const checkboxItemDefaults = {
		defaultChecked: false,
		disabled: false
	};
	const createCheckboxItem = (props) => {
		const withDefaults = { ...checkboxItemDefaults, ...props };
		const checkedWritable = withDefaults.checked ?? writable(withDefaults.defaultChecked ?? null);
		const checked = overridable(checkedWritable, withDefaults.onCheckedChange);
		const disabled = writable(withDefaults.disabled);
		const checkboxItem = makeElement(name('checkbox-item'), {
			stores: [checked, disabled],
			returned: ([$checked, $disabled]) => {
				return {
					role: 'menuitemcheckbox',
					tabindex: -1,
					'data-orientation': 'vertical',
					'aria-checked': isIndeterminate($checked) ? 'mixed' : $checked ? 'true' : 'false',
					'data-disabled': disabledAttr($disabled),
					'data-state': getCheckedState($checked)
				};
			},
			action: (node) => {
				setMeltMenuAttribute(node, selector);
				applyAttrsIfDisabled(node);
				const unsub = executeCallbacks(
					addMeltEventListener(node, 'pointerdown', (e) => {
						const itemEl = e.currentTarget;
						if (!isHTMLElement(itemEl)) return;
						if (isElementDisabled(itemEl)) {
							e.preventDefault();
							return;
						}
					}),
					addMeltEventListener(node, 'click', (e) => {
						const itemEl = e.currentTarget;
						if (!isHTMLElement(itemEl)) return;
						if (isElementDisabled(itemEl)) {
							e.preventDefault();
							return;
						}
						if (e.defaultPrevented) {
							handleRovingFocus(itemEl);
							return;
						}
						checked.update((prev) => {
							if (isIndeterminate(prev)) return true;
							return !prev;
						});
						if (closeOnItemClick.get()) {
							tick().then(() => {
								rootOpen.set(false);
							});
						}
					}),
					addMeltEventListener(node, 'keydown', (e) => {
						onItemKeyDown(e);
					}),
					addMeltEventListener(node, 'pointermove', (e) => {
						const itemEl = e.currentTarget;
						if (!isHTMLElement(itemEl)) return;
						if (isElementDisabled(itemEl)) {
							onItemLeave(e);
							return;
						}
						onMenuItemPointerMove(e, itemEl);
					}),
					addMeltEventListener(node, 'pointerleave', (e) => {
						onMenuItemPointerLeave(e);
					}),
					addMeltEventListener(node, 'focusin', (e) => {
						onItemFocusIn(e);
					}),
					addMeltEventListener(node, 'focusout', (e) => {
						onItemFocusOut(e);
					})
				);
				return {
					destroy: unsub
				};
			}
		});
		const isChecked = derived(checked, ($checked) => $checked === true);
		const _isIndeterminate = derived(checked, ($checked) => $checked === 'indeterminate');
		return {
			elements: {
				checkboxItem
			},
			states: {
				checked
			},
			helpers: {
				isChecked,
				isIndeterminate: _isIndeterminate
			},
			options: {
				disabled
			}
		};
	};
	const createMenuRadioGroup = (args = {}) => {
		const valueWritable = args.value ?? writable(args.defaultValue ?? null);
		const value = overridable(valueWritable, args.onValueChange);
		const radioGroup = makeElement(name('radio-group'), {
			returned: () => ({
				role: 'group'
			})
		});
		const radioItemDefaults = {
			disabled: false
		};
		const radioItem = makeElement(name('radio-item'), {
			stores: [value],
			returned: ([$value]) => {
				return (itemProps) => {
					const { value: itemValue, disabled } = { ...radioItemDefaults, ...itemProps };
					const checked = $value === itemValue;
					return {
						disabled,
						role: 'menuitemradio',
						'data-state': checked ? 'checked' : 'unchecked',
						'aria-checked': checked,
						'data-disabled': disabledAttr(disabled),
						'data-value': itemValue,
						'data-orientation': 'vertical',
						tabindex: -1
					};
				};
			},
			action: (node) => {
				setMeltMenuAttribute(node, selector);
				const unsub = executeCallbacks(
					addMeltEventListener(node, 'pointerdown', (e) => {
						const itemEl = e.currentTarget;
						if (!isHTMLElement(itemEl)) return;
						const itemValue = node.dataset.value;
						const disabled = node.dataset.disabled;
						if (disabled || itemValue === void 0) {
							e.preventDefault();
							return;
						}
					}),
					addMeltEventListener(node, 'click', (e) => {
						const itemEl = e.currentTarget;
						if (!isHTMLElement(itemEl)) return;
						const itemValue = node.dataset.value;
						const disabled = node.dataset.disabled;
						if (disabled || itemValue === void 0) {
							e.preventDefault();
							return;
						}
						if (e.defaultPrevented) {
							if (!isHTMLElement(itemEl)) return;
							handleRovingFocus(itemEl);
							return;
						}
						value.set(itemValue);
						if (closeOnItemClick.get()) {
							tick().then(() => {
								rootOpen.set(false);
							});
						}
					}),
					addMeltEventListener(node, 'keydown', (e) => {
						onItemKeyDown(e);
					}),
					addMeltEventListener(node, 'pointermove', (e) => {
						const itemEl = e.currentTarget;
						if (!isHTMLElement(itemEl)) return;
						const itemValue = node.dataset.value;
						const disabled = node.dataset.disabled;
						if (disabled || itemValue === void 0) {
							onItemLeave(e);
							return;
						}
						onMenuItemPointerMove(e, itemEl);
					}),
					addMeltEventListener(node, 'pointerleave', (e) => {
						onMenuItemPointerLeave(e);
					}),
					addMeltEventListener(node, 'focusin', (e) => {
						onItemFocusIn(e);
					}),
					addMeltEventListener(node, 'focusout', (e) => {
						onItemFocusOut(e);
					})
				);
				return {
					destroy: unsub
				};
			}
		});
		const isChecked = derived(value, ($value) => {
			return (itemValue) => {
				return $value === itemValue;
			};
		});
		return {
			elements: {
				radioGroup,
				radioItem
			},
			states: {
				value
			},
			helpers: {
				isChecked
			}
		};
	};
	const {
		elements: { root: separator }
	} = createSeparator({
		orientation: 'horizontal'
	});
	const subMenuDefaults = {
		...defaults$2,
		disabled: false,
		positioning: {
			placement: 'right-start',
			gutter: 8
		}
	};
	const createSubmenu = (args) => {
		const withDefaults = { ...subMenuDefaults, ...args };
		const subOpenWritable = withDefaults.open ?? writable(false);
		const subOpen = overridable(subOpenWritable, withDefaults?.onOpenChange);
		const options = toWritableStores(omit(withDefaults, 'ids'));
		const { positioning: positioning2, arrowSize: arrowSize2, disabled } = options;
		const subActiveTrigger = withGet(writable(null));
		const subOpenTimer = withGet(writable(null));
		const pointerGraceTimer = withGet(writable(0));
		const subIds = toWritableStores({ ...generateIds(menuIdParts), ...withDefaults.ids });
		safeOnMount(() => {
			const subTrigger2 = document.getElementById(subIds.trigger.get());
			if (subTrigger2) {
				subActiveTrigger.set(subTrigger2);
			}
		});
		const subIsVisible = derivedVisible({
			open: subOpen,
			forceVisible,
			activeTrigger: subActiveTrigger
		});
		const subMenu = makeElement(name('submenu'), {
			stores: [subIsVisible, subIds.menu, subIds.trigger],
			returned: ([$subIsVisible, $subMenuId, $subTriggerId]) => {
				return {
					role: 'menu',
					hidden: $subIsVisible ? void 0 : true,
					style: styleToString({
						display: $subIsVisible ? void 0 : 'none'
					}),
					id: $subMenuId,
					'aria-labelledby': $subTriggerId,
					'data-state': $subIsVisible ? 'open' : 'closed',
					// unit tests fail on `.closest` if the id starts with a number
					// so using a data attribute
					'data-id': $subMenuId,
					tabindex: -1
				};
			},
			action: (node) => {
				let unsubPopper = noop;
				const unsubDerived = effect(
					[subIsVisible, positioning2],
					([$subIsVisible, $positioning]) => {
						unsubPopper();
						if (!$subIsVisible) return;
						const activeTrigger = subActiveTrigger.get();
						if (!activeTrigger) return;
						tick().then(() => {
							unsubPopper();
							const parentMenuEl = getParentMenu(activeTrigger);
							unsubPopper = usePopper(node, {
								anchorElement: activeTrigger,
								open: subOpen,
								options: {
									floating: $positioning,
									portal: isHTMLElement(parentMenuEl) ? parentMenuEl : void 0,
									modal: null,
									focusTrap: null,
									escapeKeydown: null
								}
							}).destroy;
						});
					}
				);
				const unsubEvents = executeCallbacks(
					addMeltEventListener(node, 'keydown', (e) => {
						if (e.key === kbd.ESCAPE) {
							return;
						}
						const target = e.target;
						const menuEl = e.currentTarget;
						if (!isHTMLElement(target) || !isHTMLElement(menuEl)) return;
						const isKeyDownInside = target.closest('[role="menu"]') === menuEl;
						if (!isKeyDownInside) return;
						if (FIRST_LAST_KEYS.includes(e.key)) {
							e.stopImmediatePropagation();
							handleMenuNavigation(e, loop.get() ?? false);
							return;
						}
						const isCloseKey = SUB_CLOSE_KEYS['ltr'].includes(e.key);
						const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
						const isCharacterKey = e.key.length === 1;
						if (isCloseKey) {
							const $subActiveTrigger = subActiveTrigger.get();
							e.preventDefault();
							subOpen.update(() => {
								if ($subActiveTrigger) {
									handleRovingFocus($subActiveTrigger);
								}
								return false;
							});
							return;
						}
						if (e.key === kbd.TAB) {
							e.preventDefault();
							rootOpen.set(false);
							handleTabNavigation(e, nextFocusable, prevFocusable);
							return;
						}
						if (!isModifierKey && isCharacterKey && typeahead.get() === true) {
							handleTypeaheadSearch(e.key, getMenuItems(menuEl));
						}
					}),
					addMeltEventListener(node, 'pointermove', (e) => {
						onMenuPointerMove(e);
					}),
					addMeltEventListener(node, 'focusout', (e) => {
						const $subActiveTrigger = subActiveTrigger.get();
						if (isUsingKeyboard.get()) {
							const target = e.target;
							const submenuEl = document.getElementById(subIds.menu.get());
							if (!isHTMLElement(submenuEl) || !isHTMLElement(target)) return;
							if (!submenuEl.contains(target) && target !== $subActiveTrigger) {
								subOpen.set(false);
							}
						} else {
							const menuEl = e.currentTarget;
							const relatedTarget = e.relatedTarget;
							if (!isHTMLElement(relatedTarget) || !isHTMLElement(menuEl)) return;
							if (!menuEl.contains(relatedTarget) && relatedTarget !== $subActiveTrigger) {
								subOpen.set(false);
							}
						}
					})
				);
				return {
					destroy() {
						unsubDerived();
						unsubPopper();
						unsubEvents();
					}
				};
			}
		});
		const subTrigger = makeElement(name('subtrigger'), {
			stores: [subOpen, disabled, subIds.menu, subIds.trigger],
			returned: ([$subOpen, $disabled, $subMenuId, $subTriggerId]) => {
				return {
					role: 'menuitem',
					id: $subTriggerId,
					tabindex: -1,
					'aria-controls': $subMenuId,
					'aria-expanded': $subOpen,
					'data-state': $subOpen ? 'open' : 'closed',
					'data-disabled': disabledAttr($disabled),
					'aria-haspopop': 'menu'
				};
			},
			action: (node) => {
				setMeltMenuAttribute(node, selector);
				applyAttrsIfDisabled(node);
				subActiveTrigger.update((p) => {
					if (p) return p;
					return node;
				});
				const unsubTimer = () => {
					clearTimerStore(subOpenTimer);
					window.clearTimeout(pointerGraceTimer.get());
					pointerGraceIntent.set(null);
				};
				const unsubEvents = executeCallbacks(
					addMeltEventListener(node, 'click', (e) => {
						if (e.defaultPrevented) return;
						const triggerEl = e.currentTarget;
						if (!isHTMLElement(triggerEl) || isElementDisabled(triggerEl)) return;
						handleRovingFocus(triggerEl);
						if (!subOpen.get()) {
							subOpen.update((prev) => {
								const isAlreadyOpen = prev;
								if (!isAlreadyOpen) {
									subActiveTrigger.set(triggerEl);
									return !prev;
								}
								return prev;
							});
						}
					}),
					addMeltEventListener(node, 'keydown', (e) => {
						const $typed = typed.get();
						const triggerEl = e.currentTarget;
						if (!isHTMLElement(triggerEl) || isElementDisabled(triggerEl)) return;
						const isTypingAhead = $typed.length > 0;
						if (isTypingAhead && e.key === kbd.SPACE) return;
						if (SUB_OPEN_KEYS['ltr'].includes(e.key)) {
							if (!subOpen.get()) {
								triggerEl.click();
								e.preventDefault();
								return;
							}
							const menuId = triggerEl.getAttribute('aria-controls');
							if (!menuId) return;
							const menuEl = document.getElementById(menuId);
							if (!isHTMLElement(menuEl)) return;
							const firstItem = getMenuItems(menuEl)[0];
							handleRovingFocus(firstItem);
						}
					}),
					addMeltEventListener(node, 'pointermove', (e) => {
						if (!isMouse(e)) return;
						onItemEnter(e);
						if (e.defaultPrevented) return;
						const triggerEl = e.currentTarget;
						if (!isHTMLElement(triggerEl)) return;
						if (!isFocusWithinSubmenu(subIds.menu.get())) {
							handleRovingFocus(triggerEl);
						}
						const openTimer = subOpenTimer.get();
						if (!subOpen.get() && !openTimer && !isElementDisabled(triggerEl)) {
							subOpenTimer.set(
								window.setTimeout(() => {
									subOpen.update(() => {
										subActiveTrigger.set(triggerEl);
										return true;
									});
									clearTimerStore(subOpenTimer);
								}, 100)
							);
						}
					}),
					addMeltEventListener(node, 'pointerleave', (e) => {
						if (!isMouse(e)) return;
						clearTimerStore(subOpenTimer);
						const submenuEl = document.getElementById(subIds.menu.get());
						const contentRect = submenuEl?.getBoundingClientRect();
						if (contentRect) {
							const side = submenuEl?.dataset.side;
							const rightSide = side === 'right';
							const bleed = rightSide ? -5 : 5;
							const contentNearEdge = contentRect[rightSide ? 'left' : 'right'];
							const contentFarEdge = contentRect[rightSide ? 'right' : 'left'];
							pointerGraceIntent.set({
								area: [
									// Apply a bleed on clientX to ensure that our exit point is
									// consistently within polygon bounds
									{ x: e.clientX + bleed, y: e.clientY },
									{ x: contentNearEdge, y: contentRect.top },
									{ x: contentFarEdge, y: contentRect.top },
									{ x: contentFarEdge, y: contentRect.bottom },
									{ x: contentNearEdge, y: contentRect.bottom }
								],
								side
							});
							window.clearTimeout(pointerGraceTimer.get());
							pointerGraceTimer.set(
								window.setTimeout(() => {
									pointerGraceIntent.set(null);
								}, 300)
							);
						} else {
							onTriggerLeave(e);
							if (e.defaultPrevented) return;
							pointerGraceIntent.set(null);
						}
					}),
					addMeltEventListener(node, 'focusout', (e) => {
						const triggerEl = e.currentTarget;
						if (!isHTMLElement(triggerEl)) return;
						removeHighlight(triggerEl);
						const relatedTarget = e.relatedTarget;
						if (!isHTMLElement(relatedTarget)) return;
						const menuId = triggerEl.getAttribute('aria-controls');
						if (!menuId) return;
						const menu = document.getElementById(menuId);
						if (menu && !menu.contains(relatedTarget)) {
							subOpen.set(false);
						}
					}),
					addMeltEventListener(node, 'focusin', (e) => {
						onItemFocusIn(e);
					})
				);
				return {
					destroy() {
						unsubTimer();
						unsubEvents();
					}
				};
			}
		});
		const subArrow = makeElement(name('subarrow'), {
			stores: arrowSize2,
			returned: ($arrowSize) => ({
				'data-arrow': true,
				style: styleToString({
					position: 'absolute',
					width: `var(--arrow-size, ${$arrowSize}px)`,
					height: `var(--arrow-size, ${$arrowSize}px)`
				})
			})
		});
		effect([rootOpen], ([$rootOpen]) => {
			if (!$rootOpen) {
				subActiveTrigger.set(null);
				subOpen.set(false);
			}
		});
		effect([pointerGraceIntent], ([$pointerGraceIntent]) => {
			if (!isBrowser || $pointerGraceIntent) return;
			window.clearTimeout(pointerGraceTimer.get());
		});
		effect([subOpen], ([$subOpen]) => {
			if (!isBrowser) return;
			if ($subOpen && isUsingKeyboard.get()) {
				sleep(1).then(() => {
					const menuEl = document.getElementById(subIds.menu.get());
					if (!menuEl) return;
					const menuItems = getMenuItems(menuEl);
					if (!menuItems.length) return;
					handleRovingFocus(menuItems[0]);
				});
			}
			if (!$subOpen) {
				const focusedItem = currentFocusedItem.get();
				const subTriggerEl = document.getElementById(subIds.trigger.get());
				if (focusedItem) {
					sleep(1).then(() => {
						const menuEl = document.getElementById(subIds.menu.get());
						if (!menuEl) return;
						if (menuEl.contains(focusedItem)) {
							removeHighlight(focusedItem);
						}
					});
				}
				if (!subTriggerEl || document.activeElement === subTriggerEl) return;
				removeHighlight(subTriggerEl);
			}
		});
		return {
			ids: subIds,
			elements: {
				subTrigger,
				subMenu,
				subArrow
			},
			states: {
				subOpen
			},
			options
		};
	};
	safeOnMount(() => {
		const triggerEl = document.getElementById(rootIds.trigger.get());
		if (isHTMLElement(triggerEl) && rootOpen.get()) {
			rootActiveTrigger.set(triggerEl);
		}
		const unsubs = [];
		const handlePointer = () => isUsingKeyboard.set(false);
		const handleKeyDown = () => {
			isUsingKeyboard.set(true);
			unsubs.push(
				executeCallbacks(
					addEventListener(document, 'pointerdown', handlePointer, { capture: true, once: true }),
					addEventListener(document, 'pointermove', handlePointer, { capture: true, once: true })
				)
			);
		};
		const keydownListener = (e) => {
			if (e.key === kbd.ESCAPE && closeOnEscape.get()) {
				rootOpen.set(false);
				return;
			}
		};
		unsubs.push(addEventListener(document, 'keydown', handleKeyDown, { capture: true }));
		unsubs.push(addEventListener(document, 'keydown', keydownListener));
		return () => {
			unsubs.forEach((unsub) => unsub());
		};
	});
	effect([rootOpen, currentFocusedItem], ([$rootOpen, $currentFocusedItem]) => {
		if (!$rootOpen && $currentFocusedItem) {
			removeHighlight($currentFocusedItem);
		}
	});
	effect([rootOpen], ([$rootOpen]) => {
		if (!isBrowser) return;
		if (!$rootOpen) {
			const $rootActiveTrigger = rootActiveTrigger.get();
			if (!$rootActiveTrigger) return;
			const $closeFocus = closeFocus.get();
			if (!$rootOpen && $rootActiveTrigger) {
				handleFocus({ prop: $closeFocus, defaultEl: $rootActiveTrigger });
			}
		}
	});
	effect([rootOpen, preventScroll], ([$rootOpen, $preventScroll]) => {
		if (!isBrowser) return;
		const unsubs = [];
		if ($rootOpen && $preventScroll) {
			unsubs.push(removeScroll());
		}
		sleep(1).then(() => {
			const menuEl = document.getElementById(rootIds.menu.get());
			if (menuEl && $rootOpen && isUsingKeyboard.get()) {
				if (disableFocusFirstItem.get()) {
					handleRovingFocus(menuEl);
					return;
				}
				const menuItems = getMenuItems(menuEl);
				if (!menuItems.length) return;
				handleRovingFocus(menuItems[0]);
			}
		});
		return () => {
			unsubs.forEach((unsub) => unsub());
		};
	});
	effect(rootOpen, ($rootOpen) => {
		if (!isBrowser) return;
		const handlePointer = () => isUsingKeyboard.set(false);
		const handleKeyDown = (e) => {
			isUsingKeyboard.set(true);
			if (e.key === kbd.ESCAPE && $rootOpen && closeOnEscape.get()) {
				rootOpen.set(false);
				return;
			}
		};
		return executeCallbacks(
			addEventListener(document, 'pointerdown', handlePointer, { capture: true, once: true }),
			addEventListener(document, 'pointermove', handlePointer, { capture: true, once: true }),
			addEventListener(document, 'keydown', handleKeyDown, { capture: true })
		);
	});
	function handleOpen(triggerEl) {
		rootOpen.update((prev) => {
			const isOpen = !prev;
			if (isOpen) {
				nextFocusable.set(getNextFocusable(triggerEl));
				prevFocusable.set(getPreviousFocusable(triggerEl));
				rootActiveTrigger.set(triggerEl);
			}
			return isOpen;
		});
	}
	function onItemFocusIn(e) {
		const itemEl = e.currentTarget;
		if (!isHTMLElement(itemEl)) return;
		const $currentFocusedItem = currentFocusedItem.get();
		if ($currentFocusedItem) {
			removeHighlight($currentFocusedItem);
		}
		addHighlight(itemEl);
		currentFocusedItem.set(itemEl);
	}
	function onItemFocusOut(e) {
		const itemEl = e.currentTarget;
		if (!isHTMLElement(itemEl)) return;
		removeHighlight(itemEl);
	}
	function onItemEnter(e) {
		if (isPointerMovingToSubmenu(e)) {
			e.preventDefault();
		}
	}
	function onItemLeave(e) {
		if (isPointerMovingToSubmenu(e)) {
			return;
		}
		const target = e.target;
		if (!isHTMLElement(target)) return;
		const parentMenuEl = getParentMenu(target);
		if (!parentMenuEl) return;
		handleRovingFocus(parentMenuEl);
	}
	function onTriggerLeave(e) {
		if (isPointerMovingToSubmenu(e)) {
			e.preventDefault();
		}
	}
	function onMenuPointerMove(e) {
		if (!isMouse(e)) return;
		const target = e.target;
		const currentTarget = e.currentTarget;
		if (!isHTMLElement(currentTarget) || !isHTMLElement(target)) return;
		const $lastPointerX = lastPointerX.get();
		const pointerXHasChanged = $lastPointerX !== e.clientX;
		if (currentTarget.contains(target) && pointerXHasChanged) {
			const newDir = e.clientX > $lastPointerX ? 'right' : 'left';
			pointerDir.set(newDir);
			lastPointerX.set(e.clientX);
		}
	}
	function onMenuItemPointerMove(e, currTarget = null) {
		if (!isMouse(e)) return;
		onItemEnter(e);
		if (e.defaultPrevented) return;
		if (currTarget) {
			handleRovingFocus(currTarget);
			return;
		}
		const currentTarget = e.currentTarget;
		if (!isHTMLElement(currentTarget)) return;
		handleRovingFocus(currentTarget);
	}
	function onMenuItemPointerLeave(e) {
		if (!isMouse(e)) return;
		onItemLeave(e);
	}
	function onItemKeyDown(e) {
		const $typed = typed.get();
		const isTypingAhead = $typed.length > 0;
		if (isTypingAhead && e.key === kbd.SPACE) {
			e.preventDefault();
			return;
		}
		if (SELECTION_KEYS.includes(e.key)) {
			e.preventDefault();
			const itemEl = e.currentTarget;
			if (!isHTMLElement(itemEl)) return;
			itemEl.click();
		}
	}
	function isIndeterminate(checked) {
		return checked === 'indeterminate';
	}
	function getCheckedState(checked) {
		return isIndeterminate(checked) ? 'indeterminate' : checked ? 'checked' : 'unchecked';
	}
	function isPointerMovingToSubmenu(e) {
		return pointerMovingToSubmenu.get()(e);
	}
	function getParentMenu(element) {
		const parentMenuEl = element.closest('[role="menu"]');
		if (!isHTMLElement(parentMenuEl)) return null;
		return parentMenuEl;
	}
	return {
		elements: {
			trigger: rootTrigger,
			menu: rootMenu,
			overlay,
			item,
			group,
			groupLabel,
			arrow: rootArrow,
			separator
		},
		builders: {
			createCheckboxItem,
			createSubmenu,
			createMenuRadioGroup
		},
		states: {
			open: rootOpen
		},
		helpers: {
			handleTypeaheadSearch
		},
		ids: rootIds,
		options: opts.rootOptions
	};
}
function handleTabNavigation(e, nextFocusable, prevFocusable) {
	if (e.shiftKey) {
		const $prevFocusable = prevFocusable.get();
		if ($prevFocusable) {
			e.preventDefault();
			sleep(1).then(() => $prevFocusable.focus());
			prevFocusable.set(null);
		}
	} else {
		const $nextFocusable = nextFocusable.get();
		if ($nextFocusable) {
			e.preventDefault();
			sleep(1).then(() => $nextFocusable.focus());
			nextFocusable.set(null);
		}
	}
}
function getMenuItems(menuElement) {
	return Array.from(menuElement.querySelectorAll(`[data-melt-menu-id="${menuElement.id}"]`)).filter(
		(item) => isHTMLElement(item)
	);
}
function applyAttrsIfDisabled(element) {
	if (!element || !isElementDisabled(element)) return;
	element.setAttribute('data-disabled', '');
	element.setAttribute('aria-disabled', 'true');
}
function clearTimerStore(timerStore) {
	if (!isBrowser) return;
	const timer = timerStore.get();
	if (timer) {
		window.clearTimeout(timer);
		timerStore.set(null);
	}
}
function isMouse(e) {
	return e.pointerType === 'mouse';
}
function setMeltMenuAttribute(element, selector) {
	if (!element) return;
	const menuEl = element.closest(`${selector()}, ${selector('submenu')}`);
	if (!isHTMLElement(menuEl)) return;
	element.setAttribute('data-melt-menu-id', menuEl.id);
}
function handleMenuNavigation(e, loop) {
	e.preventDefault();
	const currentFocusedItem = document.activeElement;
	const currentTarget = e.currentTarget;
	if (!isHTMLElement(currentFocusedItem) || !isHTMLElement(currentTarget)) return;
	const menuItems = getMenuItems(currentTarget);
	if (!menuItems.length) return;
	const candidateNodes = menuItems.filter((item) => {
		if (item.hasAttribute('data-disabled') || item.getAttribute('disabled') === 'true') {
			return false;
		}
		return true;
	});
	const currentIndex = candidateNodes.indexOf(currentFocusedItem);
	let nextIndex;
	switch (e.key) {
		case kbd.ARROW_DOWN:
			if (loop) {
				nextIndex = currentIndex < candidateNodes.length - 1 ? currentIndex + 1 : 0;
			} else {
				nextIndex = currentIndex < candidateNodes.length - 1 ? currentIndex + 1 : currentIndex;
			}
			break;
		case kbd.ARROW_UP:
			if (loop) {
				nextIndex = currentIndex > 0 ? currentIndex - 1 : candidateNodes.length - 1;
			} else {
				nextIndex =
					currentIndex < 0 ? candidateNodes.length - 1 : currentIndex > 0 ? currentIndex - 1 : 0;
			}
			break;
		case kbd.HOME:
			nextIndex = 0;
			break;
		case kbd.END:
			nextIndex = candidateNodes.length - 1;
			break;
		default:
			return;
	}
	handleRovingFocus(candidateNodes[nextIndex]);
}
function isPointerInGraceArea(e, area) {
	if (!area) return false;
	const cursorPos = { x: e.clientX, y: e.clientY };
	return isPointInPolygon(cursorPos, area);
}
function isPointInPolygon(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const xi = polygon[i].x;
		const yi = polygon[i].y;
		const xj = polygon[j].x;
		const yj = polygon[j].y;
		const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
		if (intersect) inside = !inside;
	}
	return inside;
}
function isFocusWithinSubmenu(submenuId) {
	const activeEl = document.activeElement;
	if (!isHTMLElement(activeEl)) return false;
	const submenuEl = activeEl.closest(`[data-id="${submenuId}"]`);
	return isHTMLElement(submenuEl);
}
function stateAttr(open) {
	return open ? 'open' : 'closed';
}
const defaults$1 = {
	arrowSize: 8,
	positioning: {
		placement: 'bottom'
	},
	preventScroll: true,
	closeOnEscape: true,
	closeOnOutsideClick: true,
	portal: void 0,
	loop: false,
	dir: 'ltr',
	defaultOpen: false,
	forceVisible: false,
	typeahead: true,
	closeFocus: void 0,
	disableFocusFirstItem: false,
	closeOnItemClick: true,
	onOutsideClick: void 0
};
function createDropdownMenu(props) {
	const withDefaults = { ...defaults$1, ...props };
	const rootOptions = toWritableStores(omit(withDefaults, 'ids'));
	const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
	const rootOpen = overridable(openWritable, withDefaults?.onOpenChange);
	const rootActiveTrigger = withGet(writable(null));
	const nextFocusable = withGet(writable(null));
	const prevFocusable = withGet(writable(null));
	const { elements, builders, ids, states, options } = createMenuBuilder({
		rootOptions,
		rootOpen,
		rootActiveTrigger: withGet(rootActiveTrigger),
		nextFocusable: withGet(nextFocusable),
		prevFocusable: withGet(prevFocusable),
		selector: 'dropdown-menu',
		removeScroll: true,
		ids: withDefaults.ids
	});
	return {
		ids,
		elements,
		states,
		builders,
		options
	};
}
const defaults = {
	orientation: 'horizontal',
	decorative: false
};
const createSeparator = (props) => {
	const withDefaults = { ...defaults, ...props };
	const options = toWritableStores(withDefaults);
	const { orientation, decorative } = options;
	const root = makeElement('separator', {
		stores: [orientation, decorative],
		returned: ([$orientation, $decorative]) => {
			const ariaOrientation = $orientation === 'vertical' ? $orientation : void 0;
			return {
				role: $decorative ? 'none' : 'separator',
				'aria-orientation': ariaOrientation,
				'aria-hidden': $decorative,
				'data-orientation': $orientation
			};
		}
	});
	return {
		elements: {
			root
		},
		options
	};
};
function getMenuData() {
	const NAME = 'menu';
	const SUB_NAME = 'menu-submenu';
	const RADIO_GROUP_NAME = 'menu-radiogroup';
	const CHECKBOX_ITEM_NAME = 'menu-checkboxitem';
	const RADIO_ITEM_NAME = 'menu-radioitem';
	const GROUP_NAME = 'menu-group';
	const PARTS = [
		'arrow',
		'checkbox-indicator',
		'checkbox-item',
		'content',
		'group',
		'item',
		'label',
		'radio-group',
		'radio-item',
		'radio-indicator',
		'separator',
		'sub-content',
		'sub-trigger',
		'trigger'
	];
	return {
		NAME,
		SUB_NAME,
		RADIO_GROUP_NAME,
		CHECKBOX_ITEM_NAME,
		RADIO_ITEM_NAME,
		GROUP_NAME,
		PARTS
	};
}
function getCtx() {
	const { NAME } = getMenuData();
	return getContext(NAME);
}
function setCtx(props) {
	const { NAME, PARTS } = getMenuData();
	const getAttrs = createBitAttrs('menu', PARTS);
	const dropdownMenu = {
		...createDropdownMenu({ ...removeUndefined(props), forceVisible: true }),
		getAttrs
	};
	setContext(NAME, dropdownMenu);
	return {
		...dropdownMenu,
		updateOption: getOptionUpdater(dropdownMenu.options)
	};
}
function setSubMenuCtx(props) {
	const { SUB_NAME } = getMenuData();
	const {
		builders: { createSubmenu },
		getAttrs
	} = getCtx();
	const sub = { ...createSubmenu(removeUndefined(props)), getAttrs };
	setContext(SUB_NAME, sub);
	return {
		...sub,
		updateOption: getOptionUpdater(sub.options)
	};
}
function getSubTrigger() {
	const { SUB_NAME } = getMenuData();
	const submenu = getContext(SUB_NAME);
	return submenu;
}
function getSubmenuCtx() {
	const { SUB_NAME } = getMenuData();
	return getContext(SUB_NAME);
}
function setGroupCtx() {
	const { GROUP_NAME } = getMenuData();
	const {
		elements: { group },
		getAttrs
	} = getCtx();
	const id = generateId();
	setContext(GROUP_NAME, id);
	return { group, id, getAttrs };
}
function getGroupLabel() {
	const { GROUP_NAME } = getMenuData();
	const id = getContext(GROUP_NAME) ?? generateId();
	const {
		elements: { groupLabel },
		getAttrs
	} = getCtx();
	return { groupLabel, id, getAttrs };
}
function updatePositioning(props) {
	const defaultPlacement = {
		side: 'bottom',
		align: 'center'
	};
	const withDefaults = { ...defaultPlacement, ...props };
	const {
		options: { positioning }
	} = getCtx();
	const updater = getPositioningUpdater(positioning);
	updater(withDefaults);
}
function updateSubPositioning(props) {
	const defaultSubPlacement = {
		side: 'right',
		align: 'start'
	};
	const withDefaults = { ...defaultSubPlacement, ...props };
	const {
		options: { positioning }
	} = getSubmenuCtx();
	const updater = getPositioningUpdater(positioning);
	updater(withDefaults);
}
const Menu_sub = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $idValues, $$unsubscribe_idValues;
	let { disabled = void 0 } = $$props;
	let { open = void 0 } = $$props;
	let { onOpenChange = void 0 } = $$props;
	const {
		updateOption,
		ids,
		states: { subOpen }
	} = setSubMenuCtx({
		disabled,
		onOpenChange: ({ next }) => {
			if (open !== next) {
				onOpenChange?.(next);
				open = next;
			}
			return next;
		}
	});
	const idValues = derived([ids.menu, ids.trigger], ([$menuId, $triggerId]) => ({
		menu: $menuId,
		trigger: $triggerId
	}));
	$$unsubscribe_idValues = subscribe(idValues, (value) => ($idValues = value));
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
		$$bindings.disabled(disabled);
	if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
	if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
		$$bindings.onOpenChange(onOpenChange);
	open !== void 0 && subOpen.set(open);
	{
		updateOption('disabled', disabled);
	}
	$$unsubscribe_idValues();
	return `${slots.default ? slots.default({ subIds: $idValues }) : ``}`;
});
const Menu_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let attrs;
	let $$restProps = compute_rest_props($$props, ['href', 'asChild', 'disabled', 'el']);
	let $item, $$unsubscribe_item;
	let { href = void 0 } = $$props;
	let { asChild = false } = $$props;
	let { disabled = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { item },
		getAttrs
	} = getCtx();
	$$unsubscribe_item = subscribe(item, (value) => ($item = value));
	createDispatcher();
	if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
		$$bindings.disabled(disabled);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	builder = $item;
	attrs = {
		...getAttrs('item'),
		...disabledAttrs(disabled)
	};
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_item();
	return `${
		asChild
			? `${slots.default ? slots.default({ builder }) : ``}`
			: `${((tag) => {
					return tag
						? `<${href ? 'a' : 'div'}${spread(
								[
									{ href: escape_attribute_value(href) },
									escape_object(builder),
									escape_object($$restProps)
								],
								{}
							)}${add_attribute('this', el, 0)}>${is_void(tag) ? '' : `${slots.default ? slots.default({ builder }) : ``}`}${is_void(tag) ? '' : `</${tag}>`}`
						: '';
				})(href ? 'a' : 'div')}`
	}`;
});
const Menu_group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, ['asChild', 'el']);
	let $group, $$unsubscribe_group;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const { group, id, getAttrs } = setGroupCtx();
	$$unsubscribe_group = subscribe(group, (value) => ($group = value));
	const attrs = getAttrs('group');
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	builder = $group(id);
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_group();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Menu_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, ['asChild', 'el']);
	let $groupLabel, $$unsubscribe_groupLabel;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const { groupLabel, id, getAttrs } = getGroupLabel();
	$$unsubscribe_groupLabel = subscribe(groupLabel, (value) => ($groupLabel = value));
	const attrs = getAttrs('label');
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	builder = $groupLabel(id);
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_groupLabel();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Menu_separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, ['asChild', 'el']);
	let $separator, $$unsubscribe_separator;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { separator },
		getAttrs
	} = getCtx();
	$$unsubscribe_separator = subscribe(separator, (value) => ($separator = value));
	const attrs = getAttrs('separator');
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	builder = $separator;
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_separator();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object($separator), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}></div>`}`;
});
const Menu_sub_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, [
		'transition',
		'transitionConfig',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig',
		'asChild',
		'id',
		'side',
		'align',
		'sideOffset',
		'alignOffset',
		'collisionPadding',
		'avoidCollisions',
		'collisionBoundary',
		'sameWidth',
		'fitViewport',
		'strategy',
		'overlap',
		'el'
	]);
	let $subMenu, $$unsubscribe_subMenu;
	let $subOpen, $$unsubscribe_subOpen;
	let { transition = void 0 } = $$props;
	let { transitionConfig = void 0 } = $$props;
	let { inTransition = void 0 } = $$props;
	let { inTransitionConfig = void 0 } = $$props;
	let { outTransition = void 0 } = $$props;
	let { outTransitionConfig = void 0 } = $$props;
	let { asChild = false } = $$props;
	let { id = void 0 } = $$props;
	let { side = 'right' } = $$props;
	let { align = 'start' } = $$props;
	let { sideOffset = 0 } = $$props;
	let { alignOffset = 0 } = $$props;
	let { collisionPadding = 8 } = $$props;
	let { avoidCollisions = true } = $$props;
	let { collisionBoundary = void 0 } = $$props;
	let { sameWidth = false } = $$props;
	let { fitViewport = false } = $$props;
	let { strategy = 'absolute' } = $$props;
	let { overlap = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { subMenu },
		states: { subOpen },
		ids,
		getAttrs
	} = getSubmenuCtx();
	$$unsubscribe_subMenu = subscribe(subMenu, (value) => ($subMenu = value));
	$$unsubscribe_subOpen = subscribe(subOpen, (value) => ($subOpen = value));
	createDispatcher();
	const attrs = getAttrs('sub-content');
	if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
		$$bindings.transition(transition);
	if (
		$$props.transitionConfig === void 0 &&
		$$bindings.transitionConfig &&
		transitionConfig !== void 0
	)
		$$bindings.transitionConfig(transitionConfig);
	if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
		$$bindings.inTransition(inTransition);
	if (
		$$props.inTransitionConfig === void 0 &&
		$$bindings.inTransitionConfig &&
		inTransitionConfig !== void 0
	)
		$$bindings.inTransitionConfig(inTransitionConfig);
	if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
		$$bindings.outTransition(outTransition);
	if (
		$$props.outTransitionConfig === void 0 &&
		$$bindings.outTransitionConfig &&
		outTransitionConfig !== void 0
	)
		$$bindings.outTransitionConfig(outTransitionConfig);
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	if ($$props.side === void 0 && $$bindings.side && side !== void 0) $$bindings.side(side);
	if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
	if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
		$$bindings.sideOffset(sideOffset);
	if ($$props.alignOffset === void 0 && $$bindings.alignOffset && alignOffset !== void 0)
		$$bindings.alignOffset(alignOffset);
	if (
		$$props.collisionPadding === void 0 &&
		$$bindings.collisionPadding &&
		collisionPadding !== void 0
	)
		$$bindings.collisionPadding(collisionPadding);
	if (
		$$props.avoidCollisions === void 0 &&
		$$bindings.avoidCollisions &&
		avoidCollisions !== void 0
	)
		$$bindings.avoidCollisions(avoidCollisions);
	if (
		$$props.collisionBoundary === void 0 &&
		$$bindings.collisionBoundary &&
		collisionBoundary !== void 0
	)
		$$bindings.collisionBoundary(collisionBoundary);
	if ($$props.sameWidth === void 0 && $$bindings.sameWidth && sameWidth !== void 0)
		$$bindings.sameWidth(sameWidth);
	if ($$props.fitViewport === void 0 && $$bindings.fitViewport && fitViewport !== void 0)
		$$bindings.fitViewport(fitViewport);
	if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
		$$bindings.strategy(strategy);
	if ($$props.overlap === void 0 && $$bindings.overlap && overlap !== void 0)
		$$bindings.overlap(overlap);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	{
		if (id) {
			ids.menu.set(id);
		}
	}
	builder = $subMenu;
	{
		Object.assign(builder, attrs);
	}
	{
		updateSubPositioning({
			side,
			align,
			sideOffset,
			alignOffset,
			collisionPadding,
			avoidCollisions,
			collisionBoundary,
			sameWidth,
			fitViewport,
			strategy,
			overlap
		});
	}
	$$unsubscribe_subMenu();
	$$unsubscribe_subOpen();
	return `${asChild && $subOpen ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $subOpen ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $subOpen ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $subOpen ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $subOpen ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$subOpen ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Menu_sub_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let attrs;
	let $$restProps = compute_rest_props($$props, ['disabled', 'asChild', 'id', 'el']);
	let $disabledStore, $$unsubscribe_disabledStore;
	let $subTrigger, $$unsubscribe_subTrigger;
	let { disabled = false } = $$props;
	let { asChild = false } = $$props;
	let { id = void 0 } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { subTrigger },
		ids,
		getAttrs,
		options
	} = getSubTrigger();
	$$unsubscribe_subTrigger = subscribe(subTrigger, (value) => ($subTrigger = value));
	const { disabled: disabledStore } = options;
	$$unsubscribe_disabledStore = subscribe(disabledStore, (value) => ($disabledStore = value));
	createDispatcher();
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
		$$bindings.disabled(disabled);
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	{
		if (id) {
			ids.trigger.set(id);
		}
	}
	builder = $subTrigger;
	attrs = {
		...getAttrs('sub-trigger'),
		...disabledAttrs(disabled || $disabledStore)
	};
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_disabledStore();
	$$unsubscribe_subTrigger();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $idValues, $$unsubscribe_idValues;
	let { closeOnOutsideClick = void 0 } = $$props;
	let { closeOnEscape = void 0 } = $$props;
	let { portal = void 0 } = $$props;
	let { open = void 0 } = $$props;
	let { onOpenChange = void 0 } = $$props;
	let { preventScroll = void 0 } = $$props;
	let { loop = void 0 } = $$props;
	let { dir = void 0 } = $$props;
	let { typeahead = void 0 } = $$props;
	let { closeFocus = void 0 } = $$props;
	let { disableFocusFirstItem = void 0 } = $$props;
	let { closeOnItemClick = void 0 } = $$props;
	let { onOutsideClick = void 0 } = $$props;
	const {
		states: { open: localOpen },
		updateOption,
		ids
	} = setCtx({
		closeOnOutsideClick,
		closeOnEscape,
		portal,
		forceVisible: true,
		defaultOpen: open,
		preventScroll,
		loop,
		dir,
		typeahead,
		closeFocus,
		disableFocusFirstItem,
		closeOnItemClick,
		onOutsideClick,
		onOpenChange: ({ next }) => {
			if (open !== next) {
				onOpenChange?.(next);
				open = next;
			}
			return next;
		}
	});
	const idValues = derived([ids.menu, ids.trigger], ([$menuId, $triggerId]) => ({
		menu: $menuId,
		trigger: $triggerId
	}));
	$$unsubscribe_idValues = subscribe(idValues, (value) => ($idValues = value));
	if (
		$$props.closeOnOutsideClick === void 0 &&
		$$bindings.closeOnOutsideClick &&
		closeOnOutsideClick !== void 0
	)
		$$bindings.closeOnOutsideClick(closeOnOutsideClick);
	if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
		$$bindings.closeOnEscape(closeOnEscape);
	if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
		$$bindings.portal(portal);
	if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
	if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
		$$bindings.onOpenChange(onOpenChange);
	if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
		$$bindings.preventScroll(preventScroll);
	if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0) $$bindings.loop(loop);
	if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0) $$bindings.dir(dir);
	if ($$props.typeahead === void 0 && $$bindings.typeahead && typeahead !== void 0)
		$$bindings.typeahead(typeahead);
	if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0)
		$$bindings.closeFocus(closeFocus);
	if (
		$$props.disableFocusFirstItem === void 0 &&
		$$bindings.disableFocusFirstItem &&
		disableFocusFirstItem !== void 0
	)
		$$bindings.disableFocusFirstItem(disableFocusFirstItem);
	if (
		$$props.closeOnItemClick === void 0 &&
		$$bindings.closeOnItemClick &&
		closeOnItemClick !== void 0
	)
		$$bindings.closeOnItemClick(closeOnItemClick);
	if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0)
		$$bindings.onOutsideClick(onOutsideClick);
	open !== void 0 && localOpen.set(open);
	{
		updateOption('closeOnOutsideClick', closeOnOutsideClick);
	}
	{
		updateOption('closeOnEscape', closeOnEscape);
	}
	{
		updateOption('portal', portal);
	}
	{
		updateOption('preventScroll', preventScroll);
	}
	{
		updateOption('loop', loop);
	}
	{
		updateOption('dir', dir);
	}
	{
		updateOption('closeFocus', closeFocus);
	}
	{
		updateOption('disableFocusFirstItem', disableFocusFirstItem);
	}
	{
		updateOption('typeahead', typeahead);
	}
	{
		updateOption('closeOnItemClick', closeOnItemClick);
	}
	{
		updateOption('onOutsideClick', onOutsideClick);
	}
	$$unsubscribe_idValues();
	return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Menu_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, [
		'transition',
		'transitionConfig',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig',
		'asChild',
		'id',
		'side',
		'align',
		'sideOffset',
		'alignOffset',
		'collisionPadding',
		'avoidCollisions',
		'collisionBoundary',
		'sameWidth',
		'fitViewport',
		'strategy',
		'overlap',
		'el'
	]);
	let $open, $$unsubscribe_open;
	let $menu, $$unsubscribe_menu;
	let { transition = void 0 } = $$props;
	let { transitionConfig = void 0 } = $$props;
	let { inTransition = void 0 } = $$props;
	let { inTransitionConfig = void 0 } = $$props;
	let { outTransition = void 0 } = $$props;
	let { outTransitionConfig = void 0 } = $$props;
	let { asChild = false } = $$props;
	let { id = void 0 } = $$props;
	let { side = 'bottom' } = $$props;
	let { align = 'center' } = $$props;
	let { sideOffset = 0 } = $$props;
	let { alignOffset = 0 } = $$props;
	let { collisionPadding = 8 } = $$props;
	let { avoidCollisions = true } = $$props;
	let { collisionBoundary = void 0 } = $$props;
	let { sameWidth = false } = $$props;
	let { fitViewport = false } = $$props;
	let { strategy = 'absolute' } = $$props;
	let { overlap = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { menu },
		states: { open },
		ids,
		getAttrs
	} = getCtx();
	$$unsubscribe_menu = subscribe(menu, (value) => ($menu = value));
	$$unsubscribe_open = subscribe(open, (value) => ($open = value));
	createDispatcher();
	const attrs = getAttrs('content');
	if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
		$$bindings.transition(transition);
	if (
		$$props.transitionConfig === void 0 &&
		$$bindings.transitionConfig &&
		transitionConfig !== void 0
	)
		$$bindings.transitionConfig(transitionConfig);
	if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
		$$bindings.inTransition(inTransition);
	if (
		$$props.inTransitionConfig === void 0 &&
		$$bindings.inTransitionConfig &&
		inTransitionConfig !== void 0
	)
		$$bindings.inTransitionConfig(inTransitionConfig);
	if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
		$$bindings.outTransition(outTransition);
	if (
		$$props.outTransitionConfig === void 0 &&
		$$bindings.outTransitionConfig &&
		outTransitionConfig !== void 0
	)
		$$bindings.outTransitionConfig(outTransitionConfig);
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	if ($$props.side === void 0 && $$bindings.side && side !== void 0) $$bindings.side(side);
	if ($$props.align === void 0 && $$bindings.align && align !== void 0) $$bindings.align(align);
	if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
		$$bindings.sideOffset(sideOffset);
	if ($$props.alignOffset === void 0 && $$bindings.alignOffset && alignOffset !== void 0)
		$$bindings.alignOffset(alignOffset);
	if (
		$$props.collisionPadding === void 0 &&
		$$bindings.collisionPadding &&
		collisionPadding !== void 0
	)
		$$bindings.collisionPadding(collisionPadding);
	if (
		$$props.avoidCollisions === void 0 &&
		$$bindings.avoidCollisions &&
		avoidCollisions !== void 0
	)
		$$bindings.avoidCollisions(avoidCollisions);
	if (
		$$props.collisionBoundary === void 0 &&
		$$bindings.collisionBoundary &&
		collisionBoundary !== void 0
	)
		$$bindings.collisionBoundary(collisionBoundary);
	if ($$props.sameWidth === void 0 && $$bindings.sameWidth && sameWidth !== void 0)
		$$bindings.sameWidth(sameWidth);
	if ($$props.fitViewport === void 0 && $$bindings.fitViewport && fitViewport !== void 0)
		$$bindings.fitViewport(fitViewport);
	if ($$props.strategy === void 0 && $$bindings.strategy && strategy !== void 0)
		$$bindings.strategy(strategy);
	if ($$props.overlap === void 0 && $$bindings.overlap && overlap !== void 0)
		$$bindings.overlap(overlap);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	{
		if (id) {
			ids.menu.set(id);
		}
	}
	builder = $menu;
	{
		Object.assign(builder, attrs);
	}
	{
		if ($open) {
			updatePositioning({
				side,
				align,
				sideOffset,
				alignOffset,
				collisionPadding,
				avoidCollisions,
				collisionBoundary,
				sameWidth,
				fitViewport,
				strategy,
				overlap
			});
		}
	}
	$$unsubscribe_open();
	$$unsubscribe_menu();
	return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Menu_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, ['asChild', 'id', 'el']);
	let $trigger, $$unsubscribe_trigger;
	let { asChild = false } = $$props;
	let { id = void 0 } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { trigger },
		ids,
		getAttrs
	} = getCtx();
	$$unsubscribe_trigger = subscribe(trigger, (value) => ($trigger = value));
	createDispatcher();
	const attrs = getAttrs('trigger');
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	{
		if (id) {
			ids.trigger.set(id);
		}
	}
	builder = $trigger;
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_trigger();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: 'button' }, escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Dropdown_menu_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class', 'inset']);
	let { class: className = void 0 } = $$props;
	let { inset = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.inset === void 0 && $$bindings.inset && inset !== void 0) $$bindings.inset(inset);
	return `${validate_component(Menu_item, 'DropdownMenuPrimitive.Item').$$render(
		$$result,
		Object.assign(
			{},
			{
				class: cn(
					'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
					inset && 'pl-8',
					className
				)
			},
			$$restProps
		),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Dropdown_menu_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class', 'inset']);
	let { class: className = void 0 } = $$props;
	let { inset = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.inset === void 0 && $$bindings.inset && inset !== void 0) $$bindings.inset(inset);
	return `${validate_component(Menu_label, 'DropdownMenuPrimitive.Label').$$render(
		$$result,
		Object.assign(
			{},
			{
				class: cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)
			},
			$$restProps
		),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Dropdown_menu_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		'class',
		'sideOffset',
		'transition',
		'transitionConfig'
	]);
	let { class: className = void 0 } = $$props;
	let { sideOffset = 4 } = $$props;
	let { transition = flyAndScale } = $$props;
	let { transitionConfig = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
		$$bindings.sideOffset(sideOffset);
	if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
		$$bindings.transition(transition);
	if (
		$$props.transitionConfig === void 0 &&
		$$bindings.transitionConfig &&
		transitionConfig !== void 0
	)
		$$bindings.transitionConfig(transitionConfig);
	return `${validate_component(Menu_content, 'DropdownMenuPrimitive.Content').$$render(
		$$result,
		Object.assign(
			{},
			{ transition },
			{ transitionConfig },
			{ sideOffset },
			{
				class: cn(
					'bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-none',
					className
				)
			},
			$$restProps
		),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Dropdown_menu_shortcut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class']);
	let { class: className = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	return `<span${spread(
		[
			{
				class: escape_attribute_value(cn('ml-auto text-xs tracking-widest opacity-60', className))
			},
			escape_object($$restProps)
		],
		{}
	)}>${slots.default ? slots.default({}) : ``}</span>`;
});
const Dropdown_menu_separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class']);
	let { class: className = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	return `${validate_component(Menu_separator, 'DropdownMenuPrimitive.Separator').$$render(
		$$result,
		Object.assign(
			{},
			{
				class: cn('bg-muted -mx-1 my-1 h-px', className)
			},
			$$restProps
		),
		{},
		{}
	)}`;
});
const Dropdown_menu_sub_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class', 'transition', 'transitionConfig']);
	let { class: className = void 0 } = $$props;
	let { transition = flyAndScale } = $$props;
	let { transitionConfig = { x: -10, y: 0 } } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
		$$bindings.transition(transition);
	if (
		$$props.transitionConfig === void 0 &&
		$$bindings.transitionConfig &&
		transitionConfig !== void 0
	)
		$$bindings.transitionConfig(transitionConfig);
	return `${validate_component(Menu_sub_content, 'DropdownMenuPrimitive.SubContent').$$render(
		$$result,
		Object.assign(
			{},
			{ transition },
			{ transitionConfig },
			{
				class: cn(
					'bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-lg focus:outline-none',
					className
				)
			},
			$$restProps
		),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Dropdown_menu_sub_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class', 'inset']);
	let { class: className = void 0 } = $$props;
	let { inset = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.inset === void 0 && $$bindings.inset && inset !== void 0) $$bindings.inset(inset);
	return `${validate_component(Menu_sub_trigger, 'DropdownMenuPrimitive.SubTrigger').$$render(
		$$result,
		Object.assign(
			{},
			{
				class: cn(
					'data-[highlighted]:bg-accent data-[state=open]:bg-accent data-[highlighted]:text-accent-foreground data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
					inset && 'pl-8',
					className
				)
			},
			$$restProps
		),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``} ${validate_component(Chevron_right, 'ChevronRight').$$render($$result, { class: 'ml-auto h-4 w-4' }, {}, {})}`;
			}
		}
	)}`;
});
const Sub = Menu_sub;
const Root = Menu;
const Trigger = Menu_trigger;
const Group = Menu_group;
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(Root, 'DropdownMenu.Root').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `${validate_component(Trigger, 'DropdownMenu.Trigger').$$render(
					$$result,
					{ asChild: true },
					{},
					{
						default: ({ builder }) => {
							return `${validate_component(Button, 'Button').$$render(
								$$result,
								{
									variant: 'ghost',
									class: 'm-0 h-max w-max bg-none p-0 hover:bg-none focus:bg-none',
									builders: [builder]
								},
								{},
								{
									default: () => {
										return `<div class="img size-10 rounded-full" data-svelte-h="svelte-19w98w7"><img class="size-full cursor-pointer rounded-full active:scale-95"${add_attribute('src', avatar, 0)} alt="avatar"></div>`;
									}
								}
							)}`;
						}
					}
				)} ${validate_component(Dropdown_menu_content, 'DropdownMenu.Content').$$render(
					$$result,
					{ class: 'w-56' },
					{},
					{
						default: () => {
							return `${validate_component(Dropdown_menu_label, 'DropdownMenu.Label').$$render(
								$$result,
								{},
								{},
								{
									default: () => {
										return `My Account`;
									}
								}
							)} ${validate_component(Dropdown_menu_separator, 'DropdownMenu.Separator').$$render($$result, {}, {}, {})} ${validate_component(
								Group,
								'DropdownMenu.Group'
							).$$render(
								$$result,
								{},
								{},
								{
									default: () => {
										return `${validate_component(Dropdown_menu_item, 'DropdownMenu.Item').$$render(
											$$result,
											{},
											{},
											{
												default: () => {
													return `${validate_component(User, 'User').$$render($$result, { class: 'mr-2 h-4 w-4' }, {}, {})} <span data-svelte-h="svelte-pjez1p">Profile</span> ${validate_component(
														Dropdown_menu_shortcut,
														'DropdownMenu.Shortcut'
													).$$render(
														$$result,
														{},
														{},
														{
															default: () => {
																return `⇧⌘P`;
															}
														}
													)}`;
												}
											}
										)} ${validate_component(Dropdown_menu_item, 'DropdownMenu.Item').$$render(
											$$result,
											{},
											{},
											{
												default: () => {
													return `${validate_component(Settings, 'Settings').$$render($$result, { class: 'mr-2 h-4 w-4' }, {}, {})} <span data-svelte-h="svelte-1vto2yn">Settings</span> ${validate_component(
														Dropdown_menu_shortcut,
														'DropdownMenu.Shortcut'
													).$$render(
														$$result,
														{},
														{},
														{
															default: () => {
																return `⌘S`;
															}
														}
													)}`;
												}
											}
										)} ${validate_component(Dropdown_menu_item, 'DropdownMenu.Item').$$render(
											$$result,
											{},
											{},
											{
												default: () => {
													return `${validate_component(Keyboard, 'Keyboard').$$render($$result, { class: 'mr-2 h-4 w-4' }, {}, {})} <span data-svelte-h="svelte-1q1xdio">Keyboard shortcuts</span> ${validate_component(
														Dropdown_menu_shortcut,
														'DropdownMenu.Shortcut'
													).$$render(
														$$result,
														{},
														{},
														{
															default: () => {
																return `⌘K`;
															}
														}
													)}`;
												}
											}
										)}`;
									}
								}
							)} ${validate_component(Dropdown_menu_separator, 'DropdownMenu.Separator').$$render($$result, {}, {}, {})} ${validate_component(
								Group,
								'DropdownMenu.Group'
							).$$render(
								$$result,
								{},
								{},
								{
									default: () => {
										return `${validate_component(Dropdown_menu_item, 'DropdownMenu.Item').$$render(
											$$result,
											{},
											{},
											{
												default: () => {
													return `${validate_component(Users, 'Users').$$render($$result, { class: 'mr-2 h-4 w-4' }, {}, {})} <span data-svelte-h="svelte-4ijn6r">Team</span>`;
												}
											}
										)} ${validate_component(Sub, 'DropdownMenu.Sub').$$render(
											$$result,
											{},
											{},
											{
												default: () => {
													return `${validate_component(
														Dropdown_menu_sub_trigger,
														'DropdownMenu.SubTrigger'
													).$$render(
														$$result,
														{},
														{},
														{
															default: () => {
																return `${validate_component(User_plus, 'UserPlus').$$render($$result, { class: 'mr-2 h-4 w-4' }, {}, {})} <span data-svelte-h="svelte-c2113n">Invite users</span>`;
															}
														}
													)} ${validate_component(
														Dropdown_menu_sub_content,
														'DropdownMenu.SubContent'
													).$$render(
														$$result,
														{},
														{},
														{
															default: () => {
																return `${validate_component(
																	Dropdown_menu_item,
																	'DropdownMenu.Item'
																).$$render(
																	$$result,
																	{},
																	{},
																	{
																		default: () => {
																			return `${validate_component(Message_square, 'MessageSquare').$$render($$result, { class: 'mr-2 h-4 w-4' }, {}, {})} <span data-svelte-h="svelte-cbietz">Message</span>`;
																		}
																	}
																)} ${validate_component(
																	Dropdown_menu_item,
																	'DropdownMenu.Item'
																).$$render(
																	$$result,
																	{},
																	{},
																	{
																		default: () => {
																			return `${validate_component(Circle_plus, 'CirclePlus').$$render($$result, { class: 'mr-2 h-4 w-4' }, {}, {})} <span data-svelte-h="svelte-1qahs85">More...</span>`;
																		}
																	}
																)}`;
															}
														}
													)}`;
												}
											}
										)}`;
									}
								}
							)} ${validate_component(Dropdown_menu_separator, 'DropdownMenu.Separator').$$render($$result, {}, {}, {})} ${validate_component(
								Dropdown_menu_item,
								'DropdownMenu.Item'
							).$$render(
								$$result,
								{},
								{},
								{
									default: () => {
										return `${validate_component(Life_buoy, 'LifeBuoy').$$render($$result, { class: 'mr-2 h-4 w-4' }, {}, {})} <span data-svelte-h="svelte-11qsbur">Support</span>`;
									}
								}
							)} ${validate_component(Dropdown_menu_separator, 'DropdownMenu.Separator').$$render($$result, {}, {}, {})} ${validate_component(
								Dropdown_menu_item,
								'DropdownMenu.Item'
							).$$render(
								$$result,
								{},
								{},
								{
									default: () => {
										return `<form action="?/logout" class="relative flex h-full w-full items-center gap-x-2" method="post">${validate_component(Log_out, 'LogOut').$$render($$result, { class: ' ml-2 mr-2 h-4 w-4' }, {}, {})} <button type="submit" class="px h-full w-full text-left" data-svelte-h="svelte-1azz9dy">Log out</button> ${validate_component(
											Dropdown_menu_shortcut,
											'DropdownMenu.Shortcut'
										).$$render(
											$$result,
											{},
											{},
											{
												default: () => {
													return `⇧⌘Q`;
												}
											}
										)}</form>`;
									}
								}
							)}`;
						}
					}
				)}`;
			}
		}
	)}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$unsubscribe_page();
	return `<main class="main sticky top-0 bg-white"><nav class="flex items-center justify-between px-3 py-4 font-Poppins"><section class="user-image flex items-center gap-x-2">${validate_component(Dropdown, 'Dropdown').$$render($$result, {}, {}, {})} <h3 class="user-name text-[16px]">${escape(data?.username ?? '')}</h3></section> <section class="search flex h-full items-center gap-x-2"><button class="rounded px-2 py-2 hover:bg-gray-200 focus:bg-gray-200">${validate_component(
		Search,
		'Search'
	).$$render(
		$$result,
		{
			strokeWidth: 1.5,
			color: '#374151',
			size: 28
		},
		{},
		{}
	)}</button> <button class="rounded px-2 py-2 hover:bg-gray-200 focus:bg-gray-200">${validate_component(
		Ellipsis,
		'Ellipsis'
	).$$render(
		$$result,
		{
			strokeWidth: 1.5,
			color: '#374151',
			size: 20
		},
		{},
		{}
	)}</button></section></nav> <div class="w-full px-3" data-svelte-h="svelte-10hr9jb"><div class="line h-[1.4px] w-full bg-gray-300"></div></div> ${validate_component(Navigators, 'Navigators').$$render($$result, { path: $page.url?.pathname }, {}, {})}</main> ${slots.default ? slots.default({}) : ``}`;
});
export { Layout as default };
