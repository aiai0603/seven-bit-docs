import {
  computed,
  createElementBlock,
  defineComponent,
  mergeProps,
  openBlock,
  renderSlot,
  unref,
  useAttrs
} from "./chunk-GMDR4EMF.js";

// node_modules/.pnpm/seven-bit-ui@1.0.11/node_modules/seven-bit-ui/es/sbButton/sbButton.vue.js
import "C:/Users/10168/Desktop/seven-bit-docs/node_modules/.pnpm/seven-bit-ui@1.0.11/node_modules/seven-bit-ui/es/sbButton/style/index.css";

// node_modules/.pnpm/seven-bit-ui@1.0.11/node_modules/seven-bit-ui/es/sbButton/types.js
var e = ["primary", "text"];
var r = ["large", "small"];
var n = {
  type: {
    type: String,
    validator(t) {
      return e.includes(t);
    },
    default: "primary"
  },
  size: {
    type: String,
    validator(t) {
      return r.includes(t);
    }
  },
  round: Boolean,
  disabled: Boolean
};

// node_modules/.pnpm/seven-bit-ui@1.0.11/node_modules/seven-bit-ui/es/sbButton/sbButton.vue.js
var _ = defineComponent({
  __name: "sbButton",
  props: n,
  emits: ["click"],
  setup(o2, { emit: n2 }) {
    const t = o2, r2 = useAttrs(), u = computed(() => ({
      "sb-button": true,
      [`sb-button-${t.type}`]: t.type,
      "is-round": t.round,
      "is-disabled": t.disabled,
      [`sb-button-${t.size}`]: t.size
    })), i = () => {
      n2("click", 11);
    };
    return (l2, e2) => (openBlock(), createElementBlock("button", mergeProps({ class: unref(u) }, unref(r2), {
      onClick: e2[0] || (e2[0] = (y) => i())
    }), [
      renderSlot(l2.$slots, "default")
    ], 16));
  }
});

// node_modules/.pnpm/seven-bit-ui@1.0.11/node_modules/seven-bit-ui/es/sbButton/index.js
var a = (t) => (t.install = (n2) => {
  n2.component(t.__name, t);
}, t);
var l = a(_);

// node_modules/.pnpm/seven-bit-ui@1.0.11/node_modules/seven-bit-ui/es/index.js
var o = [l];
var c = {
  install: (t) => {
    for (const n2 in o)
      t.component(o[n2].__name, o[n2]);
  }
};
export {
  c as default,
  l as sbButton
};
//# sourceMappingURL=seven-bit-ui.js.map
