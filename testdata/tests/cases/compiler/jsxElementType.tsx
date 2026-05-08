// @target: esnext
// @jsx: preserve
// @strict: true
// @noEmit: true

declare namespace JSX {
    interface Element<T> {}
    interface ElementClass {}
    interface ElementAttributesProperty { props: {} }
    interface ElementChildrenAttribute { children: {} }
    interface IntrinsicElements { span: {} }
}

declare function Component(props: { foo?: string }): any;

type X = typeof Component;

const x = <Component />;
const y = <span />;
