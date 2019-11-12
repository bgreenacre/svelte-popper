import Popper from '../Popper.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('Popper', () => {
  test('should render a popper with expected markup', () => {
    const targetRef = document.createElement('div');
    const { container } = render(Popper, { props: { targetRef }});

    expect(container).toMatchSnapshot();
  });

  test('should render with expected content', () => {
    const targetRef = document.createElement('div');
    const { container } = render(Popper, { props: { targetRef, children: 'Hello world!' }});
    const popper = container.querySelector('.svlt-popper');

    expect(popper.innerHTML.trim()).toBe('Hello world!');
  });

  test('should render with custom class name', () => {
    const targetRef = document.createElement('div');
    const { container } = render(Popper, { props: { targetRef, className: 'custom-class' }});
    const popper = container.querySelector('.svlt-popper');

    expect(popper.className).toContain('custom-class');
  });

  test('should throw exception when no targetRef given', () => {
    expect(() => {
      render(Popper);
    }).toThrow();
  });

  test('should throw exception when invalid placement given', () => {
    const targetRef = document.createElement('div');

    expect(() => {
      render(Popper, { props: { targetRef, placement: 'not valid' }});
    }).toThrow();
  });

  test('should destroy popper instance on unmount', () => {
    const targetRef = document.createElement('div');
    const wrapper = render(Popper, { props: { targetRef }});
    const { popper } = wrapper.component.$$.ctx;

    wrapper.unmount();
    expect(popper.state.isDestroyed).toBe(true);
  });
});
