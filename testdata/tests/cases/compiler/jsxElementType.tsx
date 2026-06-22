// @target: esnext
// @jsx: preserve
// @strict: true
// @noEmit: true

declare namespace JSX {
    interface Element<P, T> {}
    interface ElementClass {}
    interface ElementAttributesProperty { props: {} }
    interface ElementChildrenAttribute { children: {} }
    interface IntrinsicElements { span: {} }
}

declare function Component(props: { foo?: string }): any;

type X = typeof Component;

const x = <Component />;
const y = <span />;
const z = <Component foo="bar" />;

interface IProps { foo: string; bar?: number; }
const props: IProps = { foo: "test" };
const w = <Component {...props} />;
const v = <Component {...props} foo="bar" />;
