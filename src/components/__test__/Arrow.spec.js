import Arrow from '../Arrow.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('Arrow', () => {
  test('should render a div with class', () => {
    const { container } = render(Arrow);
    const arrow = container.querySelector('.svlt-popper-arrow');

    expect(arrow.innerHTML.trim()).toBe('');
    expect(arrow.className).toContain('svlt-popper-arrow');
  });

  test('should render a div with custom class', () => {
    const { container } = render(Arrow, { props: { className: 'xyz123' }});
    const arrow = container.querySelector('.svlt-popper-arrow');

    expect(arrow.className).toContain('xyz123 svlt-popper-arrow');
  });

  test('should render a div with custom style', () => {
    const { container } = render(Arrow, { props: { style: 'background: black;' }});
    const arrow = container.querySelector('.svlt-popper-arrow');

    expect(arrow.getAttribute('style')).toBe('background: black;');
  });

  test('should render specified placement data attribute', () => {
    const { container } = render(Arrow, { props: { placement: 'top' }});
    const arrow = container.querySelector('.svlt-popper-arrow');

    expect(arrow.getAttribute('data-placement')).toBe('top');
  });

  test('should throw error on invalid placement value', () => {
    expect(() => {
      render(Arrow, { props: { placement: 'not valid' }});
    }).toThrow();
  });
});
