import {
	p as identity,
	c as create_ssr_component,
	v as validate_component,
	q as get_store_value,
	s as setContext,
	l as getContext,
	b as subscribe,
	h as compute_rest_props,
	i as spread,
	k as escape_object,
	a as add_attribute,
	g as escape,
	j as escape_attribute_value,
	e as each
} from '../../../chunks/ssr.js';
import {
	t as cubicOut,
	i as isHTMLElement,
	v as getElementByMeltId,
	x as isElement,
	y as isHTMLLabelElement,
	m as makeElement,
	b as addMeltEventListener,
	w as withGet,
	o as omit,
	h as createElHelpers,
	z as dequal,
	A as isObject,
	C as stripValues,
	j as disabledAttr,
	a as executeCallbacks,
	k as kbd,
	D as isHTMLButtonElement,
	F as FIRST_LAST_KEYS,
	c as isElementDisabled,
	u as useEscapeKeydown,
	s as styleToString,
	e as effect,
	E as createHiddenInput,
	d as safeOnMount,
	f as isBrowser,
	G as isHTMLInputElement,
	n as noop,
	p as portalAttr,
	l as is_void,
	q as cn,
	r as flyAndScale,
	B as Button
} from '../../../chunks/button.js';
import { w as writable, d as derived, a as readonly } from '../../../chunks/index2.js';
import {
	I as Icon,
	o as overridable,
	t as toWritableStores,
	g as generateIds,
	c as createTypeaheadSearch,
	d as derivedVisible,
	a as tick,
	y as last,
	z as back,
	A as forward,
	B as prev,
	C as next,
	u as usePopper,
	b as getPortalDestination,
	D as generateId,
	l as addHighlight,
	r as removeHighlight,
	i as removeScroll,
	E as toggle,
	f as handleFocus,
	F as useModal,
	G as createFocusTrap,
	e as usePortal,
	m as createBitAttrs,
	n as removeUndefined,
	p as getOptionUpdater,
	w as createDispatcher,
	q as generateId$1,
	v as getPositioningUpdater
} from '../../../chunks/helpers.js';
import 'clsx';
import '../../../chunks/client.js';
import { I as Input$1 } from '../../../chunks/input.js';
import '../../../chunks/Toaster.svelte_svelte_type_style_lang.js';
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
	const o = +getComputedStyle(node).opacity;
	return {
		delay,
		duration,
		easing,
		css: (t) => `opacity: ${t * o}`
	};
}
function scale(
	node,
	{ delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 } = {}
) {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;
	const sd = 1 - start;
	const od = target_opacity * (1 - opacity);
	return {
		delay,
		duration,
		easing,
		css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
	};
}
const Book_open_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'path',
			{
				d: 'M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z'
			}
		],
		['path', { d: 'm16 12 2 2 4-4' }],
		[
			'path',
			{
				d: 'M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3'
			}
		]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'book-open-check' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [['path', { d: 'M20 6 9 17l-5-5' }]];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'check' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [['path', { d: 'm6 9 6 6 6-6' }]];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'chevron-down' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Notepad_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		['path', { d: 'M8 2v4' }],
		['path', { d: 'M12 2v4' }],
		['path', { d: 'M16 2v4' }],
		[
			'rect',
			{
				width: '16',
				height: '18',
				x: '4',
				y: '4',
				rx: '2'
			}
		],
		['path', { d: 'M8 10h6' }],
		['path', { d: 'M8 14h8' }],
		['path', { d: 'M8 18h5' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'notepad-text' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		['path', { d: 'M5 12h14' }],
		['path', { d: 'M12 5v14' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'plus' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Square_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		[
			'rect',
			{
				width: '18',
				height: '18',
				x: '3',
				y: '3',
				rx: '2'
			}
		],
		['path', { d: 'm9 12 2 2 4-4' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'square-check' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const iconNode = [
		['path', { d: 'M18 6 6 18' }],
		['path', { d: 'm6 6 12 12' }]
	];
	return `${validate_component(Icon, 'Icon').$$render(
		$$result,
		Object.assign({}, { name: 'x' }, $$props, { iconNode }),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
function getOptions(el) {
	return Array.from(el.querySelectorAll('[role="option"]:not([data-disabled])')).filter((el2) =>
		isHTMLElement(el2)
	);
}
function createClickOutsideIgnore(meltId) {
	return (e) => {
		const target = e.target;
		const triggerEl = getElementByMeltId(meltId);
		if (!triggerEl || !isElement(target)) return false;
		const id = triggerEl.id;
		if (isHTMLLabelElement(target) && id === target.htmlFor) {
			return true;
		}
		if (target.closest(`label[for="${id}"]`)) {
			return true;
		}
		return false;
	};
}
function createLabel() {
	const root = makeElement('label', {
		action: (node) => {
			const mouseDown = addMeltEventListener(node, 'mousedown', (e) => {
				if (!e.defaultPrevented && e.detail > 1) {
					e.preventDefault();
				}
			});
			return {
				destroy: mouseDown
			};
		}
	});
	return {
		elements: {
			root
		}
	};
}
const INTERACTION_KEYS = [
	kbd.ARROW_LEFT,
	kbd.ESCAPE,
	kbd.ARROW_RIGHT,
	kbd.SHIFT,
	kbd.CAPS_LOCK,
	kbd.CONTROL,
	kbd.ALT,
	kbd.META,
	kbd.ENTER,
	kbd.F1,
	kbd.F2,
	kbd.F3,
	kbd.F4,
	kbd.F5,
	kbd.F6,
	kbd.F7,
	kbd.F8,
	kbd.F9,
	kbd.F10,
	kbd.F11,
	kbd.F12
];
const defaults$1 = {
	positioning: {
		placement: 'bottom',
		sameWidth: true
	},
	scrollAlignment: 'nearest',
	loop: true,
	defaultOpen: false,
	closeOnOutsideClick: true,
	preventScroll: true,
	closeOnEscape: true,
	forceVisible: false,
	portal: void 0,
	builder: 'listbox',
	disabled: false,
	required: false,
	name: void 0,
	typeahead: true,
	highlightOnHover: true,
	onOutsideClick: void 0
};
const listboxIdParts = ['trigger', 'menu', 'label'];
function createListbox(props) {
	const withDefaults = { ...defaults$1, ...props };
	const activeTrigger = withGet(writable(null));
	const highlightedItem = withGet(writable(null));
	const selectedWritable = withDefaults.selected ?? writable(withDefaults.defaultSelected);
	const selected = overridable(selectedWritable, withDefaults?.onSelectedChange);
	const highlighted = derived(highlightedItem, ($highlightedItem) =>
		$highlightedItem ? getOptionProps($highlightedItem) : void 0
	);
	const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
	const open = overridable(openWritable, withDefaults?.onOpenChange);
	const options = toWritableStores({
		...omit(withDefaults, 'open', 'defaultOpen', 'builder', 'ids'),
		multiple: withDefaults.multiple ?? false
	});
	const {
		scrollAlignment,
		loop,
		closeOnOutsideClick,
		closeOnEscape,
		preventScroll,
		portal,
		forceVisible,
		positioning,
		multiple,
		arrowSize,
		disabled,
		required,
		typeahead,
		name: nameProp,
		highlightOnHover,
		onOutsideClick
	} = options;
	const { name: name2, selector } = createElHelpers(withDefaults.builder);
	const ids = toWritableStores({ ...generateIds(listboxIdParts), ...withDefaults.ids });
	const { handleTypeaheadSearch } = createTypeaheadSearch({
		onMatch: (element) => {
			highlightedItem.set(element);
			element.scrollIntoView({ block: scrollAlignment.get() });
		},
		getCurrentItem() {
			return highlightedItem.get();
		}
	});
	function getOptionProps(el) {
		const value = el.getAttribute('data-value');
		const label2 = el.getAttribute('data-label');
		const disabled2 = el.hasAttribute('data-disabled');
		return {
			value: value ? JSON.parse(value) : value,
			label: label2 ?? el.textContent ?? void 0,
			disabled: disabled2 ? true : false
		};
	}
	const setOption = (newOption) => {
		selected.update(($option) => {
			const $multiple = multiple.get();
			if ($multiple) {
				const optionArr = Array.isArray($option) ? [...$option] : [];
				return toggle(newOption, optionArr, (itemA, itemB) => dequal(itemA.value, itemB.value));
			}
			return newOption;
		});
	};
	function selectItem(item) {
		const props2 = getOptionProps(item);
		setOption(props2);
	}
	async function openMenu() {
		open.set(true);
		const triggerEl = document.getElementById(ids.trigger.get());
		if (!triggerEl) return;
		if (triggerEl !== activeTrigger.get()) activeTrigger.set(triggerEl);
		await tick();
		const menuElement = document.getElementById(ids.menu.get());
		if (!isHTMLElement(menuElement)) return;
		const selectedItem = menuElement.querySelector('[aria-selected=true]');
		if (!isHTMLElement(selectedItem)) return;
		highlightedItem.set(selectedItem);
	}
	function closeMenu() {
		open.set(false);
		highlightedItem.set(null);
	}
	const isVisible = derivedVisible({ open, forceVisible, activeTrigger });
	const isSelected = derived([selected], ([$selected]) => {
		return (value) => {
			if (Array.isArray($selected)) {
				return $selected.some((o) => dequal(o.value, value));
			}
			if (isObject(value)) {
				return dequal($selected?.value, stripValues(value, void 0));
			}
			return dequal($selected?.value, value);
		};
	});
	const isHighlighted = derived([highlighted], ([$value]) => {
		return (item) => {
			return dequal($value?.value, item);
		};
	});
	const trigger = makeElement(name2('trigger'), {
		stores: [open, highlightedItem, disabled, ids.menu, ids.trigger, ids.label],
		returned: ([$open, $highlightedItem, $disabled, $menuId, $triggerId, $labelId]) => {
			return {
				'aria-activedescendant': $highlightedItem?.id,
				'aria-autocomplete': 'list',
				'aria-controls': $menuId,
				'aria-expanded': $open,
				'aria-labelledby': $labelId,
				// autocomplete: 'off',
				id: $triggerId,
				role: 'combobox',
				disabled: disabledAttr($disabled),
				type: withDefaults.builder === 'select' ? 'button' : void 0
			};
		},
		action: (node) => {
			const isInput = isHTMLInputElement(node);
			const unsubscribe = executeCallbacks(
				addMeltEventListener(node, 'click', () => {
					node.focus();
					const $open = open.get();
					if ($open) {
						closeMenu();
					} else {
						openMenu();
					}
				}),
				// Handle all input key events including typing, meta, and navigation.
				addMeltEventListener(node, 'keydown', (e) => {
					const $open = open.get();
					if (!$open) {
						if (INTERACTION_KEYS.includes(e.key)) {
							return;
						}
						if (e.key === kbd.TAB) {
							return;
						}
						if (e.key === kbd.BACKSPACE && isInput && node.value === '') {
							return;
						}
						if (e.key === kbd.SPACE && isHTMLButtonElement(node)) {
							return;
						}
						openMenu();
						tick().then(() => {
							const $selectedItem = selected.get();
							if ($selectedItem) return;
							const menuEl = document.getElementById(ids.menu.get());
							if (!isHTMLElement(menuEl)) return;
							const enabledItems = Array.from(
								menuEl.querySelectorAll(
									`${selector('item')}:not([data-disabled]):not([data-hidden])`
								)
							).filter((item) => isHTMLElement(item));
							if (!enabledItems.length) return;
							if (e.key === kbd.ARROW_DOWN) {
								highlightedItem.set(enabledItems[0]);
								enabledItems[0].scrollIntoView({ block: scrollAlignment.get() });
							} else if (e.key === kbd.ARROW_UP) {
								highlightedItem.set(last(enabledItems));
								last(enabledItems).scrollIntoView({ block: scrollAlignment.get() });
							}
						});
					}
					if (e.key === kbd.TAB) {
						closeMenu();
						return;
					}
					if (
						(e.key === kbd.ENTER && !e.isComposing) ||
						(e.key === kbd.SPACE && isHTMLButtonElement(node))
					) {
						e.preventDefault();
						const $highlightedItem = highlightedItem.get();
						if ($highlightedItem) {
							selectItem($highlightedItem);
						}
						if (!multiple.get()) {
							closeMenu();
						}
					}
					if (e.key === kbd.ARROW_UP && e.altKey) {
						closeMenu();
					}
					if (FIRST_LAST_KEYS.includes(e.key)) {
						e.preventDefault();
						const menuElement = document.getElementById(ids.menu.get());
						if (!isHTMLElement(menuElement)) return;
						const itemElements = getOptions(menuElement);
						if (!itemElements.length) return;
						const candidateNodes = itemElements.filter(
							(opt) => !isElementDisabled(opt) && opt.dataset.hidden === void 0
						);
						const $currentItem = highlightedItem.get();
						const currentIndex = $currentItem ? candidateNodes.indexOf($currentItem) : -1;
						const $loop = loop.get();
						const $scrollAlignment = scrollAlignment.get();
						let nextItem;
						switch (e.key) {
							case kbd.ARROW_DOWN:
								nextItem = next(candidateNodes, currentIndex, $loop);
								break;
							case kbd.ARROW_UP:
								nextItem = prev(candidateNodes, currentIndex, $loop);
								break;
							case kbd.PAGE_DOWN:
								nextItem = forward(candidateNodes, currentIndex, 10, $loop);
								break;
							case kbd.PAGE_UP:
								nextItem = back(candidateNodes, currentIndex, 10, $loop);
								break;
							case kbd.HOME:
								nextItem = candidateNodes[0];
								break;
							case kbd.END:
								nextItem = last(candidateNodes);
								break;
							default:
								return;
						}
						highlightedItem.set(nextItem);
						nextItem?.scrollIntoView({ block: $scrollAlignment });
					} else if (typeahead.get()) {
						const menuEl = document.getElementById(ids.menu.get());
						if (!isHTMLElement(menuEl)) return;
						handleTypeaheadSearch(e.key, getOptions(menuEl));
					}
				})
			);
			let unsubEscapeKeydown = noop;
			const escape2 = useEscapeKeydown(node, {
				handler: closeMenu,
				enabled: derived([open, closeOnEscape], ([$open, $closeOnEscape]) => {
					return $open && $closeOnEscape;
				})
			});
			if (escape2 && escape2.destroy) {
				unsubEscapeKeydown = escape2.destroy;
			}
			return {
				destroy() {
					unsubscribe();
					unsubEscapeKeydown();
				}
			};
		}
	});
	const menu = makeElement(name2('menu'), {
		stores: [isVisible, ids.menu],
		returned: ([$isVisible, $menuId]) => {
			return {
				hidden: $isVisible ? void 0 : true,
				id: $menuId,
				role: 'listbox',
				style: styleToString({ display: $isVisible ? void 0 : 'none' })
			};
		},
		action: (node) => {
			let unsubPopper = noop;
			const unsubscribe = executeCallbacks(
				// Bind the popper portal to the input element.
				effect(
					[isVisible, portal, closeOnOutsideClick, positioning, activeTrigger],
					([$isVisible, $portal, $closeOnOutsideClick, $positioning, $activeTrigger]) => {
						unsubPopper();
						if (!$isVisible || !$activeTrigger) return;
						tick().then(() => {
							unsubPopper();
							const ignoreHandler = createClickOutsideIgnore(ids.trigger.get());
							unsubPopper = usePopper(node, {
								anchorElement: $activeTrigger,
								open,
								options: {
									floating: $positioning,
									focusTrap: null,
									modal: {
										closeOnInteractOutside: $closeOnOutsideClick,
										onClose: closeMenu,
										open: $isVisible,
										shouldCloseOnInteractOutside: (e) => {
											onOutsideClick.get()?.(e);
											if (e.defaultPrevented) return false;
											const target = e.target;
											if (!isElement(target)) return false;
											if (target === $activeTrigger || $activeTrigger.contains(target)) {
												return false;
											}
											if (ignoreHandler(e)) return false;
											return true;
										}
									},
									escapeKeydown: null,
									portal: getPortalDestination(node, $portal)
								}
							}).destroy;
						});
					}
				)
			);
			return {
				destroy: () => {
					unsubscribe();
					unsubPopper();
				}
			};
		}
	});
	const {
		elements: { root: labelBuilder }
	} = createLabel();
	const { action: labelAction } = get_store_value(labelBuilder);
	const label = makeElement(name2('label'), {
		stores: [ids.label, ids.trigger],
		returned: ([$labelId, $triggerId]) => {
			return {
				id: $labelId,
				for: $triggerId
			};
		},
		action: labelAction
	});
	const option = makeElement(name2('option'), {
		stores: [isSelected],
		returned:
			([$isSelected]) =>
			(props2) => {
				const selected2 = $isSelected(props2.value);
				return {
					'data-value': JSON.stringify(props2.value),
					'data-label': props2.label,
					'data-disabled': disabledAttr(props2.disabled),
					'aria-disabled': props2.disabled ? true : void 0,
					'aria-selected': selected2,
					'data-selected': selected2 ? '' : void 0,
					id: generateId(),
					role: 'option'
				};
			},
		action: (node) => {
			const unsubscribe = executeCallbacks(
				addMeltEventListener(node, 'click', (e) => {
					if (isElementDisabled(node)) {
						e.preventDefault();
						return;
					}
					selectItem(node);
					if (!multiple.get()) {
						closeMenu();
					}
				}),
				effect(highlightOnHover, ($highlightOnHover) => {
					if (!$highlightOnHover) return;
					const unsub = executeCallbacks(
						addMeltEventListener(node, 'mouseover', () => {
							highlightedItem.set(node);
						}),
						addMeltEventListener(node, 'mouseleave', () => {
							highlightedItem.set(null);
						})
					);
					return unsub;
				})
			);
			return { destroy: unsubscribe };
		}
	});
	const group = makeElement(name2('group'), {
		returned: () => {
			return (groupId) => ({
				role: 'group',
				'aria-labelledby': groupId
			});
		}
	});
	const groupLabel = makeElement(name2('group-label'), {
		returned: () => {
			return (groupId) => ({
				id: groupId
			});
		}
	});
	const hiddenInput = createHiddenInput({
		value: derived([selected], ([$selected]) => {
			const value = Array.isArray($selected) ? $selected.map((o) => o.value) : $selected?.value;
			return typeof value === 'string' ? value : JSON.stringify(value);
		}),
		name: readonly(nameProp),
		required,
		prefix: withDefaults.builder
	});
	const arrow = makeElement(name2('arrow'), {
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
	safeOnMount(() => {
		if (!isBrowser) return;
		const menuEl = document.getElementById(ids.menu.get());
		const triggerEl = document.getElementById(ids.trigger.get());
		if (triggerEl) {
			activeTrigger.set(triggerEl);
		}
		if (!menuEl) return;
		const selectedEl = menuEl.querySelector('[data-selected]');
		if (!isHTMLElement(selectedEl)) return;
	});
	effect([highlightedItem], ([$highlightedItem]) => {
		if (!isBrowser) return;
		const menuElement = document.getElementById(ids.menu.get());
		if (!isHTMLElement(menuElement)) return;
		getOptions(menuElement).forEach((node) => {
			if (node === $highlightedItem) {
				addHighlight(node);
			} else {
				removeHighlight(node);
			}
		});
	});
	effect([open], ([$open]) => {
		if (!isBrowser) return;
		let unsubScroll = noop;
		if (preventScroll.get() && $open) {
			unsubScroll = removeScroll();
		}
		return () => {
			unsubScroll();
		};
	});
	return {
		ids,
		elements: {
			trigger,
			group,
			option,
			menu,
			groupLabel,
			label,
			hiddenInput,
			arrow
		},
		states: {
			open,
			selected,
			highlighted,
			highlightedItem
		},
		helpers: {
			isSelected,
			isHighlighted,
			closeMenu
		},
		options
	};
}
const { name } = createElHelpers('dialog');
const defaults = {
	preventScroll: true,
	closeOnEscape: true,
	closeOnOutsideClick: true,
	role: 'dialog',
	defaultOpen: false,
	portal: void 0,
	forceVisible: false,
	openFocus: void 0,
	closeFocus: void 0,
	onOutsideClick: void 0
};
const dialogIdParts = ['content', 'title', 'description'];
function createDialog(props) {
	const withDefaults = { ...defaults, ...props };
	const options = toWritableStores(omit(withDefaults, 'ids'));
	const {
		preventScroll,
		closeOnEscape,
		closeOnOutsideClick,
		role,
		portal,
		forceVisible,
		openFocus,
		closeFocus,
		onOutsideClick
	} = options;
	const activeTrigger = withGet.writable(null);
	const ids = toWritableStores({
		...generateIds(dialogIdParts),
		...withDefaults.ids
	});
	const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
	const open = overridable(openWritable, withDefaults?.onOpenChange);
	const isVisible = derived([open, forceVisible], ([$open, $forceVisible]) => {
		return $open || $forceVisible;
	});
	let unsubScroll = noop;
	function handleOpen(e) {
		const el = e.currentTarget;
		const triggerEl = e.currentTarget;
		if (!isHTMLElement(el) || !isHTMLElement(triggerEl)) return;
		open.set(true);
		activeTrigger.set(triggerEl);
	}
	function handleClose() {
		open.set(false);
		handleFocus({
			prop: closeFocus.get(),
			defaultEl: activeTrigger.get()
		});
	}
	const trigger = makeElement(name('trigger'), {
		stores: [open],
		returned: ([$open]) => {
			return {
				'aria-haspopup': 'dialog',
				'aria-expanded': $open,
				type: 'button'
			};
		},
		action: (node) => {
			const unsub = executeCallbacks(
				addMeltEventListener(node, 'click', (e) => {
					handleOpen(e);
				}),
				addMeltEventListener(node, 'keydown', (e) => {
					if (e.key !== kbd.ENTER && e.key !== kbd.SPACE) return;
					e.preventDefault();
					handleOpen(e);
				})
			);
			return {
				destroy: unsub
			};
		}
	});
	const overlay = makeElement(name('overlay'), {
		stores: [isVisible, open],
		returned: ([$isVisible, $open]) => {
			return {
				hidden: $isVisible ? void 0 : true,
				tabindex: -1,
				style: styleToString({
					display: $isVisible ? void 0 : 'none'
				}),
				'aria-hidden': true,
				'data-state': $open ? 'open' : 'closed'
			};
		},
		action: (node) => {
			let unsubEscapeKeydown = noop;
			if (closeOnEscape.get()) {
				const escapeKeydown = useEscapeKeydown(node, {
					handler: () => {
						handleClose();
					}
				});
				if (escapeKeydown && escapeKeydown.destroy) {
					unsubEscapeKeydown = escapeKeydown.destroy;
				}
			}
			return {
				destroy() {
					unsubEscapeKeydown();
				}
			};
		}
	});
	const content = makeElement(name('content'), {
		stores: [isVisible, ids.content, ids.description, ids.title, open],
		returned: ([$isVisible, $contentId, $descriptionId, $titleId, $open]) => {
			return {
				id: $contentId,
				role: role.get(),
				'aria-describedby': $descriptionId,
				'aria-labelledby': $titleId,
				'aria-modal': $isVisible ? 'true' : void 0,
				'data-state': $open ? 'open' : 'closed',
				tabindex: -1,
				hidden: $isVisible ? void 0 : true,
				style: styleToString({
					display: $isVisible ? void 0 : 'none'
				})
			};
		},
		action: (node) => {
			let activate = noop;
			let deactivate = noop;
			const destroy = executeCallbacks(
				effect(
					[open, closeOnOutsideClick, closeOnEscape],
					([$open, $closeOnOutsideClick, $closeOnEscape]) => {
						if (!$open) return;
						const focusTrap = createFocusTrap({
							immediate: false,
							escapeDeactivates: $closeOnEscape,
							clickOutsideDeactivates: $closeOnOutsideClick,
							allowOutsideClick: true,
							returnFocusOnDeactivate: false,
							fallbackFocus: node
						});
						activate = focusTrap.activate;
						deactivate = focusTrap.deactivate;
						const ac = focusTrap.useFocusTrap(node);
						if (ac && ac.destroy) {
							return ac.destroy;
						} else {
							return focusTrap.deactivate;
						}
					}
				),
				effect([closeOnOutsideClick, open], ([$closeOnOutsideClick, $open]) => {
					return useModal(node, {
						open: $open,
						closeOnInteractOutside: $closeOnOutsideClick,
						onClose() {
							handleClose();
						},
						shouldCloseOnInteractOutside(e) {
							onOutsideClick.get()?.(e);
							if (e.defaultPrevented) return false;
							return true;
						}
					}).destroy;
				}),
				effect([closeOnEscape], ([$closeOnEscape]) => {
					if (!$closeOnEscape) return noop;
					return useEscapeKeydown(node, { handler: handleClose }).destroy;
				}),
				effect([isVisible], ([$isVisible]) => {
					tick().then(() => {
						if (!$isVisible) {
							deactivate();
						} else {
							activate();
						}
					});
				})
			);
			return {
				destroy: () => {
					unsubScroll();
					destroy();
				}
			};
		}
	});
	const portalled = makeElement(name('portalled'), {
		stores: portal,
		returned: ($portal) => ({
			'data-portal': portalAttr($portal)
		}),
		action: (node) => {
			const unsubPortal = effect([portal], ([$portal]) => {
				if ($portal === null) return noop;
				const portalDestination = getPortalDestination(node, $portal);
				if (portalDestination === null) return noop;
				return usePortal(node, portalDestination).destroy;
			});
			return {
				destroy() {
					unsubPortal();
				}
			};
		}
	});
	const title = makeElement(name('title'), {
		stores: [ids.title],
		returned: ([$titleId]) => ({
			id: $titleId
		})
	});
	const description = makeElement(name('description'), {
		stores: [ids.description],
		returned: ([$descriptionId]) => ({
			id: $descriptionId
		})
	});
	const close = makeElement(name('close'), {
		returned: () => ({
			type: 'button'
		}),
		action: (node) => {
			const unsub = executeCallbacks(
				addMeltEventListener(node, 'click', () => {
					handleClose();
				}),
				addMeltEventListener(node, 'keydown', (e) => {
					if (e.key !== kbd.SPACE && e.key !== kbd.ENTER) return;
					e.preventDefault();
					handleClose();
				})
			);
			return {
				destroy: unsub
			};
		}
	});
	effect([open, preventScroll], ([$open, $preventScroll]) => {
		if (!isBrowser) return;
		if ($preventScroll && $open) unsubScroll = removeScroll();
		if ($open) {
			const contentEl = document.getElementById(ids.content.get());
			handleFocus({ prop: openFocus.get(), defaultEl: contentEl });
		}
		return () => {
			if (!forceVisible.get()) {
				unsubScroll();
			}
		};
	});
	return {
		ids,
		elements: {
			content,
			trigger,
			title,
			description,
			overlay,
			close,
			portalled
		},
		states: {
			open
		},
		options
	};
}
function createSelect(props) {
	const listbox = createListbox({ ...props, builder: 'select' });
	const selectedLabel = derived(listbox.states.selected, ($selected) => {
		if (Array.isArray($selected)) {
			return $selected.map((o) => o.label).join(', ');
		}
		return $selected?.label ?? '';
	});
	return {
		...listbox,
		elements: {
			...listbox.elements
		},
		states: {
			...listbox.states,
			selectedLabel
		}
	};
}
function arraysAreEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((value, index) => value === arr2[index]);
}
function getDialogData() {
	const NAME = 'dialog';
	const PARTS = ['close', 'content', 'description', 'overlay', 'portal', 'title', 'trigger'];
	return {
		NAME,
		PARTS
	};
}
function setCtx$1(props) {
	const { NAME, PARTS } = getDialogData();
	const getAttrs = createBitAttrs(NAME, PARTS);
	const dialog = {
		...createDialog({ ...removeUndefined(props), role: 'dialog', forceVisible: true }),
		getAttrs
	};
	setContext(NAME, dialog);
	return {
		...dialog,
		updateOption: getOptionUpdater(dialog.options)
	};
}
function getCtx$1() {
	const { NAME } = getDialogData();
	return getContext(NAME);
}
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $idValues, $$unsubscribe_idValues;
	let { preventScroll = void 0 } = $$props;
	let { closeOnEscape = void 0 } = $$props;
	let { closeOnOutsideClick = void 0 } = $$props;
	let { portal = void 0 } = $$props;
	let { open = void 0 } = $$props;
	let { onOpenChange = void 0 } = $$props;
	let { openFocus = void 0 } = $$props;
	let { closeFocus = void 0 } = $$props;
	let { onOutsideClick = void 0 } = $$props;
	const {
		states: { open: localOpen },
		updateOption,
		ids
	} = setCtx$1({
		closeOnEscape,
		preventScroll,
		closeOnOutsideClick,
		portal,
		forceVisible: true,
		defaultOpen: open,
		openFocus,
		closeFocus,
		onOutsideClick,
		onOpenChange: ({ next: next2 }) => {
			if (open !== next2) {
				onOpenChange?.(next2);
				open = next2;
			}
			return next2;
		}
	});
	const idValues = derived(
		[ids.content, ids.description, ids.title],
		([$contentId, $descriptionId, $titleId]) => ({
			content: $contentId,
			description: $descriptionId,
			title: $titleId
		})
	);
	$$unsubscribe_idValues = subscribe(idValues, (value) => ($idValues = value));
	if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
		$$bindings.preventScroll(preventScroll);
	if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
		$$bindings.closeOnEscape(closeOnEscape);
	if (
		$$props.closeOnOutsideClick === void 0 &&
		$$bindings.closeOnOutsideClick &&
		closeOnOutsideClick !== void 0
	)
		$$bindings.closeOnOutsideClick(closeOnOutsideClick);
	if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
		$$bindings.portal(portal);
	if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
	if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
		$$bindings.onOpenChange(onOpenChange);
	if ($$props.openFocus === void 0 && $$bindings.openFocus && openFocus !== void 0)
		$$bindings.openFocus(openFocus);
	if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0)
		$$bindings.closeFocus(closeFocus);
	if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0)
		$$bindings.onOutsideClick(onOutsideClick);
	open !== void 0 && localOpen.set(open);
	{
		updateOption('preventScroll', preventScroll);
	}
	{
		updateOption('closeOnEscape', closeOnEscape);
	}
	{
		updateOption('closeOnOutsideClick', closeOnOutsideClick);
	}
	{
		updateOption('portal', portal);
	}
	{
		updateOption('openFocus', openFocus);
	}
	{
		updateOption('closeFocus', closeFocus);
	}
	{
		updateOption('onOutsideClick', onOutsideClick);
	}
	$$unsubscribe_idValues();
	return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Dialog_title$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, ['level', 'asChild', 'id', 'el']);
	let $title, $$unsubscribe_title;
	let { level = 'h2' } = $$props;
	let { asChild = false } = $$props;
	let { id = void 0 } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { title },
		ids,
		getAttrs
	} = getCtx$1();
	$$unsubscribe_title = subscribe(title, (value) => ($title = value));
	const attrs = getAttrs('title');
	if ($$props.level === void 0 && $$bindings.level && level !== void 0) $$bindings.level(level);
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	{
		if (id) {
			ids.title.set(id);
		}
	}
	builder = $title;
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_title();
	return `${
		asChild
			? `${slots.default ? slots.default({ builder }) : ``}`
			: `${((tag) => {
					return tag
						? `<${level}${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${is_void(tag) ? '' : `${slots.default ? slots.default({ builder }) : ``}`}${is_void(tag) ? '' : `</${tag}>`}`
						: '';
				})(level)}`
	}`;
});
const Dialog_close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, ['asChild', 'el']);
	let $close, $$unsubscribe_close;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { close },
		getAttrs
	} = getCtx$1();
	$$unsubscribe_close = subscribe(close, (value) => ($close = value));
	createDispatcher();
	const attrs = getAttrs('close');
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	builder = $close;
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_close();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: 'button' }, escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Dialog_portal$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, ['asChild', 'el']);
	let $portalled, $$unsubscribe_portalled;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { portalled },
		getAttrs
	} = getCtx$1();
	$$unsubscribe_portalled = subscribe(portalled, (value) => ($portalled = value));
	const attrs = getAttrs('portal');
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	builder = $portalled;
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_portalled();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Dialog_content$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
		'el'
	]);
	let $content, $$unsubscribe_content;
	let $open, $$unsubscribe_open;
	let { transition = void 0 } = $$props;
	let { transitionConfig = void 0 } = $$props;
	let { inTransition = void 0 } = $$props;
	let { inTransitionConfig = void 0 } = $$props;
	let { outTransition = void 0 } = $$props;
	let { outTransitionConfig = void 0 } = $$props;
	let { asChild = false } = $$props;
	let { id = void 0 } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { content },
		states: { open },
		ids,
		getAttrs
	} = getCtx$1();
	$$unsubscribe_content = subscribe(content, (value) => ($content = value));
	$$unsubscribe_open = subscribe(open, (value) => ($open = value));
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
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	{
		if (id) {
			ids.content.set(id);
		}
	}
	builder = $content;
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_content();
	$$unsubscribe_open();
	return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Dialog_overlay$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, [
		'transition',
		'transitionConfig',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig',
		'asChild',
		'el'
	]);
	let $overlay, $$unsubscribe_overlay;
	let $open, $$unsubscribe_open;
	let { transition = void 0 } = $$props;
	let { transitionConfig = void 0 } = $$props;
	let { inTransition = void 0 } = $$props;
	let { inTransitionConfig = void 0 } = $$props;
	let { outTransition = void 0 } = $$props;
	let { outTransitionConfig = void 0 } = $$props;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { overlay },
		states: { open },
		getAttrs
	} = getCtx$1();
	$$unsubscribe_overlay = subscribe(overlay, (value) => ($overlay = value));
	$$unsubscribe_open = subscribe(open, (value) => ($open = value));
	const attrs = getAttrs('overlay');
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
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	builder = $overlay;
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_overlay();
	$$unsubscribe_open();
	return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}></div>` : `${inTransition && outTransition && $open ? ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}></div>` : `${inTransition && $open ? ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}></div>` : `${outTransition && $open ? ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}></div>` : `${$open ? ` <div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}></div>` : ``}`}`}`}`}`}`;
});
const Dialog_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, ['asChild', 'el']);
	let $trigger, $$unsubscribe_trigger;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { trigger },
		getAttrs
	} = getCtx$1();
	$$unsubscribe_trigger = subscribe(trigger, (value) => ($trigger = value));
	createDispatcher();
	const attrs = getAttrs('trigger');
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	builder = $trigger;
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_trigger();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: 'button' }, escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Dialog_description$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, ['asChild', 'id', 'el']);
	let $description, $$unsubscribe_description;
	let { asChild = false } = $$props;
	let { id = void 0 } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { description },
		ids,
		getAttrs
	} = getCtx$1();
	$$unsubscribe_description = subscribe(description, (value) => ($description = value));
	const attrs = getAttrs('description');
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	{
		if (id) {
			ids.description.set(id);
		}
	}
	builder = $description;
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_description();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
function getLabelData() {
	const NAME = 'label';
	const PARTS = ['root'];
	const getAttrs = createBitAttrs(NAME, PARTS);
	return {
		NAME,
		getAttrs
	};
}
const Label$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, ['asChild', 'el']);
	let $root, $$unsubscribe_root;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { root }
	} = createLabel();
	$$unsubscribe_root = subscribe(root, (value) => ($root = value));
	createDispatcher();
	const { getAttrs } = getLabelData();
	const attrs = getAttrs('root');
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	builder = $root;
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_root();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<label${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</label>`}`;
});
function getSelectData() {
	const NAME = 'select';
	const GROUP_NAME = 'select-group';
	const ITEM_NAME = 'select-item';
	const PARTS = [
		'arrow',
		'content',
		'group',
		'item',
		'indicator',
		'input',
		'label',
		'trigger',
		'value'
	];
	return {
		NAME,
		GROUP_NAME,
		ITEM_NAME,
		PARTS
	};
}
function getCtx() {
	const { NAME } = getSelectData();
	return getContext(NAME);
}
function setCtx(props) {
	const { NAME, PARTS } = getSelectData();
	const getAttrs = createBitAttrs(NAME, PARTS);
	const select = {
		...createSelect({ ...removeUndefined(props), forceVisible: true }),
		getAttrs
	};
	setContext(NAME, select);
	return {
		...select,
		updateOption: getOptionUpdater(select.options)
	};
}
function setGroupCtx() {
	const { GROUP_NAME } = getSelectData();
	const id = generateId$1();
	setContext(GROUP_NAME, id);
	const {
		elements: { group },
		getAttrs
	} = getCtx();
	return { group, id, getAttrs };
}
function setItemCtx(value) {
	const { ITEM_NAME } = getSelectData();
	const select = getCtx();
	setContext(ITEM_NAME, value);
	return select;
}
function getGroupLabel() {
	const { GROUP_NAME } = getSelectData();
	const id = getContext(GROUP_NAME);
	const {
		elements: { groupLabel },
		getAttrs
	} = getCtx();
	return { groupLabel, id, getAttrs };
}
function getItemIndicator() {
	const { ITEM_NAME } = getSelectData();
	const {
		helpers: { isSelected },
		getAttrs
	} = getCtx();
	const value = getContext(ITEM_NAME);
	return {
		value,
		isSelected,
		getAttrs
	};
}
function updatePositioning(props) {
	const defaultPlacement = {
		side: 'bottom',
		align: 'center',
		sameWidth: true
	};
	const withDefaults = { ...defaultPlacement, ...props };
	const {
		options: { positioning }
	} = getCtx();
	const updater = getPositioningUpdater(positioning);
	updater(withDefaults);
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $idValues, $$unsubscribe_idValues;
	let { required = void 0 } = $$props;
	let { disabled = void 0 } = $$props;
	let { preventScroll = void 0 } = $$props;
	let { loop = void 0 } = $$props;
	let { closeOnEscape = void 0 } = $$props;
	let { closeOnOutsideClick = void 0 } = $$props;
	let { portal = void 0 } = $$props;
	let { name: name2 = void 0 } = $$props;
	let { multiple = false } = $$props;
	let { selected = void 0 } = $$props;
	let { onSelectedChange = void 0 } = $$props;
	let { open = void 0 } = $$props;
	let { onOpenChange = void 0 } = $$props;
	let { items = [] } = $$props;
	let { onOutsideClick = void 0 } = $$props;
	const {
		states: { open: localOpen, selected: localSelected },
		updateOption,
		ids
	} = setCtx({
		required,
		disabled,
		preventScroll,
		loop,
		closeOnEscape,
		closeOnOutsideClick,
		portal,
		name: name2,
		onOutsideClick,
		multiple,
		forceVisible: true,
		defaultSelected: Array.isArray(selected) ? [...selected] : selected,
		defaultOpen: open,
		onSelectedChange: ({ next: next2 }) => {
			if (Array.isArray(next2)) {
				if (!Array.isArray(selected) || !arraysAreEqual(selected, next2)) {
					onSelectedChange?.(next2);
					selected = next2;
					return next2;
				}
				return next2;
			}
			if (selected !== next2) {
				onSelectedChange?.(next2);
				selected = next2;
			}
			return next2;
		},
		onOpenChange: ({ next: next2 }) => {
			if (open !== next2) {
				onOpenChange?.(next2);
				open = next2;
			}
			return next2;
		},
		items
	});
	const idValues = derived(
		[ids.menu, ids.trigger, ids.label],
		([$menuId, $triggerId, $labelId]) => ({
			menu: $menuId,
			trigger: $triggerId,
			label: $labelId
		})
	);
	$$unsubscribe_idValues = subscribe(idValues, (value) => ($idValues = value));
	if ($$props.required === void 0 && $$bindings.required && required !== void 0)
		$$bindings.required(required);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
		$$bindings.disabled(disabled);
	if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
		$$bindings.preventScroll(preventScroll);
	if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0) $$bindings.loop(loop);
	if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
		$$bindings.closeOnEscape(closeOnEscape);
	if (
		$$props.closeOnOutsideClick === void 0 &&
		$$bindings.closeOnOutsideClick &&
		closeOnOutsideClick !== void 0
	)
		$$bindings.closeOnOutsideClick(closeOnOutsideClick);
	if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
		$$bindings.portal(portal);
	if ($$props.name === void 0 && $$bindings.name && name2 !== void 0) $$bindings.name(name2);
	if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
		$$bindings.multiple(multiple);
	if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
		$$bindings.selected(selected);
	if (
		$$props.onSelectedChange === void 0 &&
		$$bindings.onSelectedChange &&
		onSelectedChange !== void 0
	)
		$$bindings.onSelectedChange(onSelectedChange);
	if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
	if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
		$$bindings.onOpenChange(onOpenChange);
	if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
	if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0)
		$$bindings.onOutsideClick(onOutsideClick);
	open !== void 0 && localOpen.set(open);
	selected !== void 0 && localSelected.set(Array.isArray(selected) ? [...selected] : selected);
	{
		updateOption('required', required);
	}
	{
		updateOption('disabled', disabled);
	}
	{
		updateOption('preventScroll', preventScroll);
	}
	{
		updateOption('loop', loop);
	}
	{
		updateOption('closeOnEscape', closeOnEscape);
	}
	{
		updateOption('closeOnOutsideClick', closeOnOutsideClick);
	}
	{
		updateOption('portal', portal);
	}
	{
		updateOption('name', name2);
	}
	{
		updateOption('multiple', multiple);
	}
	{
		updateOption('onOutsideClick', onOutsideClick);
	}
	$$unsubscribe_idValues();
	return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Select_content$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
	let { sameWidth = true } = $$props;
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
	return ` ${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Select_group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
const Select_input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let attrs;
	let builder;
	let $$restProps = compute_rest_props($$props, ['asChild', 'el']);
	let $hiddenInput, $$unsubscribe_hiddenInput;
	let $disabled, $$unsubscribe_disabled;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { hiddenInput },
		options: { disabled },
		getAttrs
	} = getCtx();
	$$unsubscribe_hiddenInput = subscribe(hiddenInput, (value) => ($hiddenInput = value));
	$$unsubscribe_disabled = subscribe(disabled, (value) => ($disabled = value));
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	attrs = {
		...getAttrs('input'),
		disabled: $disabled ? true : void 0
	};
	builder = $hiddenInput;
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_hiddenInput();
	$$unsubscribe_disabled();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<input${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>`}`;
});
const Select_item$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let isSelected;
	let $$restProps = compute_rest_props($$props, ['value', 'disabled', 'label', 'asChild', 'el']);
	let $isSelectedStore, $$unsubscribe_isSelectedStore;
	let $item, $$unsubscribe_item;
	let { value } = $$props;
	let { disabled = void 0 } = $$props;
	let { label = void 0 } = $$props;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		elements: { option: item },
		helpers: { isSelected: isSelectedStore },
		getAttrs
	} = setItemCtx(value);
	$$unsubscribe_item = subscribe(item, (value2) => ($item = value2));
	$$unsubscribe_isSelectedStore = subscribe(
		isSelectedStore,
		(value2) => ($isSelectedStore = value2)
	);
	createDispatcher();
	const attrs = getAttrs('item');
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
		$$bindings.disabled(disabled);
	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	builder = $item({ value, disabled, label });
	{
		Object.assign(builder, attrs);
	}
	isSelected = $isSelectedStore(value);
	$$unsubscribe_isSelectedStore();
	$$unsubscribe_item();
	return ` ${asChild ? `${slots.default ? slots.default({ builder, isSelected }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder, isSelected }) : ` ${escape(label || value)} `}</div>`}`;
});
const Select_item_indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['asChild', 'el']);
	let $isSelected, $$unsubscribe_isSelected;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const { isSelected, value, getAttrs } = getItemIndicator();
	$$unsubscribe_isSelected = subscribe(isSelected, (value2) => ($isSelected = value2));
	const attrs = getAttrs('indicator');
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	$$unsubscribe_isSelected();
	return `${asChild ? `${slots.default ? slots.default({ attrs, isSelected: $isSelected(value) }) : ``}` : `<div${spread([escape_object($$restProps), escape_object(attrs)], {})}${add_attribute('this', el, 0)}>${$isSelected(value) ? `${slots.default ? slots.default({ attrs, isSelected: $isSelected(value) }) : ``}` : ``}</div>`}`;
});
const Select_label$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let builder;
	let $$restProps = compute_rest_props($$props, ['asChild', 'id', 'el']);
	let $groupLabel, $$unsubscribe_groupLabel;
	let { asChild = false } = $$props;
	let { id = void 0 } = $$props;
	let { el = void 0 } = $$props;
	const { ids, getAttrs } = getCtx();
	const { groupLabel, id: groupId } = getGroupLabel();
	$$unsubscribe_groupLabel = subscribe(groupLabel, (value) => ($groupLabel = value));
	const attrs = getAttrs('label');
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	{
		if (id) {
			ids.label.set(id);
		}
	}
	builder = $groupLabel(groupId);
	{
		Object.assign(builder, attrs);
	}
	$$unsubscribe_groupLabel();
	return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute('this', el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Select_trigger$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
const Select_value = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let label;
	let $$restProps = compute_rest_props($$props, ['placeholder', 'asChild', 'el']);
	let $selectedLabel, $$unsubscribe_selectedLabel;
	let { placeholder = '' } = $$props;
	let { asChild = false } = $$props;
	let { el = void 0 } = $$props;
	const {
		states: { selectedLabel },
		getAttrs
	} = getCtx();
	$$unsubscribe_selectedLabel = subscribe(selectedLabel, (value) => ($selectedLabel = value));
	const attrs = getAttrs('value');
	if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
		$$bindings.placeholder(placeholder);
	if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
		$$bindings.asChild(asChild);
	if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
	label = $selectedLabel;
	$$unsubscribe_selectedLabel();
	return `${
		asChild
			? `${slots.default ? slots.default({ label, attrs }) : ``}`
			: `<span${spread(
					[
						escape_object($$restProps),
						escape_object(attrs),
						{
							'data-placeholder': escape_attribute_value(!label ? '' : void 0)
						}
					],
					{}
				)}${add_attribute('this', el, 0)}>${escape(label || placeholder)}</span>`
	}`;
});
const Select_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class']);
	let { class: className = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	return `${validate_component(Select_label$1, 'SelectPrimitive.Label').$$render(
		$$result,
		Object.assign(
			{},
			{
				class: cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)
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
const Select_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class', 'value', 'label', 'disabled']);
	let { class: className = void 0 } = $$props;
	let { value } = $$props;
	let { label = void 0 } = $$props;
	let { disabled = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
	if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
		$$bindings.disabled(disabled);
	return `${validate_component(Select_item$1, 'SelectPrimitive.Item').$$render(
		$$result,
		Object.assign(
			{},
			{ value },
			{ disabled },
			{ label },
			{
				class: cn(
					'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
					className
				)
			},
			$$restProps
		),
		{},
		{
			default: () => {
				return `<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">${validate_component(
					Select_item_indicator,
					'SelectPrimitive.ItemIndicator'
				).$$render(
					$$result,
					{},
					{},
					{
						default: () => {
							return `${validate_component(Check, 'Check').$$render($$result, { class: 'h-4 w-4' }, {}, {})}`;
						}
					}
				)}</span> ${slots.default ? slots.default({}) : ` ${escape(label || value)} `}`;
			}
		}
	)}`;
});
const Select_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, [
		'sideOffset',
		'inTransition',
		'inTransitionConfig',
		'outTransition',
		'outTransitionConfig',
		'class'
	]);
	let { sideOffset = 4 } = $$props;
	let { inTransition = flyAndScale } = $$props;
	let { inTransitionConfig = void 0 } = $$props;
	let { outTransition = scale } = $$props;
	let { outTransitionConfig = { start: 0.95, opacity: 0, duration: 50 } } = $$props;
	let { class: className = void 0 } = $$props;
	if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
		$$bindings.sideOffset(sideOffset);
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
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	return `${validate_component(Select_content$1, 'SelectPrimitive.Content').$$render(
		$$result,
		Object.assign(
			{},
			{ inTransition },
			{ inTransitionConfig },
			{ outTransition },
			{ outTransitionConfig },
			{ sideOffset },
			{
				class: cn(
					'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-none',
					className
				)
			},
			$$restProps
		),
		{},
		{
			default: () => {
				return `<div class="w-full p-1">${slots.default ? slots.default({}) : ``}</div>`;
			}
		}
	)}`;
});
const Select_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class']);
	let { class: className = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	return `${validate_component(Select_trigger$1, 'SelectPrimitive.Trigger').$$render(
		$$result,
		Object.assign(
			{},
			{
				class: cn(
					'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-destructive [&>span]:line-clamp-1 data-[placeholder]:[&>span]:text-muted-foreground',
					className
				)
			},
			$$restProps
		),
		{},
		{
			default: ({ builder }) => {
				return `${slots.default ? slots.default({ builder }) : ``} <div>${validate_component(Chevron_down, 'ChevronDown').$$render($$result, { class: 'h-4 w-4 opacity-50' }, {}, {})}</div>`;
			}
		}
	)}`;
});
const Root$1 = Select;
const Group = Select_group;
const Input = Select_input;
const Value = Select_value;
const Dialog_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class']);
	let { class: className = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	return `${validate_component(Dialog_title$1, 'DialogPrimitive.Title').$$render(
		$$result,
		Object.assign(
			{},
			{
				class: cn('text-lg font-semibold leading-none tracking-tight', className)
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
const Dialog_portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, []);
	return `${validate_component(Dialog_portal$1, 'DialogPrimitive.Portal').$$render(
		$$result,
		Object.assign({}, $$restProps),
		{},
		{
			default: () => {
				return `${slots.default ? slots.default({}) : ``}`;
			}
		}
	)}`;
});
const Dialog_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class']);
	let { class: className = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	return `<div${spread(
		[
			{
				class: escape_attribute_value(
					cn('flex flex-col space-y-1.5 text-center sm:text-left', className)
				)
			},
			escape_object($$restProps)
		],
		{}
	)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Dialog_overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class', 'transition', 'transitionConfig']);
	let { class: className = void 0 } = $$props;
	let { transition = fade } = $$props;
	let { transitionConfig = { duration: 150 } } = $$props;
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
	return `${validate_component(Dialog_overlay$1, 'DialogPrimitive.Overlay').$$render(
		$$result,
		Object.assign(
			{},
			{ transition },
			{ transitionConfig },
			{
				class: cn('fixed inset-0 z-50 bg-background/80 backdrop-blur-sm', className)
			},
			$$restProps
		),
		{},
		{}
	)}`;
});
const Dialog_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class', 'transition', 'transitionConfig']);
	let { class: className = void 0 } = $$props;
	let { transition = flyAndScale } = $$props;
	let { transitionConfig = { duration: 200 } } = $$props;
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
	return `${validate_component(Dialog_portal, 'Dialog.Portal').$$render(
		$$result,
		{},
		{},
		{
			default: () => {
				return `${validate_component(Dialog_overlay, 'Dialog.Overlay').$$render($$result, {}, {}, {})} ${validate_component(
					Dialog_content$1,
					'DialogPrimitive.Content'
				).$$render(
					$$result,
					Object.assign(
						{},
						{ transition },
						{ transitionConfig },
						{
							class: cn(
								'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg md:w-full',
								className
							)
						},
						$$restProps
					),
					{},
					{
						default: () => {
							return `${slots.default ? slots.default({}) : ``} ${validate_component(
								Dialog_close,
								'DialogPrimitive.Close'
							).$$render(
								$$result,
								{
									class:
										'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
								},
								{},
								{
									default: () => {
										return `${validate_component(X, 'X').$$render($$result, { class: 'h-4 w-4' }, {}, {})} <span class="sr-only" data-svelte-h="svelte-1pewzs3">Close</span>`;
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
const Dialog_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class']);
	let { class: className = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	return `${validate_component(Dialog_description$1, 'DialogPrimitive.Description').$$render(
		$$result,
		Object.assign(
			{},
			{
				class: cn('text-sm text-muted-foreground', className)
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
const Root = Dialog;
const Trigger = Dialog_trigger;
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$restProps = compute_rest_props($$props, ['class']);
	let { class: className = void 0 } = $$props;
	if ($$props.class === void 0 && $$bindings.class && className !== void 0)
		$$bindings.class(className);
	return `${validate_component(Label$1, 'LabelPrimitive.Root').$$render(
		$$result,
		Object.assign(
			{},
			{
				class: cn(
					'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
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
const CreateFolder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let selectedType = '';
	let folderTitle = '';
	let titleError = '';
	let typeError = '';
	let isPending = false;
	const fruits = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'blueberry', label: 'Blueberry' },
		{ value: 'grapes', label: 'Grapes' },
		{ value: 'pineapple', label: 'Pineapple' }
	];
	let $$settled;
	let $$rendered;
	let previous_head = $$result.head;
	do {
		$$settled = true;
		$$result.head = previous_head;
		selectedType = selectedType ? { label: selectedType, value: selectedType } : '';
		{
			if (selectedType) typeError = '';
		}
		{
			if (folderTitle) titleError = '';
		}
		$$rendered = `${validate_component(Root, 'Dialog.Root').$$render(
			$$result,
			{},
			{},
			{
				default: () => {
					return `${validate_component(Trigger, 'Dialog.Trigger').$$render(
						$$result,
						{},
						{},
						{
							default: () => {
								return `${validate_component(Button, 'Button').$$render(
									$$result,
									{
										size: 'sm',
										class: ' flex items-center justify-center gap-x-2 bg-black '
									},
									{},
									{
										default: () => {
											return `${validate_component(Plus, 'PlusIcon').$$render($$result, { size: 14, strokeWidth: 1.4 }, {}, {})}
			Add new folder`;
										}
									}
								)}`;
							}
						}
					)} ${validate_component(Dialog_content, 'Dialog.Content').$$render(
						$$result,
						{ class: 'w-[350px] rounded-lg' },
						{},
						{
							default: () => {
								return `${validate_component(Dialog_header, 'Dialog.Header').$$render(
									$$result,
									{},
									{},
									{
										default: () => {
											return `${validate_component(Dialog_title, 'Dialog.Title').$$render(
												$$result,
												{},
												{},
												{
													default: () => {
														return `Create a new folder`;
													}
												}
											)} ${validate_component(Dialog_description, 'Dialog.Description').$$render(
												$$result,
												{},
												{},
												{
													default: () => {
														return `This action cannot be undone. This will create a new folder for your notes`;
													}
												}
											)}`;
										}
									}
								)} <form class="w-full" action="?/createFolder" method="post"><div class="relative flex w-full flex-col gap-y-2">${validate_component(
									Label,
									'Label'
								).$$render(
									$$result,
									{ class: '', for: 'type' },
									{},
									{
										default: () => {
											return `Folder type`;
										}
									}
								)} ${validate_component(Root$1, 'Select.Root').$$render(
									$$result,
									{
										selected: selectedType,
										portal: null,
										onSelectedChange: (v) => {
											v && (selectedType = v?.value);
										}
									},
									{},
									{
										default: () => {
											return `${validate_component(Select_trigger, 'Select.Trigger').$$render(
												$$result,
												{ class: 'w-full' },
												{},
												{
													default: () => {
														return `${validate_component(Value, 'Select.Value').$$render($$result, { placeholder: 'Select a type' }, {}, {})}`;
													}
												}
											)} ${validate_component(Select_content, 'Select.Content').$$render(
												$$result,
												{},
												{},
												{
													default: () => {
														return `${validate_component(Group, 'Select.Group').$$render(
															$$result,
															{},
															{},
															{
																default: () => {
																	return `${validate_component(
																		Select_label,
																		'Select.Label'
																	).$$render(
																		$$result,
																		{},
																		{},
																		{
																			default: () => {
																				return `Fruits`;
																			}
																		}
																	)} ${each(fruits, (fruit) => {
																		return `${validate_component(
																			Select_item,
																			'Select.Item'
																		).$$render(
																			$$result,
																			{ value: fruit.value, label: fruit.label },
																			{},
																			{
																				default: () => {
																					return `${escape(fruit.label)}`;
																				}
																			}
																		)}`;
																	})}`;
																}
															}
														)}`;
													}
												}
											)} ${validate_component(Input, 'Select.Input').$$render($$result, { name: 'favoriteFruit' }, {}, {})}`;
										}
									}
								)} <p class="text-[12px] text-red-300">${escape(typeError ?? '')}</p></div> <div class="title mt-3 flex w-full flex-col gap-y-2">${validate_component(
									Label,
									'Label'
								).$$render(
									$$result,
									{ for: 'title' },
									{},
									{
										default: () => {
											return `Show title`;
										}
									}
								)} ${validate_component(Input$1, 'Input').$$render(
									$$result,
									{
										id: 'title',
										name: 'title',
										placeholder: 'Enter folder name',
										value: folderTitle
									},
									{
										value: ($$value) => {
											folderTitle = $$value;
											$$settled = false;
										}
									},
									{}
								)} <p class="text-[12px] text-red-300">${escape(titleError ?? '')}</p></div> <div class="submitter mt-3 w-full">${validate_component(
									Button,
									'Button'
								).$$render(
									$$result,
									{
										disabled: isPending,
										class: 'w-full',
										type: 'submit'
									},
									{},
									{
										default: () => {
											return `${`<span data-svelte-h="svelte-1xe6mu1">Create Folder</span>`}`;
										}
									}
								)}</div></form>`;
							}
						}
					)}`;
				}
			}
		)}`;
	} while (!$$settled);
	return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${(($$result.head += `<!-- HEAD_svelte-1sec9w0_START -->${(($$result.title = `<title>HUXY</title>`), '')}<!-- HEAD_svelte-1sec9w0_END -->`), '')} <section class="grid w-full grid-cols-2 gap-x-3 gap-y-4 px-4"><div class="folder h-full w-full overflow-hidden rounded-[20px] bg-gray-100"><a class="flex h-40 grow flex-col items-center justify-center gap-y-1 px-3" href="/folder-dynamic">${validate_component(
		Book_open_check,
		'BookOpenCheck'
	).$$render(
		$$result,
		{
			color: '#374151',
			size: 24,
			strokeWidth: 1.4
		},
		{},
		{}
	)} <h4 class="folder-name w-full truncate text-center text-[13px] font-medium text-gray-700" data-svelte-h="svelte-1lmposx">Book list</h4></a></div> <div class="folder h-40 grow overflow-hidden rounded-[20px] bg-gray-100"><a class="flex h-full w-full flex-col items-center justify-center gap-y-1 px-3" href="/folder-dynamic">${validate_component(
		Notepad_text,
		'NotepadText'
	).$$render(
		$$result,
		{
			color: '#374151',
			size: 24,
			strokeWidth: 1.4
		},
		{},
		{}
	)} <h4 class="folder-name w-full truncate text-center text-[13px] font-medium text-gray-700" data-svelte-h="svelte-91xoyf">Notes</h4></a></div> <div class="folder h-40 grow overflow-hidden rounded-[20px] bg-gray-100"><a class="flex h-full w-full flex-col items-center justify-center gap-y-1 px-3" href="/folder-dynamic">${validate_component(
		Square_check,
		'SquareCheck'
	).$$render(
		$$result,
		{
			color: '#374151',
			size: 24,
			strokeWidth: 1.4
		},
		{},
		{}
	)} <h4 class="folder-name w-full truncate text-center text-[13px] font-medium text-gray-700" data-svelte-h="svelte-12bv5yq">Todo tasks</h4></a></div> <div class="fixed bottom-4 left-[120px]">${validate_component(CreateFolder, 'CreateFolder').$$render($$result, {}, {}, {})}</div></section> `;
});
export { Page as default };
